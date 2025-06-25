import * as Joi from 'joi';
import { languageSchema } from '../../../common/request/schema/language.schema';
import { filterConditions } from '../../../common/request/schema/filter.schema';
import { customDatePeriodValidation } from '../../../common/request/custom.joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const dashboardFilterSchema: Joi.ObjectSchema = Joi.object({
  ...filterConditions,
  language: languageSchema.language,
  status: Joi.string().trim(),
  isSensitive: Joi.boolean(),
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
