import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const findLocationsByPhraseSchema: Joi.ObjectSchema = Joi.object({
  phrase: Joi.string().custom(stripHtmlTags).required().max(100),
  country: Joi.string().custom(stripHtmlTags),
}).options({ presence: 'optional' });
