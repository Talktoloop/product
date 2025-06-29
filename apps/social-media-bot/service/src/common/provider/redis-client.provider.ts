import { Provider } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';
import { RedisConfig } from '../../config/default';
import { getRedisURL } from '@ourloop/shared';

export const RedisClientProvider: Provider = {
  provide: 'REDIS_CLIENT',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const redisConfig = configService.get<RedisConfig>('redis');
    const url = getRedisURL(redisConfig);
    return new Redis(url);
  },
};