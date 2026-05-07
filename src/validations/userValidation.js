import { Joi, Segments } from 'celebrate';
import { FORTY_WEEKS } from '../constants/time.js';

export const updateUserSchema = {
  [Segments.BODY]: Joi.object({
    gender: Joi.string().valid('boy', 'girl').allow(null).optional(),

    date: Joi.date().allow(null).optional(),

    name: Joi.string().min(2).max(30).optional(),

    newEmail: Joi.string().email().optional().messages({
      'string.email': 'Некоректний формат електронної пошти',
    }),
  }),
};

export const updateUserGenderSchema = {
  [Segments.BODY]: Joi.object({
    gender: Joi.string().valid('boy', 'girl').allow(null).required(),
  }),
};
