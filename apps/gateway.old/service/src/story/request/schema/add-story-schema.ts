import * as Joi from 'joi';
import {
  GENDER_VALUE,
  AGE_VALUE,
  DIFFICULTY_VALUE,
} from '../../../common/types';
import {
  stripHtmlTags,
  clearPhoneNumber,
} from '../../../common/request/custom.joi';
import { getKeysWithLowerCase } from '../../../common/helpers';
import { contentSchema } from '../../../common/request/schema/content.schema';

export const addStorySchema: Joi.ObjectSchema = Joi.object({
  title: Joi.string().trim().max(100).allow('').custom(stripHtmlTags),
  phone: Joi.string()
    .trim()
    .allow(null)
    .custom(clearPhoneNumber)
    .min(8)
    .max(20)
    .regex(/^\+[0-9]+$/),
  content: contentSchema.content,
  place: Joi.string().trim().max(100).allow('').custom(stripHtmlTags),
  gender: Joi.number().valid(...Object.values(GENDER_VALUE)),
  difficulty: Joi.number()
    .allow(null)
    .valid(...getKeysWithLowerCase(DIFFICULTY_VALUE)),
  email: Joi.string().allow(null).email().max(100).custom(stripHtmlTags),
  age: Joi.number().valid(...Object.values(AGE_VALUE)),
  authorNickname: Joi.string().trim().max(100).allow('').custom(stripHtmlTags),
  country: Joi.string().trim().max(2),
  organisations: Joi.array().items(Joi.string().guid(), Joi.string().max(100)),
  difficulties: Joi.array().items(Joi.number().max(1000)),
  categories: Joi.array().items(Joi.number().max(1000)),
  maternityStatus: Joi.array().items(Joi.number().max(1000)),
  isSensitive: Joi.boolean(),
  regionId: Joi.number().allow(null),
  countryId: Joi.number(),
}).options({ presence: 'optional' });
