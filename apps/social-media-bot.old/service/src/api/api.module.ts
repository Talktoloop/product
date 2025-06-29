import { Module, forwardRef } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ClientProxyService } from './service/client-proxy.service';
import { CacheModuleProvider } from '../common/provider/cache-module.provider';
import { ClientProxyProvider } from '@ourloop/shared';
import { StorageModule } from '../storage/storage.module';
import { WhatsappController } from './controller/whatsapp.controller';
import { WebhookService } from './service/webhook.service';
import { CommunicatorModule } from '../communicator/communicator.module';
import { FlowModule } from '../flow/flow.module';
import { TwilioWebhookMiddleware } from './middleware/twilio-webhook.middleware';
import { WhatsappProvider } from '../common/provider/whatsapp.provider';
import { TelegramController } from './controller/telegram.controller';
import { FacebookController } from './controller/facebook.controller';

@Module({
  imports: [
    CacheModule.registerAsync(CacheModuleProvider),
    StorageModule,
    forwardRef(() => CommunicatorModule),
    FlowModule,
    ApiClientModule,
  ],
  controllers: [WhatsappController, TelegramController, FacebookController],
  providers: [
    ClientProxyService,
    WebhookService,
    ClientProxyProvider,
    TwilioWebhookMiddleware,
    WhatsappProvider,
  ],
  exports: [
    ClientProxyService,
    WebhookService,
    TwilioWebhookMiddleware,
    WhatsappProvider,
  ],
})
export class ApiClientModule {}
