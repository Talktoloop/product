import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const submitReportSchema: Joi.ObjectSchema = Joi.object({
  reportType: Joi.string().valid('feedback', 'reply').required(),
  postId: Joi.string().uuid().required(),
  guidelineBreaches: Joi.array().items(Joi.string().trim().custom(stripHtmlTags)).min(1).required(),
  replySpecification: Joi.string().trim().custom(stripHtmlTags).optional().allow('', null),
  additionalInfo: Joi.string().trim().custom(stripHtmlTags).optional().allow('', null),
  contactEmail: Joi.string().email().optional().allow('', null),
});
