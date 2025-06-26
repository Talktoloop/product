import { StoryAdministrativeDataRepository } from './../repository/story-administrative-data.repository';
import {
  Injectable,
  Logger,
  Inject,
  BadRequestException,
  forwardRef,
} from '@nestjs/common';
import { UpdateResult, In, Not, LessThan, IsNull, Between } from 'typeorm';
import { StoryEntity } from '../entity/story.entity';
import { StoryRepository } from '../repository/story.repository';
import { StoryRecipientRepository } from '../repository/story-recipient.repository';
import { StoryRejectReasonRepository } from '../repository/story-reject-reason.repository';
import {
  UpdateStoryDto,
  TranslationDto,
} from '../request/dto/update-story.dto';
import { StoryService } from '../service/story.service';
import {
  CustomError,
  STORY_UPDATE_ERROR,
  LANGUAGE_NOT_FOUND,
  STORY_INCORRECT_STATUS,
  NO_STORY,
  TRANSLATIONS_ARE_NEEDED,
  SENSITIVE_STORY_CANNOT_BE_PUBLISHED_ERROR,
  SENSITIVE_STORY_CAN_NOT_BE_UPDATED_TO_NON_SENSITIVE,
  SENSITIVE_STORY_NOT_FOUND,
  SENSITIVE_STORY_ALREADY_EXPORTED,
  SENSITIVE_STORY_EXPORT_ERROR,
  STORY_CANNOT_BE_SET_AS_SENSITIVE_AGAIN,
  STORY_STATUS,
  GET_ADMINISTRATIVE_DATA_FAILED,
  _omit,
  BAD_STORY_CHANNEL,
  PROVIDER_NOT_FOUND,
  DI_CONSTANTS as SHARED_DI,
} from '@ourloop/shared';
import { LanguageRepository } from '../../language/language.repository';
import { LanguageEntity } from '../../language/entity/language.entity';
import { StoryTranslationEntity } from '../entity/story-translation.entity';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';
import {
  DIFFICULTY_VALUE,
  GENDER_VALUE,
  AGE_VALUE,
  REJECT_REASON_CODE,
} from '../../common/types';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { StoryPaginationWithOrderAndFilterDto } from '../../common/dto/story-pagination-with-order-and-filter.dto';
import {
  includesTranslatableContent,
  getKeyByValue,
  _pick,
  upperCaseFirst,
  isContactAccepted,
  narrowDownIds,
  preparePaginationMetadata,
  checkRejectReason,
} from '../../common/helpers';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { RejectContentDto } from '../../common/dto/reject-content.dto';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { LanguageService } from '../../language/language.service';
import { MARKED_AS_SENSITIVE_BY } from '../../common/constant/marked-as-sensitive.constant';
import { CountryService } from '../../country/service/country.service';
import { DIFFICULTY } from '../../airtable-client/constant/difficulty.constant';
import { THEMATIC } from '../../airtable-client/constant/thematic.constant';
import { URGENT } from '../../airtable-client/constant/urgent.constant';
import { ExportStoryDto } from '../request/dto/export-story.dto';
import { SENSITIVE_STORY_COLUMNS } from '../../airtable-client/constant/sensitive-story-table.constant';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import * as AirTable from 'airtable-node';
import { Pagination } from '../../common/type/pagination.type';
import { CaseManagerEntity } from '../../case-manager/entity/case-manager.entity';
import { UserEntity } from '../../user/entity/user.entity';
import { NotificationService } from '../../notification/service/notification.service';
import { MANAGER_TEMPLATES } from '../../common/constant/email-templates.constants';
import { MessengerMessageRepository } from '../../messenger/repository/messenger-message.repository';
import { MessageRepository } from '../../sms/repository/message.repository';
import { StoryConversationEntity } from '../entity/story-conversation.entity';
import { MessengerMessageEntity } from '../../messenger/entity/messenger-message.entity';
import { MessageEntity } from '../../sms/entity/message.entity';
import { StoryTranslationModeratorService } from './story-translation-moderator.service';
import { IvrrService } from '../../ivrr/service/ivrr.service';
import { StoryHistoricalTranslationModeratorService } from '../service/story-historical-translation-moderator.service';
import { AdministrativeDataService } from '../../country/service/administrative-data.service';
import { administrativeDataPathMapper } from '../../country/mapper/administrative-data-path.mapper';
import { AirTableOrganisationService } from '../../airtable-client/service/airtable-organisation.service';
import { OrganisationRepository } from '../../organisation/organisation.repository';
import { RejectReasonService } from '../../lexicon/service/reject-reason.service';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { StoryStatus } from '../../messenger/enum/story-status.enum';
import { StoryNotificationService } from '../../notification/service/story-notification.service';
import { MessengerService } from '../../messenger/service/messenger.service';
import { OtherStoriesBySameRecipientRO } from '../../ivrr/response/other-stories.ro';
import { AssignStoriesDTO } from '../request/dto/assign-stories.dto';
import { StoryOrganisationTagRepository } from '../repository/story-organisation-tag.repository';

