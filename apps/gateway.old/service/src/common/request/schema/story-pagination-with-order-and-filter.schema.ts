import * as Joi from 'joi';
import { listWithStoryModeratorPaginationSchemaObject } from '../list-with-pagination.joi';
import { filterConditions } from './filter.schema';
import { languageSchema } from './language.schema';
import { customDatePeriodValidation, stripHtmlTags } from '../custom.joi';

export const storyPaginationWithOrderAndFilterSchema: Joi.ObjectSchema =
  Joi.object({
    ...listWithStoryModeratorPaginationSchemaObject,
    ...filterConditions,
    language: languageSchema.language,
    isSensitive: Joi.boolean(),
    status: Joi.string().trim(),
    durationMin: Joi.number().min(0),
    durationMax: Joi.number().min(
      Joi.ref('durationMin', {
        adjust: (value) => value ?? 0,
      }),
    ),
    searchTerm: Joi.string().min(0).max(255).custom(stripHtmlTags),
  })
    .custom(customDatePeriodValidation)
    .options({ presence: 'optional' });
