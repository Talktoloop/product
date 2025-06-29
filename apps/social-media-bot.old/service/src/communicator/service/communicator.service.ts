import { Injectable, Inject, forwardRef, Logger } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import StoryStatusToMessengerConversationInterface from '../../common/interface/story-status-message';
import ModeratorFlowMessageInterface from '../../common/interface/moderator-flow-message';
import { StoryStatus } from '../../common/interface/story.status';
import { UserFlowMessageInterface } from '../../common/interface/user-record';
import { FlowMessageType } from '../../common/enum/flow-message-type.enum';
import { DEFAULT_LANG } from '../../common/constant/default-lanugage.constant';
import { FacebookService } from '../../communicator/service/facebook.service';
import { WhatsappService } from '../../communicator/service/whatsapp.service';
import { TelegramService } from './telegram.service';
import { StorageService } from '../../storage/storage.service';
import CommentMessageInterface from '../../common/interface/comment-message';
import { ClientProxyService } from '../../api/service/client-proxy.service';
import { ConfigService } from '@nestjs/config';
import { Provider } from '../../common/enum/provider.enum';
import { sendMessageToSupportTeam } from '@ourloop/shared';
import { MessageInterface } from '../../common/interface/message';
import { IncomingMessage } from '../../common/type/incoming-message.type';
import { CommunicatorConfig } from '../../common/type/communicator-config.type';
import UserInterface from '../../common/interface/user';
import { Messages } from '../../common/type/messages.type';
import WhatsappStatusCallback from '../../common/interface/whatsapp-status-callback';
import { Response } from 'node-fetch';
import { setDelay } from '../../common/helper/set-delay';

@Injectable()
export class CommunicatorService {
  private readonly logger: Logger = new Logger(CommunicatorService.name);

  constructor(
    private readonly storageService: StorageService,
    @Inject(forwardRef(() => FacebookService))
    private readonly facebookService: FacebookService,
    private readonly whatsappService: WhatsappService,
    private readonly telegramService: TelegramService,
    private readonly i18n: I18nService,
    @Inject(forwardRef(() => ClientProxyService))
    private readonly clientProxyService: ClientProxyService,
    private readonly configService: ConfigService,
  ) {}

  getProvider(): FacebookService | WhatsappService | TelegramService {
    switch (this.configService.get('application.providerName')) {
      case Provider.FACEBOOK:
        return this.facebookService;
      case Provider.WHATSAPP:
        return this.whatsappService;
      case Provider.TELEGRAM:
        return this.telegramService;
      default:
        sendMessageToSupportTeam(
          this.configService.get('redis'),
          'MESSENGER SERVICE: provider is not available',
          this.configService.get('application.communicationTimeout'),
        );
    }
  }

  async sendOrganizationCommentNotification(
    notification: CommentMessageInterface,
  ): Promise<{
    messengerConversationId: number;
    messages: UserFlowMessageInterface;
  }> {
    this.logger.log('Handle sendCommentNotification.');
    const flowMessage = await this.sendCommentNotification(notification);

    return {
      messengerConversationId: notification.messengerConversationId,
      messages: flowMessage,
    };
  }

  async sendStoryStatusToMessengerConversation(
    data: StoryStatusToMessengerConversationInterface,
  ): Promise<{
    messengerConversationId: number;
    messages: UserFlowMessageInterface[];
  }> {
    const flowMessage = await this.sendStoryStatusNotification(data);

    return {
      messengerConversationId: data.messengerConversationId,
      messages: flowMessage,
    };
  }

  async sendChatMessage(
    data: ModeratorFlowMessageInterface,
  ): Promise<Array<UserFlowMessageInterface> | { status: string }> {
    const flowExists = await this.userHasOngoingFlow(
      data.senderId,
      data.pageId,
    );

    if (flowExists) {
      return [];
    }

    let messages = [];

    messages = await this.prepareChatMessage(data);

    const messageDeliveryStatus = await this.getMessageDeliveryResult(
      messages[0]?.sid,
    );

    if (messageDeliveryStatus?.errorCode) {
      return { status: messageDeliveryStatus.messageStatus };
    }

    return messages;
  }