@Injectable()
export class StoryModeratorService {
  private readonly logger = new Logger(StoryModeratorService.name);
  constructor(
    private readonly storyRepository: StoryRepository,
    private readonly storyRecipientRepository: StoryRecipientRepository,
    private readonly storyRejectReasonRepository: StoryRejectReasonRepository,
    @Inject(forwardRef(() => StoryService))
    private readonly storyService: StoryService,
    private readonly languageRepository: LanguageRepository,
    private readonly languageService: LanguageService,
    private readonly countryService: CountryService,
    private readonly notificationService: NotificationService,
    private readonly messengerMessageRepository: MessengerMessageRepository,
    private readonly messageRepository: MessageRepository,
    private readonly storyHistoricalTranslationModeratorService: StoryHistoricalTranslationModeratorService,
    private readonly storyTranslationModeratorService: StoryTranslationModeratorService,
    @Inject(DI_CONSTANTS.AIRTABLE)
    private readonly airTable: AirTable,
    private readonly ivrrService: IvrrService,
    private readonly storyAdministrativeDataRepository: StoryAdministrativeDataRepository,
    private readonly administrativeDataService: AdministrativeDataService,
    private readonly airTableOrganisationService: AirTableOrganisationService,
    private readonly organisationRepository: OrganisationRepository,
    private readonly storyOrganisationTagRepository: StoryOrganisationTagRepository,
    private readonly rejectReasonService: RejectReasonService,
    @Inject(SHARED_DI.CLIENT_PROXY)
    private readonly clientProxy: ClientProxy,
    private readonly storyNotificationService: StoryNotificationService,
    private readonly messengerService: MessengerService,
  ) { }

  async changeStoryStatus(from: STORY_STATUS, to: STORY_STATUS) {
    return this.storyRepository.update({ status: from }, { status: to });
  }

  async sendNotificationAfterExportToAirTable(
    moderator: UserEntity,
    caseManagers: CaseManagerEntity[],
  ) {
    return Promise.all(
      caseManagers.map((caseManager) =>
        this.notificationService.sendEmail(
          MANAGER_TEMPLATES.NEW_STORY_IN_CASE_MANAGER_SYSTEM,
          {
            manager_name: caseManager.nickname,
            moderator_name: moderator?.nickname,
          },
          {},
          [{ Email: caseManager.email }],
        ),
      ),
    );
  }

  async getStoryPlace(story: StoryEntity): Promise<string> {
    let place = story.place;

    if (story.storyAdministrativeData[0]) {
      const defaultLanguage = await this.languageService.getDefaultLanguage();
      const parents = await this.administrativeDataService.findParentsById(
        story.storyAdministrativeData[0].administrativeAreaId,
      );
      const location = administrativeDataPathMapper(
        parents,
        defaultLanguage.id,
        defaultLanguage.id,
        defaultLanguage.id,
      );

      place = `${location?.path}, ${story.country?.name}`;
    }

    return place;
  }

