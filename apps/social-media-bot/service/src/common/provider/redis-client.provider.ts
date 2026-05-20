import { Provider } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';
import {
  RedisConfigWithTls,
  redisTlsOptions,
  redisUrlWithTls,
} from '../../common/helper/redis-tls';

export const RedisClientProvider: Provider = {
  provide: 'REDIS_CLIENT',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const redisConfig = configService.get<RedisConfigWithTls>('redis');
    const url = redisUrlWithTls(redisConfig);
    const tls = redisTlsOptions(redisConfig);

    if (tls) {
      return new Redis(url, { tls });
    }

    return new Redis(url);
  },
};
