import * as Joi from 'joi';

export const saveIvrrStorySchema: Joi.ObjectSchema = Joi.object({
  country: Joi.string().optional().allow(null),
  storyUuid: Joi.string(),
  flowStartedAt: Joi.date(),
  phoneNumber: Joi.string().optional(),
  language: Joi.string(),
  shortCodeNumber: Joi.string(),
  hideUserPhoneNumber: Joi.boolean(),
  isSensitiveStory: Joi.boolean(),
  calls: Joi.array().items({
    twilioCallSid: Joi.string(),
    isModeratorCall: Joi.boolean(),
    isStory: Joi.boolean(),
    s3FileId: Joi.string(),
    callDate: Joi.date(),
    recordingDuration: Joi.number().optional(),
  }),
}).options({ allowUnknown: true, presence: 'required' });
