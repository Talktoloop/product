import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const createOrganisationSchema: Joi.ObjectSchema = Joi.object({
  name: Joi.string().trim().max(100).custom(stripHtmlTags),
  acronym: Joi.string()
    .trim()
    .min(2)
    .max(16)
    .custom(stripHtmlTags)
    .allow(null)
    .optional(),
  countryId: Joi.number(),
}).options({ presence: 'required' });
