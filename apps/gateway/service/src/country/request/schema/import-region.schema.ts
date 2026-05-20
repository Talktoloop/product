import * as Joi from 'joi';
import {
  stripHtmlTags,
  convertBooleanString,
} from '../../../common/request/custom.joi';

export const importRegionSchema: Joi.ObjectSchema = Joi.object({
  countryCode: Joi.string().trim().max(3).custom(stripHtmlTags),
  firstLevel: Joi.number().integer(),
  saveDataInDB: Joi.boolean().custom(convertBooleanString),
  lastLevel: Joi.number().integer().min(Joi.ref('firstLevel')),
  exceptionIds: Joi.string().optional(),
}).options({ presence: 'required' });

export const importXlsxRegionSchema: Joi.ObjectSchema = Joi.object({
  countryCode: Joi.string().trim().max(3).custom(stripHtmlTags),
  saveDataInDB: Joi.boolean().custom(convertBooleanString),
}).options({ presence: 'required' });
