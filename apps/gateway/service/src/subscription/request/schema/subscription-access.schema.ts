import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';
import { ACCESS_TYPE } from '../../../subscription/constant/access-type.constant';

export const subscriptionAccessSchema: Joi.ObjectSchema = Joi.object({
  access: Joi.string()
    .trim()
    .custom(stripHtmlTags)
    .valid(...Object.values(ACCESS_TYPE)),
}).options({ presence: 'required' });
