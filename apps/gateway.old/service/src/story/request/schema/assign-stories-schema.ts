import Joi from "joi";

export const assignStoriesSchema: Joi.ObjectSchema = Joi.object({
  storyIds: Joi.array().items(Joi.string()),
})
