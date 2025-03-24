import * as Joi from 'joi';

const pattern = /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,()]{1,}$/;

export const editUserData: Joi.ObjectSchema = Joi.object({
  firstName: Joi.string().min(2).regex(pattern),
  lastName: Joi.string().min(2).regex(pattern),
  hideLastName: Joi.boolean(),
  consents: Joi.object({
    termsOfService: Joi.string(),
    communityGuidelines: Joi.string(),
    privacyPolicy: Joi.string(),
  }).optional(),
  organisationApplicationId: Joi.string().optional(),
  optin_marketing: Joi.boolean(),
  email: Joi.string().email(),
}).options({ presence: 'required' });
