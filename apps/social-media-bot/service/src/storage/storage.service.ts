import { Inject, Injectable, Logger } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Job, JobOptions, Queue } from 'bull';
import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { FlowMessageType } from '../common/enum/flow-message-type.enum';
import UserInterface from '../common/interface/user';
import {
  UserFlowMessageInterface,
  UserModeratorFlowInterface,
  UserRecordInterface,
} from '../common/interface/user-record';
import { FlowRecordInterface } from '../common/interface/flow-record';
import { ApplicationConfig } from '../config/default';
import { getFacebokPageConfig } from '../common/helper/get-facebok-page-config';
import { QUEUE } from '../common/enum/queue.enum';
import { I18nService } from 'nestjs-i18n';
import ModeratorFlowMessageInterface from '../common/interface/moderator-flow-message';
import { Flow } from '../common/enum/flow.enum';
import { CommunicatorConfig } from '../common/type/communicator-config.type';
import WhatsappStatusCallback from '../common/interface/whatsapp-status-callback';

@Injectable()
export class StorageService {
  private applicationConfig: ApplicationConfig;
  private readonly logger: Logger = new Logger(StorageService.name);

  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private readonly i18n: I18nService,
    private readonly configService: ConfigService,
    @Inject(QUEUE.SEND_CONVERSATION_TO_API)
    private sendConversationToApiQueue: Queue,
  ) {
    this.applicationConfig =
      configService.get<ApplicationConfig>('application');
  }

  async userExists(
    senderId: string,
    pageId: string,
  ): Promise<UserRecordInterface> {
    return await this.cacheManager.get(this.generateKey(senderId, pageId));
  }

  async clearTheDataForParticularSender(profile: UserRecordInterface) {
    if (profile) {
      await this.cacheManager.del(
        this.generateKey(profile.senderId, profile.pageId),
      );
    }
  }

  async anonimizeUser(
    senderId: string,
    pageId: string,
  ): Promise<UserRecordInterface> {
    const profile = await this.fetchUser(senderId, pageId);
    const oldFlow = profile.flowResponses;
    const newFlow: UserFlowMessageInterface[] = oldFlow.map(
      (response: UserFlowMessageInterface) => {
        if (response.type !== FlowMessageType.SEND) {
          return response;
        }

        return {
          ...response,
          content: response.content
            .replace(`: ${profile.user.firstName}`, ': ***')
            .replace(`: ${profile.user.age}`, ': ***')
            .replace(`: ${profile.user.disability}`, ': ***')
            .replace(`: ${profile.user.gender}`, ': ***'),
        };
      },
    );

    const newUserRecord: UserRecordInterface = {
      ...profile,
      user: { ...profile.user, firstName: null, lastName: null, gender: null },
      flowResponses: newFlow,
    };

    await this.saveUser(newUserRecord);

    return newUserRecord;
  }

  async setUserModeratorFlow(
    data: ModeratorFlowMessageInterface,
  ): Promise<void> {
    const fbConfig = await getFacebokPageConfig(data.pageId);

    await this.cacheManager.set(
      this.userModeratorKey(data.senderId, data.pageId),
      {
        messengerConversationId: data.messengerConversationId,
        language: data.language || fbConfig.defaultLanguage,
      },

      this.applicationConfig.ttl.moderatorFlow,
    );
  }

  async addQueueJob(
    data: { senderId: string; pageId: string },
    options?: JobOptions,
  ): Promise<Job<any>> {
    const delay = this.applicationConfig.ttl.userFlow * 1000 - 15000;

    const job = await this.sendConversationToApiQueue.add(
      'send_conversation',
      data,
      options ?? { delay },
    );

    this.logger.log(`Job ${job.id} created, delay: ${delay / 1000} seconds.`);

    return job;
  }

  async scheduleMessageDeletion(
    data: { messageSid: string },
    options?: JobOptions,
  ): Promise<void> {
    await this.sendConversationToApiQueue.add(
      'delete_message',
      data,
      options ?? {
        attempts: 5,
        backoff: {
          type: 'exponential',
          delay: 2000,
        },
        removeOnComplete: true,
        removeOnFail: true,
      },
    );
  }
  
  async getUserModeratorFlow(
    senderId: string,
    pageId: string,
  ): Promise<UserModeratorFlowInterface> {
    return await this.cacheManager.get(this.userModeratorKey(senderId, pageId));
  }

  async clearUserModeratorFlow(
    senderId: string,
    pageId: string,
  ): Promise<void> {
    await this.cacheManager.del(this.userModeratorKey(senderId, pageId));
  }

  private userModeratorKey(senderId: string, pageId: string): string {
    return `user:moderator-flow:${senderId}:${pageId}`;
  }

  async createUser(
    senderId: string,
    pageConfig: CommunicatorConfig,
    profile: Partial<UserInterface>,
  ): Promise<UserRecordInterface> {
    await this.cacheManager.set(this.generateKey(senderId, pageConfig.pageId), {
      senderId,
      storyUuid: uuid(),
      lastFlowId: null,
      lang: profile.locale ?? pageConfig.defaultLanguage,
      flowResponses: [],
      story: null,
      additionalInfo: null,
      shareUserInfo: true,
      pageId: pageConfig.pageId,
      user: {
        firstName: profile.firstName,
        lastName: profile?.lastName,
        gender: profile?.gender,
        locale: profile?.locale,
      },
    } as UserRecordInterface);

    return this.getUser(senderId, pageConfig.pageId);
  }

  async setAnonymous(
    senderId: string,
    pageId: string,
  ): Promise<UserRecordInterface> {
    const userRecord = await this.fetchUser(senderId, pageId);
    const newUser = {
      ...userRecord,
      user: {
        ...userRecord.user,
        firstName: null,
        lastName: null,
        age: null,
        gender: null,
        disability: null,
      },
    };

    await this.saveUser(newUser);

    return newUser;
  }

  async setNewUserProfile(
    senderId: string,
    pageId: string,
    profile: UserInterface,
  ): Promise<UserRecordInterface> {
    const userRecord = await this.fetchUser(senderId, pageId);
    const newUser = {
      ...userRecord,
      user: {
        ...userRecord.user,
        firstName:
          profile?.firstName !== undefined ? profile?.firstName : undefined,
        lastName:
          profile?.lastName !== undefined ? profile?.lastName : undefined,
        age: profile?.age !== undefined ? profile?.age : undefined,
        gender: profile?.gender !== undefined ? profile?.gender : undefined,
        disability:
          profile?.disability !== undefined ? profile?.disability : undefined,
      },
    };

    await this.saveUser(newUser);

    return newUser;
  }

  async getUser(
    senderId: string,
    pageId: string,
  ): Promise<UserRecordInterface> {
    return await this.fetchUser(senderId, pageId);
  }

  async setLastFlowId(
    senderId: string,
    pageId: string,
    flowId: Flow,
  ): Promise<void> {
    const profile = await this.fetchUser(senderId, pageId);

    profile.lastFlowId = flowId;

    await this.saveUser(profile);
  }

  async addFlowMessage(payload: {
    userId: string;
    pageId: string;
    content: string;
    type: FlowMessageType;
    isStory?: boolean;
  }): Promise<void> {
    if (!payload.content) return;

    const profile: UserRecordInterface = await this.fetchUser(
      payload.userId,
      payload.pageId,
    );
    const ifSensitiveStoryMessage = await this.i18n.translate(
      'main.IF_SENSITIVE_STORY',
      {
        lang: profile?.lang,
      },
    );

    if (!profile?.flowResponses) {
      return;
    }

    const flowWithSensitiveStoryMessage =
      profile?.flowResponses.findIndex(
        (message: UserFlowMessageInterface) =>
          message.content === ifSensitiveStoryMessage,
      ) !== -1;

    const receivedMessage =
      profile?.flowResponses.findIndex(
        (message: UserFlowMessageInterface) =>
          message.type === FlowMessageType.RECEIVED,
      ) !== -1;

    let job: Job<any>;

    if (flowWithSensitiveStoryMessage && receivedMessage) {
      for (const response of profile.flowResponses) {
        const job = await this.sendConversationToApiQueue.getJob(
          response.queueJobId,
        );

        if (job) {
          await job.remove();
        }
      }

      job = await this.addQueueJob({
        senderId: payload.userId,
        pageId: payload.pageId,
      });
    }

    profile.flowResponses.push({
      content: payload.content,
      type: payload.type,
      createdAt: new Date(),
      isStory: !!payload.isStory,
      queueJobId: job ? job.id.toString() : null,
    });

    await this.saveUser(profile);
  }

  async clearJobs(userId: string, pageId: string): Promise<void> {
    const profile = await this.fetchUser(userId, pageId);

    if (!profile.flowResponses) {
      return;
    }

    for (const response of profile.flowResponses) {
      const job = await this.sendConversationToApiQueue.getJob(
        response.queueJobId,
      );
      if (job) {
        await job
          .remove()
          .catch((error) =>
            this.logger.log(`Remove job ${job.id}`, JSON.stringify(error)),
          );
      }
    }
  }

  async findQuickReplyKey(value: string): Promise<string> {
    return this.cacheManager.get(`quickReply.${value}`);
  }

  async saveQuickReplyKeys(flowRecord: FlowRecordInterface): Promise<void> {
    if (!flowRecord?.flowMessages) {
      return;
    }

    const supportedLanguages = this.i18n.getSupportedLanguages();

    for (const message of flowRecord?.flowMessages) {
      if (message.options) {
        for (const option of message.options) {
          const translations = await Promise.all(
            supportedLanguages.map((language) =>
              this.i18n.translate(`main.${option.translationId}`, {
                lang: language,
              }),
            ),
          );

          await Promise.all(
            translations.map((translation) =>
              this.cacheManager.set(
                `quickReply.${translation}`,
                option.answerId,
              ),
            ),
          );
        }
      }
    }
  }

  async setUserLang(
    senderId: string,
    pageId: string,
    newLang: string,
    pageConfig: CommunicatorConfig,
  ): Promise<void> {
    const availableLangs = pageConfig.supportedLanguages;
    const profile = await this.fetchUser(senderId, pageId);

    if (availableLangs.find((item) => item.lang === newLang)) {
      profile.lang = newLang;

      await this.saveUser(profile);
    }
  }

  async setUserFirstName(
    senderId: string,
    pageId: string,
    firstName: string,
  ): Promise<UserRecordInterface> {
    const profile = await this.fetchUser(senderId, pageId);

    profile.user.firstName = firstName;

    await this.saveUser(profile);

    return profile;
  }

  async setGender(
    senderId: string,
    pageId: string,
    gender: string,
  ): Promise<UserRecordInterface> {
    const profile = await this.fetchUser(senderId, pageId);

    profile.user.gender = gender;

    await this.saveUser(profile);

    return profile;
  }

  async setAge(
    senderId: string,
    pageId: string,
    age: string,
  ): Promise<UserRecordInterface> {
    const profile = await this.fetchUser(senderId, pageId);

    profile.user.age = age;

    await this.saveUser(profile);

    return profile;
  }

  async setDisability(
    senderId: string,
    pageId: string,
    disability: string,
  ): Promise<UserRecordInterface> {
    const profile = await this.fetchUser(senderId, pageId);

    profile.user.disability = disability;

    await this.saveUser(profile);

    return profile;
  }

  async setLocation(
    senderId: string,
    pageId: string,
    location: string,
  ): Promise<UserRecordInterface> {
    const profile = await this.fetchUser(senderId, pageId);

    if (profile.user) {
      profile.user.locale = location;
    }

    await this.saveUser(profile);

    return profile;
  }

  async setUserStory(
    senderId: string,
    pageId: string,
    story: string,
  ): Promise<void> {
    const profile = await this.fetchUser(senderId, pageId);

    profile.story = story;
    profile.flowStartedAt = new Date();

    await this.saveUser(profile);
  }

  async setUserAdditionalInfo(
    senderId: string,
    pageId: string,
    additionalInfo: string,
  ): Promise<void> {
    const profile = await this.fetchUser(senderId, pageId);

    profile.additionalInfo = additionalInfo;

    await this.saveUser(profile);
  }

  async setShareUserInfo(
    profile: UserRecordInterface,
  ): Promise<UserRecordInterface> {
    profile.shareUserInfo = !!(
      profile.user?.age ||
      profile.user?.gender ||
      profile.user?.firstName ||
      profile.user?.disability
    );

    await this.saveUser(profile);

    return profile;
  }

  async purgeCurrentMessageFlowData(
    senderId: string,
    pageId: string,
  ): Promise<void> {
    const profile = await this.fetchUser(senderId, pageId);

    if (!profile) return;

    profile.storyUuid = uuid();
    profile.lastFlowId = null;
    profile.flowResponses = [];
    profile.story = null;
    profile.additionalInfo = null;
    profile.storyType = null;
    profile.shareUserInfo = true;
    profile.flowStartedAt = null;

    await this.saveUser(profile);
  }

  private async fetchUser(
    senderId: string,
    pageId: string,
  ): Promise<UserRecordInterface> {
    return await this.cacheManager.get(this.generateKey(senderId, pageId));
  }

  private async saveUser(userRecord: UserRecordInterface): Promise<void> {
    await this.cacheManager.set(
      this.generateKey(userRecord.senderId, userRecord.pageId),
      userRecord,
      this.applicationConfig.ttl.userFlow,
    );
  }

  async setHoldOnSendMessage(
    senderId: string,
    pageId: string,
    holdOn: boolean,
  ): Promise<void> {
    const profile = await this.fetchUser(senderId, pageId);

    if (!profile) return;

    profile.holdOnSendMessage = holdOn;
    await this.saveUser(profile);
  }

  async setMessageDeliveryResult(data: WhatsappStatusCallback): Promise<void> {
    await this.cacheManager.set(
      data.smsSid,
      data,
      this.applicationConfig.ttl.userFlow,
    );
  }

  async getMessageDeliveryResult(sid: string): Promise<WhatsappStatusCallback> {
    return await this.cacheManager.get(sid);
  }

  private generateKey(
    senderId: string,
    pageId: string,
    prefix = 'user',
  ): string {
    return `${prefix}:${senderId}-pageId:${pageId}`;
  }
  
  async setUserConsent(senderId: string, pageId: string, consent: string): Promise<void> {
    const user = await this.fetchUser(senderId, pageId);
    user.user.consent = consent;
    await this.saveUser(user);
  }
  
  async setShareUserInfoManual(
    senderId: string,
    pageId: string,
    value: boolean,
  ): Promise<void> {
    const profile = await this.fetchUser(senderId, pageId);
    profile.shareUserInfo = value;
    await this.saveUser(profile);
  }
}
