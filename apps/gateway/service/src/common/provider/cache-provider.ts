import { ForwardReference } from '@nestjs/common';
import { getRedisURL } from '@ourloop/shared';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigService } from '@nestjs/config';
import { staticConfig } from '../../config/default';
import { CacheModule } from '@nestjs/cache-manager';

export const CacheProvider: ForwardReference<any> = {
  forwardRef: () =>
    CacheModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        ttl: staticConfig.cacheTtl,
        store: redisStore,
        url: getRedisURL(configService.get('redis')),
      }),
      inject: [ConfigService],
    }),
};
