import { ForwardReference } from '@nestjs/common';
import { getRedisURL } from '@ourloop/shared';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigService } from '@nestjs/config';
import { staticConfig } from '../../config/default';
import { CacheModule } from '@nestjs/cache-manager';

type RedisConfigWithTls = {
  host: string;
  schema?: string;
  user?: string;
  port: string;
  password?: string;
  db?: number;
  tls?: Record<string, unknown>;
};

function redisCacheUrl(redisConfig: RedisConfigWithTls): string {
  let url = getRedisURL(redisConfig);
  if (redisConfig.tls && /^redis:\/\//i.test(url)) {
    url = url.replace(/^redis:\/\//i, 'rediss://');
  }
  return url;
}

export const CacheProvider: ForwardReference<any> = {
  forwardRef: () =>
    CacheModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const redisConfig = configService.get<RedisConfigWithTls>('redis');
        const isTls = !!redisConfig.tls;
        return {
          ttl: staticConfig.cacheTtl,
          store: redisStore,
          url: redisCacheUrl(redisConfig),
          ...(redisConfig.db !== undefined && { db: redisConfig.db }),
          ...(isTls && {
            tls: { rejectUnauthorized: false, ...redisConfig.tls },
          }),
        };
      },
      inject: [ConfigService],
    }),
};
