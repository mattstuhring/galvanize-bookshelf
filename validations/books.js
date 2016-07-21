'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    title: Joi.string()
      .label('Title')
      .required()
      .length(255)
      .trim(),

    genre: Joi.string()
      .label('Genre')
      .required()
      .length(255)
      .trim(),

    description: Joi.string()
      .label('Description')
      .required()
      .trim(),

    cover_url: Joi.string()
      .label('Cover URL')
      .required()
      .uri()
      .trim()
  }
};
