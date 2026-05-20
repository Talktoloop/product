import * as Joi from 'joi';

export const userResponseDtoSchema: Joi.ObjectSchema = Joi.object({
  messengerConversationId: Joi.number(),
  messages: Joi.array().items({
    type: Joi.number(),
    content: Joi.string(),
    createdAt: Joi.date(),
    isStory: Joi.boolean().required(),
  }),
}).options({ allowUnknown: true, presence: 'required' });
