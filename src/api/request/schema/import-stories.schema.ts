import * as Joi from 'joi';

export const importStoriesSchema: Joi.ObjectSchema = Joi.object({
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
}).options({ presence: 'required' });
