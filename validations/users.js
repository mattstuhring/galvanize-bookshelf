'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    first_name: Joi.string()
      .label('First Name')
      .required()
      .length(255)
      .trim(),

    last_name: Joi.string()
      .label('Last Name')
      .required()
      .length(255)
      .trim(),

    email: Joi.string()
      .label('Email')
      .required()
      .email()
      .trim(),

    password: Joi.string()
      .label('Password')
      .required()
      .trim()
      .min(8)
  }
};