  async exportStoryToAirTable(
    userId: string,
    id: string,
    data: ExportStoryDto,
  ): Promise<UpdateResult> {
    const story = await this.storyService.findById(id);

    if (story.status === STORY_STATUS.SENT_FROM_CASE_MANAGER_TO_LOOP) {
      throw new BadRequestException(STORY_CANNOT_BE_SET_AS_SENSITIVE_AGAIN);
    }

    if (!story.isSensitive) {
      throw new BadRequestException(SENSITIVE_STORY_NOT_FOUND);
    }

    if (story.status === STORY_STATUS.SENT_TO_CASE_MANAGER) {
      throw new BadRequestException(SENSITIVE_STORY_ALREADY_EXPORTED);
    }

    if (
      [
        STORY_STATUS.REJECTED,
        STORY_STATUS.SENT_FROM_CASE_MANAGER_TO_LOOP,
      ].includes(story.status as STORY_STATUS)
    ) {
      throw new BadRequestException(STORY_INCORRECT_STATUS);
    }

    const place = await this.getStoryPlace(story);

    if (story.channel === CHANNEL_CONSTANTS.IVRR) {
      await this.ivrrService.removeStoryLogs(story);
    }

    const originalTranslation = story.translations.find(
      (translation) => translation.languageId === story.languageId,
    );
    const englishTranslation = story.translations.find(
      (translation) =>
        translation.language.code === LANGUAGES_CONSTANTS.ENGLISH,
    );

    const fields = {};

    let markedAsSensitiveBy = story.markedAsSensitiveByRole
      ? upperCaseFirst(story.markedAsSensitiveByRole)
      : '';

    if (story.markedAsSensitiveByRole === MARKED_AS_SENSITIVE_BY.MODERATOR) {
      markedAsSensitiveBy += `: ${story.markedAsSensitiveBy?.nickname ?? story.markedAsSensitiveBy?.email
        }`;
    }

    const phone = story.recipient?.phone
      ? story.recipient.phone
      : story.channel === CHANNEL_CONSTANTS.WHATSAPP
        ? story.recipient?.communicatorId
        : '';

    fields[SENSITIVE_STORY_COLUMNS.MARKED_AS_SENSITIVE_BY] =
      markedAsSensitiveBy;
    fields[SENSITIVE_STORY_COLUMNS.ADDITIONAL_CONTACT_DETAILS] = story.recipient?.additionalContactDetails
    fields[SENSITIVE_STORY_COLUMNS.AUTHOR_ALLOWED_FOR_CONTACT] =
      !!story.recipient?.userWantContact ? 'true' : 'false';

    fields[SENSITIVE_STORY_COLUMNS.CONTENT] = originalTranslation?.content;
    fields[SENSITIVE_STORY_COLUMNS.CONTENT_ENG] = englishTranslation?.content;
    fields[SENSITIVE_STORY_COLUMNS.ORGANIZATION] = story.organisations
      .map((item) => item.name)
      .join(', ');
    fields[SENSITIVE_STORY_COLUMNS.LANGUAGE] = upperCaseFirst(
      getKeyByValue(LANGUAGES_CONSTANTS, story.language.code),
    );
    fields[SENSITIVE_STORY_COLUMNS.COUNTRY] = story.country?.name;
    fields[SENSITIVE_STORY_COLUMNS.GENDER] = upperCaseFirst(
      getKeyByValue(GENDER_VALUE, story.recipient?.genderByModerator),
    )?.replace(/_/gi, ' ');
    fields[SENSITIVE_STORY_COLUMNS.AGE] = upperCaseFirst(
      getKeyByValue(AGE_VALUE, story.recipient?.ageByModerator),
    )?.replace(/_/gi, ' ');
    fields[SENSITIVE_STORY_COLUMNS.LOCATION] = place;
    fields[SENSITIVE_STORY_COLUMNS.LOOP_ID] = story.id;
    fields[SENSITIVE_STORY_COLUMNS.PHONE] = isContactAccepted(story)
      ? phone
      : '';
    fields[SENSITIVE_STORY_COLUMNS.EMAIL] = isContactAccepted(story)
      ? story.recipient?.email
      : '';
    fields[SENSITIVE_STORY_COLUMNS.DISABILITY] = story.difficulties.map(
      (item) => getKeyByValue(DIFFICULTY, item.code, false),
    );
    fields[SENSITIVE_STORY_COLUMNS.CATEGORY] = story.thematics.map((thematic) =>
      getKeyByValue(
        THEMATIC,
        thematic.parent ? thematic?.parent.code : thematic.code,
        false,
      ),
    );

    fields[SENSITIVE_STORY_COLUMNS.SUBCATEGORY] = story.thematics
      .filter((thematic) => thematic.parent)
      .map((thematic) =>
        getKeyByValue(
          THEMATIC,
          `${thematic.parent.code}.${thematic.code}`,
          false,
        ),
      )
      .filter((thematic) => thematic);
    fields[SENSITIVE_STORY_COLUMNS.MODERATOR_NOTE] = data.note;
    fields[SENSITIVE_STORY_COLUMNS.URGENCY] = upperCaseFirst(
      getKeyByValue(URGENT, +data.immediateAssistance),
    );
    await this.airTable
      .table('Sensitive Stories')
      .create({
        records: [
          {
            fields,
          },
        ],
      })
      .then((result) => {
        if (result?.error) {
          throw new CustomError(SENSITIVE_STORY_EXPORT_ERROR, {
            error: result?.error,
          });
        }
      })
      .catch((error) => {
        throw new CustomError(SENSITIVE_STORY_EXPORT_ERROR, error);
      });

    return this.storyRepository.update(
      { id: story.id },
      {
        status: STORY_STATUS.SENT_TO_CASE_MANAGER,
        statusChangedByUserId: userId,
        isUrgent: data.immediateAssistance,
      },
    );
  }

