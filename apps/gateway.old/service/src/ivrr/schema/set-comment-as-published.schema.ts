import * as Joi from 'joi';

export const setCommentAsPublishedSchema: Joi.ObjectSchema = Joi.object({
  commentId: Joi.string().uuid(),
}).options({ allowUnknown: false });
