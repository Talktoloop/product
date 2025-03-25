import {
  Module,
  NestModule,
  MiddlewareConsumer,
  NotFoundException,
  ExceptionFilter,
  ArgumentsHost,
  Catch,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ThrottlerModule } from '@nestjs/throttler';
import { I18nModule } from 'nestjs-i18n';
import { CommunicatorModule } from './communicator/communicator.module';
import { FlowModule } from './flow/flow.module';
import { StorageModule } from './storage/storage.module';
import { BoostrapModule } from './bootstrap/bootstrap.module';
import { ConfigModule } from '@nestjs/config';
import { ApiClientModule } from './api/api.module';
import { ClientsModule } from '@nestjs/microservices';
import { GatewayClientProvider } from './common/provider/gateway-client.privider';
import { CacheModuleProvider } from './common/provider/cache-module.provider';
import { I18nModuleProvider } from './common/provider/i18n-module.provider';
import { ClientProxyProvider, AppHooksService } from '@ourloop/shared';
import { BullModule } from '@nestjs/bull';
import { QUEUE } from './common/enum/queue.enum';
import configuration from './config/default';
import { ConfigProvider } from './common/provider/config.provider';
import { TwilioWebhookMiddleware } from './api/middleware/twilio-webhook.middleware';
import { APP_FILTER } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  private readonly logger: Logger = new Logger(NotFoundExceptionFilter.name);

  catch(_exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const path = request.path;

    if (path !== '/') {
      this.logger.error({
        path,
        query: request.query,
        params: request.params,
        headers: request.headers,
      });
    }

    ctx
      .getResponse()
      .status(HttpStatus.NOT_FOUND)
      .send({
        statusCode: HttpStatus.NOT_FOUND,
        message: `Cannot ${request.method} ${path}`,
      });
  }
}

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 10,
          limit: 10,
        },
      ],
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configuration],
      isGlobal: true,
    }),
    ClientsModule.registerAsync([GatewayClientProvider]),
    CacheModule.registerAsync(CacheModuleProvider),
    I18nModule.forRootAsync(I18nModuleProvider),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        redis: configService.get('redis'),
      }),
    }),
    BullModule.registerQueue({
      name: QUEUE.SEND_CONVERSATION_TO_API,
      defaultJobOptions: {
        removeOnComplete: true,
        attempts: 3,
      },
    }),
    StorageModule,
    BoostrapModule,
    CommunicatorModule,
    FlowModule,
    ApiClientModule,
  ],
  providers: [
    ConfigProvider,
    ClientProxyProvider,
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
    AppHooksService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TwilioWebhookMiddleware).forRoutes('webhook/whatsapp');
  }
}
