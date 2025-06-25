import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';
import { staticConfig } from '../../../config/default';

const contentLength = staticConfig.contentLength;

export const contentSchema = {
  content: Joi.string()
    .trim()
    .custom(stripHtmlTags)
    .min(contentLength.min)
    .max(contentLength.max)
    .required(),
};
