import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig } from '../../config/default';
import * as redisStore from 'cache-manager-redis-store';
import {
  RedisConfigWithTls,
  redisTlsOptions,
  redisUrlWithTls,
} from '../../common/helper/redis-tls';

export const CacheModuleProvider: CacheModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) => {
    const applicationConfig =
      configService.get<ApplicationConfig>('application');
    const redisConfig = configService.get<RedisConfigWithTls>('redis');
    const tlsOpts = redisTlsOptions(redisConfig);

    return {
      store: redisStore,
      ttl: applicationConfig.ttl.userFlow,
      url: redisUrlWithTls(redisConfig),
      db: redisConfig.db,
      ...(tlsOpts && { tls: tlsOpts }),
    };
  },
  inject: [ConfigService],
};
