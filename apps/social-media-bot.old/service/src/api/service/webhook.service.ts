import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommunicatorService } from '../../communicator/service/communicator.service';
import { FlowMessageType } from '../../common/enum/flow-message-type.enum';
import { Flow } from '../../common/enum/flow.enum';
import { FlowService } from '../../flow/flow.service';
import { StorageService } from '../../storage/storage.service';
import { setDelay } from '../../common/helper/set-delay';
import { IncomingMessage } from '../../common/type/incoming-message.type';

@Injectable()
export class WebhookService {
  private readonly logger: Logger = new Logger(WebhookService.name);

  constructor(
    private readonly flowManagerService: FlowService,
    private readonly configService: ConfigService,
    private readonly storageService: StorageService,
    private readonly communicatorService: CommunicatorService,
  ) {}

  async resetFlow(senderId: string, pageId: string) {
    try {
      const userRecord = await this.storageService.getUser(senderId, pageId);

      if (userRecord?.lastFlowId === Flow.SHARE_ADDITIONAL_INFO) {
        return;
      }

      if ([Flow.KEEP_ANONYMOUS, Flow.THANKS].includes(userRecord?.lastFlowId)) {
        await this.flowManagerService.setShareUserInfoAndSaveStory({
          profile: userRecord,
        });
      }

      await this.storageService.purgeCurrentMessageFlowData(senderId, pageId);
    } catch (e) {
      this.logger.error('Reset flow error', e);
    }
  }

  async handleWebhook(data: IncomingMessage): Promise<void> {
    const pageConfig = await this.communicatorService.getPageConfig(data);
    const pageId = this.communicatorService.getPageId(data, pageConfig);
    const receivedMessages = await this.communicatorService.extractMessages(
      data,
      pageId,
    );
    const senderId = this.communicatorService.getSenderId(
      data,
      receivedMessages,
    );

    if (!pageConfig || !senderId || !receivedMessages) {
      this.logger.debug(
        'Initial values error.',
        JSON.stringify({ pageConfig, senderId, receivedMessages }),
      );

      return;
    }

    if (
      this.flowManagerService.flowShouldBeRestarted(
        this.communicatorService.getLastMessage(receivedMessages),
      )
    ) {
      await this.resetFlow(senderId, pageId);
    }

    await this.communicatorService.markSeenChat(senderId, pageId);

    const profile = await this.communicatorService.getUserProfile(
      pageConfig.pageId,
      senderId,
      data,
    );

    const messagesToSend = await this.flowManagerService.handleMessage(
      senderId,
      profile,
      receivedMessages,
      pageConfig,
      this.communicatorService.checkIfMessageHaveAttachment(
        data,
        receivedMessages,
      ),
    );

    for (const message of messagesToSend) {
      await this.communicatorService.sendMessage(message, pageId);

      if (message?.message?.text) {
        await this.storageService.addFlowMessage({
          userId: senderId,
          pageId: pageConfig.pageId,
          content: message.message.text,
          type: FlowMessageType.SEND,
        });
      }

      await setDelay(1000);
    }

    const storyShouldBeSaved = await this.flowManagerService.storyShouldBeSaved(
      senderId,
      pageConfig.pageId,
      messagesToSend,
    );

    if (storyShouldBeSaved) {
      await this.flowManagerService.setShareUserInfoAndSaveStory({
        senderId: senderId,
        pageId: pageConfig.pageId,
      });
    }
  }
}