  async checkConversationAvailability(data: {
    senderId: string;
    pageId: string;
    storyId: string;
  }): Promise<{ storyId: string; type: string }> {
    const flowExists = await this.userHasOngoingFlow(
      data.senderId,
      data.pageId,
    );

    return {
      storyId: data.storyId,
      type: flowExists ? 'ONGOING_FLOW' : null,
    };
  }

  async notifyAboutAddStory(
    senderId: string,
    pageId: string,
    conversationId: number,
    success = true,
  ): Promise<void> {
    const user = await this.storageService.getUser(senderId, pageId);
    const lang = user?.lang || DEFAULT_LANG;
    const notification = await this.i18n.translate(
      `main.${success ? 'THANKS' : 'ADD_STORY_NOTIFICATION_FAILED'}`,
      {
        lang,
      },
    );

    if (success) {
      const config = await this.getProvider().getPageConfigByPageId(pageId);

      const imageUrl = config?.supportedLanguages.find(
        (item) => item.lang === lang,
      )?.thanksImageUrl;

      if (imageUrl) {
        await this.getProvider().sendMessage(
          {
            recipient: {
              id: user.senderId,
            },
            message: {
              text: '',
              attachment: {
                payload: {
                  is_reusable: false,
                  url: imageUrl,
                },
                type: 'image',
              },
            },
          },
          pageId,
        );

        await setDelay(1000);
      }
    }

    await this.getProvider().sendMessage(
      {
        recipient: {
          id: senderId,
        },
        message: {
          text: notification,
          quick_replies: success
            ? [
                {
                  content_type: 'text',
                  title: await this.i18n.translate('main.RESTART', {
                    lang,
                  }),
                  payload: 'RESTART',
                },
              ]
            : undefined,
        },
      },
      pageId,
    );

    await this.clientProxyService.sendMessage({
      senderId,
      message: notification,
      messengerConversationId: conversationId,
    });
  }

  async sendPromoteDescription(
    senderId: string,
    pageId: string,
  ): Promise<void> {
    const user = await this.storageService.getUser(senderId, pageId);

    const notification = await this.i18n.translate('main.PROMOTE_DESCRIPTION', {
      lang: user?.lang || DEFAULT_LANG,
    });

    await this.getProvider().sendMessage(
      {
        recipient: {
          id: senderId,
        },
        message: {
          text: notification,
        },
      },
      pageId,
    );
  }

  async userHasOngoingFlow(senderId: string, pageId: string): Promise<boolean> {
    const userRecord = await this.storageService.getUser(senderId, pageId);
    const userModeratorFlow = await this.storageService.getUserModeratorFlow(
      senderId,
      pageId,
    );

    if (!userRecord && !userModeratorFlow) {
      return false;
    }

    return !!userRecord?.storyUuid;
  }

  async markSeenChat(senderId: string, pageId: string): Promise<unknown> {
    return this.getProvider().markSeenChat(senderId, pageId);
  }

  async prepareChatMessage(
    data: ModeratorFlowMessageInterface,
  ): Promise<Array<UserFlowMessageInterface>> {
    const introStoryMessage = this.prepareIntroStoryMessage(
      data.senderId,
      data.story,
      data.introduction,
    );
    const result = await this.getProvider().sendMessageToUser(
      introStoryMessage,
      data.pageId,
    );

    await this.getProvider().sendMessageToUser(
      {
        recipient: {
          id: data.senderId,
        },
        message: {
          text: data.message,
        },
      },
      data.pageId,
    );
    await this.storageService.setUserModeratorFlow(data);

    return [
      {
        content: introStoryMessage.message.text,
        type: FlowMessageType.MODERATOR_RESPONSE,
        createdAt: new Date(),
        isStory: false,
        sid: result?.sid,
      },
      {
        content: data.message,
        type: FlowMessageType.MODERATOR_RESPONSE,
        createdAt: new Date(),
        isStory: false,
      },
    ];
  }

  async sendMessageToUser(
    message: MessageInterface,
    pageId: string,
  ): Promise<{ sid?: string } | Response> {
    return this.getProvider().sendMessageToUser(message, pageId);
  }

