import { Module, forwardRef } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { FlowService } from './flow.service';
import { CacheModuleProvider } from '../common/provider/cache-module.provider';
import { StorageModule } from '../storage/storage.module';
import { ApiClientModule } from '../api/api.module';
import { CommunicatorModule } from '../communicator/communicator.module';

@Module({
  imports: [
    CacheModule.registerAsync(CacheModuleProvider),
    StorageModule,
    forwardRef(() => ApiClientModule),
    forwardRef(() => CommunicatorModule),
  ],
  providers: [FlowService],
  exports: [FlowService],
})
export class FlowModule {}
