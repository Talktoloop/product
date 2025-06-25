import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';
import { contentSchema } from '../../../common/request/schema/content.schema';

export const addCommentSchema: Joi.ObjectSchema = Joi.object({
  content: contentSchema.content,
  parentCommentId: Joi.string()
    .trim()
    .optional()
    .allow('')
    .custom(stripHtmlTags)
    .guid(),
  email: Joi.string()
    .trim()
    .optional()
    .allow('')
    .custom(stripHtmlTags)
    .email()
    .max(100),
  nickname: Joi.string()
    .trim()
    .optional()
    .allow('')
    .custom(stripHtmlTags)
    .max(60),
});
