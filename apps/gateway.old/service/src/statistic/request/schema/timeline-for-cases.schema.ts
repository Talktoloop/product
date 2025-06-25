import * as Joi from 'joi';
import { filterConditions } from './filter.schema';
import { addMonths } from 'date-fns';

export const timelineForCasesSchema: Joi.ObjectSchema = Joi.object({
  ...filterConditions,
  from: Joi.date().iso().required(),
  to: Joi.date()
    .iso()
    .min(
      Joi.ref('from', {
        adjust: (value) => {
          return new Date(value);
        },
      }),
    )
    .max(
      Joi.ref('from', {
        adjust: (value) => {
          return addMonths(new Date(value), 11);
        },
      }),
    )
    .required(),
}).options({
  presence: 'optional',
});
