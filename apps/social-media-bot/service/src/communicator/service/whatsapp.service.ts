import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessageInterface } from '../../common/interface/message';
import { DICTIONARY } from '../../common/enum/dictionary.enum';
import { WhatsappProvider } from '../../common/interface/whatsapp-provider.interface';
import { StorageService } from '../../storage/storage.service';
import { ApplicationConfig } from '../../config/default';
import User from '../../common/interface/user';
import { setDelay } from '../../common/helper/set-delay';
import WhatsappIncommingMessageInterface from '../../common/interface/whatsapp-incomming-message';
import { WhatsappNumberConfig } from '../../common/interface/whatsapp-number-config';
import { getWhatsappNumberConfig } from '../../common/helper/get-whatsapp-number-config';
import { IncomingMessage } from '../../common/type/incoming-message.type';
import { CommunicatorConfig } from '../../common/type/communicator-config.type';
import { MessageBlockInterface } from '../../common/interface/message-block';
import WhatsappIncommingMessage from '../../common/interface/whatsapp-incomming-message';
import { Messages } from '../../common/type/messages.type';
import WhatsappStatusCallback from '../../common/interface/whatsapp-status-callback';

@Injectable()
export class WhatsappService {
  private readonly logger: Logger = new Logger(WhatsappService.name);

  constructor(
    @Inject(DICTIONARY.WHATSAPP)
    private readonly whatsapp: WhatsappProvider,
    private readonly storageService: StorageService,
    private readonly config: ConfigService,
  ) {}

  checkIfMessageHaveAttachment(data: {
    details: IncomingMessage;
    messages: Messages;
  }): boolean {
    return !!(data.details as WhatsappIncommingMessageInterface)?.mediaUrl;
  }

  async markSeenChat(): Promise<unknown> {
    return;
  }

  getMessageDeliveryResult(sid: string): Promise<WhatsappStatusCallback> {
    if (!sid) {
      return;
    }

    return this.storageService.getMessageDeliveryResult(sid);
  }

  getLastQuickReplyMessage(): string {
    return;
  }

  getLastMessage(data: Messages): string {
    return data as string;
  }

  getPageId(data: {
    message: IncomingMessage;
    config: CommunicatorConfig;
  }): string {
    return (data.message as WhatsappIncommingMessageInterface).pageId;
  }

  getSenderId(data: {
    details: IncomingMessage;
    messages: Array<MessageBlockInterface> | string;
  }): string {
    return (data.details as WhatsappIncommingMessage).from;
  }

  extractMessages(data: IncomingMessage): string {
    return (data as WhatsappIncommingMessageInterface).body;
  }

  async getPageConfigByPageId(pageId: string): Promise<WhatsappNumberConfig> {
    return getWhatsappNumberConfig(pageId);
  }

  async getPageConfigByData(
    data: IncomingMessage,
  ): Promise<WhatsappNumberConfig> {
    data = data as WhatsappIncommingMessageInterface;

    this.logger.log('Getting page config for pageId: ', data.pageId);

    if (!data.pageId) {
      return;
    }

    return getWhatsappNumberConfig(data.pageId);
  }

  async getUserProfile(data: {
    pageId: string;
    senderId: string;
    details: IncomingMessage;
  }): Promise<Partial<User>> {
    return {
      firstName:
        (data.details as WhatsappIncommingMessageInterface).profileName || null,
    };
  }

  async sendMessageToUser(
    message: MessageInterface,
    channel: string,
  ): Promise<{ sid?: string }> {
    return this.sendMessage(message, channel);
  }

  async sendMessage(
    message: MessageInterface,
    pageId: string,
  ): Promise<{ sid?: string }> {
    if (!message.message?.text && !message.message?.attachment) {
      return;
    }

    const user = await this.storageService.getUser(
      this.createWaIdFromNumber(message.recipient.id),
      pageId,
    );

    if (user && user?.holdOnSendMessage) {
      await setDelay(this.config.get('application.messageTimout'));

      return this.sendMessage(message, pageId);
    } else {
      const response = await this.whatsapp.client.messages.create({
        statusCallback:
          this.config.get<ApplicationConfig>('application').whatsapp
            .callbackUrl,
        from: this.createWaIdFromNumber(pageId),
        to: this.createWaIdFromNumber(message.recipient.id),
        body: message.message.text,
        mediaUrl: [message.message.attachment?.payload.url],
      });

      if (response.errorMessage) {
        this.logger.error(`Could not sent message.`, response.errorMessage);
      }

      if (user) {
        await this.storageService.setHoldOnSendMessage(
          this.createWaIdFromNumber(message.recipient.id),
          pageId,
          message.message.attachment ? true : false,
        );
      }

      return { sid: response.sid };
    }
  }

  async deleteMessageFromTwilio(twilioMessageId: string): Promise<boolean> {
    const messageInstance = await this.whatsapp.client
      .messages(twilioMessageId)
      .fetch()
      .catch((error) => {
        this.logger.error(
          `Error during getting message instance ${twilioMessageId} from Twilio to remove`,
          error,
        );
      });

    if (!messageInstance) return false;

    const result = await messageInstance.remove();

    if (!result)
      this.logger.error(
        `Error during removing message instance ${twilioMessageId} from Twilio`,
      );

    return result;
  }

  private createWaIdFromNumber = (number: string) =>
    number.includes('whatsapp') ? number : `whatsapp:${number}`;
}
