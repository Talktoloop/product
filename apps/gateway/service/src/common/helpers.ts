import * as hash from 'crypto';
import { SelectQueryBuilder, Brackets } from 'typeorm';
import { CommentEntity } from '../comment/entity/comment.entity';
import { StoryEntity } from '../story/entity/story.entity';
import { CommentTranslationEntity } from '../comment/entity/comment-translation.entity';
import { StoryTranslationEntity } from '../story/entity/story-translation.entity';
import { StoryFilterAndOrderDto } from '../story/request/dto/story-filter-and-order.dto';
import { LanguageEntity } from '../language/entity/language.entity';
import { FilterDto } from './dto/filter.dto';
import { ThematicService } from '../lexicon/service/thematic.service';
import { FilterCasesDto } from '../statistic/request/dto/filter.dto';
import { GENDER_TEXT } from '../airtable-client/constant/gender.constant';
import { AGE_TEXT } from '../airtable-client/constant/age.constant';
import { REFERRED_FOR_ASSISTANCE } from '../airtable-client/constant/referred-for-assistance.constant';
import { INVESTIGATION_OUTCOME } from '../airtable-client/constant/investigation-outcome.constant';
import { ORGANISATION_TYPE_TEXT } from '../airtable-client/constant/organisation-type.constant';
import { ALLEGATION_TYPE_TEXT } from '../airtable-client/constant/allegation-type.constant';
import { URGENT } from '../airtable-client/constant/urgent.constant';
import { DIFFICULTY } from '../airtable-client/constant/difficulty.constant';
import { TIME_UNIT } from './constant/time-unit.constant';
import { RejectContentDto } from './dto/reject-content.dto';
import { CustomError, VALIDATION_FAILED, STORY_STATUS, COMMENT_STATUS } from '@ourloop/shared';
import { THEMATIC } from '../airtable-client/constant/thematic.constant';
import { formatISO, parseISO } from 'date-fns';
import { Pagination } from './type/pagination.type';
import { PaginationMeta } from './type/pagination-meta.type';
import { StoryRecipientEntity } from '../story/entity/story-recipient.entity';
import { UserEntity } from '../user/entity/user.entity';
import { REGISTRATION_STATUS } from '../user/constant/registration-status.constant';
import MD5 from 'crypto-js/md5';
import { DataSource } from 'typeorm';
import { CHANNEL_NUMBER_TO_CONSTANT } from './constant/channel.constant';
import { COMMUNITY_RESP_NUMBER_TO_CONSTANT, ORG_RESP_NUMBER_TO_CONSTANT } from './types';

const allowFilters = [
  'difficulty',
  'type',
  'age',
  'gender',
  'minority',
  'place',
  'organisation',
  'country',
  'q',
  'from',
  'to',
  'regionId',
  'organisationResponsiveness',
  'communityResponsiveness',
  'channelFilter',
  'searchTerm'
];
const relationsToUpdate = ['difficulty', 'type', 'organisation'];
const relationsToConvertToInt = [
  'age',
  'gender',
  'difficulty',
  'type',
  'type.id',
  'difficulty.id',
];

enum casesMap {
  country = 'incident_country',
  location = 'incident_province',
  gender = 'survivor_gender',
  age = 'survivor_age',
  disability = 'survivor_disability',
  referredForAssistance = 'referred_to_assistance',
  investigationOutcome = 'investigation_outcome',
  organisationType = 'organisation_type',
  caseType = 'allegation_type',
}

let measurement: number;
let measurementTimer: [number, number];

export const startMeasuring = () => {
  measurementTimer = process.hrtime();
};

export const generateMD5 = (value: string): string => {
  return MD5(value).toString();
};

export const getConnection = async (
  config: Promise<DataSource>,
): Promise<DataSource> => {
  const connection = await config;

  if (!connection.isInitialized) {
    await connection.initialize();
  }

  return connection;
};

export const stopMeasuring = (): number => {
  if (!measurement) {
    measurement = 0;
  }

  const hrtime = process.hrtime(measurementTimer);
  measurement += hrtime[0] + hrtime[1] / 1e9;
  measurementTimer = null;

  return measurement;
};

