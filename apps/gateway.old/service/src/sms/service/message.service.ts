import {
  Injectable,
  Inject,
  forwardRef,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { MessageRepository } from '../repository/message.repository';
import { MessageEntity, MESSAGE_MAX_LENGTH } from '../entity/message.entity';
import {
  SMSConversationModel,
  SMSMessageModel,
  CustomError,
  SMS_MESSAGE_IS_TOO_LONG_ERROR,
  SENDER_TYPE_CONSTANT,
  STORY_STATUS,
  MESSAGE_PROVIDER_CONSTANT,
  COUNTRY_PREFIX,
} from '@ourloop/shared';
import { LanguageRepository } from '../../language/language.repository';
import { LanguageEntity } from '../../language/entity/language.entity';
import { StoryService } from '../../story/service/story.service';
import { StoryEntity } from '../../story/entity/story.entity';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { SendMessageDto } from '../request/dto/send-message.dto';
import * as smsSplitter from 'split-sms';
import { ConfigService } from '@nestjs/config';
import { SMSSplitterInterface } from '../interface/sms-splitter.inteface';
import { StoryModeratorService } from '../../story/service/story-moderator.service';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, timeout } from 'rxjs';
import { PhoneAvailabilityRO } from '../response/phone-availability.ro';
import { staticConfig } from '../../config/default';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as twilio from 'twilio';
import { replaceArray } from '../../common/helpers';
import { COUNTRY } from '../../common/constant/country.constant';

@Injectable()
export class MessageService {
  private readonly logger = new Logger(MessageService.name);

  constructor(
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    private readonly messageRepository: MessageRepository,
    private readonly languageRepository: LanguageRepository,
    @Inject(forwardRef(() => StoryService))
    private readonly storyService: StoryService,
    private readonly storyModeratorService: StoryModeratorService,
    @Inject(DI_CONSTANTS.CLIENT_PROXY)
    private readonly clientProxy: ClientProxy,
    @Inject(twilio.Twilio) private readonly twilio: twilio.Twilio,
  ) {}

  static shortenContent(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }

    const dotsSlot = 5;

    maxLength -= dotsSlot;

    const regex = new RegExp(`^(.{${maxLength}}[^\\s]*).*`, 'i');
    const short = content.replace(regex, '$1');

    if (short.length <= maxLength) {
      return `${short}...`;
    }

    const shortAsArray = short.split(' ');
    shortAsArray.pop();