  async unPublishStory(
    userId: string,
    story: StoryEntity,
  ): Promise<UpdateResult | void> {
    if (story.status !== STORY_STATUS.PUBLISHED) {
      throw new CustomError(STORY_INCORRECT_STATUS, {
        error: 'story incorrect status - function unPublishStory',
      });
    }

    return this.storyRepository
      .update(story.id, {
        status: STORY_STATUS.PENDING_EDIT,
        statusChangedByUserId: userId,
      })
      .catch(() => {
        throw new CustomError(STORY_UPDATE_ERROR, {
          error: 'story not unpublished - function unPublishStory',
        });
      });
  }

  async getStoryDetailsByIdAndChannelOrFail(
    id: string,
    channel: CHANNEL_CONSTANTS,
    withDetails = true,
  ): Promise<StoryEntity> {
    const data = await this.storyRepository.findStoryByIdAndParams(id, {
      withDetails,
      channel,
    });

    if (!data)
      throw new CustomError(NO_STORY, {
        error: 'Story ID does not exist',
      });

    data.recipient.nickname = data.onBehalfOf ?? null;

    return data;
  }

  async getPendingStories(
    params: StoryPaginationWithOrderAndFilterDto,
    userLanguageId: number,
  ): Promise<Pagination> {
    let storyIds = await this.storyRepository.findPendingStoriesIds(params);

    const meta = preparePaginationMetadata(storyIds, params.limit, params.page);

    storyIds = narrowDownIds(storyIds, params.page, params.limit);

    const defaultLanguageId = (await this.languageService.getDefaultLanguage())
      .id;

    let data = [];

    if (storyIds.length) {
      data = await this.storyRepository.getPendingStoriesByIds(
        storyIds,
        params.order,
        userLanguageId,
        defaultLanguageId,
      );
    }

    const items = [];

    let story: Record<string, any>;

    for (const row of data) {
      if (story?.id !== row.id) {
        if (story) {
          items.push(story);
        }

        story = {
          id: row.id,
          createdAt: row.createdAt,
          channel: row.channel,
          status: row.status,
          countryCode: row.countryCode,
          languageCode: row.languageCode,
          conversationId: row.conversationId,
          categories: [],
          isSensitive: !!row.isSensitive,
          moderatorId: row.assignedModerator_id,
          moderatorName: row.assignedModerator_nickname,
          moderatorEmail: row.assignedModerator_email,
        };
        if (story.channel === CHANNEL_CONSTANTS.IVRR) {
          story.s3FileId = row.s3FileId;
          story.recordingDuration = row.recordingDuration;
        } else {
          story.content = row.userContent?.length
            ? row.userContent
            : row.defaultContent?.length
              ? row.defaultContent
              : row.originalContent;
          story.numberOfWords = row.userContent?.length
            ? row.numberOfWordsOfUserContent
            : row.defaultContent?.length
              ? row.numberOfWordsOfDefaultContent
              : row.numberOfWordsOfOriginalContent;
        }
      }

      if (row.categoryCode && !story.categories.includes(row.categoryCode)) {
        story.categories.push(row.categoryCode);
      }
    }

    if (story) {
      items.push(story);
    }
    meta.itemCount = items.length;
    const itemsWithPagination = { meta, items };
    const promises = [];

    for (const story of itemsWithPagination.items) {
      if (story.channel !== CHANNEL_CONSTANTS.IVRR || !story.s3FileId) continue;

      if (!story.recordingDuration) {
        const recordingDurationPromise = this.ivrrService
          .getS3FileAudioDuration(story.s3FileId)
          .then((fileDuration) => {
            const roundedRecordingDuration = Math.ceil(fileDuration);
            story.recordingDuration = roundedRecordingDuration;
          });

        promises.push(recordingDurationPromise);
      }
    }

    await Promise.all(promises);

    return itemsWithPagination;
  }

