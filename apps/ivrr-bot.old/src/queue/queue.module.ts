import { Module, forwardRef } from '@nestjs/common';
import { QueueService } from './queue.service';
import { ApiModule } from '../api/api.module';
import { CallModule } from '../call/call.module';
import { InitializeCallConsumer } from './consumer/initialize-call.consumer';
import { InitializeCallProvider } from './provider/initialize-call-queue.provider';
import { RemoveLogsConsumer } from './consumer/remove-logs.consumer';
import { RemoveLogsProvider } from './provider/remove-logs-queue.provider';
import { ProcessStoryConsumer } from './consumer/process-story.consumer';
import { ProcessStoryCallProvider } from './provider/process-story-call-queue.provider';
import { StorageModule } from '../storage/storage.module';
import { ProcessCommentConsumer } from './consumer/process-comment.consumer';
import { ProcessCommentCallProvider } from './provider/process-comment-call-queue.provider';
import { CheckUserAnswerConsumer } from './consumer/check-user-answer.consumer';
import { CheckUserAnswerProvider } from './provider/check-user-answer-queue.provider';
import { OutboundCallConsumer } from './consumer/process-outbound-call.consumer';
import { ProcessOutboundCallProvider } from './provider/process-outbound-call-queue.provider';
import { SchedulerModule } from '../scheduler/scheduler.module';

@Module({
  imports: [
    forwardRef(() => ApiModule),
    forwardRef(() => CallModule),
    StorageModule,
    forwardRef(() => SchedulerModule),
  ],
  providers: [
    QueueService,
    InitializeCallConsumer,
    InitializeCallProvider,
    RemoveLogsConsumer,
    RemoveLogsProvider,
    ProcessStoryConsumer,
    ProcessStoryCallProvider,
    ProcessCommentConsumer,
    ProcessCommentCallProvider,
    CheckUserAnswerConsumer,
    CheckUserAnswerProvider,
    OutboundCallConsumer,
    ProcessOutboundCallProvider,
  ],
  exports: [
    QueueService,
    InitializeCallProvider,
    RemoveLogsProvider,
    ProcessStoryCallProvider,
    ProcessCommentCallProvider,
    CheckUserAnswerProvider,
    ProcessOutboundCallProvider,
  ],
})
export class QueueModule {}
