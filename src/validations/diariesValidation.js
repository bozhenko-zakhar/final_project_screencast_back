import { Joi, Segments } from "celebrate";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const objectIdPattern = /^[0-9a-fA-F]{24}$/;

const getCurrentDate = () => new Date().toISOString().slice(0, 10);

const dateValidation = Joi.string()
  .pattern(datePattern)
  .custom((value, helpers) => {
    if (value < getCurrentDate()) {
      return helpers.message("date must be today or later");
    }

    return value;
  });

export const createDiarySchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().trim().min(1).max(64).required(),
    description: Joi.string().trim().min(1).max(1000).required(),
    date: dateValidation.default(getCurrentDate),
    emotions: Joi.array()
      .items(Joi.string().pattern(objectIdPattern))
      .min(1)
      .max(12)
      .required(),
  }),
};

export const updateDiarySchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().trim().min(1).max(64).optional(),
    description: Joi.string().trim().min(1).max(1000).optional(),
    date: dateValidation.optional(),
    emotions: Joi.array()
      .items(Joi.string().pattern(objectIdPattern))
      .min(1)
      .max(12)
      .optional(),
  }).min(1),
};

export const diaryIdSchema = {
  [Segments.PARAMS]: Joi.object({
    diaryId: Joi.string().hex().length(24).required(),
  }),
};