  async setTranslations(
    userId: string,
    story: StoryEntity,
    translations: TranslationDto[],
    languages: LanguageEntity[],
  ): Promise<StoryEntity> {
    let language: LanguageEntity;
    let storyTranslation: StoryTranslationEntity;
    const operations = [];

    translations = translations.filter(
      (item) => item.code !== story.language.code,
    );

    for (const translation of translations) {
      language = languages.find((entity) => entity.code === translation.code);

      if (!language) {
        throw new CustomError(LANGUAGE_NOT_FOUND, {
          error: 'language is not supported - function setTranslations',
        });
      }

      storyTranslation = story.translations.find(
        (entity) => entity.languageId === language?.id,
      );

      if (storyTranslation) {
        if (storyTranslation.content !== translation.content) {
          operations.push(
            this.storyHistoricalTranslationModeratorService.save({
              userId,
              translationId: storyTranslation.id,
              content: storyTranslation.content,
              isRecoverable: story.channel !== CHANNEL_CONSTANTS.IVRR,
            }),
          );
        }

        storyTranslation.content = translation.content;
        storyTranslation.type = TRANSLATION_TYPE_CONSTANTS.MANUAL;
      } else {
        story.translations.push(
          new StoryTranslationEntity({
            storyId: story.id,
            languageId: language.id,
            content: translation.content,
            language,
          }),
        );
      }
    }

    if (operations.length) {
      await Promise.all(operations);
    }

    return story;
  }

  async changeOriginLanguage(
    userId: string,
    story: StoryEntity,
    manualTranslationLanguages: string[],
    language: LanguageEntity,
  ): Promise<StoryEntity> {
    await Promise.all(
      story.translations
        .filter(
          (item) => !manualTranslationLanguages.includes(item.language.code),
        )
        .map((item) =>
          this.storyHistoricalTranslationModeratorService.save({
            translationId: item.id,
            content: item.content,
            userId,
            isRecoverable: story.channel !== CHANNEL_CONSTANTS.IVRR,
          }),
        ),
    );

    const { translations, contentUpdated, oldOriginalContent } =
      await this.languageService.changeOriginLanguage(
        story.translations,
        language,
        story.languageId,
        manualTranslationLanguages,
      );

    story.translations = translations as StoryTranslationEntity[];

    if (!contentUpdated) {
      const newTranslation = new StoryTranslationEntity({
        storyId: story.id,
        languageId: language.id,
        content: oldOriginalContent,
      });

      newTranslation.language = language;
      story.translations.push(newTranslation);
    }

    return story;
  }

