import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';
import { SENDER_TYPE_CONSTANT, MESSAGE_TYPE_CONSTANT } from '@ourloop/shared';
import { languageSchema } from '../../../common/request/schema/language.schema';

export const saveConversationSchema: Joi.ObjectSchema = Joi.object({
  country: Joi.string().trim().max(2),
  userPhoneNumber: Joi.string().max(20),
  loopPhoneNumber: Joi.string().max(20),
  isSensitive: Joi.boolean(),
  contactAccepted: Joi.boolean().optional(),
  messages: Joi.array().items({
    type: Joi.string().valid(...Object.values(MESSAGE_TYPE_CONSTANT)),
    content: Joi.string().custom(stripHtmlTags).max(65535),
    timestamp: Joi.string(),
    sender: Joi.string().valid(...Object.values(SENDER_TYPE_CONSTANT)),
    language: languageSchema.language.optional(),
    isStory: Joi.boolean().optional(),
    provider: Joi.string(),
  }),
  uuid: Joi.string().trim().optional(),
}).options({ allowUnknown: true, presence: 'required' });
