import * as Joi from 'joi';

export const sendMessageSchema: Joi.ObjectSchema = Joi.object({
  introduction: Joi.string().max(160).optional(),
  content: Joi.string().max(320).required(),
  storyId: Joi.string().required(),
});
