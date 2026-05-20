import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UpdateResult, DeleteResult, Not, In } from 'typeorm';
import { StoryTranslationRepository } from '../repository/story-translation.repository';
import {
  CustomError,
  STORY_TRANSLATION_UPDATE_ERROR,
  RETRY_TRANSLATION_INCORRECT_LANGUAGE_CODE_ERROR,
  calculateNumberOfSubstringsByDivider,
} from '@ourloop/shared';
import { VerifyStoryTranslationDto } from '../request/dto/verify-story-translation.dto';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { StoryService } from './story.service';
import { StoryHistoricalTranslationModeratorService } from './story-historical-translation-moderator.service';
import { StoryEntity } from '../entity/story.entity';
import { SaveTranslationDto } from '../../common/dto/save-translation.dto';
import {
  includesTranslatableContent,
  updatedOriginalContent,
} from '../../common/helpers';
import { LanguageService } from '../../language/language.service';
import { StoryTranslationEntity } from '../entity/story-translation.entity';
import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';
import { SOURCE_TYPE } from '../../common/constant/source-type.constants';
import { LanguageEntity } from '../../language/entity/language.entity';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { getPayloadFromTranslation } from '../../language/utils/aws';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { StoryRepository } from '../repository/story.repository';
import { StoryConversationEntity } from '../entity/story-conversation.entity';
import { MessageEntity } from '../../sms/entity/message.entity';
import { UpdateStoryDto } from '../request/dto/update-story.dto';
import { StoryHistoricalTranslationEntity } from '../entity/story-historical-translation.entity';
import { MessengerMessageEntity } from '../../messenger/entity/messenger-message.entity';
import { MessengerService } from '../../messenger/service/messenger.service';

@Injectable()
export class StoryTranslationModeratorService {
  constructor(
    private readonly storyRepository: StoryRepository,
    @Inject(forwardRef(() => StoryService))
    private readonly storyService: StoryService,
    private readonly storyTranslationRepository: StoryTranslationRepository,
    public readonly storyHistoricalTranslationService: StoryHistoricalTranslationModeratorService,
    @Inject(forwardRef(() => LanguageService))
    private languageService: LanguageService,
  ) { }

  async checkOriginalContent(
    userId: string,
    story: StoryEntity,
    data: UpdateStoryDto,
    language: LanguageEntity,
    isRepinned: boolean,
  ): Promise<boolean> {
    const basicNewTranslation = data.translations?.find(
      (item) => item.code === language?.code,
    );

    let actualOriginalTranslation = story.translations.find(
      (translation) => translation.language?.code === language?.code,
    );
    let newOriginalContent: string;
    let historicalContent: StoryHistoricalTranslationEntity = null;

    if (story.channel === CHANNEL_CONSTANTS.IVRR && data.content) {
      historicalContent = await this.storyHistoricalTranslationService.save({
        userId,
        translationId: actualOriginalTranslation?.id,
        content: data.content,
      });
    }

    if (isRepinned && !basicNewTranslation) {
      newOriginalContent = await this.concatenatePinnedMessages(
        story.id,
        story.channel,
      );
    } else if (basicNewTranslation) {
      newOriginalContent = basicNewTranslation?.content;
    } else if (
      story.channel === CHANNEL_CONSTANTS.IVRR &&
      data.content &&
      (!this.storyHistoricalTranslationService.contentIsDefined(
        actualOriginalTranslation?.content,
      ) ||
        !basicNewTranslation)
    ) {
      newOriginalContent = data.content;
    }

    if (
      newOriginalContent &&
      newOriginalContent !== actualOriginalTranslation?.content
    ) {
      actualOriginalTranslation = await this.saveTranslation(
        {
          language: language?.code,
          content: newOriginalContent,
        },
        {
          ...story,
          language,
        },
        userId,
        true,
      );

      if (historicalContent === undefined) {
        await this.storyHistoricalTranslationService.save({
          userId,
          translationId: actualOriginalTranslation?.id,
          content: data.content,
        });
      }

      if (!actualOriginalTranslation) {
        return false;
      }
    }

    return true;
  }

