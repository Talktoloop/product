import * as Joi from 'joi';

export const configSchema: Joi.ObjectSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('local', 'development', 'production', 'stage', 'test')
    .default('development'),
  APP_PORT: Joi.number().optional(),
  SUPPORTED_QUICK_REPLIES: Joi.string().optional(),
  ROLLBAR_ACCESS_TOKEN: Joi.string(),
  REDIS_HOST: Joi.string(),
  REDIS_USER: Joi.string(),
  REDIS_PORT: Joi.number(),
  REDIS_PASSWORD: Joi.string(),
  REDIS_SCHEMA: Joi.string(),
  PROVIDER_CONFIG: Joi.string(),
  COMMUNICATION_TIMEOUT: Joi.number().optional(),
  REDIS_DB_PORT: Joi.number().optional(),
  COMMUNICATOR_MODERATOR_TTL: Joi.number(),
  COMMUNICATOR_USER_FLOW_TTL: Joi.number(),
  PROVIDER_NAME: Joi.string(),
}).options({ allowUnknown: true, presence: 'required' });
