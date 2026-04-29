import { Joi, Segments } from "celebrate";

export const createDiarySchema = {
  [Segments.BODY]: Joi.object({
    text: Joi.string().trim().min(1).max(5000).required(),
  }),
};

export const updateDiarySchema = {
  [Segments.BODY]: Joi.object({
    text: Joi.string().trim().min(1).max(5000).required(),
  }),
};