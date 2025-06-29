import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { StorageService } from './storage.service';
import { CacheModuleProvider } from '../common/provider/cache-module.provider';

@Module({
  imports: [CacheModule.registerAsync(CacheModuleProvider)],
  providers: [StorageService],
  exports: [StorageService],
})
export class StorageModule {}
