import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const fetchRegionSchema: Joi.ObjectSchema = Joi.object({
  countryCode: Joi.string().trim().max(3).custom(stripHtmlTags).required(),
});
