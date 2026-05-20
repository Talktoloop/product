import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';
import { SENDER_TYPE_CONSTANT, MESSAGE_TYPE_CONSTANT } from '@ourloop/shared';

export const saveMessagesSchema: Joi.ObjectSchema = Joi.object({
  userPhoneNumber: Joi.string().max(20),
  loopPhoneNumber: Joi.string().max(20),
  moderatorId: Joi.string(),
  storyId: Joi.string(),
  messages: Joi.array().items({
    type: Joi.string().valid(...Object.values(MESSAGE_TYPE_CONSTANT)),
    content: Joi.string().custom(stripHtmlTags).max(65535),
    timestamp: Joi.string(),
    sender: Joi.string().valid(...Object.values(SENDER_TYPE_CONSTANT)),
    provider: Joi.string(),
  }),
}).options({ allowUnknown: true, presence: 'required' });
