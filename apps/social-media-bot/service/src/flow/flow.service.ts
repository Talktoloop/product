import { Injectable, Logger } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { StorageService } from '../storage/storage.service';
import User from '../common/interface/user';
import { UserRecordInterface } from '../common/interface/user-record';
import { EMPTY_FLOW, FlowMessageInterface, FlowRecordInterface } from '../common/interface/flow-record';
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
import { RedisService } from '../communicator/service/redis.service';
import { getLocalizedTemplate, TwilioLocalizedTemplates } from '../common/constant/twilio-templates';
import { TwilioTemplateKey } from '../common/enum/twilio-template-key.enum';

@Injectable()
export class FlowService {
  private readonly logger: Logger = new Logger(FlowService.name);

  private flow: Array<FlowRecordInterface> = [];

  constructor(
    private readonly storageService: StorageService,
    private readonly i18n: I18nService,
    private readonly clientProxyService: ClientProxyService,
    private readonly communicatorService: CommunicatorService,
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
  ) {}

  async handleMessage(
    senderId: string,
    profile: Partial<User>,
    receivedMessages: Messages,
    pageConfig: CommunicatorConfig,
    repeatLastMessage = false,
  ): Promise<Array<MessageInterface>> {
    let user = await this.storageService.getUser(senderId, pageConfig.pageId);

    if (!user) {
      user = await this.storageService.createUser(
        senderId,
        pageConfig,
        profile,
      );
    }

    if (this.flow.length === 0) {
      this.flow = await createFlowArray(pageConfig, user?.lang);
    }

    const moderatorFlow = await this.handleModeratorFlow(
      senderId,
      pageConfig.pageId,
      pageConfig.defaultLanguage,
      receivedMessages,
    );

    if (moderatorFlow) {
      await this.redisService.resetModeratorIntroFlag(
        senderId,
        pageConfig.pageId,
      );
      return [];
    }

    if (user && user.shareUserInfo) {
      user = await this.storageService.setLocation(
        senderId,
        pageConfig.pageId,
        profile.locale,
      );
    }

    let messagesToSend;

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
      pageConfig.defaultLanguage,
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

    const languageCode = userModeratorFlow.language || defaultLang;
    const contentSid = getLocalizedTemplate(
      languageCode as keyof typeof TwilioLocalizedTemplates,
      TwilioTemplateKey.END_OF_SERVICE
    );

    const thanksResponse = this.i18n.translate('main.END_OF_SERVICE_MODERATOR_FLOW', {
      lang: languageCode,
    }).trim();

    await this.communicatorService.sendMessage(
      {
        recipient: {
          id: senderId,
        },
        message: {
          text: thanksResponse,
          contentSid: contentSid,
          contentVariables: { title: thanksResponse },
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
    const user = await this.storageService.getUser(senderId, pageConfig.pageId);
    const flowElement = this.getFlowElement(user.lastFlowId);

    if (!flowElement) {
      this.logger.debug(
        `--- Flow element not found for flowId: ${user.lastFlowId} ---`,
      );
      return [];
    }

    let userResponse = this.communicatorService.getLastMessage(incomingMessages);
    let nextFlowId = null;
    let messages: Array<MessageInterface> = [];

    await this.storageService.addFlowMessage({
      userId: senderId,
      pageId: pageConfig.pageId,
      content: userResponse,
      type: FlowMessageType.RECEIVED,
      isStory: isStoryFlow(flowElement.flowId),
    });

    for (const flowMessage of flowElement.flowMessages) {
      // this.logger.debug('--- flowMessage --- ', JSON.stringify(flowMessage, null, 2));

      if (flowMessage.customHandler) {
        const result = await this.handleCustomHandler(
          user,
          flowMessage.customHandler,
          userResponse,
          pageConfig,
        );

        if (result?.nextFlowId) {
          nextFlowId = result.nextFlowId;
          break;
        }
      }

      if (flowMessage.contentSid) {
        if (!userResponse || !String(userResponse).trim()) {
          nextFlowId = null;
          break;
        }
        const isValidOption = await this.validateQuickReply(
          [flowMessage],
          userResponse,
          user,
        );

        if (!isValidOption) {
          nextFlowId = flowMessage.fallbackFlow;
        } else {
          userResponse = this.normalizeTemplateButtonPayload(
            userResponse,
            flowElement,
          );
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

    if (nextFlowId) {
      let nextFlowElement = this.getFlowElement(nextFlowId);

      if (!nextFlowElement) {
        nextFlowElement = EMPTY_FLOW;
      }

      messages = await this.generateMessages(
        nextFlowElement,
        senderId,
        pageConfig.pageId,
        pageConfig,
      );

      await this.storageService.setLastFlowId(
        senderId,
        pageConfig.pageId,
        nextFlowId,
      );

      if (nextFlowId === Flow.SHARE_ADDITIONAL_INFO) {
        const userDetails = await this.clientProxyService.findUserDetails(
          user.senderId,
        );

        await this.storageService.setNewUserProfile(
          senderId,
          pageConfig.pageId,
          userDetails,
        );
      }
    }

    return messages;
  }

  async getFlowByQuickReply(
    profile: UserRecordInterface,
    flowElement: FlowRecordInterface,
    message: string,
  ): Promise<string | null> {
    if (typeof flowElement.nextFlowId === 'string') {
      return flowElement.nextFlowId;
    }

    if (
      !flowElement.nextFlowId ||
      typeof flowElement.nextFlowId !== 'object'
    ) {
      return null;
    }

    if (!message || !String(message).trim()) {
      return null;
    }

    const preparedMessage = await this.prepareQuickReplyMessage(profile, message);

    for (const [key, value] of Object.entries(flowElement.nextFlowId)) {
      const preparedKey = await this.prepareQuickReplyMessage(profile, key);

      if (preparedKey.includes(preparedMessage)) {
        return value as string;
      }
    }
    return null;
  }

  getFlowElement(flowId: string): FlowRecordInterface {
    return this.flow.find((flowRecord) => flowRecord?.flowId === flowId);
  }

  private normalizeTemplateButtonPayload(
    userResponse: string,
    flowElement: FlowRecordInterface,
  ): string {
    const next = flowElement.nextFlowId;
    const mapNumeric =
      (typeof next === 'object' && next !== null && 'YES' in next && 'NO' in next) ||
      !this.configService.get('application.supportedQuickReplies');
    if (!mapNumeric) return userResponse;
    return userResponse === '1' ? 'YES' : userResponse === '2' ? 'NO' : userResponse;
  }

  async getQuickReplies(
    flowMessages: FlowMessageInterface[],
    lang: string
  ): Promise<string[] | undefined> {
    const lastMessage = this.getLastFlowMessage(flowMessages);

    if (lastMessage?.contentSid) return;
    if (!lastMessage?.options || !Array.isArray(lastMessage.options)) return;

    return Promise.all(
      lastMessage.options.map((option) =>
        Number.isInteger(parseInt(option.answerId))
          ? option.answerId
          : this.i18n.translate(`main.${option.translationId}`, { lang }),
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
  ): Promise<{ nextFlowId: Flow }> {
    if (!userResponse) {
      return;
    }

    const payload = await this.storageService.findQuickReplyKey(userResponse);
    const supportedQuickReplies = this.configService.get('application.supportedQuickReplies');

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
        const normalizedResponse = userResponse?.toLowerCase().replace(/_/g, ' ');
        if (normalizedResponse === 'more options') {
          return { nextFlowId: Flow.MORE_OPTIONS };
        }

        const targetLang = pageConfig.supportedLanguages.find((lang) =>
          lang.lang === userResponse || this.i18n.translate(`main.${lang.lang.toUpperCase()}`, { lang: 'en' })?.toLowerCase() === normalizedResponse,
        )?.lang;

        const updatedLang = targetLang ?? profile.lang;

        await this.storageService.setUserLang(
          profile.senderId,
          profile.pageId,
          updatedLang,
          pageConfig,
        );

        this.flow = await createFlowArray(pageConfig, updatedLang);
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

      case 'publishConsent':
      case 'publishConsentGiven': {
        const consentValue =
          handlerName === 'publishConsent'
            ? supportedQuickReplies
              ? userResponse
              : userResponse === '1'
                ? 'YES'
                : userResponse === '2'
                  ? 'NO'
                  : userResponse
            : handlerName === 'publishConsentGiven'
              ? 'YES'
              : 'NO';

        await this.storageService.setUserConsent(
          profile.senderId,
          profile.pageId,
          consentValue,
        );
        break;
      }

      case 'publishConsentDenied': {
        const restartCommand = supportedQuickReplies
          ? 'GET_STARTED' : '1';

        if (userResponse === restartCommand) {
          await this.storageService.setLastFlowId(
            profile.senderId,
            profile.pageId,
            null,
          );
        }

        await this.storageService.setUserConsent(
          profile.senderId,
          profile.pageId,
          'NO',
        );
        break;
      }

      case 'contactConsent': {
        const value = userResponse === '1';

        await this.storageService.setShareUserInfoManual(
          profile.senderId,
          profile.pageId,
          value,
        );

        return {
          nextFlowId: value ? Flow.CONTACT_CONSENT_APPROVED : Flow.CONTACT_CONSENT_DENIED,
        };  
      }

    }
  }

  async setShareUserInfoAndSaveStory(
    supportedLanguages: Array<string>,
    data: {
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

    if (!supportedLanguages.includes('so')) {
      data.profile = await this.storageService.setShareUserInfo(data.profile);
    }

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
    const langCode = user?.lang ?? pageConfig.defaultLanguage;

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
        }).trim();
      }

      const generatedMessage: MessageInterface = {
        recipient: {
          id: user.senderId,
        },
        flowId: flowRecord.flowId,
        message: {
          text,
          quick_replies: [],
        },
      };

      if (flowMessage.contentSid) {
        const contentVariables = {};
        if (flowMessage.translationId && flowMessage.contentVariableName) {
          contentVariables[flowMessage.contentVariableName] = await this.i18n.translate(`main.${flowMessage.translationId}`, {
            lang: langCode,
          }).trim();
        }
        generatedMessage.message.contentVariables = contentVariables;
        generatedMessage.message.contentSid = flowMessage.contentSid;
        delete generatedMessage.message.text;
        delete generatedMessage.message.quick_replies;
      }

      if (flowMessage.finishFlow) {
        generatedMessage.finishFlow = true;
      }

      switch (flowMessage.type) {
        case MessageType.MESSAGE: {
          delete generatedMessage.message.attachment;
          delete generatedMessage.message.quick_replies;
          break;
        }
      }

      if (
        (!generatedMessage.message.text || generatedMessage.message.text.trim() === '') &&
        !generatedMessage.message.contentSid
      ) {
        continue;
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

  private async validateQuickReply(
    flowMessages: FlowMessageInterface[],
    answer: string,
    profile: UserRecordInterface,
  ): Promise<boolean> {
    if (!answer) return false;

    const lastMessage = this.getLastFlowMessage(flowMessages);

    if (lastMessage?.contentSid) return true;

    const options = await this.getQuickReplies(flowMessages, profile.lang);

    return this.isValidQuickReply(profile, options, answer);
  }

  private getLastFlowMessage(flowMessages: FlowMessageInterface[]): FlowMessageInterface | undefined {
    return [...flowMessages].reverse()[0];
  }
}
