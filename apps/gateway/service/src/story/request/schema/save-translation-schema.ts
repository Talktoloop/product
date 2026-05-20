import * as Joi from 'joi';
import { languageSchema } from '../../../common/request/schema/language.schema';
import { contentSchema } from '../../../common/request/schema/content.schema';

export const saveTranslationSchema: Joi.ObjectSchema = Joi.object({
  language: languageSchema.language,
  content: contentSchema.content,
}).options({ presence: 'required' });
