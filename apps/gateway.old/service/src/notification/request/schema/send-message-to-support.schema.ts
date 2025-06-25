import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const sendMessageToSupportSchema: Joi.ObjectSchema = Joi.object({
  message: Joi.string().trim().custom(stripHtmlTags),
}).options({ presence: 'required' });
