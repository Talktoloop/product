import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ThrottlerModule } from '@nestjs/throttler';
import { I18nModule } from 'nestjs-i18n';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { GatewayClientProvider } from './common/provider/gateway-client.provider';
import { CacheModuleProvider } from './common/provider/cache-module.provider';
import { I18nModuleProvider } from './common/provider/i18n-module.provider';
import { BullModule } from '@nestjs/bull';
import configuration from './config/default';
import { ConfigProvider } from './common/provider/config.provider';
import { HttpModule } from '@nestjs/axios';
import { StorageModule } from './storage/storage.module';
import { QUEUE_CONSTANT } from './queue/constant/queue.constant';
import { ClientProxyProvider } from '@ourloop/shared';
import { SchedulerModule } from './scheduler/scheduler.module';
import { ApiModule } from './api/api.module';
import { QueueModule } from './queue/queue.module';
import { CallModule } from './call/call.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { AppHooksService } from '@ourloop/shared';

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
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseConfig: any = configService.get('database');
        if (
          databaseConfig.enable_ssl === false ||
          databaseConfig.enable_ssl === 'false'
        ) {
          delete databaseConfig.ssl;
        }

        return {
          ...databaseConfig,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
        };
      },
    }),
    ClientsModule.registerAsync([GatewayClientProvider]),
    CacheModule.registerAsync(CacheModuleProvider),
    I18nModule.forRootAsync(I18nModuleProvider),
    HttpModule,
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        redis: configService.get('redis'),
      }),
    }),
    BullModule.registerQueue({
      name: QUEUE_CONSTANT.PROCESS_STORY_CALL,
    }),
    BullModule.registerQueue({
      name: QUEUE_CONSTANT.CHECK_USER_ANSWER,
    }),
    BullModule.registerQueue({
      name: QUEUE_CONSTANT.PLAN_CALL,
    }),
    BullModule.registerQueue({
      name: QUEUE_CONSTANT.PROCESS_COMMENT_CALL,
    }),
    BullModule.registerQueue({
      name: QUEUE_CONSTANT.INITIALIZE_CALL,
    }),
    BullModule.registerQueue({
      name: QUEUE_CONSTANT.REMOVE_LOGS,
    }),
    BullModule.registerQueue({
      name: QUEUE_CONSTANT.PROCESS_OUTBOUND_CALL,
    }),
    ApiModule,
    QueueModule,
    SchedulerModule,
    CallModule,
    StorageModule,
  ],
  providers: [ConfigProvider, ClientProxyProvider, AppHooksService],
})
export class AppModule {}
