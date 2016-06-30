'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');

router.post('/users', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || email.trim() === '') {
    return res
      .status(400)
      .set('Content-type', 'text/plain')
      .send('Email must not be blank');
  }

  if (!password || password.trim() === '') {
    return res
      .status(400)
      .set('Content-type', 'text/plain')
      .send('Password must not be blank');
  }

  bcrypt.hash(req.body.password, 12, (hashErr, hashed_password) => {
    if (hashErr) {
      return next(hashErr);
    }

    knex('users')
      .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        hashed_password: hashed_password
      })
      .then((users) => {
        res.sendStatus(200);
      })
      .catch((hashErr) => {
        next(hashErr);
      });
  });
});

module.exports = router;
