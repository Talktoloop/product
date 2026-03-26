import * as Joi from 'joi';
import { CHANNEL_CONSTANTS } from '../../constant/channel.constant';
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
  country: countryValidation,
  type: stringOrNumberValidation,
  regionId: Joi.string().custom(filterNumericIds),
  age: stringOrNumberValidation,
  gender: stringOrNumberValidation,
  difficulty: stringOrNumberValidation,
  minority: stringOrNumberValidation,
  organisation: Joi.string().max(255),
  thematic: stringOrNumberValidation,
  channel: channelValidation,
  channelFilter: channelValidation,
  from: Joi.string(),
  to: Joi.string(),
  repliedTo: stringOrNumberValidation,
  vulnerabilityFactors: stringOrNumberValidation,
  // new logic for metabase
  organisationResponsiveness: stringOrNumberValidation,
  communityResponsiveness: stringOrNumberValidation,
  language: stringOrNumberValidation,
  storySearchText: stringOrNumberValidation,
  searchTerm: stringOrNumberValidation,
};

export const filterSchema: Joi.ObjectSchema = Joi.object(
  filterConditions,
).options({
  presence: 'optional',
});
