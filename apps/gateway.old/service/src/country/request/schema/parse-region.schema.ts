import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const parseRegionSchema: Joi.ObjectSchema = Joi.object({
  countryCode: Joi.string().trim().max(3).custom(stripHtmlTags),
  email: Joi.string().email().optional(),
}).options({ presence: 'required' });