export const narrowDownIds = (
  storyIds: string[],
  page: number,
  limit: number,
): string[] => {
  const first = page * limit - limit;
  const last = first + limit;

  return storyIds.slice(first, last);
};

export const removeLastDot = (value: string): string => {
  if (value?.slice(-1) !== '.') {
    return value;
  }

  return value.slice(0, -1);
};

export const removeObjectDuplicatesByKey = (
  data: Record<string, unknown>[],
  key: string,
): Record<string, unknown>[] => {
  return data?.reduce(
    (unique: Record<string, unknown>[], item: Record<string, unknown>) => {
      if (
        !unique.some((obj: Record<string, unknown>) => obj[key] === item[key])
      ) {
        unique.push(item);
      }
      return unique;
    },
    [],
  );
};

export const preparePaginationMetadata = (
  data: (string | Record<string, unknown>)[],
  itemsPerPage: number,
  currentPage: number,
): PaginationMeta => {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  itemsPerPage = itemsPerPage ?? 10;
  if (!currentPage || currentPage < 1 || currentPage > totalPages) {
    currentPage = 1;
  }

  return {
    totalItems: data.length,
    itemsPerPage,
    totalPages: Math.ceil(data.length / itemsPerPage),
    currentPage,
  };
};

export const paginate = (
  data: Record<string, unknown>[],
  itemsPerPage: number,
  currentPage: number,
): Pagination => {
  const meta = preparePaginationMetadata(data, itemsPerPage, currentPage);
  const items = [];

  for (
    let i = (meta.currentPage - 1) * meta.itemsPerPage;
    i < meta.currentPage * meta.itemsPerPage;
    i++
  ) {
    if (data[i]) {
      items.push(data[i]);
    }
  }

  meta.itemCount = items.length;

  return {
    meta,
    items,
  };
};

export const getPendingStoryStatuses = (): string[] =>
  [...Object.values(STORY_STATUS)].filter(
    (status) =>
      !(
        [
          STORY_STATUS.PUBLISHED,
          STORY_STATUS.REJECTED,
          STORY_STATUS.SENT_TO_CASE_MANAGER,
          STORY_STATUS.CONDITIONALLY_REJECTED,
        ] as string[]
      ).includes(status),
  );

export const paginateQueryResult = async (
  query: SelectQueryBuilder<any>,
  itemsPerPage: number,
  currentPage: number,
): Promise<Pagination> => {
  const data = await query.getMany();

  return paginate(data, itemsPerPage, currentPage);
};

export const chartShouldBeAnonymous = (
  data: Record<string, any>[],
): boolean => {
  let anonymize = false;

  for (const item of data) {
    for (const value of item.values) {
      if (value > 0 && value < 7) {
        anonymize = true;
        break;
      }
    }
  }

  return anonymize;
};

export const getAverageValue = (
  data: { average: number; count: number }[],
): { average: number; count: number } => {
  let average = 0;
  let count = 0;

  for (const item of data) {
    if (item?.average) {
      count += item?.count ?? 0;
    }
  }

  for (const item of data) {
    average +=
      item?.average && count ? (item.average * (item?.count ?? 0)) / count : 0;
  }

  return {
    average: round(average, 2),
    count,
  };
};

export const round = (value: number, places: number): number =>
  Math.round(value * Math.pow(10, places)) / Math.pow(10, places);

export const calculateCustomNumberOfDays = (
  hours: number,
  timeUnit?: TIME_UNIT,
): { averageTime: number; timeUnit: TIME_UNIT } => {
  const days = hours / 24;

  if (!timeUnit) {
    timeUnit =
      days > 365
        ? TIME_UNIT.YEAR
        : days > 30
          ? TIME_UNIT.MONTH
          : days > 1
            ? TIME_UNIT.DAY
            : TIME_UNIT.HOUR;
  }

  if (timeUnit === TIME_UNIT.HOUR) {
    return { averageTime: hours, timeUnit };
  }

  const divider =
    timeUnit === TIME_UNIT.YEAR ? 366 : timeUnit === TIME_UNIT.MONTH ? 31 : 1;
  const resultOfDivisionWithoutRest = Math.trunc(days / divider);
  const partOfUnit = (days % divider) / divider;

  return {
    averageTime:
      resultOfDivisionWithoutRest +
      (partOfUnit > 0
        ? timeUnit === TIME_UNIT.DAY
          ? partOfUnit < 0.5
            ? 0.5
            : 1
          : round(partOfUnit, 1)
        : 0),
    timeUnit,
  };
};

