import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';
import { convertBooleanString } from '../../../common/request/custom.joi';

export const findRegionSchema: Joi.ObjectSchema = Joi.object({
  countryId: Joi.number(),
  parentId: Joi.number().allow(null).optional(),
  phrase: Joi.string().trim().min(3).custom(stripHtmlTags).required(),
  onlyWithStory: Joi.boolean().custom(convertBooleanString),
}).options({ presence: 'required' });
