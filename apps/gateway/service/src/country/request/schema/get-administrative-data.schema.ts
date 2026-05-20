import * as Joi from 'joi';
import { convertBooleanString } from '../../../common/request/custom.joi';

export const getAdministrativeDataSchema: Joi.ObjectSchema = Joi.object({
  parentId: Joi.number().allow(null),
  countryId: Joi.number().required(),
  onlyWithStory: Joi.boolean().custom(convertBooleanString),
}).options({ presence: 'optional' });
