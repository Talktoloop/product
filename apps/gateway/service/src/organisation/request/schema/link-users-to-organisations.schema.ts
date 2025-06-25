import * as Joi from 'joi';
import { languageSchema } from '../../../common/request/schema/language.schema';

export const linkUsersToOrganisationsSchema: Joi.ObjectSchema = Joi.object({
  storyId: Joi.string().trim().uuid(),
  links: Joi.array().min(1).items({
    email: Joi.string().trim().email(),
    organisationId: Joi.string().trim().uuid(),
    languageCode: languageSchema.language,
  }),
}).options({ presence: 'required' });
