import { Module, forwardRef } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigProvider } from '../common/provider/config.provider';
import { CacheModuleProvider } from '../common/provider/cache-module.provider';
import { StorageService } from '../storage/storage.service';
import { ApiClientService } from './service/api-client.service';
import { ModeratorController } from './controller/moderator.controller';
import { WebhookController } from './controller/webhook.controller';
import { QueueModule } from '../queue/queue.module';
import { WebhookService } from './service/webhook.service';
import { HttpModule } from '@nestjs/axios';
import { CallModule } from '../call/call.module';
import { S3Service, S3Provider, ClientProxyProvider } from '@ourloop/shared';

@Module({
  imports: [
    CacheModule.registerAsync(CacheModuleProvider),
    forwardRef(() => QueueModule),
    HttpModule,
    forwardRef(() => CallModule),
  ],
  controllers: [ModeratorController, WebhookController],
  providers: [
    StorageService,
    ConfigProvider,
    ApiClientService,
    ClientProxyProvider,
    WebhookService,
    S3Service,
    S3Provider,
  ],
  exports: [ApiClientService, WebhookService],
})
export class ApiModule {}
