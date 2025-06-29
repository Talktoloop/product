import { Injectable, Logger } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { StorageService } from '../storage/storage.service';
import User from '../common/interface/user';
import { UserRecordInterface } from '../common/interface/user-record';
import {
  FlowRecordInterface,
  FlowMessageInterface,
} from '../common/interface/flow-record';
import { MessageInterface } from '../common/interface/message';
import { isStoryFlow } from '../common/helper/is-story-flow';
import { FlowMessageType } from '../common/enum/flow-message-type.enum';
import { Flow } from '../common/enum/flow.enum';
import { MessageType } from '../common/enum/message-type.enum';
import { ClientProxyService } from '../api/service/client-proxy.service';
import { CommunicatorService } from '../communicator/service/communicator.service';
import { createFlowArray } from '../config/flow';
import { dontReuseDetails } from '../config/flow/dont-reuse-details.flow';
import { CommunicatorConfig } from '../common/type/communicator-config.type';
import { Messages } from '../common/type/messages.type';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FlowService {
  private readonly logger: Logger = new Logger(FlowService.name);

  private flow: Array<FlowRecordInterface>;

  constructor(
    private readonly storageService: StorageService,
    private readonly i18n: I18nService,
    private readonly clientProxyService: ClientProxyService,
    private readonly communicatorService: CommunicatorService,
    private readonly configService: ConfigService,
  ) {}

  flowShouldBeRestarted(message: string): boolean {
    return message?.toLowerCase().trim() === 'loop';
  }

  async handleMessage(
    senderId: string,
    profile: Partial<User>,
    receivedMessages: Messages,
    pageConfig: CommunicatorConfig,
    repeatLastMessage = false,
  ): Promise<Array<MessageInterface>> {
    this.flow = await createFlowArray(pageConfig, profile.locale);

    const moderatorFlow = await this.handleModeratorFlow(
      senderId,
      pageConfig.pageId,
      pageConfig.defaultLanguage,
      receivedMessages,
    );

    if (moderatorFlow) {
      return [];
    }

    let user = await this.storageService.getUser(senderId, pageConfig.pageId);

    if (!user) {
      user = await this.storageService.createUser(
        senderId,
        pageConfig,
        profile,
      );
    }

    if (user && user.shareUserInfo) {
      user = await this.storageService.setLocation(
        senderId,
        pageConfig.pageId,
        profile.locale,
      );
    }

    let messagesToSend = [];

    if (user.lastFlowId) {
      if (repeatLastMessage) {
        messagesToSend = await this.repeatLastMessege(
          senderId,
          pageConfig.pageId,
          pageConfig,
        );
        return messagesToSend;
      }

      messagesToSend = await this.parseUserResponse(
        senderId,
        pageConfig,
        receivedMessages,
      );
    } else {
      messagesToSend = await this.generateMessagesForNewFlow(user, pageConfig);
    }

    return messagesToSend;
  }

  async generateMessagesForNewFlow(
    profile: UserRecordInterface,
    pageConfig: CommunicatorConfig,
  ): Promise<Array<MessageInterface>> {
    await this.storageService.setUserLang(
      profile.senderId,
      profile.pageId,
      profile.user.locale,
      pageConfig,
    );

    const flowRecord = this.flow[0];

    await this.storageService.setLastFlowId(
      profile.senderId,
      profile.pageId,
      flowRecord.flowId,
    );

    return await this.generateMessages(
      flowRecord,
      profile.senderId,
      profile.pageId,
      pageConfig,
    );
  }

  async handleModeratorFlow(
    senderId: string,
    pageId: string,
    defaultLang: string,
    messages: Messages,
  ): Promise<boolean> {
    const userModeratorFlow = await this.storageService.getUserModeratorFlow(
      senderId,
      pageId,
    );

    if (!userModeratorFlow) {
      return false;
    }
    const userResponse = this.communicatorService.getLastMessage(messages);

    const thanksResponse = await this.i18n.translate(
      `main.END_OF_SERVICE_MODERATOR_FLOW${
        !this.configService.get('application.supportedQuickReplies')
          ? '_NO_QUICK_REPLY'
          : ''
      }`,
      {
        lang: userModeratorFlow.language || defaultLang,
      },
    );

    const restartButton = await this.i18n.translate(`main.SHARE_NEW_STORY`, {
      lang: userModeratorFlow.language || defaultLang,
    });

    await this.communicatorService.sendMessage(
      {
        recipient: {
          id: senderId,
        },
        message: {
          text: thanksResponse,
          quick_replies: [
            {
              content_type: 'text',
              title: restartButton,
              payload: '',
            },
          ],
        },
      },
      pageId,
    );

    await this.clientProxyService.sendUserModeratorResponse({
      messengerConversationId: userModeratorFlow.messengerConversationId,
      senderId: senderId,
      message: userResponse,
      thanksResponse: thanksResponse,
    });
    await this.storageService.clearUserModeratorFlow(senderId, pageId);

    return true;
  }

  async parseUserResponse(
    senderId: string,
    pageConfig: CommunicatorConfig,
    incomingMessages: Messages,
  ): Promise<Array<MessageInterface>> {
    let user = await this.storageService.getUser(senderId, pageConfig.pageId);

    const flowElement = this.getFlowElement(user.lastFlowId);

    let userResponse =
      this.communicatorService.getLastMessage(incomingMessages);
    let nextFlowId = null;

    await this.storageService.addFlowMessage({
      userId: senderId,
      pageId: pageConfig.pageId,
      content: userResponse,
      type: FlowMessageType.RECEIVED,
      isStory: isStoryFlow(flowElement.flowId),
    });

    for (const flowMessage of flowElement.flowMessages) {
      if (flowMessage.type === MessageType.QUICK_REPLIES) {
        const quickReplyMessage =
          this.communicatorService.getLastQuickReplyMessage(incomingMessages);

        userResponse = quickReplyMessage ?? userResponse;
      }

      if (flowMessage.customHandler) {
        await this.handleCustomHandler(
          user,
          flowMessage.customHandler,
          userResponse,
          pageConfig,
        );
      }

      if (
        flowMessage.type === MessageType.QUICK_REPLIES &&
        !flowMessage.allowCustomResponse
      ) {
        const parsedUserResponse = userResponse;
        const isValidOption = await this.validateQuickReply(
          [flowMessage],
          parsedUserResponse,
          user,
        );

        if (!isValidOption) {
          nextFlowId = flowMessage.fallbackFlow;
        } else {
          nextFlowId = await this.getFlowByQuickReply(
            user,
            flowElement,
            userResponse,
          );
        }
      } else {
        nextFlowId = flowElement.nextFlowId;
      }
    }

    if (nextFlowId === Flow.SHARE_ADDITIONAL_INFO) {
      const userDetails = await this.clientProxyService.findUserDetails(
        user.senderId,
      );

      user = await this.storageService.setNewUserProfile(
        senderId,
        pageConfig.pageId,
        userDetails,
      );
    }

    if (
      nextFlowId === Flow.REUSE_DETAILS &&
      user.user.firstName === undefined
    ) {
      nextFlowId = Flow.PERSONAL_DETAILS;
    }

    let nextFlowElement = this.getFlowElement(nextFlowId);

    if (!nextFlowElement) {
      nextFlowElement = this.flow[0];
    }

    await this.storageService.setLastFlowId(
      senderId,
      user.pageId,
      nextFlowElement.flowId,
    );

    return await this.generateMessages(
      nextFlowElement,
      senderId,
      pageConfig.pageId,
      pageConfig,
    );
  }

  async getFlowByQuickReply(
    profile: UserRecordInterface,
    flowElement: FlowRecordInterface,
    message: string,
  ): Promise<string> {
    if (typeof flowElement.nextFlowId === 'string') {
      return flowElement.nextFlowId;
    }

    let preparedKey: string;
    let preparedMessage: string;

    for (const [key, value] of Object.entries(flowElement.nextFlowId)) {
      preparedKey = await this.prepareQuickReplyMessage(profile, key);
      preparedMessage = await this.prepareQuickReplyMessage(profile, message);

      if (preparedKey.includes(preparedMessage)) {
        return value;
      }
    }
  }

  isLastFlowMessage(messages: MessageInterface[]): boolean {
    const commonPart = messages
      .map((item) => item.flowId)
      .filter((value) => [Flow.KEEP_ANONYMOUS, Flow.THANKS].includes(value));

    return commonPart.length > 1;
  }

  async storyShouldBeSaved(
    senderId: string,
    pageId: string,
    messages: MessageInterface[],
  ): Promise<boolean> {
    const user = await this.storageService.getUser(senderId, pageId);

    return this.isLastFlowMessage(messages) || user?.lastFlowId === Flow.THANKS;
  }

  userWithoutPersonalData(user: User): boolean {
    return !user.age && !user.gender && !user.gender && !user.disability;
  }

  getFlowElement(flowId: string): FlowRecordInterface {
    return this.flow.find((flowRecord) => flowRecord.flowId === flowId);
  }

  async getQuickReplies(flowMessages: FlowMessageInterface[], lang: string) {
    return Promise.all(
      flowMessages.reverse()[0].options.map((option) =>
        Number.isInteger(parseInt(option.answerId))
          ? option.answerId
          : this.i18n.translate(`main.${option.translationId}`, {
              lang,
            }),
      ),
    ).then((result) => result.map((value) => value.toUpperCase().trim()));
  }

  async prepareQuickReplyMessage(
    profile: UserRecordInterface,
    message: string,
  ): Promise<string> {
    if (!message) {
      return message;
    }

    const translatedMessage = await this.i18n.translate(
      `main.${message.toUpperCase()}`,
      {
        lang: profile.lang,
      },
    );

    return (!translatedMessage.includes('main.') ? translatedMessage : message)
      .toUpperCase()
      .trim();
  }

  async isValidQuickReply(
    user: UserRecordInterface,
    replies: string[],
    response: string,
  ): Promise<boolean> {
    response = await this.prepareQuickReplyMessage(user, response);

    return !!replies.find((reply) => reply.includes(response));
  }

  async handleCustomHandler(
    profile: UserRecordInterface,
    handlerName: string,
    userResponse: string,
    pageConfig: CommunicatorConfig,
  ): Promise<void> {
    if (!userResponse) {
      return;
    }

    const payload = await this.storageService.findQuickReplyKey(userResponse);

    if (payload) {
      userResponse = payload;
    }

    switch (handlerName) {
      case 'keepAnonymous': {
        const quickReplies = await this.getQuickReplies(
          dontReuseDetails.flowMessages,
          profile.lang,
        );

        userResponse = await this.prepareQuickReplyMessage(
          profile,
          userResponse,
        );

        if (quickReplies[1].includes(userResponse)) {
          await this.storageService.anonimizeUser(
            profile.senderId,
            profile.pageId,
          );
          await this.storageService.setAnonymous(
            profile.senderId,
            profile.pageId,
          );
        }
        break;
      }

      case 'userAge': {
        await this.storageService.setAge(
          profile.senderId,
          profile.pageId,
          userResponse,
        );
        break;
      }

      case 'userDisability': {
        await this.storageService.setDisability(
          profile.senderId,
          profile.pageId,
          userResponse,
        );
        break;
      }

      case 'userGender': {
        await this.storageService.setGender(
          profile.senderId,
          profile.pageId,
          userResponse,
        );
        break;
      }

      case 'userName': {
        await this.storageService.setUserFirstName(
          profile.senderId,
          profile.pageId,
          userResponse,
        );
        break;
      }

      case 'changeLang': {
        await this.storageService.setUserLang(
          profile.senderId,
          profile.pageId,
          this.configService.get('application.supportedQuickReplies')
            ? userResponse
            : pageConfig.supportedLanguages[+userResponse - 1]?.lang ??
                profile.lang,
          pageConfig,
        );
        break;
      }

      case 'shareStory': {
        await this.storageService.setUserStory(
          profile.senderId,
          profile.pageId,
          userResponse,
        );
        break;
      }

      case 'shareAdditionalInfo': {
        await this.storageService.setUserAdditionalInfo(
          profile.senderId,
          profile.pageId,
          userResponse,
        );
        break;
      }
    }
  }

  async setShareUserInfoAndSaveStory(data: {
    profile?: UserRecordInterface;
    senderId?: string;
    pageId?: string;
  }): Promise<boolean> {
    if (!data.profile) {
      data.profile = await this.storageService.getUser(
        data.senderId,
        data.pageId,
      );
    }

    data.profile = await this.storageService.setShareUserInfo(data.profile);

    return this.clientProxyService.sendStory(data.profile);
  }

  async repeatLastMessege(
    senderId: string,
    pageId: string,
    pageConfig: CommunicatorConfig,
  ): Promise<Array<MessageInterface>> {
    const user = await this.storageService.getUser(senderId, pageId);

    const flowIndex = this.flow.findIndex(
      (flow) => flow.flowId === user.lastFlowId,
    );

    const flowRecord = this.flow[flowIndex];

    return await this.generateMessages(
      flowRecord,
      senderId,
      pageId,
      pageConfig,
    );
  }

  async generateMessages(
    flowRecord: FlowRecordInterface,
    senderId: string,
    pageId: string,
    pageConfig: CommunicatorConfig,
  ): Promise<Array<MessageInterface>> {
    await this.storageService.saveQuickReplyKeys(flowRecord);

    const user = await this.storageService.getUser(senderId, pageId);
    const userLang = pageConfig.supportedLanguages.find(
      (language) => language.lang === user.lang,
    );

    let langCode = userLang?.lang;

    if (!langCode) {
      langCode = pageConfig.defaultLanguage;
    }

    const messages: Array<MessageInterface> = [];

    for (const flowMessage of flowRecord.flowMessages.filter(
      (item) =>
        !item.excludedProviders ||
        !item.excludedProviders.includes(
          this.configService.get('application.providerName'),
        ),
    )) {
      let text = '';

      if (flowMessage.translationId) {
        text = await this.i18n.translate(`main.${flowMessage.translationId}`, {
          lang: langCode,
        });
      }

      if (flowMessage.translationHandler) {
        text = this.handleTranslationHandler(
          flowMessage.translationHandler,
          text,
          user,
        );
      }

      if (
        flowMessage.options &&
        flowMessage.optionsAsTextMessage &&
        !this.configService.get('application.supportedQuickReplies')
      ) {
        for (const [index, option] of flowMessage.options.entries()) {
          const translatedOption = await this.i18n.translate(
            `main.${option.translationId}_NO_QUICK_REPLY`,
            {
              lang: user.lang,
              args: { id: 1, index: (index + 1).toString() },
            },
          );
          text += `\n${translatedOption}`;
        }
      }

      const generatedMessage = {
        recipient: {
          id: user.senderId,
        },
        flowId: flowRecord.flowId,
        message: {
          text,
          quick_replies: [],
          attachment: {
            payload: {
              is_reusable: false,
              url: '',
            },
            type: 'image',
          },
        },
      };

      switch (flowMessage.type) {
        case MessageType.QUICK_REPLIES: {
          delete generatedMessage.message.attachment;

          let parsedOptions = [];

          if (this.configService.get('application.supportedQuickReplies')) {
            parsedOptions = flowMessage.options.map(async (option) => ({
              content_type: 'text',
              title: await this.i18n.translate(`main.${option.translationId}`, {
                lang: langCode,
              }),
              payload: option.answerId,
            }));
          } else {
            for (const [index, option] of flowMessage.options.entries()) {
              const parsedTitle = await this.i18n.translate(
                `main.${option.translationId}`,
                {
                  lang: user.lang,
                  args: { id: 1, index: (index + 1).toString() },
                },
              );

              parsedOptions.push({
                content_type: 'text',
                payload: option.answerId,
                title: parsedTitle,
              });
            }
          }

          generatedMessage.message.quick_replies =
            await Promise.all(parsedOptions);
          break;
        }

        case MessageType.MESSAGE: {
          delete generatedMessage.message.quick_replies;

          if (flowMessage.attachment) {
            delete generatedMessage.message.text;

            generatedMessage.message.attachment.payload.url =
              userLang.thanksImageUrl;
          } else {
            delete generatedMessage.message.attachment;
          }

          break;
        }
      }

      messages.push({
        recipient: {
          id: user.senderId,
        },
        sender_action: 'typing_on',
      });
      messages.push(generatedMessage);
    }

    return messages;
  }

  private handleTranslationHandler(
    translationHandler: string,
    content: string,
    userRecord: UserRecordInterface,
  ): string {
    switch (translationHandler) {
      case 'userInfo': {
        return content
          .replace('{{disability}}', userRecord.user?.disability ?? '***')
          .replace('{{age}}', userRecord.user?.age ?? '***')
          .replace('{{lastName}}', userRecord.user?.lastName ?? '***')
          .replace('{{firstName}}', userRecord.user?.firstName ?? '***')
          .replace('{{gender}}', userRecord.user?.gender ?? '***');
      }
    }
  }

  private async validateQuickReply(
    flowMessages: FlowMessageInterface[],
    answer: string,
    profile: UserRecordInterface,
  ): Promise<boolean> {
    if (!answer) {
      return false;
    }

    const options = await this.getQuickReplies(flowMessages, profile.lang);

    return this.isValidQuickReply(profile, options, answer);
  }
}
