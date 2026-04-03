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

  getLastQuickReplyMessage(data: IncomingMessage): string {
    const whatsappData = data as WhatsappIncommingMessageInterface;
    if (whatsappData.buttonText && whatsappData.buttonPayload) {
      return whatsappData.buttonText;
    }
    return null;
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
    const whatsappData = data as WhatsappIncommingMessageInterface;
    if (whatsappData.buttonText && whatsappData.buttonPayload) {
      return whatsappData.buttonPayload;
    }
    return whatsappData.body;
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
      this.logger.debug('[pipeline:whatsapp] getPageConfigByData: missing pageId');
      return;
    }

    const cfg = await getWhatsappNumberConfig(data.pageId);
    this.logger.debug(
      `[pipeline:whatsapp] getPageConfigByData: ${cfg ? 'FOUND' : 'NOT_IN_PROVIDER_CONFIG'} pageId=${data.pageId}`,
    );
    return cfg;
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
    const recipientId = this.createWaIdFromNumber(message.recipient.id);

    if (!message.message) {
      // this.logger.warn('Message object is empty');
      return {};
    }

    const user = await this.storageService.getUser(recipientId, pageId);

    if (user?.holdOnSendMessage) {
      await setDelay(this.config.get('application.messageTimout'));
      return this.sendMessage(message, pageId);
    }

    let response;

    this.logger.debug(
      `[pipeline:whatsapp] sendMessage start pageId=${pageId} to=${recipientId} template=${!!message.message?.contentSid}`,
    );
    this.logger.debug(`MESSAGE obj >>> ${JSON.stringify(message, null, 2)}`);

    if (message.message.contentSid) {
      const variables = message.message.contentVariables ?? {};

      this.logger.debug({
        context: 'WhatsappService',
        action: 'sending template',
        contentSid: message.message.contentSid,
        variables,
        recipientId,
      });

      try {
        response = await this.whatsapp.client.messages.create({
          from: this.createWaIdFromNumber(pageId),
          to: recipientId,
          contentSid: message.message.contentSid,
          contentVariables: JSON.stringify(variables),
        });
      } catch (error) {
        this.logger.warn({
          context: 'WhatsappService',
          action: 'template send failed, falling back to text',
          error: error.message,
          contentSid: message.message.contentSid,
        });

        // Fallback to text when template fails.
        // Templates use different variable keys ('1', 'title', etc.) so pick the first value found.
        const fallbackText = (Object.values(variables ?? {})[0] as string) || message.message.text || 'Message sent';
        response = await this.whatsapp.client.messages.create({
          statusCallback: this.config.get<ApplicationConfig>('application').whatsapp.callbackUrl,
          from: this.createWaIdFromNumber(pageId),
          to: recipientId,
          body: fallbackText,
        });
      }
    } else {
      const finalText = message.message.text;

      response = await this.whatsapp.client.messages.create({
        statusCallback: this.config.get<ApplicationConfig>('application').whatsapp.callbackUrl,
        from: this.createWaIdFromNumber(pageId),
        to: recipientId,
        body: finalText,
        mediaUrl: [message.message.attachment?.payload.url],
      });

      await setDelay(1000);
    }

    if (user) {
      await this.storageService.setHoldOnSendMessage(
        recipientId,
        pageId,
        !!message.message.attachment,
      );
    }

    this.logger.debug(
      `[pipeline:whatsapp] sendMessage Twilio ok sid=${response?.sid ?? 'n/a'}`,
    );
    return { sid: response.sid };
  }

  async deleteMessageFromTwilio(twilioMessageId: string): Promise<boolean> {
    const messageInstance = await this.whatsapp.client
      .messages(twilioMessageId)
      .fetch()
      .catch(() => {
      });

    if (!messageInstance) return false;

    if (messageInstance.status !== 'delivered' && messageInstance.status !== 'read') {
      return false;
    }

    return await messageInstance.remove().catch(() => {
      return false;
    });
  }

  private createWaIdFromNumber = (number: string) =>
    number.includes('whatsapp') ? number : `whatsapp:${number}`;
}
