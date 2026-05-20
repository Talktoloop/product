import { Injectable, BadRequestException } from '@nestjs/common';
import { StoryEntity } from '../entity/story.entity';
import { StoryRepository } from '../repository/story.repository';
import { StoryVoteRepository } from '../repository/story-vote.repository';
import { CustomError, NO_STORY, STORY_ADD_ERROR, STORY_STATUS, STORY_INCORRECT_STATUS, calculateNumberOfSubstringsByDivider } from '@ourloop/shared';
import { StoryViewRepository } from '../repository/story-view.repository';
import { DIFFICULTY_VALUE } from '../../common/types';
import { AddStoryDto } from '../request/dto/add-story.dto';
import { v4 as uuidv4 } from 'uuid';
import { validate as uuidValidate } from 'uuid';
import { CategoryEntity } from '../../category/entity/category.entity';
import { CategoryService } from '../../category/category.service';
import { OrganisationService } from '../../organisation/organisation.service';
import { DifficultyService } from '../../lexicon/service/difficulty.service';
import { MaternityStatusService } from '../../lexicon/service/maternity-status.service';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { DifficultyEntity } from '../../lexicon/entity/difficulty.entity';
import { MaternityStatusEntity } from '../../lexicon/entity/maternity-status.entity';
import { UserEntity } from '../../user/entity/user.entity';
import { UpdateStoryDto } from '../request/dto/update-story.dto';
import { ThematicEntity } from '../../lexicon/entity/thematic.entity';
import { ThematicService } from '../../lexicon/service/thematic.service';
import { LanguageService } from '../../language/language.service';
import { StoryFilterAndOrderDto } from '../request/dto/story-filter-and-order.dto';
import { MARKED_AS_SENSITIVE_BY } from '../../common/constant/marked-as-sensitive.constant';
import { CountryService } from '../../country/service/country.service';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { In } from 'typeorm';
import { StoryTranslationRepository } from '../repository/story-translation.repository';
import { StoryOrderEnum } from '../../common/types';
import { CountryEntity } from '../../country/entity/country.entity';
import { StoryRecipientEntity } from '../entity/story-recipient.entity';
import { StoryRecipientRepository } from '../repository/story-recipient.repository';
import { StoryAdministrativeDataRepository } from '../repository/story-administrative-data.repository';
import { StoryAdministrativeDataEntity } from '../entity/story-administrative-data.entity';
import { AdministrativeDataService } from '../../country/service/administrative-data.service';
import { MessageService } from '../../sms/service/message.service';
import { MessengerService } from '../../messenger/service/messenger.service';
import { MessageEntity } from '../../sms/entity/message.entity';
import { MessengerMessageEntity } from '../../messenger/entity/messenger-message.entity';
import { narrowDownIds, generateMD5 } from '../../common/helpers';
import { CountryAdministrativeDataRepository } from './../../country/repository/country-administrative-data.repository';
import { AirTableOrganisationService } from '../../airtable-client/service/airtable-organisation.service';
import { ExportService } from './export.service';
import { StoryOrganisationTagRepository } from '../repository/story-organisation-tag.repository';
import { FeedbackVulnerabilityFactorsService } from './feedback-vulnerability-factors.service';
import { NotificationService } from '../../notification/service/notification.service';
import { parseStringArrayToInt } from '../../common/helpers';

interface IOperations {
  isUrgent: boolean;
  isMinority: boolean;
  categories?: Array<CategoryEntity>;
  difficulties?: Array<DifficultyEntity>;
  maternityStatus?: Array<MaternityStatusEntity>;
  organisations?: Array<OrganisationEntity>;
  thematics?: Array<ThematicEntity>;
  vulnerabilityFactors?: (string | number)[];
}

