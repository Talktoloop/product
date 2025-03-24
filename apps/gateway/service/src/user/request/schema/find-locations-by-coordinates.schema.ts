import * as Joi from 'joi';

export const findLocationsByCoordinatesSchema: Joi.ObjectSchema = Joi.object({
  longitude: Joi.number(),
  latitude: Joi.number(),
}).options({ presence: 'required' });
