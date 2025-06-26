import {
  Inject,
  Injectable,
  BadRequestException,
  forwardRef,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  CustomError,
  DI_CONSTANTS as SHARED_DI,
  NO_STORY,
  CONVERSATION_NOT_FOUND,
} from '@ourloop/shared';
import { SendMessageDto } from '../../sms/request/dto/send-message.dto';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { prepareURL, upperCaseFirst } from '../../common/helpers';
import { SuccessRO } from '../../common/response/success.ro';
import { CountryRepository } from '../../country/repository/country.repository';
import { LanguageEntity } from '../../language/entity/language.entity';
import { LanguageRepository } from '../../language/language.repository';
import { StoryEntity } from '../../story/entity/story.entity';
import { StoryService } from '../../story/service/story.service';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { StoryStatus } from '../enum/story-status.enum';
import { MessengerMessageRepository } from '../repository/messenger-message.repository';
import { FlowResponseRequestDto } from '../request/dto/flow-response.dto';
import { MessengerFlowRequestDto } from '../request/dto/messenger-flow.dto';
import { timeout } from 'rxjs/operators';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { MessengerAvailabilityRO } from '../response/messenger-availability.ro';
import { RpcException } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { sendCommentNotificationToMessenger } from '../interface/send-comment-by-messenger-response.interface';
import { RejectContentDto } from '../../common/dto/reject-content.dto';
import { removeLastDot } from '../../common/helpers';
import { SendMessageRO } from '../response/send-message.ro';
import { StoryConversationService } from '../../story/service/story-conversation.service';
import { StoryRecipientEntity } from '../../story/entity/story-recipient.entity';
import { StoryRecipientService } from '../../story/service/story-recipient.service';
import { MessengerMessageEntity } from '../../messenger/entity/messenger-message.entity';

@Injectable()
export class MessengerService {
  constructor(
    private readonly languageEntityRepository: LanguageRepository,
    private readonly countryEntityRepository: CountryRepository,
    private readonly storyConversationService: StoryConversationService,
    private readonly storyRecipientService: StoryRecipientService,
    private readonly messengerMessageRepository: MessengerMessageRepository,
    @Inject(forwardRef(() => StoryService))
    private readonly storyService: StoryService,
    @Inject(SHARED_DI.CLIENT_PROXY)
    private readonly clientProxy: ClientProxy,
    @Inject(COMMON_DI.CONFIG)
    private readonly config: ConfigService,
  ) {}

  async testExternal(): Promise<boolean> {
    return lastValueFrom(
      this.clientProxy
        .send({ cmd: 'testFacebookInternal' }, {})
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    )
      .then((data) => !!data.success)
      .catch((error) => {
        console.log(`Could not send story, error: ${JSON.stringify(error)}`);
        return error;
      });
  }

  async saveMessengerFlow(
    data: MessengerFlowRequestDto,
    channel: CHANNEL_CONSTANTS,
  ): Promise<StoryConversationEntity> {
    const languageEntity = await this.fetchFlowLanguage(data.lang);

    let conversation = await this.storyConversationService.findByUUID(
      data.storyUuid,
    );

    if (conversation) {
      return conversation;
    }

    conversation = await this.storyConversationService.saveConversation({
      uuid: data.storyUuid,
      languageId: languageEntity.id,
      serviceNumber: data.pageId,
      additionalInfo: data.additionalInfo,
      startedAt: data.flowStartedAt,
    });

    for (const item of data.flowResponses) {
      await this.messengerMessageRepository.save({
        content: item.content,
        type: item.type,
        messageCreatedAt: item.createdAt,
        isStory: item.isStory,
        conversationId: conversation.id,
      });
    }

    const content = data.flowResponses.find((item) => item.isStory)?.content;

    const story = await this.storyService.addStory(conversation.languageId, {
      content,
      country: data.user.country,
      channel,
      isSensitive: false,
      messengerConversationId: conversation.id,
      authorNickname: this.getNickname(data),
      communicatorId: data.senderId,
      firstName: data.user?.firstName,
      lastName: data.user?.lastName,
      ageByUser: data.user?.age,
      genderByUser: data.user?.gender,
      difficultyByUser: data.user?.disability,
      userWantContact: data.shareUserInfo,
      conversationId: conversation.id,
    });

    conversation.storyId = story.id;

    await this.storyConversationService.setStoryId(conversation.id, story.id);

    return this.storyConversationService.findById(conversation.id);
  }

  private async fetchFlowLanguage(lang: string): Promise<LanguageEntity> {
    if (!lang) return;

    return await this.languageEntityRepository.findOne({
      where: {
        code: lang,
      },
    });
  }

  private getNickname(data: MessengerFlowRequestDto): string {
    if (data.shareUserInfo) {
      let nickname = data.user.firstName;
      if (data.user.lastName) nickname += ` ${data.user.lastName}`;

      return nickname;
    }

    return null;
  }

  async checkMessengerAvailability(
    storyId: string,
    commandName: string,
    channel: CHANNEL_CONSTANTS,
  ): Promise<MessengerAvailabilityRO> {
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'checkMessengerAvailability',
      ['conversation', 'recipient'],
    );

    if (story?.channel !== channel) {
      throw new BadRequestException(NO_STORY);
    }

    return lastValueFrom(
      this.clientProxy
        .send(
          { cmd: commandName },
          {
            senderId: story.recipient.communicatorId,
            storyId: story.id,
            pageId: story.conversation.serviceNumber,
          },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    ).catch((error) => {
      throw new CustomError(error.message, error.error);
    });
  }

