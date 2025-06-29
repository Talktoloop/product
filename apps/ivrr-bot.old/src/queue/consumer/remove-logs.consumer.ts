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
import { QueueService } from '../queue.service';
import { WebhookService } from '../../api/service/webhook.service';

@Processor(QUEUE_CONSTANT.REMOVE_LOGS)
export class RemoveLogsConsumer {
  private readonly logger = new Logger(RemoveLogsConsumer.name);
  constructor(
    private readonly queueService: QueueService,
    private readonly webhookService: WebhookService,
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

  @Process(QUEUE_CONSTANT.REMOVE_LOGS)
  async removeLogs(job: Job, done: DoneCallback): Promise<void> {
    try {
      this.logger.debug('-------Start log deletion process ---------');

      const callLogSid = job.data.callLogSid;

      const { callLog, userRecord } =
        await this.webhookService.getDataFromTwilio(
          callLogSid,
          job.data.onlyCallLog,
          false,
        );

      if (callLog) {
        await this.webhookService.removeLogs(callLogSid, callLog, userRecord);
      }

      done(null, job.data);
    } catch (error) {
      await this.queueService.sendNotificationOrRedeclareJob(job, error);

      this.logger.error(`error in ${QUEUE_CONSTANT.REMOVE_LOGS}`, error);
      done(error, job.data);
    }
  }
}
