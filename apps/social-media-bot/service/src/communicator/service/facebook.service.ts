import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { I18nService } from 'nestjs-i18n';
import fetch, { Response } from 'node-fetch';
import { ApplicationConfig } from '../../config/default';
import { getFacebokPageConfig } from '../../common/helper/get-facebok-page-config';
import { FacebookPageConfigInterface } from '../../common/interface/facebook-page-config';
import User from '../../common/interface/user';
import { Gender } from '../../common/enum/gender.enum';
import { MessageInterface } from '../../common/interface/message';
import { FacebookIncomingMessageInterface } from '../../common/interface/facebook-message-request';
import { IncomingMessage } from '../../common/type/incoming-message.type';
import { MessageBlockInterface } from '../../common/interface/message-block';
import { StorageService } from '../../storage/storage.service';
import { ClientProxyService } from '../../api/service/client-proxy.service';
import { CommunicatorConfig } from '../../common/type/communicator-config.type';
import { Messages } from '../../common/type/messages.type';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class FacebookService {
  private readonly logger: Logger = new Logger(FacebookService.name);

  facebookConfigs: FacebookPageConfigInterface[];
  baseUrl: string;

  constructor(
    private readonly i18n: I18nService,
    private readonly configService: ConfigService,
    private readonly storageService: StorageService,
    private readonly clientProxyService: ClientProxyService,
    private readonly httpService: HttpService,
  ) {
    const applicationConfig =
      this.configService.get<ApplicationConfig>('application');
    this.facebookConfigs = applicationConfig.facebook.pages;
    this.baseUrl = applicationConfig.facebook.apiUrl;
  }

  checkIfMessageHaveAttachment(data: {
    details: IncomingMessage;
    messages: Messages;
  }): boolean {
    return (
      (data.messages as Array<MessageBlockInterface>).findIndex(
        (msg: MessageBlockInterface) => msg.message.attachments,
      ) !== -1
    );
  }

  async markSeenChat(
    senderId: string,
    pageId: string,
  ): Promise<Response | void> {
    return this.sendMessage(
      {
        recipient: {
          id: senderId,
        },
        sender_action: 'mark_seen',
      },
      pageId,
    );
  }

  getMessageDeliveryResult(): null {
    return;
  }

  getLastQuickReplyMessage(data: Messages): string {
    return (data as Array<MessageBlockInterface>)[0]?.message?.quick_reply
      ?.payload;
  }

  getLastMessage(data: Messages): string {
    return (data as Array<MessageBlockInterface>)[0].message.text;
  }

  getPageId(data: {
    message: IncomingMessage;
    config: CommunicatorConfig;
  }): string {
    return data.config?.pageId;
  }

  getSenderId(data: {
    details: IncomingMessage;
    messages: Array<MessageBlockInterface> | string;
  }): string {
    return (data.messages as Array<MessageBlockInterface>)[0]?.sender?.id;
  }

  async extractMessages(
    data: IncomingMessage,
    pageId: string,
  ): Promise<Array<MessageBlockInterface>> {
    const messages = (
      data as FacebookIncomingMessageInterface
    ).entry[0].messaging.map((e) =>
      e.message
        ? e
        : {
            ...e,
            message: {
              mid: e.postback?.mid,
              text: e.postback?.payload,
            },
          },
    );

    const isPostbackMessage = !!messages[0].postback;
    const senderId = messages[0]?.sender?.id;

    if (isPostbackMessage && pageId && senderId) {
      await this.handlePostbackMessage(senderId, pageId);
    }

    return messages;
  }

  private handlePostbackMessage = async (senderId: string, pageId: string) => {
    const userRecord = await this.storageService.getUser(senderId, pageId);

    const profileHasStory = !userRecord
      ? false
      : userRecord.flowResponses.findIndex((message) => message.isStory) !== -1;

    if (profileHasStory) {
      await this.clientProxyService.sendStory(userRecord);
    }

    await this.storageService.purgeCurrentMessageFlowData(senderId, pageId);
  };

  async getPageConfigByPageId(
    pageId: string,
  ): Promise<FacebookPageConfigInterface> {
    return getFacebokPageConfig(pageId);
  }

  async getPageConfigByData(
    data: IncomingMessage,
  ): Promise<FacebookPageConfigInterface> {
    const pageId = (data as FacebookIncomingMessageInterface).entry[0]
      .messaging[0].recipient.id;
    this.logger.log('Getting page config for pageId: ', pageId);

    return getFacebokPageConfig(pageId);
  }

  async getUserProfile(data: {
    pageId: string;
    senderId: string;
    details: IncomingMessage;
  }): Promise<Partial<User>> {
    const fbConfig = await getFacebokPageConfig(data.pageId);
    const userApiUrl = `${this.baseUrl}/${data.senderId}?access_token=${fbConfig.pageAccessToken}&fields=first_name,last_name,locale,gender`;
    const response = await fetch(userApiUrl).catch((error) => {
      this.logger.debug(
        `Success when get facebook profile, url: ${JSON.stringify(error)}`,
      );

      return;
    });

    if (response && response.status === 200) {
      const userProfile: Record<string, any> = await response.json();
      const userLang = userProfile.locale.split('_')[0];

      this.logger.debug(
        `Success when get facebook profile, url: ${userApiUrl}`,
      );

      return {
        firstName: userProfile.first_name,
        lastName: userProfile.last_name,
        locale:
          fbConfig.supportedLanguages
            .map((language) => language.lang)
            .indexOf(userLang) > -1
            ? userLang
            : fbConfig.defaultLanguage,
        gender: userProfile.gender as Gender,
        country: null,
      };
    }

    this.logger.error(
      `Could not get facebook profile, url: ${userApiUrl}, response: ${JSON.stringify(
        response,
      )}`,
    );

    return {
      firstName: null,
      lastName: null,
      locale: null,
      gender: null,
      country: null,
    };
  }

  async sendMessageToUser(
    requestBody: MessageInterface,
    pageId: string,
  ): Promise<any | void> {
    const fbConfig = await getFacebokPageConfig(pageId);

    if (!fbConfig) {
      this.logger.error('Page config not found.');
      return;
    }

    const sendMessageUrl = `${this.baseUrl}/me/messages?access_token=${fbConfig.pageAccessToken}`;

    return firstValueFrom(
      this.httpService.post(sendMessageUrl, requestBody, {
        headers: { 'Content-Type': 'application/json' },
      }),
    )
      .then((result) => {
        console.log('axios - FB response', result.data);
        return {
          sid: result?.data?.message_id,
        };
      })
      .catch((error) =>
        this.logger.error(`Could not call fb api - error.`, error.message),
      );
  }

  async sendMessage(
    requestBody: MessageInterface,
    pageId: string,
  ): Promise<Response | void> {
    return this.sendMessageToUser(requestBody, pageId);
  }

  async bootstrapSettings(): Promise<void> {
    for (const page of this.facebookConfigs) {
      const sendMessageUrl = `${this.baseUrl}/me/messenger_profile?access_token=${page.pageAccessToken}`;

      const greeting = [];

      for (const language of page.supportedLanguages) {
        greeting.push({
          locale: language.locale,
          text: await this.i18n.translate(`main.GREETINGS`, {
            lang: language.lang,
          }),
        });
      }

      const setupGetStartedResponse = await fetch(sendMessageUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          get_started: {
            payload: await this.i18n.translate(`main.GET_STARTED`, {
              lang: page.defaultLanguage,
            }),
          },
          greeting,
        }),
      });

      if (!setupGetStartedResponse.ok) {
        this.logger.error(
          `Could not bootstrap get started message settings for ${page.pageId}`,
          setupGetStartedResponse.statusText,
        );
      }
    }
  }

  isValidSubscriptionQuery(mode: string, token: string): boolean {
    const verifyToken =
      this.configService.get<ApplicationConfig>('application').facebook
        .verifyToken;

    return mode && token && mode === 'subscribe' && token === verifyToken;
  }
}
