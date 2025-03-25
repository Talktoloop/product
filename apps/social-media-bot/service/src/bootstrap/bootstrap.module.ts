import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { BoostrapService } from './bootstrap.service';
import { CacheModuleProvider } from '../common/provider/cache-module.provider';
import { CommunicatorModule } from '../communicator/communicator.module';

@Module({
  imports: [CacheModule.registerAsync(CacheModuleProvider), CommunicatorModule],
  providers: [BoostrapService],
  exports: [BoostrapService],
})
export class BoostrapModule {}
