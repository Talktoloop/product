import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';
export const checkTranslationSchema: Joi.ObjectSchema = Joi.object({
  content: Joi.string()
    .trim()
    .min(2)
    .max(65535)
    .invalid('')
    .required()
    .custom(stripHtmlTags),
});