@Injectable()
export class StoryService {
  constructor(
    private readonly storyRepository: StoryRepository,
    private readonly categoryService: CategoryService,
    private readonly thematicService: ThematicService,
    private readonly organisationService: OrganisationService,
    private readonly difficultyService: DifficultyService,
    private readonly maternityStatusService: MaternityStatusService,
    private readonly storyVoteRepository: StoryVoteRepository,
    private readonly storyOrganisationTagRepository: StoryOrganisationTagRepository,
    private readonly storyViewRepository: StoryViewRepository,
    private readonly storyTranslationRepository: StoryTranslationRepository,
    private readonly storyRecipientRepository: StoryRecipientRepository,
    private readonly languageService: LanguageService,
    private readonly countryService: CountryService,
    private readonly storyAdministrativeDataRepository: StoryAdministrativeDataRepository,
    private readonly administrativeDataService: AdministrativeDataService,
    private readonly messageService: MessageService,
    private readonly messengerService: MessengerService,
    private readonly countryAdministrativeDataRepository: CountryAdministrativeDataRepository,
    private readonly airTableOrganisationService: AirTableOrganisationService,
    private readonly exportService: ExportService,
    private readonly feedbackVulnerabilityFactorsService: FeedbackVulnerabilityFactorsService,
    private readonly notificationService: NotificationService,
  ) { }
  readonly duplicateCountriesExcluded = [250];

  async getNumberOfAdministrativeDataConnectionsByCountryId(
    countryId: number,
  ): Promise<number> {
    return this.storyRepository
      .getAdministrativeDataIdsByCountryId(countryId)
      .then((result) => result.length);
  }

  async checkThatStoryExist(
    params: { id?: string; channel?: CHANNEL_CONSTANTS },
    nameOfFunction: string,
    relations?: string[],
  ): Promise<StoryEntity> {
    const story = await this.storyRepository.findOne({
      where: params,
      relations: relations ?? [],
    });

    if (!story) {
      throw new CustomError(NO_STORY, {
        error: `story doesn\'t exist - function ${nameOfFunction}`,
      });
    }
    return story;
  }

  async addNewVote(
    id: string,
    hash: string,
    user?: UserEntity,
  ): Promise<boolean> {
    const story = await this.checkThatStoryExist({ id }, 'addNewVote');
    return await this.storyVoteRepository.saveVoteIfNotExits(story, hash, user);
  }

  async removeVote(
    storyId: string,
    hash: string,
    user?: UserEntity,
  ): Promise<boolean> {
    const story = await this.checkThatStoryExist({ id: storyId }, 'removeVote');
    return await this.storyVoteRepository.removeVoteIfNotExits(
      story,
      hash,
      user,
    );
  }

  getCommonStoryIds(
    selectedStoryIds: string[],
    newStoryIds: string[],
  ): string[] {
    return selectedStoryIds
      ? selectedStoryIds.filter((value) => {
        return newStoryIds.indexOf(value) !== -1;
      })
      : newStoryIds;
  }

  getNotCommonStoryIds(
    selectedStoryIds: string[],
    newStoryIds: string[],
  ): string[] {
    return selectedStoryIds
      ? selectedStoryIds.filter((value) => {
        return newStoryIds.indexOf(value) === -1;
      })
      : newStoryIds;
  }

