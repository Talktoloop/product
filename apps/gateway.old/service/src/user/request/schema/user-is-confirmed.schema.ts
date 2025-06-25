import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const userIsConfirmedSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.string().email().max(100).custom(stripHtmlTags),
});