export const updatedOriginalContent = (
  originalLanguageCode: string,
  languageCode: string,
  oldContent: string,
  newContent: string,
): boolean =>
  originalLanguageCode === languageCode && oldContent !== newContent;

export const removeArrayDuplicates = (array: any[]): any[] =>
  array.filter((item, index) => index === array.indexOf(item));

export const checkRejectReason = (data: RejectContentDto): void => {
  if (
    data.reasonIds.length !== removeArrayDuplicates(data.reasonIds).length ||
    data.reasonTexts.length !== removeArrayDuplicates(data.reasonTexts).length
  ) {
    throw new CustomError(VALIDATION_FAILED, {
      error: 'Reject reason is invalid',
    });
  }
};

export const arrayRemoveEmptyVal = (array: string[]): string[] =>
  array.filter((e) => e !== '');

export const parseStringArrayToInt = (array: string[]): number[] =>
  array.map((e) => {
    const value = parseInt(e, 10);
    return Number.isInteger(value) ? value : -1;
  });

export const generateHash = (ipAddress: string, userAgent: string): string =>
  hash.createHash('sha1').update(`${ipAddress}${userAgent}`).digest('base64');

export const getRandomNumber = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getKeysWithLowerCase = (
  data: Record<string, string | number>,
  withLowerCase = true,
): string[] => {
  return Object.keys(data).map((value) =>
    withLowerCase ? value.toLowerCase() : value,
  );
};

export const getKeyByValue = (
  data: Record<string, string | number>,
  value: string | number,
  withLowerCase = true,
): string => {
  if (!value && !Number.isInteger(value)) {
    return;
  }

  let index = 0;

  for (const item of Object.values(data)) {
    if (item === value) {
      break;
    }

    index++;
  }

  return value !== null
    ? getKeysWithLowerCase(data, withLowerCase)[index]
    : null;
};

export const upperCaseFirst = (value: string, lowerCase = true): string =>
  typeof value === 'string'
    ? `${value.charAt(0).toUpperCase()}${lowerCase ? value.slice(1).toLowerCase() : value.slice(1)
    }`
    : value;

export const upperCaseString = (value: string): string =>
  value ? value.toUpperCase() : value;

export const _pick = (
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  obj: any,
  pickKeys: string[],
  removeEmpty = false,
): Record<string, unknown> | StoryFilterAndOrderDto | FilterDto => {
  return Object.entries(obj)
    .filter(
      ([key]) =>
        pickKeys.includes(key) && (removeEmpty !== undefined || obj[key]),
    )
    .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
};

export const replaceArray = (
  value: string,
  oldValues: string[],
  newValue: string,
): string => {
  for (const oldValue of oldValues) {
    value = value.replace(new RegExp(oldValue, 'g'), newValue);
  }

  return value;
};

export const parseGooglePlacesLocation = (value: string | unknown): string => {
  if (!value) {
    return null;
  }

  const locationArr = value.toString().split(', ');

  if (locationArr.length > 1) {
    locationArr.pop();
  }

  return locationArr.join(', ');
};

export const _sort = (array: number[]): number[] =>
  array.sort((a: number, b: number) => {
    return a - b;
  });

export const getTranslationByLanguageId = (
  translations: (
    | StoryTranslationEntity
    | CommentTranslationEntity
    | Record<string, undefined>
  )[],
  originLanguageId: number,
  selectedLanguageId: number,
):
  | StoryTranslationEntity
  | CommentTranslationEntity
  | Record<string, undefined> => {
  let translation = translations.filter(
    (entity) => entity.languageId === selectedLanguageId && !!entity.content,
  )[0];

  if (!translation) {
    translation = translations.filter(
      (entity) => entity.language?.isDefault && !!entity.content,
    )[0];
  }

  if (!translation) {
    translation = translations.filter(
      (entity) => entity.languageId === originLanguageId,
    )[0];
  }

  return translation;
};

