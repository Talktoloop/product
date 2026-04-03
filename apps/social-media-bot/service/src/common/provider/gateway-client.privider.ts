import { ConfigService } from '@nestjs/config';
import { ClientsProviderAsyncOptions, Transport } from '@nestjs/microservices';
import {
  RedisConfigWithTls,
  redisTlsOptions,
  redisUrlWithTls,
} from '../../common/helper/redis-tls';

export const GatewayClientProvider: ClientsProviderAsyncOptions = {
  name: 'GATEWAY',
  useFactory: (configService: ConfigService) => {
    const redisConfig = configService.get<RedisConfigWithTls>('redis');
    return {
      transport: Transport.REDIS,
      options: {
        url: redisUrlWithTls(redisConfig),
        tls: redisTlsOptions(redisConfig),
      },
    };
  },
  inject: [ConfigService],
};
