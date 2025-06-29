import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommunicatorService } from '../../communicator/service/communicator.service';
import { FlowMessageType } from '../../common/enum/flow-message-type.enum';
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

  async handleWebhook(data: IncomingMessage): Promise<void> {
    const pageConfig = await this.communicatorService.getPageConfig(data);
    const pageId = this.communicatorService.getPageId(data, pageConfig);
    const receivedMessages = await this.communicatorService.extractMessages(data, pageId);
    const senderId = this.communicatorService.getSenderId(data, receivedMessages);
    
    if (!pageConfig || !senderId || !receivedMessages) {
      this.logger.debug('Initial values error.', JSON.stringify({ pageConfig, senderId, receivedMessages }));
      return;
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
      this.communicatorService.checkIfMessageHaveAttachment(data, receivedMessages),
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

    if (messagesToSend?.some((m) =>
        m.finishFlow === true)) {
      const supportedLanguages = pageConfig.supportedLanguages.map((language) => language?.lang);
      
      await this.flowManagerService.setShareUserInfoAndSaveStory(
        supportedLanguages, {
        senderId: senderId,
        pageId: pageConfig.pageId,
      });
    }
  }
}
