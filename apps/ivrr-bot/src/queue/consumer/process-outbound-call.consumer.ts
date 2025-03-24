import {
  OnGlobalQueueCompleted,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { DoneCallback, Job } from 'bull';
import { QUEUE_CONSTANT } from '../constant/queue.constant';
import { QueueService } from '../../queue/queue.service';
import { TwilioService } from '../../call/service/twilio.service';
import { CallService } from '../../call/service/call.service';

@Processor(QUEUE_CONSTANT.PROCESS_OUTBOUND_CALL)
export class OutboundCallConsumer {
  private readonly logger = new Logger(OutboundCallConsumer.name);
  constructor(
    private readonly queueService: QueueService,
    private readonly twilioService: TwilioService,
    private readonly callService: CallService,
  ) {}

  @OnQueueActive()
  onActive(job: Job): void {
    this.logger.debug(
      `Processing job ${job.id} of type ${job.name}. Data: ${JSON.stringify(
        job.data,
      )}`,
    );
  }

  @OnQueueCompleted()
  onComplete(
    job: Job,
    result: any, // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
  ): void {
    this.logger.debug(
      `Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(
        result,
      )}`,
    );
  }

  @OnGlobalQueueCompleted()
  onGlobalCompleted(
    job: Job,
    result: any, // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
  ): void {
    this.logger.debug(
      `Global Completed job ${job}. Result: ${JSON.stringify(result)}`,
    );
  }

  @OnQueueFailed()
  onError(
    job: Job<any>,
    error: any, // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
  ): void {
    this.logger.error(
      `Failed job ${job.id} of type ${job.name}: ${error.message}`,
      error.stack,
    );
  }

  @Process(QUEUE_CONSTANT.PROCESS_OUTBOUND_CALL)
  async processOutboundCall(job: Job, done: DoneCallback): Promise<void> {
    try {
      this.logger.debug('-------Start process outbound call---------');

      const callLogSid = job.data.key;

      if (!callLogSid) {
        throw new Error('callLogSid is needed');
      }

      const callLog = await this.twilioService.getTwilioCallLog(callLogSid);

      if (!callLog) {
        throw new Error('callLog is needed');
      }

      const heardLevel = await this.callService.calculateHeardLevel(callLog);
      await this.callService.setHeardLevel(callLog, heardLevel);

      this.logger.debug('-------Process outbound call finished---------');

      done(null, job.data);
    } catch (error) {
      await this.queueService.sendNotificationOrRedeclareJob(job, error);

      this.logger.error(
        `error in ${QUEUE_CONSTANT.PROCESS_OUTBOUND_CALL}`,
        error,
      );
      done(error, job.data);
    }
  }
}
