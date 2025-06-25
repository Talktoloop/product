import * as Joi from 'joi';

export const finishedTextItFlowSchema: Joi.ObjectSchema = Joi.object({
  to: Joi.string().pattern(/^tel\:([0-9\(\)\/\+ \-]*)$/),
  from: Joi.string().pattern(/^([0-9\(\)\/\+ \-]*)$/),
}).options({ allowUnknown: true, presence: 'required' });
