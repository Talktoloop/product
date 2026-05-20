import * as Joi from 'joi';

export const uploadFileSchema: Joi.ObjectSchema = Joi.object({
  commentId: Joi.string().uuid().optional(),
}).options({ allowUnknown: false });
