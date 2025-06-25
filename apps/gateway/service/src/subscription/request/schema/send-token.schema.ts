import * as Joi from 'joi';

export const sendTokenSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.string().trim().email().required(),
});
