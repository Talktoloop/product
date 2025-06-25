import * as Joi from 'joi';

export const testItIngoingMessageSchema: Joi.ObjectSchema = Joi.object({
  phone: Joi.string(),
  message: Joi.string(),
  countryCode: Joi.string(),
}).options({ allowUnknown: false, presence: 'required' });
