import * as Joi from 'joi';

export const getStoryDetailsSchema: Joi.ObjectSchema = Joi.object({
  storyId: Joi.string(),
});
