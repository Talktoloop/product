import {
  OnGlobalQueueCompleted,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger, Inject, forwardRef } from '@nestjs/common';
import { DoneCallback, Job } from 'bull';
import { QUEUE } from '../../common/enum/queue.enum';
import { ClientProxyService } from '../../api/service/client-proxy.service';
import { StorageService } from '../../storage/storage.service';
import { CommunicatorService } from '../service/communicator.service';
import { WhatsappService } from '../service/whatsapp.service';

@Processor(QUEUE.SEND_CONVERSATION_TO_API)
export class SendConversationToApiConsumer {
  private readonly logger = new Logger(SendConversationToApiConsumer.name);
  constructor(
    @Inject(forwardRef(() => ClientProxyService))
    private readonly clientProxyService: ClientProxyService,
    private readonly storageService: StorageService,
    private readonly communicatorService: CommunicatorService,
    private readonly whatsappService: WhatsappService,
  ) {}

  @OnQueueActive()
  onActive(job: Job): void {
    this.logger.debug(
      `Processing job ${job.id} of type ${job.name}. Data: ${JSON.stringify(
        job.data,
      )}`,
    );
  }

  // @OnQueueCompleted()
  // onComplete(
  //   job: Job,
  //   result: any, // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
  // ): void {
    // this.logger.debug(
    //   `Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(
    //     result,
    //   )}`,
    // );
  // }

  // @OnGlobalQueueCompleted()
  // onGlobalCompleted(
  //   job: Job,
  //   result: any, // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
  // ): void {
  //   this.logger.debug(
  //     `Global Completed job ${job}. Result: ${JSON.stringify(result)}`,
  //   );
  // }

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

  @Process('send_conversation')
  async handleSendData(job: Job, done: DoneCallback): Promise<void> {
    this.logger.debug('-------Start process of sendind data to API---------');

    try {
      const { senderId, pageId } = job.data;
      const userRecord = await this.storageService.getUser(senderId, pageId);

      if (userRecord?.story) {
        await this.clientProxyService.sendStory(userRecord);
      } else if (userRecord) {
        await this.communicatorService.sendPromoteDescription(senderId, pageId);
        await this.storageService.clearTheDataForParticularSender(userRecord);
      }

      this.logger.debug(
        `-------result of sending data to API--------- ${JSON.stringify(
          job.data.key,
        )}`,
      );

      done(null, job.data);
    } catch (error) {
      done(error, job.data);
    }
  }
  
  @Process('delete_message')
  async handleDeleteMessage(job: Job<{ messageSid: string }>): Promise<void> {
    const { messageSid } = job.data;
    const MAX_ATTEMPTS = 3;
    const RETRY_DELAY_MS = 3000;
    
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      // this.logger.debug(
      //   `Attempt ${attempt} to delete message: ${messageSid}`,
      // );
      
      const deleted = await this.whatsappService.deleteMessageFromTwilio(messageSid);
      
      if (deleted) return;
      
      if (attempt < MAX_ATTEMPTS) {
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      } else {
        // this.logger.error(`Failed to delete message ${messageSid} after ${MAX_ATTEMPTS} attempts`);
      }
    }
  }
}
