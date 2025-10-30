const Joi = require('joi');

const listSchema = Joi.object({
  title: Joi.string().min(3).required(),
  image: Joi.string().uri().required(),
  address: Joi.string().required(),
  price: Joi.number().min(0).required(),
  description: Joi.string().required(),
});

module.exports = listSchema;
