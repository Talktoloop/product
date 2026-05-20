import * as Joi from 'joi';
import { addMonths } from 'date-fns';
import { filterConditions } from '../../../common/request/schema/filter.schema';

export const timelineForStoriesAndRetriesSchema: Joi.ObjectSchema = Joi.object({
  country: filterConditions.country,
  type: filterConditions.type,
  regionId: filterConditions.regionId,
  age: filterConditions.age,
  gender: filterConditions.gender,
  difficulty: filterConditions.difficulty,
  organisation: filterConditions.organisation,
  thematic: filterConditions.thematic,
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
});
