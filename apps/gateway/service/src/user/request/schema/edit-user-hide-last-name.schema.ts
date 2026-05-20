import * as Joi from 'joi';
import { pattern } from './edit-user-data.schema';

export const editUserHideLastName: Joi.ObjectSchema = Joi.object({
  hideLastName: Joi.boolean(),
  firstName: Joi.string().min(2).regex(pattern),
  lastName: Joi.string().min(2).regex(pattern),
}).options({ presence: 'required' });
