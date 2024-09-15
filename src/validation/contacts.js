import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 30 characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.number().integer().min(8).max(14).required().messages({
    'number.base': 'Phone number should be a string',
    'number.min': 'Phone number should have at least 8 characters',
    'number.max': 'Phone number should have at most 14 characters',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email(),
  isFavourite: Joi.boolean().required(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.number().integer().min(8).max(14),
  email: Joi.string().email(),
  isFavourite: Joi.boolean().required(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