export const thematicConditionAdd = (
  thematicGroupObject: Record<string, unknown>,
  query: SelectQueryBuilder<any>,
): SelectQueryBuilder<any> => {
  const subQueries: string[] = [];
  const data = Object.keys(thematicGroupObject);

  if (data.length === 0) {
    return query;
  }

  query.andWhere((qb) => {
    data.forEach((thematic, idx) => {
      const value = thematicGroupObject[thematic];
      const subQuery = qb
        .subQuery()
        .select('COUNT(story_thematic.thematic_id)')
        .from('story_thematic', 'story_thematic')
        .where(`story_thematic.thematic_id IN (:...thematic${idx})`, {
          [`thematic${idx}`]: value,
        })
        .andWhere('story_thematic.story_id = story.id')
        .getQuery();

      subQueries.push(`${subQuery} > 0`);
    });

    return `(${subQueries.join(' OR ')})`;
  });

  return query;
};
const casePropertyIsUndefined = (values: string[]): boolean =>
  values.filter((splitValue) =>
    ['noAnswer', 'none', 'notApplicable'].includes(splitValue),
  ).length > 0;

export const flatArray = (values: Array<any[]>): any[] =>
  Array.prototype.concat.apply([], values);

export const addFilterCasesCondition = (
  filters: Record<string, unknown> | FilterCasesDto,
  query: SelectQueryBuilder<any>,
  joins: string[] = [
    'case_sync_investigation',
    'case_sync_allegation_referral',
  ],
): SelectQueryBuilder<any> => {
  if (filters) {
    for (const [key, value] of Object.entries(filters)) {
      if (key === 'from' && value) {
        query.andWhere(`DATE(case_created) >= :from`, {
          from: formatISO(value),
        });
      } else if (key === 'to' && value) {
        query.andWhere(`DATE(case_created) <= :to`, {
          to: formatISO(value),
        });
      } else if (key === 'caseType' && value) {
        const splitValues = value.split(',');
        const values = splitValues.map(
          (splitValue) => ALLEGATION_TYPE_TEXT[splitValue],
        );

        query.andWhere(
          new Brackets((qb) => {
            qb.where(`allegation_type IN (:allegationType)`, {
              allegationType: values,
            });

            if (splitValues.includes('urgentCases')) {
              qb.orWhere('urgency = :urgency', {
                urgency: getKeyByValue(URGENT, 1, false),
              });
            }
          }),
        );
      } else if (key === 'country' && value) {
        query
          .leftJoin('case_sync.country', 'country')
          .andWhere(`country.code IN (:country)`, {
            country: value.split(','),
          });
      } else if (key === 'thematic' && value) {
        const splitValues = value.split(',');
        const values = splitValues.map((splitValue) =>
          getKeyByValue(THEMATIC, splitValue, false),
        );

        query
          .leftJoin(
            'case_sync.thematicAreaSubsection',
            'thematicAreaSubsection',
          )
          .andWhere(
            'thematicAreaSubsection.thematicAreaSubsection IN (:thematicAreas)',
            {
              thematicAreas: values,
            },
          );
      } else if (key === 'disability' && value) {
        const splitValues = value.split(',');
        const values = splitValues.map((splitValue) =>
          getKeyByValue(DIFFICULTY, splitValue, false),
        );

        if (casePropertyIsUndefined(splitValues)) {
          values.push('');
        }

        query
          .leftJoin('case_sync.survivorDisability', 'survivorDisability')
          .andWhere(
            new Brackets((qb) => {
              qb.where(
                'survivorDisability.survivorDisability IN (:survivorDisabilityValues)',
                {
                  survivorDisabilityValues: values,
                },
              );

              if (casePropertyIsUndefined(splitValues)) {
                qb.orWhere('survivorDisability.survivorDisability IS NULL');
              }
            }),
          );
      } else if (key === 'organisationType' && value) {
        const splitValues = value.split(',');
        const values = splitValues.map(
          (splitValue) => ORGANISATION_TYPE_TEXT[splitValue],
        );

        if (joins.includes('case_sync_allegation_referral')) {
          query
            .leftJoin(
              'case_sync_allegation_referral',
              'car',
              'car.case_id = case_sync.case_uuid',
            )
            .leftJoin(
              'case_sync_allegation_referral_organisation',
              'caro',
              'caro.allegation_referral_id = car.id',
            );
        }

        query.andWhere('caro.type IN (:organisationType)', {
          organisationType: values,
        });
      } else {
        const splitValues = value.split(',');
        let values: string[];
        const keyFromDb = casesMap[key];

        if (key === 'age') {
          values = splitValues.map((splitValue) => AGE_TEXT[splitValue]);
        } else if (key === 'gender') {
          values = splitValues.map((splitValue) => GENDER_TEXT[splitValue]);
        } else if (key === 'referredForAssistance') {
          values = splitValues.map(
            (splitValue) => REFERRED_FOR_ASSISTANCE[splitValue],
          );
        } else if (key === 'investigationOutcome') {
          if (joins.includes('case_sync_investigation')) {
            query.leftJoin(
              'case_sync_investigation',
              'ci',
              'ci.case_id = case_sync.case_uuid',
            );
          }

          values = splitValues.map(
            (splitValue) => INVESTIGATION_OUTCOME[splitValue],
          );
        } else if (key === 'country') {
          values = splitValues.map(
            (splitValue) => ORGANISATION_TYPE_TEXT[splitValue],
          );
        }

        if (values) {
          query.andWhere(
            new Brackets((qb) => {
              if (casePropertyIsUndefined(splitValues)) {
                values.push('');
              }

              qb.where(`${keyFromDb} IN (:...${keyFromDb})`, {
                [keyFromDb]: values,
              });

              if (casePropertyIsUndefined(splitValues)) {
                qb.orWhere(`${keyFromDb} IS NULL`);
              }
            }),
          );
        }
      }
    }
  }
  return query;
};