  async sendMessengerChatMessage(
    dto: SendMessageDto,
    commandName: string,
    channel: CHANNEL_CONSTANTS,
  ): Promise<SendMessageRO> {
    const story = await this.storyService.checkThatStoryExist(
      { id: dto.storyId },
      'sendMessengerMessage',
      [
        'conversation',
        'conversation.language',
        'conversation.messengerMessages',
        'recipient',
      ],
    );

    if (story?.channel !== channel) {
      throw new BadRequestException(NO_STORY);
    }

    const response: Array<FlowResponseRequestDto> | { status: string } =
      await lastValueFrom(
        this.clientProxy
          .send(
            { cmd: commandName },
            {
              senderId: story.recipient.communicatorId,
              message: dto.content,
              introduction: dto?.introduction,
              storyId: story.id,
              story: story.conversation?.messengerMessages?.find(
                (message) => message.isStory,
              ).content,
              messengerConversationId: story.conversationId,
              language: story.conversation.language?.code,
              pageId: story.conversation.serviceNumber,
            },
          )
          .pipe(timeout(60000)),
      ).catch((error) => {
        if (error.error) {
          throw new CustomError(error?.message, error.error);
        }
      });

    if (Array.isArray(response)) {
      await Promise.all(
        response.map((item) =>
          this.messengerMessageRepository.save({
            content: item.content,
            type: item.type,
            messageCreatedAt: item.createdAt,
            isStory: item.isStory,
            conversationId: story.conversationId,
            userId: story.userId,
          }),
        ),
      );

      return { success: true };
    } else {
      return { success: false, status: response?.status };
    }
  }

  async saveMessengerResponse(
    data: {
      messages: FlowResponseRequestDto[];
      messengerConversationId: number;
    },
    channel: CHANNEL_CONSTANTS,
  ): Promise<SuccessRO> {
    const messengerConversation = await this.storyConversationService.findById(
      data.messengerConversationId,
      ['story'],
    );

    if (messengerConversation?.story?.channel !== channel) {
      throw new RpcException(CONVERSATION_NOT_FOUND);
    }

    await Promise.all(
      data.messages.map((message) =>
        this.messengerMessageRepository.save({
          content: message.content,
          type: message.type,
          messageCreatedAt: message.createdAt,
          conversationId: messengerConversation.id,
          isStory: message.isStory,
        }),
      ),
    );

    return {
      success: true,
    };
  }

  async findLastConversationByCommunicatorId(
    communicatorId: string,
  ): Promise<StoryRecipientEntity> {
    return this.storyRecipientService.findLastEntryByCommunicatorId(
      communicatorId,
    );
  }

  prepareNotificatonReasonText(data: RejectContentDto) {
    const reasonTexts = data.reasonTexts.join(', ');
    const { rationale } = data;

    return `${rationale ? reasonTexts : removeLastDot(reasonTexts)}${
      rationale ? '\n' : ''
    }${rationale ? `${removeLastDot(rationale)}` : ''}`;
  }

  async sendStoryStatus(
    story: StoryEntity,
    messageType: StoryStatus,
    reasonText?: string,
  ): Promise<SuccessRO | boolean> {
    if (
      this.config.get('application.disableNotifications') ||
      (story.edited &&
        this.config.get('application.disableNotificationsAfterEdit'))
    )
      return false;

    const messengerConversation = await this.storyConversationService.findById(
      story.conversationId,
      ['language'],
    );
    const messengerType =
      story.channel === CHANNEL_CONSTANTS.MESSENGER
        ? 'Facebook'
        : upperCaseFirst(story.channel);

    await lastValueFrom(
      this.clientProxy
        .send(
          { cmd: `sendStoryStatus${messengerType}Notification` },
          {
            language:
              story.conversation?.language?.code ??
              messengerConversation?.language?.code,
            senderId: story.recipient?.communicatorId,
            messageType,
            story: story.conversation?.messengerMessages?.find(
              (message) => message.isStory,
            ).content,
            messengerConversationId: story.conversationId,
            reasonText,
            pageId: story.conversation?.serviceNumber,
          },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    )
      .then(async (result) => {
        await Promise.all(
          result?.messages?.map((message) =>
            this.messengerMessageRepository.save({
              content: message.content,
              type: message.type,
              messageCreatedAt: message.createdAt,
              conversationId: messengerConversation.id,
              isStory: message.isStory,
            }),
          ),
        );
      })
      .catch((error) => {
        console.log(
          `error sendStoryStatus${messengerType}Notification`,
          JSON.stringify(error),
        );
      });

    return {
      success: true,
    };
  }

  async sendCommentNotificationToMessenger(
    comment: CommentEntity,
    commandName: string,
  ): Promise<any> {
    if (this.config.get('application.disableNotifications')) return false;

    const { language, conversation, recipient } = comment.story;

    if (!language || !conversation) {
      return;
    }

    const response = await lastValueFrom<sendCommentNotificationToMessenger>(
      this.clientProxy
        .send(
          { cmd: commandName },
          {
            language: language?.code,
            senderId: recipient.communicatorId,
            pageId: conversation.serviceNumber,
            organization: comment?.user?.organisation?.name,
            reply: prepareURL(
              this.config.get('frontend.url'),
              'story/details',
              comment.storyId,
            ),
          },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    ).catch((error) => {
      throw new CustomError(error.message, error.error);
    });

    await this.messengerMessageRepository.save({
      content: response.messages.content,
      type: response.messages.type,
      messageCreatedAt: response.messages.createdAt,
      conversationId: conversation.id,
      isStory: response.messages.isStory,
    });
  }

  async getMessengerMessagesByConversationId(
    conversationId: number,
  ): Promise<MessengerMessageEntity[]> {
    const messages = await this.messengerMessageRepository.find({
      where: {
        conversationId: conversationId,
      },
      order: { id: 'ASC' },
    });

    return messages;
  }
}
