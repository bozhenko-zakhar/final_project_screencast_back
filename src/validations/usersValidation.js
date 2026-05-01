import { Joi, Segments } from 'celebrate';

export const updateUserDataSchema = {
    [Segments.BODY]: Joi.object({
        username: Joi.string().max(32).trim(),
        email: Joi.string().email().max(64),
    }).min(1), // at least one field
};

export const updateUserImageSchema = {
    [Segments.BODY]: Joi.object({
        avatar: Joi.string().uri().required(), // assuming avatar is a URL
    }),
};