export const addSensitiveStoryFilter = (
  query: SelectQueryBuilder<any>,
): SelectQueryBuilder<any> => {
  query.where(
    new Brackets((qb) => {
      qb.where('story.isSensitive is true').andWhere(
        'story.status = :sensitiveStoryStatus',
        {
          sensitiveStoryStatus: STORY_STATUS.SENT_TO_CASE_MANAGER,
        },
      );
    }),
  );

  return query;
};

export const addFilterCondition = (
  filter: Record<string, unknown> | StoryFilterAndOrderDto | FilterDto,
  query: SelectQueryBuilder<any>,
  acceptSensitiveStories = false,
): SelectQueryBuilder<any> => {
  if (filter.thematicAreaToFiltration) {
    query = thematicConditionAdd(
      filter.thematicAreaToFiltration as Record<string, unknown>,
      query,
    );
  }

  filter = _pick(filter, allowFilters);

  let idx = 0;
  for (let [key, value] of Object.entries(filter)) {
    if (!['place', 'q'].includes(key) && value?.toString().includes(',')) {
      value = value.split(',');
    }

    //Searching approach
    if (key === 'q' && value) {
      query.andWhere('translations.content like :content', {
        content: `%${value}%`,
      });
    } else if (key === 'country' && value) {
      query.andWhere(`country.code IN (:...${key})`, {
        [key]: Array.isArray(value) ? value : value.split(','),
      });
    } else if (key === 'from' && value) {
      if (acceptSensitiveStories) {
        query.andWhere(
          new Brackets((qb) => {
            qb.where(`DATE(story.createdAt) >= :from`, {
              from: parseISO(value),
            }).orWhere('story.createdAt IS NULL');
          }),
        );
      } else {
        query.andWhere(`DATE(story.createdAt) >= :from`, {
          from: parseISO(value),
        });
      }
    } else if (key === 'regionId' && value) {
      query.andWhere(
        `storyAdministrativeData.administrativeAreaId IN (:...${key})`,
        {
          [key]: Array.isArray(value)
            ? value.map((element) => parseInt(element))
            : [parseInt(value)],
        },
      );
    } else if (key === 'to' && value) {
      if (acceptSensitiveStories) {
        query.andWhere(
          new Brackets((qb) => {
            qb.where(`DATE(story.createdAt) <= :to`, {
              to: parseISO(value),
            }).orWhere('story.createdAt IS NULL');
          }),
        );
      } else {
        query.andWhere(`DATE(story.createdAt) <= :to`, {
          to: parseISO(value),
        });
      }
    } else if (key === 'channelFilter' && value) {
      const channelStrings = value
        .toString()
        .split(',')
        .map((id) => CHANNEL_NUMBER_TO_CONSTANT[parseInt(id, 10)])
        .filter(Boolean);

      if (channelStrings.length) {
        query.andWhere('story.channel IN (:...channelFilter)', {
          channelFilter: channelStrings,
        });
      }
    } else {
      //Find solution by name field
      if (relationsToUpdate.includes(key)) {
        if (key === 'organisation') {
          key = 'organisations.id';
        } else if (key !== 'age') {
          key = `${key}.id`;
        }
      }

      if (Array.isArray(value)) {
        value = arrayRemoveEmptyVal(value);
        if (relationsToConvertToInt.includes(key)) {
          value = parseStringArrayToInt(value);
        }
        if (key === 'age' || key === 'gender') {
          query.andWhere(`recipient.${key}ByModerator IN (:...${key})`, {
            [key]: value,
          });
        } else {
          query.andWhere(`${key} IN (:...${key})`, { [key]: value });
        }
      } else if (value !== undefined && value !== null) {
        if (relationsToConvertToInt.includes(key)) {
          value = parseInt(value, 10);
          if (isNaN(value)) {
            value = -1;
          }
        }
        if (key === 'age' || key === 'gender') {
          query.andWhere(`recipient.${key}ByModerator = :val${idx}`, {
            [`val${idx}`]: value,
          });
        } else query.andWhere(`${key} = :val${idx}`, { [`val${idx}`]: value });
      }
    }
    idx++;
  }

  return query;
};