  async findStoryIdsByParams(
    params: StoryFilterAndOrderDto,
    isExport = false,
    statuses: STORY_STATUS[] = [STORY_STATUS.PUBLISHED],
  ): Promise<string[]> {
    if (params.country) {
      params.countryIds = await this.countryService
        .getCountries({
          where: {
            code: In(params.country.toString().split(',')),
          },
        })
        .then((result) => result.map((item) => item.id));

      if (params.countryIds.length === 0) {
        return [];
      }

      delete params.country;
    }

    if (params.organisation) {
      params.storyIds = await this.findStoryIdsByOrganisationIdsOrGetFromCache(
        params.organisation.toString(),
        isExport,
      );

      delete params.organisation;
    }

    if (params.difficulty) {
      const storyIdsByDifficulty =
        await this.findStoryIdsByDifficultyIdsOrGetFromCache(
          params.difficulty.toString(),
          isExport,
        );

      params.storyIds = this.getCommonStoryIds(
        params.storyIds,
        storyIdsByDifficulty,
      );

      delete params.difficulty;
    }

    if (params.regionId) {
      const storyIdsByRegionsIds =
        await this.findStoryIdsByRegionIdsOrGetFromCache(
          params.regionId.toString(),
          params.countryIds,
          isExport,
        );

      params.storyIds = this.getCommonStoryIds(
        params.storyIds,
        storyIdsByRegionsIds,
      );

      delete params.regionId;
    }

    if (params.q) {
      const storyIdsByContent = await this.storyTranslationRepository
        .getStoriesByPhrase(params.q)
        .then((result) => result.map((item) => item.storyId));

      params.storyIds = this.getCommonStoryIds(
        params.storyIds,
        storyIdsByContent,
      );

      delete params.q;
    }

    if (params.thematic) {
      const storyIdsByThematicArea =
        await this.findStoryIdsByThematicAreaIdsOrGetFromCache(
          params.thematic.toString(),
          isExport,
        );

      params.storyIds = this.getCommonStoryIds(
        params.storyIds,
        storyIdsByThematicArea,
      );

      delete params.thematic;
    }

    if (params.minority !== undefined) {
      const storyIdsByMinority = await this.findStoryIdsByMinorityOrGetFromCache(
        params.minority.toString(),
        isExport,
      );

      params.storyIds = this.getCommonStoryIds(
        params.storyIds,
        storyIdsByMinority,
      );

      delete params.minority;
    }

    if (params.searchTerm) {
      const storyIdsBySearchTerm = await this.findStoryIdsBySearchTermOrGetFromCache(
        params.searchTerm,
        isExport,
      );

      params.storyIds = this.getCommonStoryIds(
        params.storyIds,
        storyIdsBySearchTerm
      );

      delete params.searchTerm;
    }

    if (params.language) {
      const storyIdsByLanguage = await this.findStoryIdsByLanguageOrGetFromCache(
        params.language.toString(),
        isExport,
      );

      params.storyIds = this.getCommonStoryIds(
        params.storyIds,
        storyIdsByLanguage
      );

      delete params.language;
    }

    if (params.vulnerabilityFactors) {
      const storyIdsByVulnerabilityFactors = await this.findStoryIdsByVulnerabilityFactorsOrGetFromCache(
        params.vulnerabilityFactors.toString(),
        isExport,
      );

      params.storyIds = this.getCommonStoryIds(
        params.storyIds,
        storyIdsByVulnerabilityFactors,
      );

      delete params.vulnerabilityFactors;
    }

    if (params.storyIds?.length === 0) {
      return [];
    }

    let storyIds = await this.findStoryIdsByParamsOrGetFromCache(
      params,
      isExport,
      statuses,
    );

    if (
      params.withSensitiveStories !== undefined &&
      !params.withSensitiveStories
    ) {
      const storyIdForSensitiveStories =
        await this.findSensitiveStoriesOrGetFromCache(isExport);

      storyIds = this.getNotCommonStoryIds(
        storyIds,
        storyIdForSensitiveStories,
      );

      delete params.withSensitiveStories;
    }

    return storyIds;
  }

  async findStoryIdsByOrganisationIdsOrGetFromCache(
    organisationIds: string,
    isExport: boolean,
  ): Promise<string[]> {
    const md5 = generateMD5(organisationIds);
    const prefix = `story-ids-by-organisation-${md5}`;
    let fileName: string;
    let storyIds = [];

    if (isExport) {
      fileName = this.exportService.findCacheFile(prefix);
    }

    if (fileName) {
      storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
    } else {
      storyIds = await this.storyRepository
        .findStoryIdsByOrganisationIds(organisationIds.split(','))
        .then((result) => result.map((item) => item.story_id));

      if (isExport) {
        this.exportService.saveCacheFile(
          this.exportService.generateFileName(prefix, 'txt'),
          JSON.stringify(storyIds),
        );
      }
    }

    return storyIds;
  }

  async findStoryIdsByDifficultyIdsOrGetFromCache(
    difficultyIds: string,
    isExport: boolean,
  ): Promise<string[]> {
    const md5 = generateMD5(difficultyIds);
    const prefix = `story-ids-by-difficulty-${md5}`;
    let fileName: string;
    let storyIds = [];

    if (isExport) {
      fileName = this.exportService.findCacheFile(prefix);
    }

    if (fileName) {
      storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
    } else {
      storyIds = await this.storyRepository
        .findStoryIdsByDifficultyIds(
          difficultyIds
            .toString()
            .split(',')
            .map((value) => parseInt(value)),
        )
        .then((result) => result.map((item) => item.story_id));

      if (isExport) {
        this.exportService.saveCacheFile(
          this.exportService.generateFileName(prefix, 'txt'),
          JSON.stringify(storyIds),
        );
      }
    }

    return storyIds;
  }