  async updateStory(
    userId: string,
    story: StoryEntity,
    data: UpdateStoryDto,
  ): Promise<StoryEntity | void> {
    const country = await this.countryService.findByIdOrFail(data.countryId);
    const languages = await this.languageRepository.find();
    const language = await this.languageService.checkOriginLanguage(
      data.language,
    );

    if (story.countryId !== country.id && !data.regionId) {
      data.regionId = null;
    }

    if (Number.isInteger(data.regionId)) {
      const region =
        await this.administrativeDataService.findAdministrativeDataOrFail(
          data.regionId,
        );

      if (region.countryId !== country.id) {
        throw new BadRequestException(GET_ADMINISTRATIVE_DATA_FAILED);
      }
    }

    if (
      data.isSensitive === false &&
      story.markedAsSensitiveByRole === MARKED_AS_SENSITIVE_BY.AUTHOR
    ) {
      throw new CustomError(
        SENSITIVE_STORY_CAN_NOT_BE_UPDATED_TO_NON_SENSITIVE,
        {
          error: 'story update error - function updateStory',
        },
      );
    }

    if (
      story.status == STORY_STATUS.SENT_FROM_CASE_MANAGER_TO_LOOP &&
      data.isSensitive
    ) {
      throw new CustomError(STORY_CANNOT_BE_SET_AS_SENSITIVE_AGAIN, {
        error: 'story update error - function updateStory',
      });
    }

    if (data.translations) {
      story = await this.setTranslations(
        userId,
        story,
        data.translations,
        languages,
      );
    }

    if (data.language && language?.id !== story.languageId) {
      story = await this.changeOriginLanguage(
        userId,
        story,
        data.translations
          ? data.translations
            .filter((item) => item.code !== story.language.code)
            .map((item) => item.code)
          : [],
        language,
      );
    }

    const operations = await this.storyService.setStoryAttributes(data);
    const markedAsSensitiveByRole =
      !story.markedAsSensitiveByRole && data.isSensitive
        ? MARKED_AS_SENSITIVE_BY.MODERATOR
        : story.markedAsSensitiveByRole;

    if (story.recipient) {
      await this.storyRecipientRepository.update(story.recipientId, {
        ageByModerator: data.age ?? story.recipient.ageByModerator,
        genderByModerator: data.gender ?? story.recipient.genderByModerator,
        isMinority: data.isMinority ?? story.recipient.isMinority,
      });
    }

    const edited = story.status === STORY_STATUS.PENDING_EDIT;

    const updatedStory = await this.storyRepository
      .save({
        ...(_omit(story as Record<string, any>, ['language']) as Record<
          string,
          unknown
        >),
        ...(_pick(
          data,
          [
            'age',
            'gender',
            'authorNickname',
            'place',
            'isSensitive',
            'isUrgent',
            'isMinority',
          ],
          true,
        ) as Record<string, unknown>),
        ...(_pick(operations, [
          'categories',
          'organisations',
          'maternityStatus',
          'difficulties',
          'thematics',
        ]) as Record<string, unknown>),
        difficulty: data.difficulty
          ? DIFFICULTY_VALUE[data.difficulty.toUpperCase()]
          : null,
        countryId: country.id,
        languageId: language?.id ?? story.languageId,
        status: STORY_STATUS.PENDING_PUBLICATION,
        statusChangedByUserId: userId,
        markedAsSensitiveByRole,
        markedAsSensitiveByUserId: markedAsSensitiveByRole ? userId : null,
        onBehalfOf: data.authorNickname ?? story.recipient?.nickname,
        ...(edited ? { edited } : {}),
      })
      .catch((error) => {
        this.logger.error(error);
        throw new CustomError(STORY_UPDATE_ERROR, {
          error: 'story update error - function updateStory',
        });
      });

    if (data.organisations?.length > 0) {
      const organisations = await this.organisationRepository.findBy({
        id: In(data.organisations),
      });
      await this.storyOrganisationTagRepository.delete({ story: { id: story.id }, organisation: { id: Not(In(data.organisations)) } })

      for (let i = 0; i < data.organisations.length; i++) {
        const element = data.organisations[i];
        const tagCheck = await this.storyOrganisationTagRepository.findOne({ where: { story: { id: story.id }, organisation: { id: element } } })
        if (element && !tagCheck) {
          await this.storyOrganisationTagRepository.save({ organisation: { id: element }, story: { id: story.id } })
        }
      }
      this.airTableOrganisationService.syncNumberOfStoriesToAirtable(
        organisations,
      );
    }

    let isRepinned: boolean;
    let isValid: boolean;

    if (data.pinnedMessageIds) {
      ({ status: isRepinned, isValid } = await this.updatePinnedMessages(
        updatedStory.id,
        updatedStory.channel,
        data.pinnedMessageIds,
      ));
    }

    if (Number.isInteger(data.regionId) || data.regionId === null) {
      const storyAdministrativeData =
        await this.storyAdministrativeDataRepository.findByStoryId(story.id);

      if (storyAdministrativeData.length > 0) {
        await this.storyAdministrativeDataRepository.remove(
          storyAdministrativeData,
        );
      }
    }

    if (Number.isInteger(data.regionId)) {
      await this.administrativeDataService.assignAdministrativeDataToStory(
        data.regionId,
        story.id,
      );
    }

    const result =
      await this.storyTranslationModeratorService.checkOriginalContent(
        userId,
        story,
        data,
        language ?? story.language,
        isRepinned,
      );

    if (!result || (isRepinned && !isValid)) {
      return;
    }

    return updatedStory;
  }

  async setStoryStatus(
    userId: string,
    storyId: string,
    status: STORY_STATUS,
  ): Promise<UpdateResult> {
    return this.storyRepository.update(storyId, {
      status,
      statusChangedByUserId: userId,
    });
  }

