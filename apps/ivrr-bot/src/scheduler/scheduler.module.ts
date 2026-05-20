import { Module, forwardRef } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CallModule } from '../call/call.module';
import { SchedulerController } from './scheduler.controller';
import { SchedulerService } from './scheduler.service';
import { HttpModule } from '@nestjs/axios';
import { CacheModuleProvider } from '../common/provider/cache-module.provider';
import { SchedulerRepository } from './repository/scheduler.repository';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    HttpModule,
    forwardRef(() => CallModule),
    CacheModule.registerAsync(CacheModuleProvider),
    DatabaseModule.forFeature([SchedulerRepository]),
  ],
  controllers: [SchedulerController],
  providers: [SchedulerService],
  exports: [SchedulerService],
})
export class SchedulerModule {}