  async findStoryIdsByMinorityOrGetFromCache(
    minority: string,
    isExport: boolean,
  ): Promise<string[]> {
    const md5 = generateMD5(minority);
    const prefix = `story-ids-by-minority-${md5}`;
    let fileName: string;
    let storyIds = [];

    if (isExport) {
      fileName = this.exportService.findCacheFile(prefix);
    }

    if (fileName) {

      storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
    } else {

      storyIds = await this.storyRecipientRepository
        .findStoryIdsByMinority(minority === '1')
        .then((result) => result.map((item) => item.storyId));

      if (isExport) {
        this.exportService.saveCacheFile(
          this.exportService.generateFileName(prefix, 'txt'),
          JSON.stringify(storyIds),
        );
      }
    }

    return storyIds;
  }

  async findStoryIdsByLanguageOrGetFromCache(
    languages: string,
    isExport: boolean,
  ): Promise<string[]> {
    const md5 = generateMD5(languages);
    const prefix = `story-ids-by-language-${md5}`;
    let fileName: string;
    let storyIds = [];

    if (isExport) {
      fileName = this.exportService.findCacheFile(prefix);
    }

    if (fileName) {

      storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
    } else {

      storyIds = await this.storyRepository
        .findStoryIdsByLanguageIds(
          languages.split(',').map((value) => value),
        )
        .then((result) => result.map((item) => item.id));

      if (isExport) {
        this.exportService.saveCacheFile(
          this.exportService.generateFileName(prefix, 'txt'),
          JSON.stringify(storyIds),
        );
      }
    }

    return storyIds;
  }

  async findStoryIdsByVulnerabilityFactorsOrGetFromCache(
    vulnerabilityFactors: string,
    isExport: boolean,
  ): Promise<string[]> {
    const md5 = generateMD5(vulnerabilityFactors);
    const prefix = `story-ids-by-vulnerability-factors-${md5}`;
    let fileName: string;
    let storyIds: string[] = [];

    if (isExport) {
      fileName = this.exportService.findCacheFile(prefix);
    }

    if (fileName) {
      storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
    } else {
      storyIds = await this.feedbackVulnerabilityFactorsService
        .findStoryIdsByVulnerabilityFactorIds(
          vulnerabilityFactors.split(','),
        );

      if (isExport) {
        this.exportService.saveCacheFile(
          this.exportService.generateFileName(prefix, 'txt'),
          JSON.stringify(storyIds),
        );
      }
    }

    return storyIds;
  }

  async findStoryIdsByRegionIdsOrGetFromCache(
    regions: string,
    countryIds: number[],
    isExport: boolean,
  ): Promise<string[]> {
    const md5 = generateMD5(regions);
    const prefix = `story-ids-by-region-${md5}`;
    let fileName: string;
    let storyIds = [];

    if (isExport) {
      fileName = this.exportService.findCacheFile(prefix);
    }

    if (fileName) {
      storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
    } else {
      storyIds = await this.storyAdministrativeDataRepository
        .find({
          where: {
            administrativeAreaId: In(
              regions.split(',').map((value) => parseInt(value)),
            ),
          },
        })
        .then((result) => result.map((item) => item.storyId));

      const administrativeDataCountries = [];
      const regionIds = regions.split(',');

      for (const regionId of regionIds) {
        if (!isNaN(parseInt(regionId))) {
          const countryAdministrativeData =
            await this.countryAdministrativeDataRepository.findOne({
              where: { id: parseInt(regionId) },
            });
          administrativeDataCountries.push(
            countryAdministrativeData?.countryId,
          );
        }
      }

      const countryToAdd = countryIds.filter(
        (id) => !administrativeDataCountries.includes(id),
      );

      for (const country of countryToAdd) {
        await this.storyRepository
          .find({
            where: {
              countryId: country,
              status: STORY_STATUS.PUBLISHED,
            },
          })
          .then((result) => result.map((item) => storyIds.push(item.id)));
      }

      if (isExport) {
        this.exportService.saveCacheFile(
          this.exportService.generateFileName(prefix, 'txt'),
          JSON.stringify(storyIds),
        );
      }
    }

    return storyIds;
  }