  async concatenatePinnedMessages(
    storyId: string,
    channel: CHANNEL_CONSTANTS,
  ): Promise<string> {
    const story = await this.storyRepository.findStoryByIdAndParams(storyId, {
      withDetails: true,
      channel,
    });

    let conversation: StoryConversationEntity;

    switch (channel) {
      case 'whatsapp':
      case 'telegram':
      case 'messenger':
      case 'sms': {
        conversation = story.conversation;
        break;
      }
      default: {
        return story.translations.find(
          (translation) => translation.language.code === story.language.code,
        ).content;
      }
    }

    if (!conversation) return;

    let content = '';

    const messages = await this.storyService.chooseChannelMessages(
      story.conversationId,
      channel,
    );

    for (const message of messages) {
      switch (channel) {
        case 'whatsapp':
        case 'telegram':
        case 'messenger': {
          const messengerMessage = message as MessengerMessageEntity;

          if (messengerMessage.isPinned || messengerMessage.isStory)
            content += `\n${messengerMessage.content}`;

          break;
        }
        case 'sms': {
          const smsMessage = message as MessageEntity;

          if (smsMessage.isPinned || smsMessage.isStory)
            content += `\n${smsMessage.content}`;
          break;
        }
      }
    }
    return content;
  }

  async retryTranslation(
    storyId: string,
    languageCode: string,
  ): Promise<boolean> {
    try {
      const languageEntity =
        await this.languageService.getLanguageByCode(languageCode);
      const story = await this.storyService.checkThatStoryExist(
        { id: storyId },
        'retryTranslation',
        ['translations', 'translations.language'],
      );

      const { status } = story.translations.find(
        ({ language: { code } }) => code === languageEntity.code,
      );
      if (status !== TRANSLATION_STATUS_CONSTANTS.ERROR) {
        throw new CustomError(RETRY_TRANSLATION_INCORRECT_LANGUAGE_CODE_ERROR, {
          error: `This translation has different status than ERROR`,
        });
      }

      let content, language: LanguageEntity;

      ({ content, language } = story.translations.find(
        ({ language: { id } }) => id === story.languageId,
      ));

      //Find first human translations
      if (!language.provider) {
        ({ content, language } = story.translations.find(
          ({ type, languageId }) =>
            type === TRANSLATION_TYPE_CONSTANTS.MANUAL &&
            languageId !== story.languageId,
        ));
      }

      if (languageEntity.provider !== language.provider) {
        const enLang = await this.languageService.getLanguageByCode(
          LANGUAGES_CONSTANTS.ENGLISH,
        );
        //check if eng translation exist
        const enTranslation = await this.storyTranslationRepository.findOne({
          where: { storyId, languageId: enLang.id, content: Not('') },
        });

        if (!enTranslation) {
          //Run AWS lambda for translate to EN
          const translation =
            await this.languageService.runTranslationLambdaSync(
              story.id,
              enLang,
              content,
              language.code,
              SOURCE_TYPE.STORY,
              language.provider,
              language.alternativeProvider ?? enLang.provider,
            );

          content = getPayloadFromTranslation(translation);
        } else {
          content = enTranslation.content;
        }
        language.code = LANGUAGES_CONSTANTS.ENGLISH;
      }

      this.languageService.runTranslationLambda(
        story.id,
        languageEntity,
        content,
        language.code,
        SOURCE_TYPE.STORY,
        language.provider,
        language.alternativeProvider ?? languageEntity.provider,
      );

      return true;
    } catch (error) {
      throw new CustomError(STORY_TRANSLATION_UPDATE_ERROR, error.error);
    }
  }

  saveTranslationToRepository(
    translation: StoryTranslationEntity,
  ): Promise<StoryTranslationEntity> {
    return this.storyTranslationRepository.save(translation);
  }

