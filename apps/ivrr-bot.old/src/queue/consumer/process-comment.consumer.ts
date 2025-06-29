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
import { ApiClientService } from '../../api/service/api-client.service';
import { QUEUE_CONSTANT } from '../constant/queue.constant';
import { QueueService } from '../queue.service';
import { WebhookService } from '../../api/service/webhook.service';
import { StorageService } from '../../storage/storage.service';
import { TwilioService } from '../../call/service/twilio.service';

@Processor(QUEUE_CONSTANT.PROCESS_COMMENT_CALL)
export class ProcessCommentConsumer {
  private readonly logger = new Logger(ProcessCommentConsumer.name);
  constructor(
    private readonly apiClientService: ApiClientService,

    private readonly queueService: QueueService,
    private readonly webhookService: WebhookService,
    private readonly storageService: StorageService,
    private readonly twilioService: TwilioService,
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

  @Process(QUEUE_CONSTANT.PROCESS_COMMENT_CALL)
  async handleProcessCommentCall(job: Job, done: DoneCallback): Promise<void> {
    try {
      this.logger.debug('------- Start process of comment reply ---------');

      const { key: callLogSid, resourceId: commentId } = job.data;

      let result: Record<string, unknown>;

      if (commentId) {
        result = await this.apiClientService.setCommentAsPublished(commentId);

        if (!result?.success) {
          throw new Error('Could not publish comment');
        }
      }

      const commentCreated = (await this.storageService.getEntry(
        `comment${callLogSid}`,
      )) as boolean;
      const { callLog } = await this.webhookService.getDataFromTwilio(
        callLogSid,
        true,
      );

      if (!callLog) {
        throw new Error('CallLog is needed');
      }

      if (!commentCreated && job.data.isCommentReply) {
        const s3KeyFile = await this.webhookService.handleFile(
          callLog,
          job.data.recordingUrl,
        );

        const recordingDuration =
          await this.twilioService.getCallRecordingDuration(callLog.sid);

        result = await this.apiClientService.sendTwilioCallToApi(
          null,
          commentId,
          callLog.to,
          job.data.isCommentReply,
          {
            twilioCallSid: callLog.sid,
            s3FileId: s3KeyFile,
            isStory: false,
            isModeratorCall: false,
            callDate: callLog.dateCreated || new Date(),
            recordingDuration: recordingDuration,
          },
        );

        if (!result?.success) {
          throw new Error('Could not send reply to API');
        } else {
          await this.storageService.setEntry(`comment${callLogSid}`, true);
        }
      }

      done(null, job.data);
    } catch (error) {
      await this.queueService.sendNotificationOrRedeclareJob(job, error);

      this.logger.error(
        `error in ${QUEUE_CONSTANT.PROCESS_COMMENT_CALL}`,
        error,
      );

      done(error, job.data);
    }
  }
}
