import { Joi, Segments } from "celebrate";

// ======================================================
export const updateTaskStatusSchema = {
  [Segments.BODY]: Joi.object({
    isDone: Joi.boolean().required(),
  }),
};
// ======================================================
