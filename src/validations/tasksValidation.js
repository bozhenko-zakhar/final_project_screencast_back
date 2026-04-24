import { celebrate, Joi, Segments } from "celebrate";

export const createTaskSchema = celebrate({
  [Segments.BODY]: Joi.object({
    title: Joi.string().trim().min(2).max(100).required(),
    description: Joi.string().trim().max(1000).allow("").optional(),
    status: Joi.string().valid("todo", "in-progress", "done").optional(),
  }),
});