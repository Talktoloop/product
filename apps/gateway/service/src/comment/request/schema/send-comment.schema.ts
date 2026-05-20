import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const sendCommentSchema: Joi.ObjectSchema = Joi.object({
  comment: Joi.string().trim().custom(stripHtmlTags).max(360),
  phone: Joi.string().min(8).max(20),
  commentId: Joi.string().trim().custom(stripHtmlTags).guid(),
  storyId: Joi.string().trim().custom(stripHtmlTags).guid(),
});
