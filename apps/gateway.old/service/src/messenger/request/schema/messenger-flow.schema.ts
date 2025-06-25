import * as Joi from 'joi';

export const messengerFlowDtoSChema: Joi.ObjectSchema = Joi.object({
  storyUuid: Joi.string().trim(),
  flowStartedAt: Joi.date(),
  senderId: Joi.string(),
  pageId: Joi.string(),
  lang: Joi.string().trim().max(3),
  additionalInfo: Joi.string().trim().max(65535).invalid('').allow(null),
  storyType: Joi.string().optional().allow(null),
  shareUserInfo: Joi.boolean(),
  holdOnSendMessage: Joi.boolean().optional(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  gender: Joi.string().optional(),
  flowResponses: Joi.array().items({
    type: Joi.number(),
    content: Joi.string(),
    createdAt: Joi.date(),
    isStory: Joi.boolean(),
  }),
}).options({ allowUnknown: true, presence: 'required' });
