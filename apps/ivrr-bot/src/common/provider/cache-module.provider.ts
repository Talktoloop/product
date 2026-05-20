import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig, RedisConfig } from '../../config/default';
import * as redisStore from 'cache-manager-redis-store';
import { getRedisURL } from '@ourloop/shared';

/** Runtime redis config includes TLS for non-local (matches ElastiCache transit encryption). */
type RedisConfigWithTls = RedisConfig & { tls?: Record<string, unknown> };

function redisCacheUrl(redisConfig: RedisConfigWithTls): string {
  let url = getRedisURL(redisConfig);
  if (redisConfig.tls && /^redis:\/\//i.test(url)) {
    url = url.replace(/^redis:\/\//i, 'rediss://');
  }
  return url;
}

export const CacheModuleProvider: CacheModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) => {
    const applicationConfig =
      configService.get<ApplicationConfig>('application');
    const redisConfig = configService.get<RedisConfigWithTls>('redis');
    const isTls = !!redisConfig.tls;

    return {
      store: redisStore,
      ttl: applicationConfig.flowTTL,
      url: redisCacheUrl(redisConfig),
      db: redisConfig.db,
      // rediss:// + explicit tls for node-redis (ElastiCache); base option ensures
      // rejectUnauthorized: false even when redisConfig.tls is {}.
      ...(isTls && {
        tls: { rejectUnauthorized: false, ...redisConfig.tls },
      }),
    };
  },
  inject: [ConfigService],
};
