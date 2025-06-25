import * as Joi from 'joi';
import { OrderEnum, StoryModeratorOrderEnum, StoryOrderEnum } from '../types';
import { staticConfig } from '../../config/default';

export const listWithPaginationSchemaObject = {
  order: Joi.string()
    .valid(...Object.values(OrderEnum))
    .insensitive(),
  limit: Joi.number().max(staticConfig.pagination.maxLimit).required(),
  page: Joi.number(),
};

export const listWithStoryPaginationSchemaObject = {
  order: Joi.string()
    .valid(...Object.values(StoryOrderEnum))
    .insensitive(),
  limit: Joi.number().max(staticConfig.pagination.maxLimit).required(),
  page: Joi.number(),
};

export const listWithStoryModeratorPaginationSchemaObject = {
  order: Joi.string()
    .valid(...Object.values(StoryModeratorOrderEnum))
    .insensitive(),
  limit: Joi.number().max(staticConfig.pagination.maxLimit).required(),
  page: Joi.number(),
};
