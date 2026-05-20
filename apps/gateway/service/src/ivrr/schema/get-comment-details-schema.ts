import * as Joi from 'joi';

export const getCommentDetailsSchema: Joi.ObjectSchema = Joi.object({
  commentId: Joi.string(),
});
