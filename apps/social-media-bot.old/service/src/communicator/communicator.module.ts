import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { FacebookService } from './service/facebook.service';
import { WhatsappService } from './service/whatsapp.service';
import { TelegramService } from './service/telegram.service';
import { CommunicatorService } from './service/communicator.service';
import { CacheModuleProvider } from '../common/provider/cache-module.provider';
import { TelegramProvider } from '../common/provider/telegram.provider';
import { SendConversationToApiConsumer } from './consumer/send-conversation-to-api.consumer';
import { StorageModule } from '../storage/storage.module';
import { ApiClientModule } from '../api/api.module';
import { FacebookController } from './controller/facebook.controller';
import { WhatsappController } from './controller/whatsapp.controller';
import { TelegramController } from './controller/telegram.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    CacheModule.registerAsync(CacheModuleProvider),
    StorageModule,
    ApiClientModule,
    HttpModule,
  ],
  controllers: [FacebookController, WhatsappController, TelegramController],
  providers: [
    FacebookService,
    WhatsappService,
    TelegramService,
    CommunicatorService,
    SendConversationToApiConsumer,
    TelegramProvider,
  ],
  exports: [
    FacebookService,
    WhatsappService,
    TelegramService,
    CommunicatorService,
    SendConversationToApiConsumer,
  ],
})
export class CommunicatorModule {}