  async findStoryIdsByThematicAreaIdsOrGetFromCache(
    thematicAreas: string,
    isExport: boolean,
  ): Promise<string[]> {
    const md5 = generateMD5(thematicAreas);
    const prefix = `story-ids-by-thematic-area-${md5}`;
    let fileName: string;
    let storyIds = [];

    if (isExport) {
      fileName = this.exportService.findCacheFile(prefix);
    }

    if (fileName) {
      storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
    } else {
      storyIds = await this.storyRepository
        .findStoryIdsByThematicAreaIds(
          thematicAreas.split(',').map((value) => value),
        )
        .then((result) => result.map((item) => item.story_id));

      if (isExport) {
        this.exportService.saveCacheFile(
          this.exportService.generateFileName(prefix, 'txt'),
          JSON.stringify(storyIds),
        );
      }
    }

    return storyIds;
  }

  async findStoryIdsBySearchTermOrGetFromCache(
    searchTerm: string,
    isExport: boolean,
  ): Promise<string[]> {
    const md5 = generateMD5(searchTerm);
    const prefix = `story-ids-by-search-term-${md5}`;
    let fileName: string;
    let storyIds: string[] = [];

    if (isExport) {
      fileName = this.exportService.findCacheFile(prefix);
    }

    if (fileName) {
      storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
    } else {

      storyIds = await this.storyTranslationRepository
        .findStoryIdsBySearchTerm(searchTerm)
        .then((result) => result.map((item) => item.storyId));

      if (isExport) {
        this.exportService.saveCacheFile(
          this.exportService.generateFileName(prefix, 'txt'),
          JSON.stringify(storyIds),
        );
      }
    }

    return storyIds;
  }

  async findSensitiveStoriesOrGetFromCache(
    isExport: boolean,
  ): Promise<string[]> {
    const prefix = 'sensitive-story-ids';
    let fileName: string;
    let storyIds = [];

    if (isExport) {
      fileName = this.exportService.findCacheFile(prefix);
    }

    if (fileName) {
      storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
    } else {
      storyIds = await this.storyRepository
        .findSensitiveStories()
        .then((result) => result.map((item) => item.id));

      if (isExport) {
        this.exportService.saveCacheFile(
          this.exportService.generateFileName(prefix, 'txt'),
          JSON.stringify(storyIds),
        );
      }
    }

    return storyIds;
  }

  async findStoryIdsByParamsOrGetFromCache(
    params: StoryFilterAndOrderDto,
    isExport: boolean,
    statuses: STORY_STATUS[],
  ): Promise<string[]> {
    const md5 = generateMD5(JSON.stringify(params));
    const prefix = `story-ids-by-params-${md5}`;
    let fileName: string;
    let storyIds = [];

    if (isExport) {
      fileName = this.exportService.findCacheFile(prefix);
    }

    if (fileName) {
      storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
    } else {
      storyIds = await this.storyRepository
        .findStoryIdsByParams(params, statuses)
        .then(async (result) => result.map((item) => item.id));

      if (isExport) {
        this.exportService.saveCacheFile(
          this.exportService.generateFileName(prefix, 'txt'),
          JSON.stringify(storyIds),
        );
      }
    }

    return storyIds;
  }

  async findDetailsByStoryIds(
    params: StoryFilterAndOrderDto,
    storyIds: string[],
  ): Promise<Record<string, string>[]> {
    storyIds = narrowDownIds(storyIds, params.page, params.limit);

    if (storyIds.length === 0) {
      return [];
    }

    return this.storyRepository.findStoriesByIds(storyIds, params.order);
  }

  async findStoriesByIds(
    storyIds: string[],
  ): Promise<Record<string, string>[]> {
    if (storyIds.length === 0) {
      return [];
    }

    return this.storyRepository.findStoriesByIds(
      storyIds,
      StoryOrderEnum.NEWEST_FIRST,
    );
  }

  async findStoriesForUNExport(
    storyIds: string[],
  ): Promise<Record<string, string>[]> {
    if (storyIds.length === 0) {
      return [];
    }

    return this.storyRepository.findStoriesForUNExport(
      storyIds,
      StoryOrderEnum.NEWEST_FIRST,
    );
  }

  async findById(
    id: string,
    status?: string,
    withDetails = true,
  ): Promise<StoryEntity> {
    return this.storyRepository
      .findStoryByIdAndParams(id, { withDetails, status })
      .then((data) => {
        if (!data) {
          throw new CustomError(NO_STORY, {
            error: "story doesn't exist - function findById",
          });
        }

        return data;
      });
  }

