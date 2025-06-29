import {
  OnGlobalQueueCompleted,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger, Inject } from '@nestjs/common';
import { DoneCallback, Job } from 'bull';
import { QUEUE_CONSTANT } from '../constant/queue.constant';
import { QueueService } from '../queue.service';
import { Queue } from 'bull';
import { WebhookService } from '../../api/service/webhook.service';
import { CallService } from '../../call/service/call.service';
import { STORY_ALREADY_EXITS } from '@ourloop/shared';
import { StorageService } from '../../storage/storage.service';

@Processor(QUEUE_CONSTANT.PROCESS_STORY_CALL)
export class ProcessStoryConsumer {
  private readonly logger = new Logger(ProcessStoryConsumer.name);
  constructor(
    private readonly webhookService: WebhookService,
    @Inject(QUEUE_CONSTANT.PROCESS_STORY_CALL)
    private processTwilioCallQueue: Queue,
    private readonly queueService: QueueService,
    private readonly callService: CallService,
    private readonly storageService: StorageService,
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

  @Process(QUEUE_CONSTANT.PROCESS_STORY_CALL)
  async handleProcessStoryCall(job: Job, done: DoneCallback): Promise<void> {
    let callLogSid: string;

    try {
      this.logger.debug('-------Start process of process twilio call---------');

      callLogSid = job.data.key;

      if (!callLogSid) {
        throw new Error('callLogSid is needed');
      }

      const storyCreated = (await this.storageService.getEntry(
        `story${callLogSid}`,
      )) as boolean;

      const { callLog, sendResult } =
        await this.webhookService.getDataFromTwilioAndProcessData({
          callSid: callLogSid,
          job,
          storyCreated,
          callerCountryCode: job.data.callerCountryCode,
        });

      if (
        !storyCreated &&
        !sendResult?.success &&
        sendResult?.message !== STORY_ALREADY_EXITS
      ) {
        throw new Error('Could not send story to API');
      } else {
        await this.storageService.setEntry(`story${callLogSid}`, true);
      }

      const heardLevel = await this.callService.calculateHeardLevel(callLog);
      await this.callService.setHeardLevel(callLog, heardLevel);

      const futureJob = await this.queueService.getQueueJob({
        queue: this.processTwilioCallQueue,
        jobId: callLogSid,
      });

      if (futureJob) {
        this.logger.debug(`[WEBHOOK] Future job ID to remove: ${futureJob.id}`);

        await futureJob.remove();

        this.logger.debug(`[WEBHOOK] Future job removed: ${futureJob.id}`);
      }

      this.logger.debug(
        `-------result of process twilio call--------- ${JSON.stringify(
          job.data.key,
        )}`,
      );

      done(null, job.data);
    } catch (error) {
      const reDeclaredJob =
        await this.queueService.sendNotificationOrRedeclareJob(job, error);

      if (!reDeclaredJob && !job.data.historicalData) {
        await this.webhookService.sendNotCompletedStoryToApi(callLogSid);
      }

      this.logger.error(`error in ${QUEUE_CONSTANT.PROCESS_STORY_CALL}`, error);
      done(error, job.data);
    }
  }
}
