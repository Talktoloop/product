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
import { TwilioService } from '../../call/service/twilio.service';
import { SchedulerService } from '../../scheduler/scheduler.service';

@Processor(QUEUE_CONSTANT.INITIALIZE_CALL)
export class InitializeCallConsumer {
  private readonly logger = new Logger(InitializeCallConsumer.name);
  constructor(
    private readonly queueService: QueueService,
    private readonly twilioService: TwilioService,
    private readonly schedulerService: SchedulerService,
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

  @Process(QUEUE_CONSTANT.INITIALIZE_CALL)
  async initializeCall(job: Job, done: DoneCallback): Promise<void> {
    const schedulerData = job.data.schedulerData;

    try {
      this.logger.debug(
        '-------Start process of call initialization ---------',
      );

      const { call, callCreated } = await this.twilioService.initializeCall(
        job.data,
      );

      if (callCreated && !call?.sid) {
        throw new Error('Call initiation failed');
      }

      await this.schedulerService.setCallId(schedulerData.id, call?.sid);

      done(null, job.data);
    } catch (error) {
      const reDeclaredJob =
        await this.queueService.sendNotificationOrRedeclareJob(job, error);

      if (!reDeclaredJob) {
        await this.schedulerService.setStatusAsFailed(schedulerData);
      }

      this.logger.error(`error in ${QUEUE_CONSTANT.INITIALIZE_CALL}`, error);
      done(error, job.data);
    }
  }
}
