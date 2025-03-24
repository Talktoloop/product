import * as Joi from 'joi';

export const updateIvrrCallFlowDtoSchema: Joi.ObjectSchema = Joi.object({
  twilioCallSid: Joi.string(),
  isModeratorCall: Joi.boolean().optional(),
  isStory: Joi.boolean().optional(),
  s3FileId: Joi.string().optional(),
  callDate: Joi.date().optional(),
  twilioFlowXml: Joi.string().optional(),
  percentageLevelOfListeningCall: Joi.number().optional(),
}).options({ allowUnknown: true, presence: 'required' });
