import * as Joi from 'joi';
import {
  stripHtmlTags,
  convertStringToArray,
} from '../../../common/request/custom.joi';
import { listWithPaginationSchemaObject } from '../../../common/request/list-with-pagination.joi';
import { AGE_VALUE, CATEGORY_VALUE, GENDER_VALUE } from '../../../common/types';
import { DIFFICULTY } from '../../../airtable-client/constant/difficulty.constant';
import { getThematicAreaChildrenKeys } from '../../../common/helpers';

export const exportToJsonSchema: Joi.ObjectSchema = Joi.object({
  order: listWithPaginationSchemaObject.order,
  limit: listWithPaginationSchemaObject.limit.min(1).max(500),
  page: listWithPaginationSchemaObject.page.min(1),
  country: Joi.alternatives().try(
    Joi.string().custom(convertStringToArray),
    Joi.array().items(Joi.string()),
    Joi.allow(null),
  ),
  type: Joi.alternatives().try(
    Joi.string()
      .valid(...Object.values(CATEGORY_VALUE))
      .custom(convertStringToArray),
    Joi.array().items(Joi.string().valid(...Object.values(CATEGORY_VALUE))),
    Joi.allow(null),
  ),
  age: Joi.alternatives().try(
    Joi.string()
      .valid(...Object.values(AGE_VALUE))
      .custom(convertStringToArray),
    Joi.array().items(Joi.string().valid(...Object.values(AGE_VALUE))),
    Joi.allow(null),
  ),
  gender: Joi.alternatives().try(
    Joi.string()
      .valid(...Object.values(GENDER_VALUE))
      .custom(convertStringToArray),
    Joi.array().items(Joi.string().valid(...Object.values(GENDER_VALUE))),
    Joi.allow(null),
  ),
  difficulty: Joi.alternatives().try(
    Joi.string()
      .valid(...Object.values(DIFFICULTY))
      .custom(convertStringToArray),
    Joi.array().items(Joi.string().valid(...Object.values(DIFFICULTY))),
    Joi.allow(null),
  ),
  organisation: Joi.string().min(3).max(255).custom(stripHtmlTags),
  thematic: Joi.alternatives().try(
    Joi.string()
      .valid(...getThematicAreaChildrenKeys())
      .custom(convertStringToArray),
    Joi.array().items(Joi.string().valid(...getThematicAreaChildrenKeys())),
    Joi.allow(null),
  ),
  from: Joi.date().iso(),
  to: Joi.date()
    .iso()
    .min(
      Joi.ref('from', {
        adjust: (value) => {
          return value ? new Date(value) : 0;
        },
      }),
    ),
  searchTerm: Joi.string().min(0).max(255).custom(stripHtmlTags),
}).options({
  presence: 'optional',
});
