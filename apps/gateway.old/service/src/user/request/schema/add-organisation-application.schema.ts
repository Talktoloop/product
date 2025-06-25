import * as Joi from 'joi';

export const addOrganisationApplication: Joi.ObjectSchema = Joi.object({
  organisationId: Joi.string().uuid(),
}).options({ presence: 'required' });
