import * as Joi from 'joi';

export const createCallSchema: Joi.ObjectSchema = Joi.object({
  storyId: Joi.string(),
  callBlocks: Joi.any(),
});
