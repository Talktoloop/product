import * as Joi from 'joi';

export const TestItOutgoingMessageSchema: Joi.ObjectSchema = Joi.object({
  id: Joi.number(),
  text: Joi.string().max(160),
  to: Joi.string().pattern(/^([0-9\(\)\/\+ \-]*)$/),
  to_no_plus: Joi.number(),
  from: Joi.string().pattern(/^([0-9\(\)\/\+ \-]*)$/),
  from_no_plus: Joi.number(),
  channel: Joi.string(),
}).options({ allowUnknown: true, presence: 'required' });