export const prepareURL = (
  url: string,
  route?: string,
  id?: string,
): string => {
  if (route) {
    url = `${url}/${route}`;
  }
  if (id) {
    url = `${url}/${id}`;
  }

  return url;
};

export const isContactAccepted = (story: StoryEntity): boolean =>
  story.recipient?.userWantContact !== false &&
  !!(
    story.recipient?.phone ||
    story.recipient?.email ||
    story.recipient?.communicatorId
  );

export const prepareNotificationData = (
  entity: StoryEntity | CommentEntity,
): { email: string; phone: string; name: string; language: LanguageEntity } => {
  let email = '';
  let phone = '';
  let name = '';

  if (
    entity.recipient?.phone ||
    entity.recipient?.email ||
    (entity.user?.email && entity.user?.notifications)
  ) {
    email = entity.recipient?.email ?? entity.user?.email;
    phone = entity.recipient?.phone;
    name = entity.user?.nickname || name;
  }

  return { email, phone, name, language: entity.user?.language };
};

export const includesTranslatableContent = (
  translations: (CommentTranslationEntity | StoryTranslationEntity)[],
): boolean => {
  return translations.some(({ content, language: { provider, dialect } }) => {
    if (!provider) return false;
    if (content) return true;
    return translations.some(
      (t) => t.language.code === dialect && !!t.content
    );
  });
};

export const checkRegistrationStatus = (
  user: Partial<UserEntity>,
): REGISTRATION_STATUS => {
  if (!user.nickname) {
    if (user.organisation_id) {
      return REGISTRATION_STATUS.INVITED;
    }
    return REGISTRATION_STATUS.REQUIRE_PROFILE_UPDATE;
  }
  if (user.organisationApplication && !user.organisation_id) {
    return REGISTRATION_STATUS.AWAITING_TO_ASSIGN_TO_ORGANISATION;
  } else {
    return REGISTRATION_STATUS.COMPLETE;
  }
};

export const getDomainFromEmail = (email: string): string =>
  email?.split('@')[1];

export const prepareUsername = (
  user: StoryRecipientEntity | Partial<UserEntity>,
  hideLastName = false,
): string | null => {
  if (!user?.firstName && !user?.lastName) {
    return null;
  }

  return `${user?.firstName ?? ''} ${!hideLastName ? user.lastName ?? '' : ''
    }`.trim();
};

export const cloneArrayWithoutReference = (array: any[]): any[] =>
  JSON.parse(JSON.stringify(array));

export const arrayIncludeAnotherArrayItem = (
  firstArray: string[],
  secondArray: string[],
): boolean => firstArray.some((item) => secondArray.includes(item));