  async sendMessage(
    message: MessageInterface,
    pageId: string,
  ): Promise<{ sid?: string } | Response> {
    return this.getProvider().sendMessage(message, pageId);
  }

  getUserProfile(
    pageId: string,
    senderId: string,
    details: IncomingMessage,
  ): Promise<Partial<UserInterface>> {
    return this.getProvider().getUserProfile({ pageId, senderId, details });
  }

  checkIfMessageHaveAttachment(
    details: IncomingMessage,
    messages: Messages,
  ): boolean {
    return this.getProvider().checkIfMessageHaveAttachment({
      details,
      messages,
    });
  }

  getSenderId(details: IncomingMessage, messages: Messages): string {
    return this.getProvider().getSenderId({ details, messages });
  }

  getPageId(data: IncomingMessage, config: CommunicatorConfig): string {
    return this.getProvider().getPageId({ message: data, config });
  }

  getLastQuickReplyMessage(data: Messages): string {
    return this.getProvider().getLastQuickReplyMessage(data);
  }

  getLastMessage(data: Messages): string {
    return this.getProvider().getLastMessage(data);
  }

  getPageConfig(data: IncomingMessage): Promise<CommunicatorConfig> {
    return this.getProvider().getPageConfigByData(data);
  }

  getMessageDeliveryResult(sid: string): Promise<WhatsappStatusCallback> {
    return this.getProvider().getMessageDeliveryResult(sid);
  }

  async extractMessages(
    data: IncomingMessage,
    pageId: string,
  ): Promise<Messages> {
    return this.getProvider().extractMessages(data, pageId);
  }

  async sendStoryStatusNotification(
    data: StoryStatusToMessengerConversationInterface,
  ): Promise<Array<UserFlowMessageInterface>> {
    const translationKey = `STORY_STATUS_${data.messageType}`;

    let text = await this.i18n.translate(`main.${translationKey}`, {
      lang: data.language || DEFAULT_LANG,
    });

    if (data.messageType === StoryStatus.REJECTED) {
      text = text.replace('{{reasonText}}', data.reasonText);
    }

    const introStoryMessage = this.prepareIntroStoryMessage(
      data.senderId,
      data.story,
    );

    await this.getProvider().sendMessage(introStoryMessage, data.pageId);
    await this.getProvider().sendMessage(
      {
        recipient: {
          id: data.senderId,
        },
        message: {
          text: text,
        },
      },
      data.pageId,
    );

    return [
      {
        content: introStoryMessage.message.text,
        createdAt: new Date(),
        isStory: false,
        type: FlowMessageType.SEND,
      },
      {
        content: text,
        createdAt: new Date(),
        isStory: false,
        type: FlowMessageType.SEND,
      },
    ];
  }

  async sendCommentNotification(
    data: CommentMessageInterface,
  ): Promise<UserFlowMessageInterface> {
    let text = await this.i18n.translate(
      `main.${data.organization ? 'ORGANIZATION' : 'ANY'}_COMMENT`,
      {
        lang: data.language || DEFAULT_LANG,
      },
    );

    text = text
      .replace('{{reply}}', data.reply)
      .replace('{{organization}}', data.organization ?? '');

    await this.getProvider().sendMessage(
      {
        recipient: {
          id: data.senderId,
        },
        message: {
          text: text,
        },
      },
      data.pageId,
    );

    return {
      content: text,
      createdAt: new Date(),
      isStory: false,
      type: FlowMessageType.SEND,
    };
  }

  private prepareIntroStoryMessage(
    senderId: string,
    story: string,
    introduction?: string,
  ): any {
    const maxLengthOfStoryIntro = this.configService.get(
      'application.maxLengthOfStoryIntro',
    );
    const storyPrepared =
      story.length <= maxLengthOfStoryIntro
        ? story
        : `${story.substr(1, maxLengthOfStoryIntro - 3)}...`;

    return {
      recipient: {
        id: senderId,
      },
      message: {
        text: introduction
          ? `${introduction}: ${storyPrepared}`
          : storyPrepared,
      },
    };
  }
}
