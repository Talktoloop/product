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
import { TwilioService } from '../../call/service/twilio.service';
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
    private readonly twilioService: TwilioService,
  ) { }

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
    const jobState = job.finishedOn ? 'completed' : 'processing';
    const jobDuration = job.processedOn && job.timestamp ? job.processedOn - job.timestamp : 'unknown';

    this.logger.debug(
      `Completed job ${job.id} of type ${job.name}. State: ${jobState}, Duration: ${jobDuration}ms, Result: ${JSON.stringify(
        result,
      )}`,
    );
  }

  @OnGlobalQueueCompleted()
  onGlobalCompleted(
    job: Job,
    result: any, // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
  ): void {
    const jobState = job.finishedOn ? 'completed' : 'processing';
    const jobDuration = job.processedOn && job.timestamp ? job.processedOn - job.timestamp : 'unknown';

    this.logger.debug(
      `Global Completed job ${job.id}. State: ${jobState}, Duration: ${jobDuration}ms, Result: ${JSON.stringify(result)}`,
    );
  }

  @OnQueueFailed()
  onError(
    job: Job<any>,
    error: any, // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
  ): void {
    const jobState = job.getState();
    const jobAttemptsMade = job.attemptsMade;
    const jobDuration = job.processedOn && job.timestamp ? job.processedOn - job.timestamp : 'unknown';

    this.logger.error(
      `Failed job ${job.id} of type ${job.name}. State: ${jobState}, Attempts: ${jobAttemptsMade}, Duration: ${jobDuration}ms, Error: ${error.message}`,
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

      // Check if the story was already created
      const storyCreated = (await this.storageService.getEntry(
        `story${callLogSid}`,
      )) as boolean;

      // Main processing: get and process data from Twilio
      const { callLog, sendResult } =
        await this.webhookService.getDataFromTwilioAndProcessData({
          callSid: callLogSid,
          job,
          storyCreated,
          callerCountryCode: job.data.callerCountryCode,
        });

      // If the story was not created and sending failed (not already exists), throw an error
      if (
        !storyCreated &&
        !sendResult?.success &&
        sendResult?.message !== STORY_ALREADY_EXITS
      ) {
        throw new Error('Could not send story to API');
      } else {
        await this.storageService.setEntry(`story${callLogSid}`, true);
      }

      // Calculate and set heardLevel
      const heardLevel = await this.callService.calculateHeardLevel(callLog);
      await this.callService.setHeardLevel(callLog, heardLevel);

      // Attempt to remove the future job (if exists)
      try {
        const futureJob = await this.queueService.getQueueJob({
          queue: this.processTwilioCallQueue,
          jobId: callLogSid,
        });

        if (futureJob) {
          const jobState = await futureJob.getState();
          const jobProgress = await futureJob.progress();
          const jobAttemptsMade = futureJob.attemptsMade;
          const jobTimestamp = futureJob.timestamp;
          const jobProcessedOn = futureJob.processedOn;
          const jobFinishedOn = futureJob.finishedOn;

          this.logger.debug(`[WEBHOOK] Future job details - ID: ${futureJob.id},
          State: ${jobState}, Progress: ${jobProgress}, Attempts: ${jobAttemptsMade}, Timestamp: ${jobTimestamp},
          ProcessedOn: ${jobProcessedOn}, FinishedOn: ${jobFinishedOn}`);

          if (jobState === 'delayed' || jobState === 'waiting') {
            await futureJob.remove();
            this.logger.debug(`[WEBHOOK] Future job removed: ${futureJob.id}`);
          } else {
            this.logger.debug(`[WEBHOOK] Future job ${futureJob.id} is in state ${jobState}, skipping removal`);
          }
        } else {
          this.logger.debug(`[WEBHOOK] No future job found for jobId: ${callLogSid}`);
        }
      } catch (removeErr) {
        this.logger.warn(
          `Cannot remove job for callLogSid=${callLogSid}: ${removeErr.message}`,
          removeErr.stack,
        );
        // Important: do not propagate this error to avoid breaking business logic
      }

      this.logger.debug(
        `-------result of process twilio call--------- ${JSON.stringify(
          job.data.key,
        )}`,
      );

      done(null, job.data);
    } catch (error) {
      // Fallback/retry logic in case of errors
      try {
        const reDeclaredJob =
          await this.queueService.sendNotificationOrRedeclareJob(job, error);

        if (!reDeclaredJob && !job.data.historicalData) {
          await this.webhookService.sendNotCompletedStoryToApi(callLogSid);
        }
      } catch (fallbackErr) {
        this.logger.error(`Error in fallback logic for ${QUEUE_CONSTANT.PROCESS_STORY_CALL}`, fallbackErr);
      }

      this.logger.error(`error in ${QUEUE_CONSTANT.PROCESS_STORY_CALL}`, error);
      done(error, job.data);
    }
  }




  @Process(QUEUE_CONSTANT.HANGUP_AFTER_LIMIT) // job name: 'hangup_after_limit'
  async hangupAfterLimit(job: Job<{ callSid: string }>): Promise<void> {
    const { callSid } = job.data;
    await this.twilioService.completeCall(callSid);
    this.logger.log(`######## HUNG UP call ${callSid} at 12-minute limit at ${new Date().toISOString()}`);
  }


}
