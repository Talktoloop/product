import * as Joi from 'joi';
import { convertBooleanString } from '../../../common/request/custom.joi';

export const getCountriesSchema: Joi.ObjectSchema = Joi.object({
  onlyWithStory: Joi.boolean().custom(convertBooleanString),
}).options({ presence: 'optional' });
