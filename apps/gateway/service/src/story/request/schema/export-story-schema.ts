import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const exportStorySchema: Joi.ObjectSchema = Joi.object({
  note: Joi.string().trim().max(65535).custom(stripHtmlTags),
  immediateAssistance: Joi.boolean(),
}).options({ presence: 'required' });
