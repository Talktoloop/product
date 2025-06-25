import * as Joi from 'joi';
import { listWithPaginationSchemaObject } from '../../../common/request/list-with-pagination.joi';
import { filterConditions } from './filter.schema';
import { customDatePeriodValidation } from '../../../common/request/custom.joi';

export const paginationWithFilterSchema: Joi.ObjectSchema = Joi.object({
  limit: listWithPaginationSchemaObject.limit.required(),
  page: listWithPaginationSchemaObject.page.required(),
  ...filterConditions,
})
  .custom(customDatePeriodValidation)
  .options({ presence: 'optional' });
