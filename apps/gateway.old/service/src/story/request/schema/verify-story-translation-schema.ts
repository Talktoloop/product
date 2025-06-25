import * as Joi from 'joi';
import { contentSchema } from '../../../common/request/schema/content.schema';

export const verifyStoryTranslationSchema: Joi.ObjectSchema = Joi.object({
  language: Joi.string(),
  content: contentSchema.content,
}).options({ presence: 'required' });
