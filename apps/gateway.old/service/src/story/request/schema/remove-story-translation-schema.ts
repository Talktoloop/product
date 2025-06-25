import * as Joi from 'joi';

export const removeStoryTranslationSchema: Joi.ObjectSchema = Joi.object({
  language: Joi.string().required(),
});
