import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserRecordInterface } from '../../common/interface/user-record';
import { FlowMessageType } from '../../common/enum/flow-message-type.enum';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig } from '../../config/default';
import { timeout, lastValueFrom } from 'rxjs';
import { DI_CONSTANTS } from '@ourloop/shared';
import { StorageService } from '../../storage/storage.service';
import { CommunicatorService } from '../../communicator/service/communicator.service';
import UserInterface from '../../common/interface/user';
import { capitalizeFirstLetter } from '../../common/helper/capitalize-first-letter';
import { RedisService } from '../../communicator/service/redis.service';

@Injectable()
export class ClientProxyService {
  private readonly logger: Logger = new Logger(ClientProxyService.name);
  communicationTimeout: number;
  providerName: string;

  constructor(
    @Inject(DI_CONSTANTS.CLIENT_PROXY)
    private readonly clientProxy: ClientProxy,
    private readonly configService: ConfigService,
    private readonly storageService: StorageService,
    @Inject(forwardRef(() => CommunicatorService))
    private readonly communicatorService: CommunicatorService,
    private readonly redisService: RedisService
  ) {
    const applicationConfig =
      this.configService.get<ApplicationConfig>('application');

    this.communicationTimeout = applicationConfig.communicationTimeout;
    this.providerName = capitalizeFirstLetter(applicationConfig.providerName);
  }

  public async sendStory(userRecord: UserRecordInterface): Promise<boolean> {
    let success = true;
    if (!userRecord.flowStartedAt) {
      userRecord.flowStartedAt = new Date();
    }

    this.logger.debug(
      `[pipeline:gateway-rpc] sendStory cmd=save${this.providerName}Story storyUuid=${userRecord.storyUuid} senderId=${userRecord.senderId}`,
    );

    const conversation = await lastValueFrom(
      this.clientProxy
        .send(
          {
            cmd: `save${this.providerName}Story`,
          },
          userRecord,
        )
        .pipe(timeout(this.communicationTimeout)),
    ).catch((e) => {
      this.logger.error(`Could not send story, error: ${JSON.stringify(e)}`);
      success = false;
    });

    this.logger.debug(
      `[pipeline:gateway-rpc] sendStory result success=${success} conversationId=${conversation?.id ?? 'n/a'}`,
    );

    if (success) {
      this.logger.log(`Story ${userRecord.storyUuid} added successfully`);
    }

    await this.storageService.clearJobs(userRecord.senderId, userRecord.pageId);
    await this.storageService.purgeCurrentMessageFlowData(
      userRecord.senderId,
      userRecord.pageId,
    );
    
    await this.redisService.resetModeratorIntroFlag(
      userRecord.senderId,
      userRecord.pageId,
    );
    
    await this.communicatorService.notifyAboutAddStory(
      userRecord.senderId,
      userRecord.pageId,
      conversation?.id,
      success,
    );

    if (success) {
      await this.storageService.clearTheDataForParticularSender(userRecord);
    }

    return success;
  }

  public async sendMessage(data: {
    senderId: string;
    message: string;
    messengerConversationId: number;
  }): Promise<void> {
    await lastValueFrom(
      this.clientProxy
        .send(
          { cmd: `save${this.providerName}Message` },
          {
            messengerConversationId: data.messengerConversationId,
            messages: [
              {
                content: data.message,
                type: FlowMessageType.SEND,
                createdAt: new Date(),
                isStory: false,
              },
            ],
          },
        )
        .pipe(timeout(this.communicationTimeout)),
    ).catch((e) => {
      this.logger.error(`Could not send user response, error: ${e}`);
    });
  }

  public async sendUserModeratorResponse(data: {
    senderId: string;
    message: string;
    messengerConversationId: number;
    thanksResponse: string;
  }): Promise<void> {
    await lastValueFrom(
      this.clientProxy
        .send(
          { cmd: `save${this.providerName}Message` },
          {
            messengerConversationId: data.messengerConversationId,
            messages: [
              {
                content: data.message,
                type: FlowMessageType.RECEIVED,
                createdAt: new Date(),
                isStory: false,
              },
              {
                content: data.thanksResponse,
                type: FlowMessageType.SEND,
                createdAt: new Date(),
                isStory: false,
              },
            ],
          },
        )
        .pipe(timeout(this.communicationTimeout)),
    ).catch((e) => {
      this.logger.error(`Could not send user response, error: ${e}`);
    });
  }

  public async findUserDetails(senderId: string): Promise<UserInterface> {
    return lastValueFrom(
      this.clientProxy
        .send(
          { cmd: 'findCommunicatorUserDetails' },
          {
            senderId,
          },
        )
        .pipe(timeout(this.communicationTimeout)),
    ).catch((e) => {
      this.logger.error(`Could not send user response, error: ${e}`);
    });
  }
}
