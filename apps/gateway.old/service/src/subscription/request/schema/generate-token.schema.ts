import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';
import { SUBSCRIPTION_TYPE } from '../../../subscription/constant/subscription-type.constant';

export const generateTokenSchema: Joi.ObjectSchema = Joi.object({
  userId: Joi.string().trim().custom(stripHtmlTags),
  organisationId: Joi.string().trim().custom(stripHtmlTags),
  tokenValidityInDays: Joi.number().min(1).required(),
  subscriptionType: Joi.string()
    .trim()
    .custom(stripHtmlTags)
    .valid(...Object.values(SUBSCRIPTION_TYPE))
    .required(),
}).xor('userId', 'organisationId');
