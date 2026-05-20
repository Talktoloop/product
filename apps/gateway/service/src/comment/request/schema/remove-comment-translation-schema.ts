import * as Joi from 'joi';

export const removeCommentTranslationSchema: Joi.ObjectSchema = Joi.object({
  language: Joi.string().required(),
});
