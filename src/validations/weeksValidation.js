import { Joi } from 'celebrate';
import { Segments } from "celebrate";

export const getWeekSchema = {
    [Segments.QUERY]: Joi.object({
        weekNumber: Joi.number().min(1).max(39).required(),
        dueDate: Joi.date().iso()
    }),
};