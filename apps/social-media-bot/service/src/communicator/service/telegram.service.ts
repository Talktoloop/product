import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessageInterface } from '../../common/interface/message';
import { DICTIONARY } from '../../common/enum/dictionary.enum';
import User from '../../common/interface/user';
import TelegramIncomingMessageInterface from '../../common/interface/telegram-inoming_message';
import { TelegramNumberConfig } from '../../common/interface/telegram-number-config';
import { getTelegramChannelConfig } from '../../common/helper/get-telegram-channel-config';
import { IncomingMessage } from '../../common/type/incoming-message.type';
import { CommunicatorConfig } from '../../common/type/communicator-config.type';
import { MessageBlockInterface } from '../../common/interface/message-block';
import { Messages } from '../../common/type/messages.type';
import WhatsappStatusCallback from '../../common/interface/whatsapp-status-callback';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramService {
  private readonly logger: Logger = new Logger(TelegramService.name);

  constructor(
    @Inject(DICTIONARY.TELEGRAM)
    private readonly telegram: TelegramBot,
    private readonly config: ConfigService,
  ) {
    this.setWebHooks();
  }

  async setWebHooks() {
    if (!Array.isArray(this.telegram)) {
      return;
    }

    for (const bot of this.telegram) {
      const channelConfig = await getTelegramChannelConfig({
        token: bot.token,
      });

      bot.setWebHook(
        `${this.config.get('application.telegram.webhookUrl')}/${
          channelConfig.pageId
        }`,
      );
    }
  }

  checkIfMessageHaveAttachment(): boolean {
    return false;
  }

  async markSeenChat(): Promise<unknown> {
    return;
  }

  getMessageDeliveryResult(): Promise<WhatsappStatusCallback> {
    return;
  }

  getLastQuickReplyMessage(data: Messages): string {
    return data.toString();
  }

  getLastMessage(data: Messages): string {
    return data as string;
  }

  getPageId(data: {
    message: IncomingMessage;
    config: CommunicatorConfig;
  }): string {
    return (data.message as TelegramIncomingMessageInterface).channel;
  }

  getSenderId(data: {
    details: IncomingMessage;
    messages: Array<MessageBlockInterface> | string;
  }): string {
    return (
      data.details as TelegramIncomingMessageInterface
    ).from?.id.toString();
  }

  extractMessages(data: IncomingMessage): string {
    return (data as TelegramIncomingMessageInterface).text;
  }

  async getPageConfigByPageId(pageId: string): Promise<TelegramNumberConfig> {
    return getTelegramChannelConfig({ channel: pageId });
  }

  async getPageConfigByData(
    data: IncomingMessage,
  ): Promise<TelegramNumberConfig> {
    data = data as TelegramIncomingMessageInterface;

    this.logger.log('Getting config for channel: ', data.channel);

    return getTelegramChannelConfig({ channel: data.channel });
  }

  async getUserProfile(data: {
    pageId: string;
    senderId: string;
    details: IncomingMessage;
  }): Promise<Partial<User>> {
    const message = data.details as TelegramIncomingMessageInterface;
    const botConfig = await getTelegramChannelConfig({
      channel: message.channel,
    });
    const userLang = message?.from?.language_code;

    return {
      firstName: message?.from?.first_name,
      locale:
        botConfig.supportedLanguages
          .map((language) => language.lang)
          .indexOf(userLang) > -1
          ? userLang
          : botConfig.defaultLanguage,
    };
  }

  async sendMessageToUser(
    message: MessageInterface,
    channel: string,
  ): Promise<TelegramBot.Message> {
    return this.sendMessage(message, channel);
  }

  async sendMessage(
    message: MessageInterface,
    channel: string,
  ): Promise<TelegramBot.Message> {
    if (!message.message) {
      return;
    }

    const botConfig = await getTelegramChannelConfig({
      channel,
    });
    const bot = this.telegram.find((item) => item.token === botConfig.token);

    if (message.message.attachment) {
      return bot.sendPhoto(
        message.recipient.id,
        message.message.attachment.payload?.url,
      );
    }

    if (!message.message?.text) {
      return;
    }

    let quickReplies = [];

    if (message.message.quick_replies) {
      quickReplies = message.message.quick_replies.map((item) => [
        {
          text: item.title,
          callback_data: item.payload,
        },
      ]);
    }

    if (!message?.message?.text) {
      return;
    }

    return bot.sendMessage(
      message.recipient.id,
      message?.message?.text,
      quickReplies
        ? {
            reply_markup: {
              keyboard: quickReplies,
              resize_keyboard: true,
              one_time_keyboard: true,
            },
          }
        : {},
    );
  }
}
