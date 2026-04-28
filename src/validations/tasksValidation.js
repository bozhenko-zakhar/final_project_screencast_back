import { Joi, Segments } from "celebrate";

export const createTaskSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().trim().min(2).max(100).required(),
    date: Joi.date().optional(),
    isDone: Joi.boolean().optional(),
  }),
};

export const updateTaskStatusSchema = {
  [Segments.BODY]: Joi.object({
    isDone: Joi.boolean().required(),
  }),
};