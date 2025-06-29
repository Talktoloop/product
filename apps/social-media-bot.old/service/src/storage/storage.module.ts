import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { StorageService } from './storage.service';
import { CacheModuleProvider } from '../common/provider/cache-module.provider';
import { QueueSendConversationToApiProvider } from '../common/provider/send-conversation-to-api-queue.provider';

@Module({
  imports: [CacheModule.registerAsync(CacheModuleProvider)],
  providers: [StorageService, QueueSendConversationToApiProvider],
  exports: [StorageService],
})
export class StorageModule {}
