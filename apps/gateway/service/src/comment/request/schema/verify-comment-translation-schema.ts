import * as Joi from 'joi';
import { contentSchema } from '../../../common/request/schema/content.schema';

export const verifyCommentTranslationSchema: Joi.ObjectSchema = Joi.object({
  language: Joi.string(),
  content: contentSchema.content,
}).options({ presence: 'required' });
