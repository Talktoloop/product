import * as Joi from 'joi';
import { languageSchema } from './language.schema';

export const retryTranslationSchema: Joi.ObjectSchema = Joi.object({
  language: languageSchema.language,
}).options({ presence: 'required' });
