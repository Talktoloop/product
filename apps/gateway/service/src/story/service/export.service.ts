import {
  Inject,
  Injectable,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { NotificationService } from '../../notification/service/notification.service';
import { LibraryResponse } from 'node-mailjet';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import {
  EMAIL_TEMPLATES,
  STORY_STATUS,
  LANGUAGE,
  GET_STORY_FAILED,
  _omit,
} from '@ourloop/shared';
import { format, differenceInMinutes } from 'date-fns';
import {
  getKeyByValue,
  upperCaseFirst,
  narrowDownIds,
} from '../../common/helpers';
import { ConfigService } from '@nestjs/config';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { StoryRepository } from '../repository/story.repository';
import { StoryVoteRepository } from '../repository/story-vote.repository';
import { AGE_VALUE, GENDER_VALUE } from '../../common/types';
import * as AirTable from 'airtable-node';
import { ExternalData } from '../type/external-data.type';
import { staticConfig } from '../../config/default';
import { ExportedStory } from '../type/exported-story.type';
import { PaginationWithOrderAndFilterDto } from '../../common/dto/pagination-with-order-and-filter.dto';
import { LanguageEntity } from '../../language/entity/language.entity';
import { LanguageService } from '../../language/language.service';
import { ExportToJsonDTO } from '../request/dto/export-to-json.dto';
import { CategoryService } from '../../category/category.service';
import { DifficultyService } from '../../lexicon/service/difficulty.service';
import { OrganisationService } from '../../organisation/organisation.service';
import { ThematicService } from '../../lexicon/service/thematic.service';
import { VulnerabilityFactorsRepository } from '../../lexicon/repository/vulnerability-factors.repository';
import { FilterDto } from '../../common/dto/filter.dto';
import { generateMD5 } from '../../common/helpers';
import {
  DataToExport,
  CategoryToExport,
  DifficultyToExport,
  OrganisationToExport,
  ThematicAreaToExport,
  StoryRecipientToExport,
  VulnerabilityFactorToExport,
  CommentToExport,
  StoryVoteCountToExport,
} from '../type/data-to-export.type';
import { StoryAdministrativeDataRepository } from '../repository/story-administrative-data.repository';
import { CountryService } from '../../country/service/country.service';
import { StoryRecipientRepository } from '../repository/story-recipient.repository';
import { UserExportCsvActivityRepository } from '../../user/repository/user-export-csv-activity.repository';
import { UserExportCsvActivityEntity } from '../../user/entity/user-export-csv-activity.entity';
import { Connection, QueryRunner } from 'typeorm';
import { CommentRepository } from '../../comment/repository/comment.repository';
import { COMMENT_STATUS } from '@ourloop/shared';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { StoryEntity } from '../entity/story.entity';
import { StoryTranslationEntity } from '../entity/story-translation.entity';
import { AdministrativeDataToExport } from '../type/administrative-data-to-export.type';
import { StoryRecipientEntity } from '../entity/story-recipient.entity';
import { csvHeaders } from '../type/export-united.type';
import { DISABILITY } from '../enum/disability.enum';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';

@Injectable()
export class ExportService {
  private readonly logger = new Logger(ExportService.name);

  constructor(
    private readonly thematicAreaService: ThematicService,
    private readonly difficultyService: DifficultyService,
    private readonly organisationService: OrganisationService,
    private readonly categoryService: CategoryService,
    private readonly languageService: LanguageService,
    private readonly storyRepository: StoryRepository,
    private readonly storyVoteRepository: StoryVoteRepository,
    private readonly notificationService: NotificationService,
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    @Inject(DI_CONSTANTS.AIRTABLE)
    private readonly airTable: AirTable,
    private readonly storyAdministrativeDataRepository: StoryAdministrativeDataRepository,
    private readonly countryService: CountryService,
    private readonly storyRecipientRepository: StoryRecipientRepository,
    private readonly userExportCsvActivityRepository: UserExportCsvActivityRepository,
    private readonly connection: Connection,
    private readonly commentRepository: CommentRepository,
    private readonly vulnerabilityFactorsRepository: VulnerabilityFactorsRepository,
  ) { }

  makeDateReadable(date: Date, dateFormat?: string): unknown {
    return date
      ? format(new Date(date), dateFormat ?? 'yyyy-MM-dd hh:mm:ss XXX')
      : date;
  }

  makeAsReadable(key: string): string {
    return staticConfig.dataExport.readableNames[key] ?? key;
  }

  clearCSVData(value: string): string {
    return value
      ? value
        .replace(/,/g, ' ')
        .replace(/\n/g, ' ')
        .replace(/\t/g, ' ')
        .replace(/\//g, '-')
      : value;
  }

  // Renders the comment author as "Nickname (Organisation)" using only the
  // public, pseudonymous identity (no account real names — the CSV is public).
  private formatCommentAuthor(meta: CommentToExport): string {
    const name = meta.nickname?.trim() || 'Anonymous';

    return meta.organisationName ? `${name} (${meta.organisationName})` : name;
  }

  // Collapses the per-(comment, language) rows into one "[date] Author: text"
  // entry per comment (preferring the comment's original language), then joins
  // all of a story's comments/replies chronologically into a single cell.
  buildCommentTextByStory(comments: CommentToExport[]): Record<string, string> {
    const grouped: Record<
      string,
      { meta: CommentToExport; contentByLang: Record<number, string> }
    > = {};

    for (const row of comments) {
      if (!grouped[row.commentId]) {
        grouped[row.commentId] = { meta: row, contentByLang: {} };
      }

      if (row.content != null && row.translationLanguageId != null) {
        grouped[row.commentId].contentByLang[row.translationLanguageId] =
          row.content;
      }
    }

    const perStory: Record<string, { createdAt: Date; text: string }[]> = {};

    for (const commentId in grouped) {
      const { meta, contentByLang } = grouped[commentId];
      const content =
        contentByLang[meta.commentLanguageId] ??
        Object.values(contentByLang)[0] ??
        '';

      if (!content) {
        continue;
      }

      const date = meta.createdAt
        ? format(new Date(meta.createdAt), 'yyyy-MM-dd')
        : '';
      const replyMarker = meta.parentCommentId ? ' (reply)' : '';
      const text = `[${date}] ${this.formatCommentAuthor(
        meta,
      )}${replyMarker}: ${content}`;

      (perStory[meta.storyId] ??= []).push({ createdAt: meta.createdAt, text });
    }

    const result: Record<string, string> = {};

    for (const storyId in perStory) {
      result[storyId] = perStory[storyId]
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        )
        .map((entry) => entry.text)
        .join(' || ');
    }

    return result;
  }

  collectColumnNames(
    userLanguage: LanguageEntity,
    item: Record<string, any>,
    itemKeys: string[],
    omittedColumns: string[] = [],
  ): string[] {
    Object.keys(_omit(item, omittedColumns)).forEach((key) =>
      itemKeys.push(
        `${upperCaseFirst(this.makeAsReadable(key), false)}`.replace(
          ':language',
          upperCaseFirst(getKeyByValue(LANGUAGE, userLanguage.code)),
        ),
      ),
    );

    return [...itemKeys, this.makeAsReadable('url')];
  }

  prepareStoryColumnsToExport(
    story: ExportedStory,
    userLanguage: LanguageEntity,
    omittedColumns: string[],
    extended = true,
  ): { itemKeys: string[] } {
    const itemKeys = this.collectColumnNames(
      userLanguage,
      story,
      [],
      omittedColumns,
    );
    let columnNames = [];

    if (extended) {
      columnNames.push('');
    }

    columnNames = [...columnNames, ...itemKeys];

    if (extended) {
      columnNames = [
        ...columnNames,
        ...[
          '',
          'Sensitive Story type',
          'Organisation type',
          'Outcomes of Investigations',
          'Assistance provided',
        ],
      ];
    }

    return {
      itemKeys: columnNames,
    };
  }

  async mapData(
    data: DataToExport,
    userLanguageId: number,
    withExternalData = true,
  ): Promise<ExportedStory[]> {
    const items = [];
    const languages = await this.languageService.getLanguages();
    const storyIds = Array.from(
      new Set(
        data?.stories
          ?.filter(
            (story) => story.status === STORY_STATUS.SENT_TO_CASE_MANAGER,
          )
          .map((story) => story.id),
      ),
    );

    let externalData: ExternalData = {};

    if (withExternalData) {
      externalData = await this.findExternalData(storyIds);
    }

    if (!data?.stories) {
      return items;
    }

    const countryNames = [];

    for (const country of data.countries) {
      countryNames[country.id] = country.name;
    }

    for (const story of data.stories) {
      items[story.id] = {
        status: story.status,
        isSensitive: story.isSensitive,
        categories: [],
        country: countryNames[story.countryId] ?? null,
        district: null,
        place: story.place,
        age: null,
        gender: null,
        difficulties: [],
        thematicParents: [],
        thematicChildren: [],
        organisations: [],
        administrativeData: [],
        publishedAt: story.publishedAt,
        numberOfComments: 0,
        communityReactions: 0,
        commentsText: '',
        channel: story.channel,
        content: null,
        originalContent: null,
        originalContentLanguage: getKeyByValue(
          LANGUAGES_CONSTANTS,
          languages.find((language) => language.id === story.languageId)?.code,
          true,
        ),
        allegationTypes: externalData[story.id]?.allegationTypes,
        organisationTypes: externalData[story.id]?.organisationTypes,
        outcomesOfInvestigation:
          externalData[story.id]?.outcomesOfInvestigation,
        assistanceProvided: externalData[story.id]?.assistanceProvided,
        defaultLanguageIdForAdministrativeData: null,
        isMinority: null,
        vulnerabilityFactors: [],
      };
    }

    for (const recipient of data.storyRecipients) {
      items[recipient.storyId].isMinority = recipient.isMinority ? true : false;
    }

    for (const comment of data.comments) {
      items[comment.storyId].numberOfComments++;
    }

    // Community reactions = number of upvotes (story_vote) on the story.
    for (const vote of data.voteCounts ?? []) {
      if (items[vote.storyId]) {
        items[vote.storyId].communityReactions = Number(vote.count) || 0;
      }
    }

    // Full text of every published comment and reply, grouped per story.
    const commentTextByStory = this.buildCommentTextByStory(
      data.commentContents ?? [],
    );
    for (const storyId in commentTextByStory) {
      if (items[storyId]) {
        items[storyId].commentsText = commentTextByStory[storyId];
      }
    }

    for (const translation of data.translations) {
      if (translation.languageId === translation.storyLanguageId) {
        items[translation.storyId].originalContent = translation.content;
      }

      if (userLanguageId === translation.languageId) {
        items[translation.storyId].content = translation.content;
      }
    }

    let item;

    for (const administrativeArea of data.administrativeData) {
      item = items[administrativeArea.storyId].administrativeData.find(
        (item) => item.id === administrativeArea.id,
      );

      if (!item) {
        item = {
          names: [],
          level: administrativeArea.level,
          id: administrativeArea.id,
        };

        items[administrativeArea.storyId].administrativeData.push(item);
      }

      item.names.push({
        name: administrativeArea.name,
        languageId: administrativeArea.languageId,
      });
    }

    const categoryCodes = [];

    for (const category of data.categories) {
      categoryCodes[category.id] = category.code;
    }

    for (const item of data.storyCategories) {
      items[item.storyId].categories.push(categoryCodes[item.categoryId]);
    }

    for (const item of data.recipients) {
      items[item.storyId].age =
        item.ageByModerator !== null
          ? getKeyByValue(AGE_VALUE, item.ageByModerator)?.replace('_', ' ')
          : null;
      items[item.storyId].gender =
        item.genderByModerator !== null
          ? getKeyByValue(GENDER_VALUE, item.genderByModerator)?.replace(
            '_',
            ' ',
          )
          : null;
    }

    const difficultyCodes = [];

    for (const difficulty of data.difficulties) {
      difficultyCodes[difficulty.id] = difficulty.code;
    }

    for (const item of data.storyDifficulties) {
      const difficultyCode = difficultyCodes[item.difficultyId];
      const mappedDifficulty = DISABILITY[difficultyCode as keyof typeof DISABILITY] || difficultyCode;

      items[item.storyId].difficulties.push(mappedDifficulty);
    }

    const organisationNames = [];

    for (const organisaiton of data.organisations) {
      organisationNames[organisaiton.id] = organisaiton.name;
    }

    for (const item of data.storyOrganisations) {
      items[item.storyId].organisations.push(
        organisationNames[item.organisationId],
      );
    }

    const thematicAreaData = [];

    for (const thematicArea of data.thematicAreas) {
      thematicAreaData[thematicArea.id] = {
        code: thematicArea.code,
        parentId: thematicArea.parentThematicId,
      };
    }

    let thematicAreaParentCode: string;

    for (const item of data.storyThematicAreas) {
      thematicAreaParentCode =
        thematicAreaData[thematicAreaData[item.thematicAreaId].parentId]?.code;

      if (
        !items[item.storyId].thematicParents.includes(thematicAreaParentCode)
      ) {
        items[item.storyId].thematicParents.push(thematicAreaParentCode);
      }

      items[item.storyId].thematicChildren.push(
        thematicAreaData[item.thematicAreaId]?.code,
      );
    }

    const vulnerabilityFactorCodes = [];
    const vulnerabilityFactors = await this.vulnerabilityFactorsRepository.findAll();
    for (const factor of vulnerabilityFactors) {
      vulnerabilityFactorCodes[factor.id] = factor.label || factor.code;
    }

    for (const item of data.storyVulnerabilityFactors) {
      const factorLabel = vulnerabilityFactorCodes[item.vulnerabilityFactorId];
      if (factorLabel) {
        items[item.storyId].vulnerabilityFactors.push(factorLabel);
      }
    }

    return items;
  }

  async findOrganisationsExternalData(
    data: ExternalData,
    ids: Record<string, string>,
  ): Promise<ExternalData> {
    const result = await this.airTable.table('Organisations').list({
      filterByFormula: `OR(${Object.keys(ids)
        .map((caseId) => `FIND('${caseId}',{Index Rollup (from Linked Cases)})`)
        .join(', ')})`,
    });
    const columnName = 'Type of organisation';

    if (!Array.isArray(result?.records)) {
      return data;
    }

    for (const record of result?.records) {
      if (record.fields) {
        for (const caseId of record.fields['Linked Cases']) {
          if (ids[caseId]) {
            if (!data[ids[caseId]].organisationTypes) {
              data[ids[caseId]].organisationTypes = [];
            }

            if (record.fields[columnName]) {
              data[ids[caseId]].organisationTypes.push(
                record.fields[columnName],
              );
            }
          }
        }
      }
    }

    return data;
  }

  async findInvestigationsExternalData(
    data: ExternalData,
    ids: Record<string, string>,
  ): Promise<ExternalData> {
    const result = await this.airTable.table('Investigations').list({
      filterByFormula: `OR(${Object.keys(ids)
        .map(
          (caseId) =>
            `FIND('${caseId}',{Index Rollup (from Case the investigation is linked to)})`,
        )
        .join(', ')})`,
    });
    const columnName = 'Select the outcome of the investigation 📊';

    if (!Array.isArray(result?.records)) {
      return data;
    }

    for (const record of result?.records) {
      if (record.fields) {
        for (const caseId of record.fields[
          'Case the investigation is linked to'
        ]) {
          if (ids[caseId]) {
            if (!data[ids[caseId]].outcomesOfInvestigation) {
              data[ids[caseId]].outcomesOfInvestigation = [];
            }

            if (record.fields[columnName]) {
              data[ids[caseId]].outcomesOfInvestigation.push(
                record.fields[columnName],
              );
            }
          }
        }
      }
    }

    return data;
  }

  async findAssistanceReferralsExternalData(
    data: ExternalData,
    ids: Record<string, string>,
  ): Promise<ExternalData> {
    const result = await this.airTable.table('Assistance referrals').list({
      filterByFormula: `OR(${Object.keys(ids)
        .map((caseId) => `FIND('${caseId}',{Index Rollup (from Cases)})`)
        .join(', ')})`,
    });
    const columnName = 'Has the survivor been rendered assistance?';

    if (!Array.isArray(result?.records)) {
      return data;
    }

    for (const record of result?.records) {
      if (record.fields) {
        for (const caseId of record.fields['Cases']) {
          if (ids[caseId]) {
            if (!data[ids[caseId]].assistanceProvided) {
              data[ids[caseId]].assistanceProvided = [];
            }

            if (record.fields[columnName]) {
              data[ids[caseId]].assistanceProvided.push(
                record.fields[columnName],
              );
            }
          }
        }
      }
    }

    return data;
  }

  async findCasesExternalData(
    data: ExternalData,
    ids: Record<string, string>,
  ): Promise<ExternalData> {
    const result = await this.airTable.table('Cases').list({
      filterByFormula: `OR(${Object.keys(ids)
        .map((caseId) => `RECORD_ID() = '${caseId}'`)
        .join(', ')})`,
    });
    const columnName = 'Type of Allegation 📊';

    if (!Array.isArray(result?.records)) {
      return data;
    }

    for (const record of result?.records) {
      if (!data[ids[record.id]]) {
        data[ids[record.id]] = {
          allegationTypes: [],
        };
      }

      if (
        record.fields &&
        !data[ids[record.id]].allegationTypes.includes(
          record.fields[columnName],
        )
      ) {
        data[ids[record.id]].allegationTypes.push(record.fields[columnName]);
      }
    }
    return data;
  }

  async findExternalData(storyIds: string[]): Promise<ExternalData> {
    let result = await this.airTable.table('Sensitive Stories').list({
      filterByFormula: `OR(${storyIds
        .map((storyId) => `{Loop ID} = '${storyId}'`)
        .join(', ')})`,
    });

    const ids = {};
    let data = {};

    if (!Array.isArray(result?.records)) {
      return data;
    }

    for (const record of result?.records) {
      if (record.fields && record.fields['Case the story is submitted to']) {
        for (const caseId of record.fields['Case the story is submitted to']) {
          ids[caseId] = record.fields['Loop ID'];
        }
      }
    }

    result = await this.airTable.table('Cases').list({
      filterByFormula: `OR(${Object.keys(ids)
        .map((caseId) => `RECORD_ID() = '${caseId}'`)
        .join(', ')})`,
    });

    if (!Array.isArray(result?.records)) {
      return data;
    }

    for (const record of result?.records) {
      if (!data[ids[record.id]]) {
        data[ids[record.id]] = {
          allegationTypes: [],
        };
      }

      if (record.fields) {
        data[ids[record.id]].allegationTypes.push(
          record.fields['Type of Allegation 📊'],
        );
      }
    }

    data = await this.findCasesExternalData(data, ids);
    data = await this.findOrganisationsExternalData(data, ids);
    data = await this.findInvestigationsExternalData(data, ids);
    data = await this.findAssistanceReferralsExternalData(data, ids);

    return data;
  }

  getFirstItem(items: ExportedStory[]): ExportedStory {
    let firstItem: ExportedStory;

    for (const key in items) {
      firstItem = items[key];
      break;
    }

    return firstItem;
  }

  async prepareStoriesToExport(
    userLanguage: LanguageEntity,
    dataToExport: DataToExport,
    preparedData: Record<string, unknown>[],
    extended = true,
  ): Promise<Record<string, unknown>[]> {
    if (
      !Array.isArray(dataToExport?.stories) ||
      dataToExport?.stories?.length === 0
    ) {
      return preparedData;
    }

    const items = await this.mapData(dataToExport, userLanguage.id, extended);
    const firstItem = this.getFirstItem(items);

    let itemKeys = [];
    ({ itemKeys } = this.prepareStoryColumnsToExport(
      firstItem,
      userLanguage,
      [
        'id',
        'isSensitive',
        'status',
        'allegationTypes',
        'organisationTypes',
        'outcomesOfInvestigation',
        'assistanceProvided',
        'defaultLanguageIdForAdministrativeData',
        'administrativeData',
      ],
      extended,
    ));
    [
      extended
        ? [
          'All stories',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          'Sensitive Stories only',
        ]
        : undefined,
      itemKeys,
    ].forEach((values) => {
      if (values) {
        preparedData.push(
          values.reduce(function (previousValue, currentValue, index) {
            previousValue[index] = currentValue;
            return previousValue;
          }, {}),
        );
      }
    });
    let row = [];
    let obj: Record<string, unknown>;
    const separator = ' | ';
    for (const key in items) {
      // manually transform story categories to segregate request and questions as follow
      const transformCategory = (category) => {
        switch (category) {
          case 'request':
            return 'Request for Assistance';
          case 'question':
            return 'Request for Information';
          default:
            return category;
        }
      };

      const categories = items[key].isSensitive
        ? [...items[key].categories, 'sensitive']
        : items[key].categories.map(transformCategory);

      const formattedCategories = categories
        .map((value) => upperCaseFirst(value))
        .join(separator);

      const district = items[key].administrativeData
        ?.find((administrativeData) => administrativeData.level == 2)
        ?.names?.filter((nameObj) => nameObj.languageId === 1)
        ?.map((nameObj) => nameObj.name)
        .toString();

      const place = items[key].administrativeData
        ?.find((administrativeData) => administrativeData.level == 1)
        ?.names?.filter((nameObj) => nameObj.languageId === 1)
        ?.map((nameObj) => nameObj.name)
        .toString();

      obj = {
        isSensitive: `${items[key].isSensitive ? 'Sensitive ' : ''}Story`,
        categories: formattedCategories,
        country: items[key].country,
        district: district ? this.clearCSVData(district) : null,
        place: place
          ? this.clearCSVData(place)
          : items[key].place
            ? this.clearCSVData(items[key].place)
            : items[key].place,
        age: items[key].age,
        gender: items[key].gender,
        difficulties: items[key].difficulties
          ?.map((key) => this.makeAsReadable(key))
          .join(separator),
        thematicParents: items[key].thematicParents
          ?.map((key) => this.makeAsReadable(key))
          .join(separator),
        thematicChildren: items[key].thematicChildren
          ?.map((key) => this.makeAsReadable(this.clearCSVData(key)))
          .join(separator),
        organisations: items[key].organisations
          ?.map((value) => this.clearCSVData(value))
          .join(separator),
        date: items[key].publishedAt
          ? this.makeDateReadable(items[key].publishedAt)
          : null,
        didAnyoneComment: items[key].numberOfComments ? 'true' : 'false',
        communityReactions: items[key].communityReactions ?? 0,
        comments: this.clearCSVData(items[key].commentsText),
        channel: items[key].channel,
        content: this.clearCSVData(items[key].content),
        originalContent: this.clearCSVData(items[key].originalContent),
        originalContentLanguage: items[key].originalContentLanguage,
        isMinority: items[key].isMinority,
        vulnerabilityFactors: items[key].vulnerabilityFactors
          ?.map((value) => this.clearCSVData(value))
          .join(separator),
        url: `${this.config.get('frontend.url')}/story/details/${key}`,
        '': '',
        allegationTypes: items[key].allegationTypes
          ?.map((value) => this.clearCSVData(value))
          .join(separator),
        organisationTypes: items[key].organisationTypes
          ?.map((value) => this.clearCSVData(value))
          .join(separator),
        outcomesOfInvestigation: items[key].outcomesOfInvestigation
          ?.map((value) => this.clearCSVData(value))
          .join(separator),
        assistanceProvided: items[key].assistanceProvided
          ?.map((value) => this.clearCSVData(value))
          .join(separator),
      };

      if (!extended) {
        delete obj.isSensitive;
      }

      row = Object.values(obj);

      preparedData.push(
        row.reduce(function (previousValue, currentValue, index) {
          previousValue[index] = currentValue;
          return previousValue;
        }, {}),
      );
    }

    return preparedData;
  }

  prepareCSVContent(
    dataAsArray: Record<string, unknown>[],
    useHeader?: boolean,
  ): string {
    let dataAsString = '';

    const formatValue = (value: string): string => {
      if (typeof value === 'string' &&
        (
          value.includes(',') ||
          value.includes(';') ||
          value.includes('"') ||
          value.includes('\n') ||
          value.includes('\r'))
      ) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value ?? 'N/A';
    };

    if (useHeader) {
      dataAsString += `${csvHeaders.join(',')}\n`;
    }

    Object.values(dataAsArray).forEach((item) => {
      dataAsString += `${Object.values(item)
        .filter((value) => value !== undefined)
        .map(formatValue).join(',')}\n`;
    });

    return dataAsString;
  }

  generateCsvFileName(filters: FilterDto, language: string) {
    return this.generateFileName(
      `${generateMD5(JSON.stringify(filters))}-${language}`,
      'csv',
    );
  }

  generateFileName(prefix: string, extension: string) {
    return `${prefix}_${format(new Date(), 'yyyy-MM-dd-HH-mm')}_.${extension}`;
  }

  findCacheFile(prefix: string): string {
    let fileNameArr: string[];
    let dateArr: string[];
    const fileNames = fs.readdirSync(path.resolve('storage'));

    for (const fileName of fileNames) {
      fileNameArr = fileName.split('_');

      if (fileNameArr.length > 1) {
        dateArr = fileNameArr[1].split('-');

        if (
          differenceInMinutes(
            new Date(),
            new Date(
              `${dateArr[0]}-${dateArr[1]}-${dateArr[2]} ${dateArr[3]}:${dateArr[4]}`,
            ),
          ) > staticConfig.dataExport.cacheTtlInMinutes
        ) {
          this.unlinkFile(fileName);
        } else if (fileNameArr[0] === prefix) {
          return fileName;
        }
      }
    }
  }

  checkIfFileAlreadyExists(newFileName: string): boolean {
    const fileNames = fs.readdirSync(path.resolve('storage'));

    for (const fileName of fileNames) {
      if (fileName === newFileName) {
        return true;
      }
    }

    return false;
  }

  readFile(fileName: string, encoding: BufferEncoding): string {
    try {
      return fs.readFileSync(path.resolve(`storage/${fileName}`), {
        encoding,
      });
    } catch (error) {
      this.logger.error(error);
    }
  }

  unlinkFile(fileName: string): void {
    try {
      return fs.unlinkSync(path.resolve(`storage/${fileName}`));
    } catch (error) {
      this.logger.error(error);
    }
  }

  saveCacheFile(fileName: string, data: string): void {
    if (this.checkIfFileAlreadyExists(fileName)) {
      return;
    }

    try {
      return fs.appendFileSync(`storage/${fileName}`, data);
    } catch (error) {
      this.logger.error(error);
    }
  }

  saveJSONFile(fileName: string, data: Record<string, unknown>[]): void {
    if (this.checkIfFileAlreadyExists(fileName)) {
      return;
    }

    try {
      return fs.appendFileSync(`storage/${fileName}`, JSON.stringify(data));
    } catch (error) {
      this.logger.error(error);
    }
  }

  async exportStoriesToCSV(
    defaultLanguage: LanguageEntity,
    data: DataToExport,
  ): Promise<string> {
    const fileName = `${uuidv4()}.csv`;
    const dataAsArray = await this.prepareStoriesToExport(
      defaultLanguage,
      data,
      [],
    );

    this.saveCacheFile(fileName, this.prepareCSVContent(dataAsArray));

    const base64content = this.readFile(fileName, 'base64');

    this.unlinkFile(fileName);

    return base64content;
  }

  async exportStoriesToCSVAndSendEmail(
    email: string,
    defaultLanguage: LanguageEntity,
    data: DataToExport,
  ): Promise<LibraryResponse<any>> {
    const dataAsBase64 = await this.exportStoriesToCSV(defaultLanguage, data);

    if (!dataAsBase64) {
      return;
    }

    return this.notificationService
      .sendEmail(
        EMAIL_TEMPLATES.EXPORT_TO_CSV,
        {},
        {},
        [{ Email: email }],
        [
          {
            ContentType: 'text/csv',
            Filename: `exported-data-${format(
              new Date(),
              'yyyy-MM-dd_hh:mm:ss',
            )}.csv`,
            Base64Content: dataAsBase64,
          } as any,
        ],
      )
      .catch((error) => {
        this.logger.error(error);
        return error;
      });
  }

  async findCategoriesToExportByStoryIds(
    queryRunner: QueryRunner,
    storyIds: string[],
  ): Promise<CategoryToExport[]> {
    const prefix = 'categories';
    const fileName = this.findCacheFile(prefix);

    let data = [];

    if (fileName) {
      data = JSON.parse(this.readFile(fileName, 'utf-8'));
    } else {
      data = await queryRunner.manager
        .createQueryBuilder()
        .select('category.story_id', 'storyId')
        .addSelect('category.category_id', 'categoryId')
        .from('story_category', 'category')
        .execute()
        .catch((error) => {
          this.logger.error(error);
          throw new BadRequestException(GET_STORY_FAILED);
        });

      this.saveCacheFile(
        this.generateFileName(prefix, 'txt'),
        JSON.stringify(data),
      );
    }

    return data.filter((item) => storyIds.includes(item.storyId));
  }

  async findDifficultiesToExportByStoryIds(
    queryRunner: QueryRunner,
    storyIds: string[],
  ): Promise<DifficultyToExport[]> {
    const prefix = 'difficulties';
    const fileName = this.findCacheFile(prefix);

    let data = [];

    if (fileName) {
      data = JSON.parse(this.readFile(fileName, 'utf-8'));
    } else {
      data = await queryRunner.manager
        .createQueryBuilder()
        .select('difficulty.story_id', 'storyId')
        .addSelect('difficulty.difficulty_id', 'difficultyId')
        .from('story_difficulty', 'difficulty')
        .execute()
        .catch((error) => {
          this.logger.error(error);
          throw new BadRequestException(GET_STORY_FAILED);
        });

      this.saveCacheFile(
        this.generateFileName(prefix, 'txt'),
        JSON.stringify(data),
      );
    }

    return data.filter((item) => storyIds.includes(item.storyId));
  }

  async findOrganisationsToExportByStoryIds(
    queryRunner: QueryRunner,
    storyIds: string[],
  ): Promise<OrganisationToExport[]> {
    const prefix = 'organisations';
    const fileName = this.findCacheFile(prefix);

    let data = [];

    if (fileName) {
      data = JSON.parse(this.readFile(fileName, 'utf-8'));
    } else {
      data = await queryRunner.manager
        .createQueryBuilder()
        .select('organisation.story_id', 'storyId')
        .addSelect('organisation.organisation_id', 'organisationId')
        .from('story_organisation', 'organisation')
        .execute()
        .catch((error) => {
          this.logger.error(error);
          throw new BadRequestException(GET_STORY_FAILED);
        });

      this.saveCacheFile(
        this.generateFileName(prefix, 'txt'),
        JSON.stringify(data),
      );
    }

    return data.filter((item) => storyIds.includes(item.storyId));
  }

  async findThematicAreasToExportByStoryIds(
    queryRunner: QueryRunner,
    storyIds: string[],
  ): Promise<ThematicAreaToExport[]> {
    const prefix = 'thematic-areas';
    const fileName = this.findCacheFile(prefix);

    let data = [];

    if (fileName) {
      data = JSON.parse(this.readFile(fileName, 'utf-8'));
    } else {
      data = await queryRunner.manager
        .createQueryBuilder()
        .select('thematicArea.story_id', 'storyId')
        .addSelect('thematicArea.thematic_id', 'thematicAreaId')
        .from('story_thematic', 'thematicArea')
        .execute()
        .catch((error) => {
          this.logger.error(error);
          throw new BadRequestException(GET_STORY_FAILED);
        });

      this.saveCacheFile(
        this.generateFileName(prefix, 'txt'),
        JSON.stringify(data),
      );
    }

    return data.filter((item) => storyIds.includes(item.storyId));
  }

  async findStoryRecipientToExportByStoryIds(
    queryRunner: QueryRunner,
    storyIds: string[],
  ): Promise<StoryRecipientToExport[]> {
    let data = [];

    data = await queryRunner.manager
      .createQueryBuilder()
      .select('story.id', 'storyId')
      .addSelect('recipient.id', 'storyRecipientId')
      .addSelect('recipient.is_minority_by_moderator', 'isMinority')
      .from('story_recipient', 'recipient')
      .innerJoin('story', 'story', 'story.recipient_id = recipient.id')
      .where('story.id IN (:...storyIds)', { storyIds })
      .getRawMany();

    return data.filter((item) => storyIds.includes(item.storyId));
  }

  async findVulnerabilityFactorsToExportByStoryIds(
    queryRunner: QueryRunner,
    storyIds: string[],
  ): Promise<VulnerabilityFactorToExport[]> {
    const prefix = 'vulnerability-factors';
    const fileName = this.findCacheFile(prefix);

    let data = [];

    if (fileName) {
      data = JSON.parse(this.readFile(fileName, 'utf-8'));
    } else {
      data = await queryRunner.manager
        .createQueryBuilder()
        .select('fvf.feedback_id', 'storyId')
        .addSelect('fvf.vulnerability_factor_id', 'vulnerabilityFactorId')
        .from('feedback_vulnerability_factors', 'fvf')
        .execute()
        .catch((error) => {
          this.logger.error(error);
          throw new BadRequestException(GET_STORY_FAILED);
        });

      this.saveCacheFile(
        this.generateFileName(prefix, 'txt'),
        JSON.stringify(data),
      );
    }

    return data.filter((item) => storyIds.includes(item.storyId));
  }

  async findCommentIdsToExportByStoryIds(
    storyIds: string[],
  ): Promise<CommentEntity[]> {
    const prefix = 'comment-id';
    const fileName = this.findCacheFile(prefix);

    let data = [];

    if (fileName) {
      data = JSON.parse(this.readFile(fileName, 'utf-8'));
    } else {
      data = await this.commentRepository.findCommentIdsByStatus(
        COMMENT_STATUS.PUBLISHED,
      );

      this.saveCacheFile(
        this.generateFileName(prefix, 'txt'),
        JSON.stringify(data),
      );
    }

    return data.filter((item) => storyIds.includes(item.storyId));
  }

  async findCommentContentsByStoryIds(
    storyIds: string[],
  ): Promise<CommentToExport[]> {
    return this.commentRepository.findPublishedCommentsToExport(storyIds);
  }

  async findVoteCountsByStoryIds(
    storyIds: string[],
  ): Promise<StoryVoteCountToExport[]> {
    if (!storyIds.length) {
      return [];
    }

    const data = await this.storyVoteRepository
      .createQueryBuilder('vote')
      .select('vote.story_id', 'storyId')
      .addSelect('COUNT(vote.id)', 'count')
      .where('vote.story_id IN (:...storyIds)', { storyIds })
      .groupBy('vote.story_id')
      .getRawMany();

    return data.map((item) => ({
      storyId: item.storyId,
      count: Number(item.count) || 0,
    }));
  }

  async findStoriesToExportByIds(storyIds: string[]): Promise<StoryEntity[]> {
    const prefix = 'stories';
    const fileName = this.findCacheFile(prefix);

    let data = [];

    if (fileName) {
      data = JSON.parse(this.readFile(fileName, 'utf-8'));
    } else {
      data = await this.storyRepository.findStoriesToExport();

      this.saveCacheFile(
        this.generateFileName(prefix, 'txt'),
        JSON.stringify(data),
      );
    }

    return data.filter((item) => storyIds.includes(item.id));
  }

  async findTranslationsByStoryIds(
    storyIds: string[],
  ): Promise<(StoryTranslationEntity & { storyLanguageId: number })[]> {
    const prefix = 'translations';
    const fileName = this.findCacheFile(prefix);

    let data = [];

    if (fileName) {
      data = JSON.parse(this.readFile(fileName, 'utf-8'));
    } else {
      data = await this.storyRepository.findTranslationsToExport();

      this.saveCacheFile(
        this.generateFileName(prefix, 'txt'),
        JSON.stringify(data),
      );
    }

    return data.filter((item) => storyIds.includes(item.storyId));
  }

  async findAdministrativeDataToExportByStoryIds(
    storyIds: string[],
  ): Promise<AdministrativeDataToExport[]> {
    const prefix = 'administrative-data';
    const fileName = this.findCacheFile(prefix);

    let data = [];

    if (fileName) {
      data = JSON.parse(this.readFile(fileName, 'utf-8'));
    } else {
      data =
        await this.storyAdministrativeDataRepository.findAdministrativeDataToExport();

      this.saveCacheFile(
        this.generateFileName(prefix, 'txt'),
        JSON.stringify(data),
      );
    }

    return data.filter((item) => storyIds.includes(item.storyId));
  }

  async findRecipientsToExportByStoryIds(
    storyIds: string[],
  ): Promise<(StoryRecipientEntity & { storyId: string })[]> {
    const prefix = 'recipients';
    const fileName = this.findCacheFile(prefix);

    let data = [];

    if (fileName) {
      data = JSON.parse(this.readFile(fileName, 'utf-8'));
    } else {
      data = await this.storyRecipientRepository.findDataToExport();

      this.saveCacheFile(
        this.generateFileName(prefix, 'txt'),
        JSON.stringify(data),
      );
    }

    return data.filter((item) => storyIds.includes(item.storyId));
  }

  async findDataByStoryIds(
    storyIds: string[],
    params?: PaginationWithOrderAndFilterDto,
  ): Promise<DataToExport> {
    if (params?.page && params?.limit) {
      storyIds = narrowDownIds(storyIds, params.page, params.limit);
    }

    if (storyIds.length === 0) {
      return;
    }

    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    const [
      comments,
      commentContents,
      voteCounts,
      stories,
      translations,
      administrativeData,
      categories,
      storyCategories,
      countries,
      recipients,
      difficulties,
      storyDifficulties,
      organisations,
      storyOrganisations,
      thematicAreas,
      storyThematicAreas,
      storyRecipients,
      vulnerabilityFactors,
      storyVulnerabilityFactors,
    ] = await Promise.all([
      this.findCommentIdsToExportByStoryIds(storyIds),
      this.findCommentContentsByStoryIds(storyIds),
      this.findVoteCountsByStoryIds(storyIds),
      this.findStoriesToExportByIds(storyIds),
      this.findTranslationsByStoryIds(storyIds),
      this.findAdministrativeDataToExportByStoryIds(storyIds),
      this.categoryService.findAll(),
      this.findCategoriesToExportByStoryIds(queryRunner, storyIds),
      this.countryService.getCountries(),
      this.findRecipientsToExportByStoryIds(storyIds),
      this.difficultyService.findAll(),
      this.findDifficultiesToExportByStoryIds(queryRunner, storyIds),
      this.organisationService.findAll(),
      this.findOrganisationsToExportByStoryIds(queryRunner, storyIds),
      this.thematicAreaService.findDataToExport(),
      this.findThematicAreasToExportByStoryIds(queryRunner, storyIds),
      this.findStoryRecipientToExportByStoryIds(queryRunner, storyIds),
      this.vulnerabilityFactorsRepository.findAll(),
      this.findVulnerabilityFactorsToExportByStoryIds(queryRunner, storyIds),
    ]);

    await queryRunner.release();

    return {
      stories,
      comments,
      commentContents,
      voteCounts,
      translations,
      administrativeData,
      categories,
      storyCategories,
      countries,
      recipients,
      difficulties,
      storyDifficulties,
      organisations,
      storyOrganisations,
      thematicAreas,
      storyThematicAreas,
      storyRecipients,
      vulnerabilityFactors,
      storyVulnerabilityFactors,
    };
  }

  async prepareSearchParameters(
    params: ExportToJsonDTO,
  ): Promise<PaginationWithOrderAndFilterDto> {
    const filters: PaginationWithOrderAndFilterDto = {
      ...params,
      type: undefined,
      age: undefined,
      gender: undefined,
      difficulty: undefined,
      thematic: undefined,
    };
    let countryCodes: string[];

    if (!params.country) {
      filters.country = undefined;
    } else {
      countryCodes = (
        !Array.isArray(params.country)
          ? params.country.split(',')
          : params.country
      ).filter((code) => code);

      filters.country = countryCodes.length
        ? countryCodes.join(',')
        : undefined;
    }

    if (params.type && !Array.isArray(params.type)) {
      params.type = params.type.split(',');
    }

    if (params.type?.length) {
      const categories = await this.categoryService.findByCodes(
        params.type as string[],
      );

      filters.type = categories.map((category) => category.id).join(',');
    }

    if (params.age && !Array.isArray(params.age)) {
      params.age = params.age.split(',');
    }

    if (params.age?.length) {
      filters.age = (params.age as string[])
        .map((value) => AGE_VALUE[upperCaseFirst(value.replace(/_/g, ' '))])
        .join(',');
    }

    if (params.gender && !Array.isArray(params.gender)) {
      params.gender = params.gender.split(',');
    }

    if (params.gender?.length) {
      filters.gender = (params.gender as string[])
        .map((value) => GENDER_VALUE[value.toUpperCase()])
        .join(',');
    }

    if (params.difficulty && !Array.isArray(params.difficulty)) {
      params.difficulty = params.difficulty.split(',');
    }

    if (params.difficulty?.length) {
      const difficulties = await this.difficultyService.findByCodes(
        params.difficulty as string[],
      );

      filters.difficulty = difficulties
        .map((difficulty) => difficulty.id)
        .join(',');
    }

    if (params.organisation) {
      const organisationIds =
        await this.organisationService.findOrganisationIdsByPhrase(
          params.organisation,
        );

      if (organisationIds.length) {
        filters.organisation = organisationIds.join(',');
      }
    }

    if (params.thematic && !Array.isArray(params.thematic)) {
      params.thematic = params.thematic.split(',');
    }

    if (params.thematic?.length) {
      if (params.thematic && !Array.isArray(params.thematic)) {
        params.thematic = params.thematic.split(',');
      }

      const thematicAreas = await this.thematicAreaService.findAll();
      const thematicAreaIds = [];

      for (const thematicAreaCode of params.thematic) {
        const thematicAreaArr = thematicAreaCode.split('.');
        const thematicArea = thematicAreas
          .find((item) => item.code === thematicAreaArr[0])
          ?.children?.find((item) => item.code === thematicAreaArr[1]);

        if (thematicArea) {
          thematicAreaIds.push(thematicArea.id);
        }
      }

      filters.thematic = thematicAreaIds.length
        ? thematicAreaIds.join(',')
        : (params.thematic as string[]).join(',');
    }

    return filters;
  }

  async saveUserExportCsvActivity(
    userId: string,
  ): Promise<UserExportCsvActivityEntity> {
    return await this.userExportCsvActivityRepository.save({ userId });
  }
}
