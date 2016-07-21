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

    biography: Joi.string()
      .label('Biography')
      .required()
      .trim(),

    portrait_url: Joi.string()
      .label('Portrait URL')
      .required()
      .uri()
      .trim()
  }
};
