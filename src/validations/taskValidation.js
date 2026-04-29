import { Joi, Segments } from 'celebrate';
import mongoose from 'mongoose';

export const createTaskSchema = {
     [Segments.BODY]: Joi.object({
    name: Joi.string().min(1).max(96).required(),

    date: Joi.string()
      .pattern(/^\d{4}-\d{2}-\d{2}$/)
      .required(),

    isDone: Joi.boolean().optional(),
  }),
};

export const updateStatusTaskSchema = {
    [Segments.PARAMS]: Joi.object({
    id: Joi.string()
      .custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          return helpers.error('any.invalid');
        }
        return value;
      })
      .required(),
  }),
};