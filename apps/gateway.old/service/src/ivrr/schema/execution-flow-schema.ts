import * as Joi from 'joi';

export const executionFlowSchema: Joi.ObjectSchema = Joi.object({
  toPhoneNumber: Joi.string().max(12),
  s3AudioFileId: Joi.string(),
  storyId: Joi.string(),
  audioUrl: Joi.string(),
});
