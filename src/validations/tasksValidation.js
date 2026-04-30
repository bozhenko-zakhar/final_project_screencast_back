import { Joi, Segments } from "celebrate";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

const getCurrentDate = () => new Date().toISOString().slice(0, 10);

const dateValidation = Joi.string()
  .pattern(datePattern)
  .custom((value, helpers) => {
    if (value < getCurrentDate()) {
      return helpers.message("date must be today or later");
    }

    return value;
  });

export const createTaskSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().trim().min(1).max(96).required(),
    date: dateValidation.default(getCurrentDate),
    isDone: Joi.boolean().default(false),
  }),
};

export const updateTaskStatusSchema = {
  [Segments.BODY]: Joi.object({
    isDone: Joi.boolean().required(),
  }),
};

export const taskIdSchema = {
  [Segments.PARAMS]: Joi.object({
    taskId: Joi.string().hex().length(24).required(),
  }),
};