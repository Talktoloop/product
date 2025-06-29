import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig, RedisConfig } from '../../config/default';
import * as redisStore from 'cache-manager-redis-store';
import { getRedisURL } from '@ourloop/shared';

export const CacheModuleProvider: CacheModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) => {
    const applicationConfig =
      configService.get<ApplicationConfig>('application');
    const redisConfig = configService.get<RedisConfig>('redis');

    return {
      store: redisStore,
      ttl: applicationConfig.ttl.userFlow,
      url: getRedisURL(redisConfig),
      db: redisConfig.db,
    };
  },
  inject: [ConfigService],
};
