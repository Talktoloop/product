import {
  OnGlobalQueueCompleted,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Inject, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DoneCallback, Job, Queue } from 'bull';
import { SchedulerService } from '../../scheduler/scheduler.service';
import { TwilioService } from '../../call/service/twilio.service';
import { ApplicationConfig } from '../../config/default';
import { QUEUE_CONSTANT } from '../constant/queue.constant';
import { QueueService } from '../queue.service';
import { CallService } from '../../call/service/call.service';
import { ANSWERED_BY } from '../../call/constant/answered-by';
import { SourceType } from '../../scheduler/enum/source-type.enum';
import { ApiClientService } from '../../api/service/api-client.service';
import { COMMENT_STATUS, sendMessageToSupportTeam } from '@ourloop/shared';
import { SchedulerEntity } from '../../scheduler/entity/scheduler.entity';
import { SchedulerStatus } from '../../scheduler/enum/status.enum';

@Processor(QUEUE_CONSTANT.CHECK_USER_ANSWER)
export class CheckUserAnswerConsumer {
  private readonly logger = new Logger(CheckUserAnswerConsumer.name);
  private applicationConfig: ApplicationConfig;

  constructor(
    private readonly configService: ConfigService,
    private readonly twilioService: TwilioService,
    private readonly apiClientService: ApiClientService,
    private readonly schedulerService: SchedulerService,
    private readonly queueService: QueueService,
    private readonly callService: CallService,
    @Inject(QUEUE_CONSTANT.CHECK_USER_ANSWER)
    private checkUserAnswerCall: Queue,
  ) {
    this.applicationConfig =
      configService.get<ApplicationConfig>('application');
  }

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

  @Process(QUEUE_CONSTANT.CHECK_USER_ANSWER)
  async handleCheckUserAnswer(job: Job, done: DoneCallback): Promise<void> {
    try {
      this.logger.debug(
        '-------Start process of checking user answer---------',
      );

      const callId = job.data.key;

      const schedulerData = job.data.schedulerData;
      this.logger.log('schedulerData', JSON.stringify(schedulerData));

      const call = await this.twilioService.getTwilioCallLog(callId);

      if (!call) {
        throw new Error('call is needed');
      }

      const minimumPercentageHeardLevel = this.configService.get(
        'application.minimumPercentageHeardLevel',
      );

      const heardLevel = await this.callService.calculateHeardLevel(call);
      const callDone = heardLevel > 0;

      this.logger.debug(`call: ${JSON.stringify(call)}`);

      const callCompleted =
        call.status === 'completed' &&
        call.answeredBy !== ANSWERED_BY.MACHINE_START &&
        callDone;

      if (callCompleted) {
        this.logger.debug(
          `heardLevel <= minimumPercentageHeardLevel: ${
            heardLevel <= minimumPercentageHeardLevel
          }`,
        );

        if (heardLevel <= minimumPercentageHeardLevel) {
          await this.schedulerService.scheduleCall(schedulerData);
        }

        if (schedulerData?.type === SourceType.COMMENT) {
          const pendingCall =
            await this.schedulerService.findPendingCallByCommentId(
              schedulerData.sourceId,
            );

          if (!pendingCall) {
            await this.apiClientService.setCommentAsPublished(
              schedulerData.sourceId,
            );
          }
        }
      } else if (call.status === 'in-progress') {
        await this.queueService.addQueueJob({
          queue: this.checkUserAnswerCall,
          jobName: QUEUE_CONSTANT.CHECK_USER_ANSWER,
          data: { key: call?.sid, attempt: 1 },
          jobDelayInSeconds: this.applicationConfig.checkAnswerCallDelay,
        });
      } else if (!callCompleted && schedulerData?.id) {
        if (
          schedulerData.sequenceNumber >=
          this.configService.get('application.sequenceNumberLimit')
        ) {
          await this.setCommentAsPublished(schedulerData);
        }

        await this.schedulerService.setStatusAsFailed(schedulerData);
      } else {
        await this.schedulerService.scheduleCall(schedulerData);
      }

      const actualCall = await this.schedulerService.findCallById(
        schedulerData.id,
      );

      if (actualCall?.status == SchedulerStatus.IN_PROGRESS) {
        await this.schedulerService.deleteSchedulerEntry(schedulerData.id);
        await this.setCommentAsPublished(schedulerData);
      }
    } catch (error) {
      const now = new Date();

      await sendMessageToSupportTeam(
        this.configService.get('redis'),
        `Error for ${
          QUEUE_CONSTANT.CHECK_USER_ANSWER
        }, date: ${now.toISOString()}, details: ${JSON.stringify(
          error,
        )} data: ${JSON.stringify(job.data)}`,
        this.configService.get<ApplicationConfig>('application')
          .communicationTimeout,
      );

      done(error, job.data);
    }

    done(null, job.data);
  }

  async setCommentAsPublished(schedulerData: SchedulerEntity): Promise<void> {
    if (schedulerData?.type !== SourceType.COMMENT) {
      return;
    }

    const comment = await this.apiClientService.getCommentDetails(
      schedulerData.sourceId,
    );

    if (comment?.status !== COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL) {
      return;
    }

    await this.apiClientService.setCommentAsPublished(schedulerData.sourceId);
  }
}