  async restoreOriginalContent(
    userId: string,
    story: StoryEntity,
  ): Promise<boolean> {
    let restoredContent: string;

    if (
      [CHANNEL_CONSTANTS.IVRR, CHANNEL_CONSTANTS.WEB].includes(story.channel)
    ) {
      const historicalOriginalContent =
        await this.storyHistoricalTranslationService.findHistoricaloriginalContentForStory(
          story,
          {
            createdAt:
              story.channel === CHANNEL_CONSTANTS.IVRR ? 'DESC' : 'ASC',
          },
        );

      if (!historicalOriginalContent) {
        return false;
      }

      restoredContent = historicalOriginalContent.content;
    } else {
      restoredContent = await this.concatenatePinnedMessages(
        story.id,
        story.channel,
      );
    }

    const translation = await this.saveTranslation(
      {
        language: story.language.code,
        content: restoredContent,
      },
      story,
      userId,
      true,
    );

    return !!translation.id;
  }

  async saveTranslation(
    { language, content }: SaveTranslationDto,
    story: StoryEntity,
    userId: string,
    forceRunTranslations = false,
    // recorevable
  ): Promise<StoryTranslationEntity> {
    let result;

    const languageEntity =
      await this.languageService.getLanguageByCode(language);

    try {
      let translation =
        await this.storyTranslationRepository.getParticularTranslationForStory(
          story.id,
          languageEntity.id,
        );

      if (!translation) {
        translation = new StoryTranslationEntity({
          storyId: story.id,
          languageId: languageEntity.id,
        });
      } else if (translation.content !== content) {
        await this.storyHistoricalTranslationService.save({
          userId,
          translationId: translation.id,
          content: translation.content,
          isRecoverable: story.channel !== CHANNEL_CONSTANTS.IVRR,
        });
      }

      const originalContent = translation.content;
      translation.status = TRANSLATION_STATUS_CONSTANTS.TRANSLATED;
      translation.type = TRANSLATION_TYPE_CONSTANTS.MANUAL;
      translation.content = content;
      translation.numberOfWords = calculateNumberOfSubstringsByDivider(
        content,
        ' ',
      );

      result = await this.saveTranslationToRepository(translation);

      if (
        updatedOriginalContent(
          story.language.code,
          language,
          originalContent,
          content,
        ) || forceRunTranslations || !includesTranslatableContent(story.translations)
      ) {

        this.languageService.invokeTranslationModerator(
          story.id,
          content,
          languageEntity.id,
          SOURCE_TYPE.STORY,
          story.translations
        );
      }
    } catch (error) {
      throw new CustomError(error.message, error.error);
    }
    return result;
  }

  async updateTranscription(storyTranslationHistorical: StoryHistoricalTranslationEntity, userId: string, isRecoverable: boolean) {
    return await this.storyHistoricalTranslationService.update({ id: storyTranslationHistorical.id }, {
      userId,
      isRecoverable: isRecoverable,
    });
  }

  async updateCurrentTranslation(story: StoryEntity, content: string) {
    await this.storyHistoricalTranslationService.updateOldStories(story);
    return await this.storyTranslationRepository.update({ id: In(story.translations.map((item) => item.id)) }, { content });
  }

  async getTranslations(storyId: string): Promise<StoryEntity> {
    return this.storyService.checkThatStoryExist(
      { id: storyId },
      'getTranslations',
      ['translations', 'translations.language'],
    );
  }

  async removeStoryTranslation(
    storyId: string,
    code: string,
  ): Promise<DeleteResult> {
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'removeStoryTranslation',
      ['translations', 'translations.language'],
    );

    const translation = story.translations.find(
      (translation) =>
        translation.language.code === code &&
        translation.language.id !== story.languageId,
    );

    if (!translation) {
      return;
    }

    return this.storyTranslationRepository.delete(translation.id);
  }

  async setTranslationAsVerified(
    storyId: string,
    data: VerifyStoryTranslationDto,
  ): Promise<UpdateResult> {
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'setTranslationAsVerified',
      ['translations', 'translations.language'],
    );

    const translation = story.translations.find(
      (item) => item.language?.code === data.language,
    );

    if (!translation || translation.languageId === story.languageId) {
      return;
    }

    return this.storyTranslationRepository
      .update(
        {
          storyId,
          languageId: translation.language.id,
        },
        {
          type: TRANSLATION_TYPE_CONSTANTS.MANUAL,
          content: data.content,
        },
      )
      .catch(() => {
        throw new CustomError(STORY_TRANSLATION_UPDATE_ERROR, {
          error: 'story not verified - function setTranslationAsVerified',
        });
      });
  }
}
