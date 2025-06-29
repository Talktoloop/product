import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig } from '../config/default';
import { Queue, Job } from 'bull';
import { sendMessageToSupportTeam } from '@ourloop/shared';

@Injectable()
export class QueueService {
  private readonly logger: Logger = new Logger(QueueService.name);
  private applicationConfig: ApplicationConfig;

  constructor(private readonly configService: ConfigService) {
    this.applicationConfig =
      configService.get<ApplicationConfig>('application');
  }

  async getQueueJob({
    queue,
    jobId,
  }: {
    queue: Queue;
    jobId: string;
  }): Promise<Job<any>> {
    return await queue.getJob(jobId);
  }

  async sendNotificationOrRedeclareJob(
    job: Job<any>,
    error: Error,
  ): Promise<Job<any>> {
    const reDeclaredJob = await this.redeClareJob(job);

    if (!reDeclaredJob && !job.data.historicalData) {
      await sendMessageToSupportTeam(
        this.configService.get('redis'),
        `${error.message}, details: ${JSON.stringify(error)}, jobName: ${
          job.name
        }, data: ${JSON.stringify(job.data)}`,
        this.configService.get<ApplicationConfig>('application')
          .communicationTimeout,
      );
    } else {
      this.logger.log(`Re-declared job ${job.id} of type ${job.name}`);
    }

    return reDeclaredJob;
  }

  async redeClareJob(job: Job<any>): Promise<Job<any>> {
    const attempt = job.data.attempt;

    if (!attempt) {
      return;
    }

    const delay = this.configService.get('delayOfNextAttempt')[attempt + 1];

    if (!delay) {
      return;
    }

    return this.addQueueJob({
      queue: job.queue,
      jobName: job.name,
      data: {
        ...job.data,
        attempt: attempt + 1,
      },
      jobDelayInSeconds: delay,
    });
  }

  async addQueueJob({
    queue,
    jobName,
    data,
    jobDelayInSeconds,
    jobId,
  }: {
    queue: Queue;
    jobName: string;
    data: any;
    jobDelayInSeconds?: number;
    jobId?: string;
  }): Promise<Job<any>> {
    const delay =
      jobDelayInSeconds !== undefined
        ? jobDelayInSeconds * 1000
        : this.applicationConfig.processCallDelay * 1000; // s to ms

    const job = await queue.add(jobName, data, {
      delay,
      jobId,
    });

    this.logger.log(
      `Created new job. [${job.id}]: ${job.name}, delay: ${
        delay / 1000
      } seconds`,
    );

    return job;
  }
}
