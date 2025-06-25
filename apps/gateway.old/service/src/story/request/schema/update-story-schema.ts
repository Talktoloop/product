import * as Joi from 'joi';
import {
  GENDER_VALUE,
  AGE_VALUE,
  DIFFICULTY_VALUE,
} from '../../../common/types';
import { languageSchema } from '../../../common/request/schema/language.schema';
import { getKeysWithLowerCase } from '../../../common/helpers';
import { contentSchema } from '../../../common/request/schema/content.schema';

export const updateStorySchema: Joi.ObjectSchema = Joi.object({
  gender: Joi.number().valid(...Object.values(GENDER_VALUE)),
  age: Joi.number().valid(...Object.values(AGE_VALUE)),
  place: Joi.string().max(100),
  authorNickname: Joi.string().max(255).allow(null, ''),
  isSensitive: Joi.boolean(),
  content: contentSchema.content.optional(),
  difficulty: Joi.number()
    .allow(null)
    .valid(...getKeysWithLowerCase(DIFFICULTY_VALUE)),
  organisations: [
    Joi.array()
      .optional()
      .items(Joi.string().guid().optional(), Joi.string().max(100).optional()),
    null,
  ],
  difficulties: [
    Joi.array().optional().items(Joi.number().optional().max(1000)),
    null,
  ],
  categories: [
    Joi.array().optional().items(Joi.number().optional().max(1000)),
    null,
  ],
  maternityStatus: [
    Joi.array().optional().items(Joi.number().optional().max(1000)),
    null,
  ],
  thematics: [
    Joi.array().optional().items(Joi.number().optional().max(1000)),
    null,
  ],
  language: languageSchema.language.optional(),
  translations: [
    Joi.array().optional().items({
      code: Joi.string().required(),
      content: contentSchema.content,
    }),
  ],
  pinnedMessageIds: [
    Joi.array().optional().items(Joi.number().optional()),
    null,
  ],
  countryId: Joi.number().required(),
  regionId: Joi.number().allow(null).optional(),
  isUrgent: Joi.boolean().allow(null).optional(),
  isMinority: Joi.boolean().allow(null).optional(),
});