  async rejectStory(
    userId: string,
    story: StoryEntity,
    rejectContent: RejectContentDto,
    rejectReasons?: RejectReasonEntity[],
  ): Promise<StoryEntity> {
    if (story.status === STORY_STATUS.REJECTED) {
      throw new CustomError(STORY_INCORRECT_STATUS, {
        error: 'story incorrect status - function rejectStory',
      });
    }

    story.status = STORY_STATUS.REJECTED;
    story.rejectRationale = rejectContent?.rationale;
    // if statement no id
    if (userId && userId.length > 0)
      story.statusChangedByUserId = userId;

    if (rejectReasons?.length > 0) {
      await this.storyRejectReasonRepository.delete({
        storyId: story.id,
      });

      story.rejectReasons = rejectReasons.map((rejectReason, key) => ({
        rejectReasonId: rejectReason.id,
        rejectReasonText: rejectContent.reasonTexts
          ? rejectContent.reasonTexts[key]
          : null,
        storyId: story.id,
      }));

      const language = await this.languageRepository.findOne({
        where: { code: rejectContent?.notificationLanguage },
      });

      story.rejectReasonLanguageId = language ? language.id : null;
    }

    return this.storyRepository.save(story);
  }

  async publishStory(
    story: StoryEntity,
    moderatorId: string,
  ): Promise<UpdateResult | void> {
    if (
      ![STORY_STATUS.PENDING_PUBLICATION, STORY_STATUS.PENDING_EDIT].includes(
        story.status,
      )
    ) {
      throw new CustomError(STORY_INCORRECT_STATUS, {
        error: 'story incorrect status - function publishStory',
      });
    }

    if (!!story.isSensitive) {
      throw new CustomError(SENSITIVE_STORY_CANNOT_BE_PUBLISHED_ERROR, {
        error: 'sensitive story cannot be published - function publishStory',
      });
    }

    if (!includesTranslatableContent(story.translations)) {
      throw new CustomError(TRANSLATIONS_ARE_NEEDED, {
        error: 'machine-translated content id needed - function publishStory',
      });
    }

    return this.storyRepository
      .update(story.id, {
        status: STORY_STATUS.PUBLISHED,
        statusChangedByUserId: moderatorId,
        publishedAt: !story.publishedAt ? new Date() : story.publishedAt,
      })
      .catch(() => {
        throw new CustomError(STORY_UPDATE_ERROR, {
          error: 'story not published - function publishStory',
        });
      });
  }

  async removeStory(id: string): Promise<{ success: boolean }> {
    const story = await this.storyService.checkThatStoryExist(
      { id },
      'removeStory',
      ['organisations'],
    );
    const res = await this.storyRepository.remove(story);

    if (res) {
      if (story?.organisations?.length > 0) {
        this.airTableOrganisationService.syncNumberOfStoriesToAirtable(
          story.organisations,
        );
      }
      return { success: true };
    }

    return { success: false };
  }

  private async updatePinnedMessages(
    storyId: string,
    channel: CHANNEL_CONSTANTS,
    pinnedMessageIds: number[],
  ): Promise<{ status: boolean; isValid: boolean }> {
    const story = await this.storyRepository.findStoryByIdAndParams(storyId, {
      withDetails: true,
      channel,
    });

    let conversation: StoryConversationEntity;

    if (story.conversation && story.channel !== CHANNEL_CONSTANTS.IVRR) {
      conversation = story.conversation;
    }

    if (!conversation) return { status: false, isValid: false };

    const messages = await this.storyService.chooseChannelMessages(
      story.conversationId,
      channel,
    );

    const messagesShouldBeRepined = this.messagesShouldBeRepined(
      messages,
      pinnedMessageIds,
    );

    if (!messagesShouldBeRepined) {
      return { status: false, isValid: false };
    }

    for (const message of messages) {
      const shouldBePinned = pinnedMessageIds.includes(message.id);

      if (channel === CHANNEL_CONSTANTS.SMS) {
        await this.messageRepository.save({
          ...message,
          isPinned: shouldBePinned,
        });
      } else {
        await this.messengerMessageRepository.save({
          ...message,
          isPinned: shouldBePinned,
        });
      }
    }

    return {
      status: true,
      isValid: pinnedMessageIds.every((value) =>
        messages.map((item) => item.id).includes(value),
      ),
    };
  }

  messagesShouldBeRepined(
    messages: Array<MessengerMessageEntity | MessageEntity>,
    newPinnes: number[],
  ): boolean {
    const actualPinnes = messages
      .filter((message) => message.isPinned)
      .map((message) => message.id);
    const difference = actualPinnes.filter(
      (value) => !newPinnes.includes(value),
    );

    return !!difference.length || actualPinnes.length !== newPinnes.length;
  }

