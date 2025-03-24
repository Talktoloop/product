import * as Joi from 'joi';

export const exportStoriesSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.string().email().required(),
  country: Joi.string(),
  organisation: Joi.string(),
  withSensitiveStories: Joi.boolean(),
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
}).options({ presence: 'optional' });