export const addFilterJoins = (
  query: SelectQueryBuilder<any>,
  exceptions: string[] = [],
): SelectQueryBuilder<any> => {
  if (!exceptions.includes('story.categories')) {
    query.leftJoin('story.categories', 'type');
  }

  if (!exceptions.includes('story.organisations')) {
    query.leftJoin('story.organisations', 'organisations');
  }

  if (!exceptions.includes('story.country')) {
    query.leftJoin('story.country', 'country');
  }

  if (!exceptions.includes('story.difficulties')) {
    query.leftJoin('story.difficulties', 'difficulty');
  }

  if (!exceptions.includes('story.storyAdministrativeData')) {
    query.leftJoin('story.storyAdministrativeData', 'storyAdministrativeData');
  }

  if (!exceptions.includes('story.recipient')) {
    query.leftJoin('story.recipient', 'recipient');
  }

  return query;
};

export const isEmpty = (obj: any) => Object.keys(obj).length === 0;

//extract specified organisations and replied to values
export const separateRepliedToValues = (repliedTo) => {
  if (!repliedTo) {
    return { repliedToOptions: [], specifiedOrganisations: [] };
  }
  const values = repliedTo.split(',');
  const repliedToOptions = [];
  const specifiedOrganisations = [];

  values.forEach((value) => {
    if (!isNaN(value) && Number.isInteger(Number(value))) {
      repliedToOptions.push(value);
    } else if (value.includes('-')) {
      specifiedOrganisations.push(value);
    }
  });

  return { repliedToOptions, specifiedOrganisations };
};

export const parseOrganisationResponsiveness = (value?: string) => {
  if (!value) return { hasSpecificOrg: false, organisationIds: [] as string[], flags: [] as number[] };
  const parts = value.split(',');
  let hasSpecificOrg = false;
  const organisationIds: string[] = [];
  const flags: number[] = [];
  for (const part of parts) {
    if (part === '1') hasSpecificOrg = true;
    else if (/^\d+$/.test(part)) flags.push(Number(part));
    else if (part) organisationIds.push(part);
  }
  return { hasSpecificOrg, organisationIds, flags };
};


export const parseCommunityResponsiveness = (value?: string) => {
  if (value === '1' || value === '2') return Number(value);
  return null;
};

export function addResponsivenessConditions(
  query: SelectQueryBuilder<any>,
  params: { organisationResponsiveness?: string; communityResponsiveness?: string }
): SelectQueryBuilder<any> {
  const orgRespConditions: string[] = [];

  // --- filtering the responsiveness of organizations ---
  const orgResp = parseOrganisationResponsiveness(params.organisationResponsiveness);
  const comResp = parseCommunityResponsiveness(params.communityResponsiveness);

  const commentStatuses = [
    COMMENT_STATUS.PUBLISHED,
    COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
  ];

  // 1 + UUID Organizations: only stories where there is a response from that organization
  if (orgResp.hasSpecificOrg && orgResp.organisationIds.length > 0) {
    query.andWhere(`
    EXISTS (
      SELECT 1 FROM story_comment sc
      JOIN user u ON u.id = sc.user_id
      WHERE sc.story_id = story.id
        AND u.organisation_id IN (:...orgIds)
        AND sc.status IN (:...commentStatuses)
    )
  `, {
      orgIds: orgResp.organisationIds,
      commentStatuses
    });
  }

  // 2 — there is a response from any organization (not specific)
  if (orgResp.flags.includes(2)) {
    orgRespConditions.push(`
      EXISTS (
        SELECT 1 FROM story_comment sc
        JOIN user u ON u.id = sc.user_id
        WHERE sc.story_id = story.id
          AND u.organisation_id IS NOT NULL
          AND sc.status IN (:...commentStatuses)
      )
    `);
  }

  // 3 — there is a response from solution proposed
  if (orgResp.flags.includes(3)) {
    orgRespConditions.push(`
    EXISTS (
      SELECT 1 FROM story_comment sc
      WHERE sc.story_id = story.id
        AND sc.solution_proposed = 1
        AND sc.status IN (:...commentStatuses)
    )
  `);
  }

  // 4 — no answers at all
  if (orgResp.flags.includes(4)) {
    orgRespConditions.push(`
      NOT EXISTS (
        SELECT 1 FROM story_comment sc
        WHERE sc.story_id = story.id
          AND sc.status IN (:...commentStatuses)
      )
    `);
  }

  if (orgRespConditions.length > 0) {
    query.andWhere('(' + orgRespConditions.join(' OR ') + ')', { commentStatuses });
  }

  // filtering by community responsiveness
  if (comResp) {
    if (comResp === 1) {
      query.andWhere(`
        EXISTS (
          SELECT 1 FROM story_comment sc
          LEFT JOIN user u ON u.id = sc.user_id
          WHERE sc.story_id = story.id
            AND (sc.user_id IS NULL OR u.organisation_id IS NULL)
            AND sc.status IN (:...commentStatuses)
        )
      `, { commentStatuses });
    }

    else if (comResp === 2) {
      query.andWhere(`
        NOT EXISTS (
          SELECT 1 FROM story_comment sc
          LEFT JOIN user u ON u.id = sc.user_id
          WHERE sc.story_id = story.id
            AND (sc.user_id IS NULL OR u.organisation_id IS NULL)
            AND sc.status IN (:...commentStatuses)
        )
      `, { commentStatuses });
    }
  }

  return query;
}

