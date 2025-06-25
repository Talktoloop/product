import * as Joi from 'joi';
import { languageSchema } from '../../common/request/schema/language.schema';

export const transcribeHistoricalStoriesSchema: Joi.ObjectSchema = Joi.object({
  language: languageSchema.language,
  minDuration: Joi.number().min(0).optional(),
}).options({ presence: 'required' });
