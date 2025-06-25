import * as Joi from 'joi';

export const editUserNotification: Joi.ObjectSchema = Joi.object({
  notifications: Joi.boolean(),
  reminders: Joi.boolean(),
}).options({ presence: 'required' });