//new logic for metabase
export const mapResponsivenessToRepliedTo = (
  organisationResponsiveness?: string,
  communityResponsiveness?: string,
): string[] => {
  const orgResp = organisationResponsiveness
    ? parseOrganisationResponsiveness(organisationResponsiveness)
    : { flags: [], hasSpecificOrg: false, organisationIds: [] };

  const orgMap = [
    orgResp.flags.includes(1) ? ORG_RESP_NUMBER_TO_CONSTANT[1] : null,
    orgResp.flags.includes(2) ? ORG_RESP_NUMBER_TO_CONSTANT[2] : null,
    orgResp.flags.includes(3) ? ORG_RESP_NUMBER_TO_CONSTANT[3] : null,
    (orgResp.hasSpecificOrg && orgResp.organisationIds.length > 0)
      ? ORG_RESP_NUMBER_TO_CONSTANT[4]
      : null,
  ].filter(Boolean);

  const comFlags = communityResponsiveness
    ? communityResponsiveness.split(',').map(Number)
    : [];

  const comMap = comFlags
    .map(flag => COMMUNITY_RESP_NUMBER_TO_CONSTANT[flag] ?? null)
    .filter(Boolean);

  return [...orgMap, ...comMap];
};

export const countUnique = (iterable: string[]) => {
  return new Set(iterable).size;
};

export const getThematicAreaChildrenKeys = (): string[] =>
  Object.values(THEMATIC).filter((value) => value.split('.').length > 1);

export const updateThematicFilters = async (
  filter: FilterDto,
  thematicService: ThematicService,
) => {
  if (filter.thematic) {
    let thematicGroupObject = {};
    const thematics = _sort(
      parseStringArrayToInt(
        arrayRemoveEmptyVal(filter.thematic.toString().split(',')),
      ),
    );

    await Promise.all(
      thematics.map(async (thematic) => {
        const thematicEntity = await thematicService.findByIdOrFail(thematic);
        const parentId = thematicEntity.parentThematicId;
        if (parentId in thematicGroupObject) {
          thematicGroupObject = {
            ...thematicGroupObject,
            [parentId]: [...thematicGroupObject[parentId], thematic],
          };
        } else {
          thematicGroupObject = {
            ...thematicGroupObject,
            [parentId]: [thematic],
          };
        }
      }),
    );
    delete filter.thematic;
    filter.thematicAreaToFiltration = thematicGroupObject;
  }

  return filter;
};

export const chunkArray = (array: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export const getCurrentDateInCustomFormat = (time?: Date) => {
  const today = time ? time : new Date();
  const yyyy = today.getFullYear();
  let mm: string | number = today.getMonth() + 1;
  let dd: string | number = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return mm + '/' + dd + '/' + yyyy;
};

export function extractModuleSpecificFilterParameters(filters, includedKeys) {
  const includedSet = new Set(includedKeys);

  return Object.fromEntries(
    Object.entries(filters)
      .filter(([key]) => includedSet.has(key))
      .map(([key, value]) => [key, Array.isArray(value) ? value : []])
  );
}
