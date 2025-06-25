import * as Joi from 'joi';
import { listWithPaginationSchemaObject } from '../../../common/request/list-with-pagination.joi';
import { languageSchema } from './language.schema';
import { filterConditions } from './filter.schema';
import { customDatePeriodValidation } from '../../../common/request/custom.joi';

export const paginationWithExtendedFilterSchema: Joi.ObjectSchema = Joi.object({
  ...listWithPaginationSchemaObject,
  ...filterConditions,
  language: languageSchema.language,
})
  .custom(customDatePeriodValidation)
  .options({ presence: 'optional', allowUnknown: true });
