import { Joi, Segments } from 'celebrate';

const today = new Date();
const minDueDate = new Date(today);
minDueDate.setDate(minDueDate.getDate() + 7);

const maxDueDate = new Date(today);
maxDueDate.setDate(maxDueDate.getDate() + 40 * 7);

export const registerUserSchema = {
    [Segments.BODY]: Joi.object({
        name: Joi.string().max(32).trim().required(),
        email: Joi.string().email().max(64).required(),
        password: Joi.string().min(8).max(128).required(),
        dueDate: Joi.date().iso().min(minDueDate).max(maxDueDate),
        gender: Joi.string().valid('boy', 'girl', null),
    }),
};

export const loginUserSchema = {
    [Segments.BODY]: Joi.object({
        email: Joi.string().email().max(64).required(),
        password: Joi.string().min(8).max(128).required(),
    }),
};