  async checkStoryAndReject(
    storyId: string,
    rejectContent: RejectContentDto,
    user?: UserEntity,
    notify: boolean = true,
  ) {
    checkRejectReason(rejectContent);

    const { reasonIds } = rejectContent;
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'rejectStory',
      [
        'recipient',
        'user',
        'conversation',
        'conversation.smsMessages',
        'conversation.ivrrMessages',
        'conversation.messengerMessages',
        'country',
        'language',
      ],
    );

    let rejectReasons: RejectReasonEntity[];
    if (reasonIds?.length > 0) {
      rejectReasons = await this.rejectReasonService.findByIdsOrFail(reasonIds);
    }

    this.validateReasonsForChannels(story, rejectReasons);

    const result = await this.rejectStory(
      user ? user?.id : '',
      story,
      rejectContent,
      rejectReasons,
    );
    const success = !!result?.id;

    if (success && notify) {
      this.handleActionsAfterRejection(story, rejectContent, rejectReasons);
    }

    return success;
  }

  private validateReasonsForChannels(
    story: StoryEntity,
    rejectReasons: RejectReasonEntity[],
  ): void {
    if (
      (story.channel === CHANNEL_CONSTANTS.IVRR &&
        this.checkIfRejectReasonContainsCode(
          rejectReasons,
          REJECT_REASON_CODE.OTHER,
        )) ||
      (story.channel !== CHANNEL_CONSTANTS.IVRR &&
        this.checkIfRejectReasonContainsCode(
          rejectReasons,
          REJECT_REASON_CODE.POOR_AUDIO_QUALITY,
        ))
    ) {
      throw new BadRequestException(BAD_STORY_CHANNEL);
    }
  }

  private checkIfRejectReasonContainsCode(
    rejectReasons: RejectReasonEntity[],
    code: string,
  ): boolean {
    return !!rejectReasons.find((reason) => reason.code === code);
  }

  private handleSMSRejection(story: StoryEntity): void {
    const provider = story.conversation?.provider;
    if (!provider) {
      throw new CustomError(PROVIDER_NOT_FOUND, {
        error: 'No provider for checkToRemovePhoneAfterStoryReject',
      });
    }

    lastValueFrom(
      this.clientProxy.send(
        { cmd: `${provider}_checkToRemovePhoneAfterStoryReject` },
        {
          phone: story.recipient?.phone,
          storyId: story.id,
          loopPhone: story.conversation.serviceNumber,
          country: story.country.code,
        },
      ),
    ).catch((error) => {
      throw new CustomError(error.message, error.error);
    });
  }

  async handleActionsAfterRejection(
    story: StoryEntity,
    rejectContent: RejectContentDto,
    rejectReasons: RejectReasonEntity[],
  ): Promise<void> {
    this.storyNotificationService.sendNotificationsAfterRejectingStory(
      story,
      rejectContent,
    );

    if (story.channel === CHANNEL_CONSTANTS.SMS) {
      this.handleSMSRejection(story);
    }

    if (story.channel === CHANNEL_CONSTANTS.IVRR) {
      await this.ivrrService.prepareRejectedStoryCall(story, rejectReasons);
    }

    if (story.recipient?.communicatorId) {
      await this.messengerService.sendStoryStatus(
        story,
        StoryStatus.REJECTED,
        this.messengerService.prepareNotificatonReasonText(rejectContent),
      );
    }
  }

  async handleBulkAssignStories(
    story_ids: AssignStoriesDTO,
    moderator_id: string,
  ) {
    return await this.storyRepository
      .createQueryBuilder()
      .update(StoryEntity)
      .set({ assigned_moderator_id: moderator_id })
      .where({ id: In(story_ids.storyIds) })
      .execute();
  }

  getStoriesBySameRecipient(
    phone: string,
    email: string,
    storyId: string,
  ): Promise<OtherStoriesBySameRecipientRO[]> {
    const whereConditions = [];
    if (phone) {
      whereConditions.push({ recipient: { phone }, id: Not(storyId) });
    }
    if (email) {
      whereConditions.push({ recipient: { email }, id: Not(storyId) });
    }
    if (!whereConditions.length) return Promise.resolve([]);
    return this.storyRepository.find({
      where: whereConditions,
      relations: ['translations'],
      select: ['id', 'status', 'createdAt']
    });
  }


  getOlderStories() {
    return this.storyRepository.find({
      where: {
        createdAt: Between(new Date('2023-03-12'), new Date('2025-05-01')),
        status: STORY_STATUS.SENT_TO_CASE_MANAGER,
      },
    });
  }
}
