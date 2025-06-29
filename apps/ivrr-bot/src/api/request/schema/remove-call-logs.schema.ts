import * as Joi from 'joi';

export const removeCallLogsSchema: Joi.ObjectSchema = Joi.object({
  callLogSid: Joi.string(),
  onlyCallLog: Joi.boolean(),
}).options({ presence: 'required' });
