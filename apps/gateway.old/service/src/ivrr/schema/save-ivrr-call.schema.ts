import * as Joi from 'joi';

export const saveIvrrCallSchema: Joi.ObjectSchema = Joi.object({
  storyId: Joi.string().optional().allow(null),
  commentId: Joi.string().optional().allow(null),
  phoneNumber: Joi.string(),
  isCommentReply: Joi.boolean(),
  call: Joi.object({
    twilioCallSid: Joi.string(),
    isModeratorCall: Joi.boolean(),
    isStory: Joi.boolean(),
    s3FileId: Joi.string().optional(),
    callDate: Joi.date(),
    twilioFlowXml: Joi.string().optional(),
    percentageLevelOfListeningCall: Joi.number().optional(),
  }),
}).options({ allowUnknown: true, presence: 'required' });
