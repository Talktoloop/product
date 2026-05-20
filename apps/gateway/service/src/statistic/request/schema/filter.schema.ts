import * as Joi from 'joi';
import { CHANNEL_CONSTANTS } from '../../../common/constant/channel.constant';
import { filterNumericIds } from '../../../common/request/custom.joi';

export const stringOrNumberValidation = Joi.alternatives().try(
  Joi.string().max(300),
  Joi.number().max(1000),
);

export const countryValidation = Joi.alternatives().try(
  Joi.string().trim().min(3).allow('').optional(),
  Joi.string(),
);

export const channelValidation = Joi.alternatives().try(
  Joi.string().trim().min(3).allow(CHANNEL_CONSTANTS).optional(),
  Joi.string(),
);

export const filterConditions = {
  type: stringOrNumberValidation,
  country: countryValidation,
  from: Joi.alternatives().try(Joi.string(), Joi.date().iso()).optional(),
  to: Joi.alternatives().try(Joi.string(), Joi.date()).optional(),
  age: stringOrNumberValidation,
  gender: stringOrNumberValidation,
  casesAge: stringOrNumberValidation,
  casesGender: stringOrNumberValidation,
  thematic: Joi.alternatives().try(Joi.string().max(2000), stringOrNumberValidation),
  organisation: Joi.string().max(255).optional(),
  organisationType: Joi.string().max(255).optional(),
  investigationOutcome: Joi.string().max(255).optional(),
  referredForAssistance: Joi.string().max(255).optional(),
  caseType: Joi.string().max(255).optional(),
  disability: Joi.string().max(255).optional(),
  difficulty: stringOrNumberValidation,
  casesDifficulty: stringOrNumberValidation,
  minority: stringOrNumberValidation,
  channel: channelValidation,
  channelFilter: channelValidation,
  regionId: Joi.string().custom(filterNumericIds).optional(),
  repliedTo: stringOrNumberValidation,
  language: stringOrNumberValidation,
  storySearchText: stringOrNumberValidation,
  searchTerm: stringOrNumberValidation,
  vulnerabilityFactors: stringOrNumberValidation,
  organisationResponsiveness: stringOrNumberValidation,
  communityResponsiveness: stringOrNumberValidation,
};

export const mergedFilterSchema: Joi.ObjectSchema = Joi.object(
  filterConditions,
).options({
  presence: 'optional',
});
