import * as Joi from 'joi';
import { listWithPaginationSchemaObject } from '../../../common/request/list-with-pagination.joi';
import { filterConditions } from './filter.schema';
import { customDatePeriodValidation } from '../../../common/request/custom.joi';

export const paginationWithOrderAndFilterSchema: Joi.ObjectSchema = Joi.object({
  ...listWithPaginationSchemaObject,
  order: listWithPaginationSchemaObject.order,
  limit: listWithPaginationSchemaObject.limit.max(500),
  page: listWithPaginationSchemaObject.page,
  ...filterConditions,
})
  .custom(customDatePeriodValidation)
  .options({ presence: 'optional' });
