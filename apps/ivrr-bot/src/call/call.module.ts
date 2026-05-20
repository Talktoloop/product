import { Module, forwardRef } from '@nestjs/common';
import { CallService } from './service/call.service';
import { TwilioService } from './service/twilio.service';
import { TwimlService } from './service/twiml.service';
import { StorageModule } from '../storage/storage.module';
import { ApiModule } from '../api/api.module';
import { HttpModule } from '@nestjs/axios';
import { S3Service, S3Provider } from '@ourloop/shared';
import { TwilioProvider } from './provider/twilio.provider';
import { CallController } from './call.controller';
import { QueueModule } from '../queue/queue.module';
import { SchedulerModule } from '../scheduler/scheduler.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IvrrCallEntity } from './entity/ivrr-call.entity';

@Module({
  imports: [
    StorageModule,
    ApiModule,
    HttpModule,
    QueueModule,
    forwardRef(() => SchedulerModule),
    TypeOrmModule.forFeature([IvrrCallEntity]),
  ],
  controllers: [CallController],
  providers: [
    CallService,
    TwilioService,
    TwimlService,
    S3Service,
    TwilioProvider,
    S3Provider,
  ],
  exports: [CallService, TwilioService, TwimlService],
})
export class CallModule { }