  async addNewView(story: StoryEntity, hash: string): Promise<boolean> {
    return this.storyViewRepository.saveViewIfNotExits(story, hash);
  }

  async setStoryAttributes(
    story: AddStoryDto | UpdateStoryDto,
  ): Promise<IOperations> {
    const operations: IOperations = { isUrgent: false, isMinority: false };

    if (story.difficulties) {
      operations.difficulties = [];
      for (const difficultyId of story.difficulties) {
        operations.difficulties.push(
          await this.difficultyService.findByIdOrFail(difficultyId),
        );
      }
    } else {
      operations.difficulties = null;
    }
    if (story.organisations) {
      operations.organisations = [];
      for (const organisationIdOrName of [...new Set(story.organisations)]) {
        if (uuidValidate(organisationIdOrName)) {
          operations.organisations.push(
            await this.organisationService.findByIdOrFail(organisationIdOrName),
          );
        } else {
          const org = await this.organisationService.findByNameOrCreate(
            organisationIdOrName,
            true,
          );
          operations.organisations.push(org);
        }

      }
    } else {
      operations.organisations = null;
    }

    if (story.categories) {
      operations.categories = [];
      for (const categoryId of story.categories) {
        operations.categories.push(
          await this.categoryService.findByIdOrFail(categoryId),
        );
      }
    } else {
      operations.categories = null;
    }

    if (story.maternityStatus) {
      operations.maternityStatus = [];
      for (const maternityStatusID of story.maternityStatus) {
        operations.maternityStatus.push(
          await this.maternityStatusService.findByIdOrFail(maternityStatusID),
        );
      }
    } else {
      operations.maternityStatus = null;
    }

    if (story.thematics) {
      operations.thematics = [];
      for (const thematicsID of story.thematics) {
        operations.thematics.push(
          await this.thematicService.findByIdOrFail(thematicsID),
        );
      }
    } else {
      operations.thematics = null;
    }

    if (story.vulnerabilityFactors) {
      const stringIds = story.vulnerabilityFactors.map(id => id.toString());
      operations.vulnerabilityFactors = parseStringArrayToInt(stringIds).filter(id => id !== -1);
    } else {
      operations.vulnerabilityFactors = null;
    }

    return operations;
  }

