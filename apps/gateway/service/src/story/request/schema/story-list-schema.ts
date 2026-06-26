import * as Joi from 'joi';
import { filterConditions } from '../../../common/request/schema/filter.schema';
import { listWithStoryPaginationSchemaObject } from '../../../common/request/list-with-pagination.joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const storyListSchema: Joi.ObjectSchema = Joi.object({
  ...listWithStoryPaginationSchemaObject,
  country: Joi.alternatives().try(
    Joi.array().items(Joi.string().max(3)),
    // Country codes arrive comma-joined (e.g. "ke,ug,so,..."), one per selected
    // country. The old max(30) capped this at ~10 countries and threw E1000 for
    // larger selections. ISO-3166 has ~249 countries (~3 chars each), so allow 1000.
    Joi.string().max(1000),
  ),
  type: Joi.alternatives().try(Joi.number().max(2), Joi.string().max(20)),
  regionId: filterConditions.regionId,
  age: Joi.alternatives().try(Joi.number().max(10), Joi.string().max(20)),
  gender: Joi.alternatives().try(Joi.number().max(3), Joi.string().max(20)),
  difficulty: Joi.alternatives().try(
    Joi.number().max(100),
    Joi.string().max(100),
  ),
  organisation: Joi.string().max(1000),
  q: Joi.string().max(255),
  thematic: Joi.alternatives().try(
    Joi.array().items(Joi.string().max(255)),
    Joi.string().max(255),
  ),
  from: filterConditions.from,
  to: filterConditions.to,
  organisationResponsiveness: Joi.string().max(1000),
  communityResponsiveness: Joi.string().max(1),
  channelFilter: Joi.string().max(11),
  minority: Joi.number().max(2),
  searchTerm: Joi.string().min(0).max(255).custom(stripHtmlTags),
  language: Joi.alternatives().try(
    Joi.array().items(Joi.string().max(255)),
    Joi.string().max(255),
  ),
  vulnerabilityFactors: Joi.alternatives().try(
    Joi.array().items(Joi.string().max(255)),
    Joi.string().max(255),
  ),
}).options({ presence: 'optional' });
