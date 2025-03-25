import * as Joi from 'joi';

export const sendInvitationToUserSchema: Joi.ObjectSchema = Joi.object({
  userId: Joi.string().uuid(),
}).options({ presence: 'required' });