    return `${shortAsArray.join(' ')}...`;
  }

  validateMessageLength(
    details: SMSSplitterInterface,
    numberOfMessages: number,
    key: string,
  ): void {
    if (details.parts.length > numberOfMessages) {
      throw new CustomError(SMS_MESSAGE_IS_TOO_LONG_ERROR, {
        error: `Message is to long for chareter set "${details.characterSet}"`,
        key,
        maxLength: details.parts[0].length,
      });
    }
  }

  prepareListOfMessages(
    messages: string[],
    data: SMSSplitterInterface,
  ): string[] {
    for (const part of data.parts) {
      messages.push(part.content.trim());
    }

    return messages;
  }

  prepareMessages(story: StoryEntity, data: SendMessageDto): string[] {
    const originalContent = story.translations.find(
      (translation) => translation.languageId === story.languageId,
    )?.content;
    let details: SMSSplitterInterface;
    let messages: string[] = [];

    if (data.introduction && originalContent) {
      const storyLength =
        staticConfig.smsMessageLength - data.introduction.length;
      let short: string;
      let introduction = data.introduction;

      if (storyLength > 0) {
        short = MessageService.shortenContent(originalContent, storyLength);
        introduction += `: ${short}`;
      }

      details = smsSplitter.split(introduction);

      this.validateMessageLength(details, 1, 'introduction');

      messages = this.prepareListOfMessages(messages, details);
    }

    details = smsSplitter.split(data.content);

    this.validateMessageLength(details, 2, 'content');

    return this.prepareListOfMessages(messages, details);
  }

  async checkPhoneAvailability(
    provider: string,
    story: StoryEntity,
  ): Promise<PhoneAvailabilityRO> {
    return lastValueFrom(
      this.clientProxy
        .send(
          { cmd: `${provider}_checkPhoneAvailability` },
          {
            phone: story.recipient?.phone,
            phoneStoryId: story.id,
            loopPhone: story.conversation?.serviceNumber,
            country: story.country?.code,
          },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    ).catch((error) => {
      throw new CustomError(error.message, error.error);
    });
  }

  async saveMessages(
    conversation: StoryConversationEntity,
    data: SMSConversationModel,
    languageId?: number,
  ): Promise<{ messages: MessageEntity[]; story: StoryEntity }> {
    const messages = [];
    let languageOfMessage: LanguageEntity;
    let story: StoryEntity;

    if (languageId) {
      languageOfMessage = await this.languageRepository.findOne({
        where: { id: languageId },
      });
    }

    for (const message of data.messages) {
      if (message.language && !languageOfMessage) {
        languageOfMessage = await this.languageRepository.findOne({
          where: { code: message.language },
        });
      }

      if (!!message.isStory) {
        story = await this.storyService.addStory(languageOfMessage.id, {
          isSensitive: data.isSensitive,
          content: message.content,
          country: data.country,
          channel: CHANNEL_CONSTANTS.SMS,
          phone: data.userPhoneNumber,
          conversationId: conversation.id,
          userWantContact: data.contactAccepted,
        });
      }

      messages.push(
        new MessageEntity({
          conversationId: conversation.id,
          isUser:
            message.sender === SENDER_TYPE_CONSTANT.USER ||
            data.moderatorId !== undefined,
          createdAt: new Date(message.timestamp),
          content: MessageService.shortenContent(
            message.content,
            MESSAGE_MAX_LENGTH,
          ),
          isStory: !!message.isStory,
          userId:
            data.moderatorId && message.sender === SENDER_TYPE_CONSTANT.LOOP
              ? data.moderatorId
              : null,
        }),
      );
    }

    if (data.moderatorId) {
      await this.storyModeratorService.setStoryStatus(
        data.moderatorId,
        conversation.story.id,
        this.selectStoryStatus(conversation.story.status, data.messages.pop()),
      );
    }

    const result = await this.messageRepository.save(messages);

    return { messages: result, story };
  }

  selectStoryStatus(
    status: STORY_STATUS,
    message: SMSMessageModel,
  ): STORY_STATUS {
    if (!message && status === STORY_STATUS.AWAITING_REPLAY) {
      return STORY_STATUS.ISSUER_DID_NOT_REPLIED;
    }

    return message?.sender === SENDER_TYPE_CONSTANT.USER
      ? STORY_STATUS.ISSUER_REPLIED
      : STORY_STATUS.AWAITING_REPLAY;
  }

  async getSmsMessagesByConversationId(
    conversationId: number,
  ): Promise<MessageEntity[]> {
    const messages = await this.messageRepository.find({
      where: {
        conversationId: conversationId,
      },
      relations: ['user'],
      order: { id: 'ASC' },
    });

    return messages;
  }

  clearPhone(phone: string): string {
    return replaceArray(phone, [' ', '-'], '');
  }

  async checkCountryCodeAndProvider(
    phone: string,
  ): Promise<{ phone: string; countryCode: string; provider: string }> {
    phone = this.clearPhone(phone);

    let provider: MESSAGE_PROVIDER_CONSTANT;
    let countryCode: string;

    switch (phone.replace('+', '').substring(0, 5)) {
      case `${COUNTRY_PREFIX.zm}96`:
      case `${COUNTRY_PREFIX.zm}76`:
        provider = MESSAGE_PROVIDER_CONSTANT.MTN;
        countryCode = COUNTRY.ZAMBIA.toLowerCase();
        break;
      case `${COUNTRY_PREFIX.zm}97`:
      case `${COUNTRY_PREFIX.zm}77`:
        provider = MESSAGE_PROVIDER_CONSTANT.AIRTEL;
        countryCode = COUNTRY.ZAMBIA.toLowerCase();
        break;
      case `${COUNTRY_PREFIX.zm}75`:
      case `${COUNTRY_PREFIX.zm}95`:
        provider = MESSAGE_PROVIDER_CONSTANT.ZAMTEL;
        countryCode = COUNTRY.ZAMBIA.toLowerCase();
        break;
      default:
        if (phone.replace('+', '').substring(0, 2) === COUNTRY_PREFIX.ph) {
          provider = MESSAGE_PROVIDER_CONSTANT.GLOBE;
          countryCode = COUNTRY.PHILIPPINES.toLowerCase();
        } else {
          provider = MESSAGE_PROVIDER_CONSTANT.TWILIO;
        }

        break;
    }

    if (!countryCode) {
      const phoneDetails = await this.twilio.lookups.v1
        .phoneNumbers(phone)
        .fetch()
        .catch((error) => {
          this.logger.error(error);
          throw new BadRequestException(error?.message);
        });

      countryCode = phoneDetails.countryCode.toLowerCase();
    }

    return { phone, provider, countryCode };
  }
}
