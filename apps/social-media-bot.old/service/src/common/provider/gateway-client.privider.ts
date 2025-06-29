import { ConfigService } from '@nestjs/config';
import { ClientsProviderAsyncOptions, Transport } from '@nestjs/microservices';
import { RedisConfig } from '../../config/default';
import { getRedisURL } from '@ourloop/shared';

export const GatewayClientProvider: ClientsProviderAsyncOptions = {
  name: 'GATEWAY',
  useFactory: (configService: ConfigService) => {
    const redisConfig = configService.get<RedisConfig>('redis');
    return {
      transport: Transport.REDIS,
      options: {
        url: getRedisURL(redisConfig),
        tls:
          configService.get('application.environment') !== 'local'
            ? {
                servername: redisConfig.host || '',
                rejectUnauthorized: false,
              }
            : null,
      },
    };
  },
  inject: [ConfigService],
};