  async addStory(
    languageId: number,
    data: AddStoryDto & Partial<StoryRecipientEntity>,
    hash?: string,
    user?: UserEntity,
  ): Promise<StoryEntity> {
    let country: CountryEntity;

    if (data.country) {
      country = await this.countryService.findByCodeOrFail(data.country);
    }

    if (Number.isInteger(data.countryId)) {
      country = await this.countryService.findByIdOrFail(data.countryId);
    }

    if (!data.countryId && Number.isInteger(data.regionId)) {
      country = await this.administrativeDataService.getCountryByRegionId(
        data.regionId,
      );
    }

    let operations: IOperations = { isUrgent: false, isMinority: false };

    try {
      operations = await this.setStoryAttributes(data);

      const markedAsSensitiveByRole = data.isSensitive
        ? MARKED_AS_SENSITIVE_BY.AUTHOR
        : undefined;

      const updatedOrSaveBody: Partial<StoryRecipientEntity> = {
        email: data.email,
        phone: data.phone,
        nickname: data.authorNickname,
        firstName: data.firstName,
        lastName: data.lastName,
        genderByUser: data.genderByUser,
        genderByModerator: data.gender,
        ageByUser: data.ageByUser,
        ageByModerator: data.age,
        difficultyByUser: data.difficultyByUser,
        difficultyByModerator: data.difficulty
          ? DIFFICULTY_VALUE[data.difficulty.toUpperCase()]
          : null,
        communicatorId: data.communicatorId,
        userWantContact:
          typeof data.sensitiveStoryContactConsent === 'boolean'
            ? data.sensitiveStoryContactConsent
            : data.userWantContact,
        additionalContactDetails: data.additionalContactDetails,
        disabilitiesOtherExplanation: data.disabilitiesOtherExplanation,
      };
      let recipient: StoryRecipientEntity | undefined;

      const where = {};
      if (data.countryId && !this.duplicateCountriesExcluded.includes(data.countryId)) {
        if (data.phone && data.phone.length > 0) where['phone'] = data.phone;
        if (data.email && data.email.length > 0) where['email'] = data.email;
        if (where['phone'] || where['email']) {
          recipient = await this.storyRecipientRepository.findOne({ where });
          if (recipient) updatedOrSaveBody.id = recipient.id;
        }
      }
      recipient = await this.storyRecipientRepository.save(updatedOrSaveBody);

      const story = await this.storyRepository.save({
        id: uuidv4(),
        place: data.place,
        recipientId: recipient.id,
        status: data.status ?? STORY_STATUS.NOT_STARTED,
        countryId: country?.id,
        organisations: operations.organisations,
        categories: operations.categories,
        maternityStatus: operations.maternityStatus,
        difficulties: operations.difficulties,
        channel: data.channel ?? undefined,
        conversationId: data.conversationId ?? undefined,
        user: user ?? null,
        languageId,
        isSensitive: data.isSensitive ?? undefined,
        markedAsSensitiveByRole,
        markedAsSensitiveByUserId: markedAsSensitiveByRole ? user?.id : null,
        translations: [
          {
            languageId,
            content: data.content,
            isOriginalContent: true,
            numberOfWords: calculateNumberOfSubstringsByDivider(
              data.content,
              ' ',
            ),
          },
        ],
      });

      if (hash) {
        await this.storyViewRepository.save({
          story,
          hash,
        });
      }

      if (data.content) {
        const language = await this.languageService.getLanguageById(languageId);
        if (language.provider) {
          this.languageService.invokeTranslation(
            story.id,
            data.content,
            languageId,
          );

          //           this.languageService.invokeTranslationViaInngest(
          //   story.id,
          //   data.content,
          //   languageId,
          // );
        }
      }

      if (operations?.organisations?.length > 0) {
        await this.airTableOrganisationService.syncNumberOfStoriesToAirtable(
          operations?.organisations,
        );
      }

      if (data.organisations?.length > 0 && operations?.organisations?.length > 0) {
        for (let i = 0; i < data.organisations.length; i++) {
          const element = data.organisations[i];
          await this.storyOrganisationTagRepository.save({ organisation: { id: element }, story: { id: story.id } })
        }
      }

      return story;
    } catch (error) {
      this.notificationService.sendFeedbackErrorSlackNotification(
        'unknown',
        error?.message || JSON.stringify(error),
      );
      throw new CustomError(STORY_ADD_ERROR, error);
    }
  }

  async findStoriesWithoutDefinedAdministrativeArea(
    countryId: number,
  ): Promise<StoryEntity[]> {
    return this.storyRepository
      .findStoriesWithoutDefinedAdministrativeArea(countryId)
      .then((result) =>
        result.filter((item) => item.storyAdministrativeData.length === 0),
      );
  }

  async saveAdministrativeArea(
    data: Partial<StoryAdministrativeDataEntity>,
  ): Promise<StoryAdministrativeDataEntity> {
    return this.storyAdministrativeDataRepository.save(data);
  }

  async checkIfModeratorMessageCanBeSent(storyId: string) {
    const story = await this.findById(storyId);

    if (
      [
        STORY_STATUS.PUBLISHED,
        STORY_STATUS.REJECTED,
        STORY_STATUS.SENT_TO_CASE_MANAGER,
      ].includes(story.status as STORY_STATUS)
    ) {
      throw new BadRequestException(STORY_INCORRECT_STATUS);
    }
  }

  async chooseChannelMessages(
    conversationId: number,
    channel: CHANNEL_CONSTANTS,
  ): Promise<MessageEntity[] | MessengerMessageEntity[]> {
    if (channel === CHANNEL_CONSTANTS.SMS) {
      return this.messageService.getSmsMessagesByConversationId(conversationId);
    }

    if (
      [
        CHANNEL_CONSTANTS.MESSENGER,
        CHANNEL_CONSTANTS.WHATSAPP,
        CHANNEL_CONSTANTS.TELEGRAM,
      ].includes(channel)
    ) {
      return this.messengerService.getMessengerMessagesByConversationId(
        conversationId,
      );
    }
  }

  async sanitizeSearchTerm(term: string): Promise<string> {
    const sanitizedTerm = term.replace(/[^a-zA-Z0-9 ]/g, '');
    if (!sanitizedTerm) return undefined;

    return sanitizedTerm.includes(' ') ? `"${sanitizedTerm}"` : `${sanitizedTerm}`;
  }
}
