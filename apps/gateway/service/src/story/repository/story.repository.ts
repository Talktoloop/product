import { In, IsNull, Not, Repository, SelectQueryBuilder } from 'typeorm';
import config from '../../config/typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryEntity } from '../entity/story.entity';
import { OrderHierarchy, StoryModeratorOrderEnum, StoryOrderEnum } from '../../common/types';
import { _omit, COMMENT_STATUS, GET_STORY_FAILED, STORY_STATUS } from '@ourloop/shared';
import { CommentEntity } from '../../comment/entity/comment.entity';
import {
  addFilterCondition,
  addFilterJoins,
  addResponsivenessConditions,
  getConnection,
  isEmpty,
  thematicConditionAdd,
} from '../../common/helpers';
import { StoryPaginationWithOrderAndFilterDto } from '../../common/dto/story-pagination-with-order-and-filter.dto';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { StoryFilterAndOrderDto } from '../request/dto/story-filter-and-order.dto';
import { StoryVoteEntity } from '../entity/story-vote.entity';
import { StoryViewEntity } from '../entity/story-view.entity';
import { IncomingDataDashboardFilterDTO } from '../../dashboard/request/dto/incoming-data-dashboard-filter.dto';
import { BadRequestException, Logger } from '@nestjs/common';
import { StoryTranslationEntity } from '../entity/story-translation.entity';
import { CommentTranslationEntity } from '../../comment/entity/comment-translation.entity';

@EntityRepository(StoryEntity)
export class StoryRepository extends Repository<StoryEntity> {
  private readonly logger = new Logger(StoryRepository.name);

  async getStoryCount(
    languageId: number,
    filter?: StoryFilterAndOrderDto,
    thematicGroupObject?: Record<string, unknown>,
  ): Promise<number> {
    let query = await this.createQueryBuilder('story')
      .leftJoin('story.organisations', 'organisations')
      .leftJoin(
        'story.translations',
        'translations',
        'translations.language_id = :languageId',
        {
          languageId,
        },
      )

      .select('DISTINCT(story.id)')
      .where('story.status = :status', { status: STORY_STATUS.PUBLISHED });

    if (!isEmpty(filter)) {
      query = addFilterCondition(filter, addFilterJoins(query));
    }
    if (thematicGroupObject) {
      query = thematicConditionAdd(thematicGroupObject, query);
    }
    return query.getCount();
  }
  private subQueryComments = (sub: SelectQueryBuilder<any>) => {
    return sub
      .select([
        'comments.story_id AS comments_story_id',
        'COUNT(*) AS story_comments',
        `GROUP_CONCAT(DISTINCT commentTranslations.content ORDER BY commentTranslations.id SEPARATOR " | ") AS commentsContents`,
      ])
      .from(CommentEntity, 'comments')
      .leftJoin(
        CommentTranslationEntity,
        'commentTranslations',
        'commentTranslations.comment_id = comments.id',
      )
      .where('comments.status IN(:commentStatus)', {
        commentStatus: [
          COMMENT_STATUS.PUBLISHED,
          COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
        ],
      })
      .andWhere('commentTranslations.language_id = 1')
      .groupBy('comments.story_id');
  };

  private subQueryIsReplied = (sub: SelectQueryBuilder<any>) => {
    return sub
      .addSelect('story_id', 'replied_id')
      .addSelect('user.organisation_id', 'user_organisation_id')
      .from(CommentEntity, 'comment')
      .leftJoin('comment.user', 'user', 'comment.user_id = user.id')
      .where('comment.status IN(:commentStatus)', {
        commentStatus: [
          COMMENT_STATUS.PUBLISHED,
          COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
        ],
      })
      .groupBy('comment.story_id')
      .addGroupBy('user.id');
  };

  async findStoryIdsByOrganisationIds(
    ids: string[],
  ): Promise<Record<string, string>[]> {
    const connection = await getConnection(config);

    return connection.query(
      `select story_id from story_organisation where organisation_id IN (?)`,
      [ids],
    );
  }

  async findStoryIdsByDifficultyIds(
    ids: number[],
  ): Promise<Record<string, string>[]> {
    const connection = await getConnection(config);

    return connection.query(
      `select story_id from story_difficulty where difficulty_id IN (?)`,
      [ids],
    );
  }

  async findStoryIdsByThematicAreaIds(
    ids: (number | string)[],
  ): Promise<Record<string, string>[]> {
    const connection = await getConnection(config);

    return connection.query(
      `select story_id from story_thematic where thematic_id IN (?)`,
      [ids],
    );
  }

  async findStoryIdsByLanguageIds(
    ids: (number | string)[],
  ): Promise<Record<string, string>[]> {
    const connection = await getConnection(config);

    return connection.query(
      `select id from story where language_id IN (?)`,
      [ids],
    );
  }

  async findSensitiveStories(): Promise<StoryEntity[]> {
    return this.find({ where: { isSensitive: true } });
  }

  async findStoryIdsByParams(
    params: StoryFilterAndOrderDto,
    statuses: STORY_STATUS[],
  ): Promise<Record<string, string>[]> {
    let query = this.createQueryBuilder('story')
      .select('story.id', 'id')
      .leftJoin('story.organisations', 'orgs')
      .leftJoin(StoryVoteEntity, 'vote', 'vote.story_id = story.id')
      .addSelect('COUNT(vote.id)', 'vote_count')
      .groupBy('story.id')
      .where('story.status IN (:...statuses)', { statuses });

    query = addResponsivenessConditions(query, params);

    if (params.storyIds) {
      query.andWhere('story.id IN (:...storyIds)', {
        storyIds: params.storyIds,
      });
    }

    if (params.countryIds) {
      query.andWhere('story.country_id IN (:...countryIds)', {
        countryIds: params.countryIds,
      });
    }

    const filter = _omit(params as Record<string, any>, [
      'page',
      'limit',
      'order',
      'organisationResponsiveness',
      'communityResponsiveness',
    ]);

    if (!isEmpty(filter)) {
      query = addFilterCondition(
        filter,
        addFilterJoins(query),
        statuses.includes(STORY_STATUS.SENT_TO_CASE_MANAGER),
      );
    }

    switch (params.order?.toLowerCase()) {
      case StoryOrderEnum.NEWEST_FIRST:
        query.orderBy('story.createdAt', 'DESC');
        break;
      case StoryOrderEnum.OLDEST_FIRST:
        query.orderBy('story.createdAt', 'ASC');
        break;
      case StoryOrderEnum.UPVOTED:
        query.orderBy('vote_count', 'DESC');
        break;
      default:
        query.orderBy('story.createdAt', 'DESC');
        break;
    }

    return query.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_STORY_FAILED);
    });
  }

  async findTranslationsToExport(): Promise<
    Array<StoryTranslationEntity & { storyLanguageId: number }>
  > {
    return this.createQueryBuilder('story')
      .select('story.language_id', 'storyLanguageId')
      .addSelect('translations.language_id', 'languageId')
      .addSelect('translations.story_id', 'storyId')
      .addSelect('translations.content', 'content')
      .leftJoin('story.translations', 'translations')
      .where('story.status = :status', { status: STORY_STATUS.PUBLISHED })
      .execute()
      .catch((error) => {
        this.logger.error(error);
        throw new BadRequestException(GET_STORY_FAILED);
      });
  }

  async findStoriesToExport(): Promise<StoryEntity[]> {
    const query = this.createQueryBuilder('story')
      .select('story.id', 'id')
      .addSelect('story.status', 'status')
      .addSelect('story.channel', 'channel')
      .addSelect('story.language_id', 'languageId')
      .addSelect('story.isSensitive', 'isSensitive')
      .addSelect('story.place', 'place')
      .addSelect('story.published_at', 'publishedAt')
      .addSelect('story.country_id', 'countryId')
      .where('story.status = :status', { status: STORY_STATUS.PUBLISHED })
      .orderBy('story.publishedAt', 'DESC');

    return query.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_STORY_FAILED);
    });
  }

  async findStoriesByIds(
    ids: string[],
    order: StoryOrderEnum,
  ): Promise<Record<string, string>[]> {
    const query = this.createQueryBuilder('story')
      .addSelect('replied.user_organisation_id', 'organisations_replied')
      .addSelect((subQuery) => {
        return subQuery
          .select('COUNT(*)', 'vote_count')
          .from(StoryVoteEntity, 'vote')
          .where('vote.story_id = story.id');
      }, 'vote_count')
      .addSelect((subQuery) => {
        return subQuery
          .select('COUNT(*)', 'view_count')
          .from(StoryViewEntity, 'view')
          .where('view.story_id = story.id');
      }, 'view_count')
      .leftJoinAndSelect(
        'story.storyAdministrativeData',
        'storyAdministrativeData',
      )
      .leftJoinAndSelect(
        'storyAdministrativeData.administrativeData',
        'administrativeData',
      )
      .leftJoinAndSelect('story.categories', 'categories')
      .leftJoin('story.thematics', 'thematic')
      .addSelect('thematic.id', 'thematic_id')
      .leftJoinAndSelect('administrativeData.names', 'administrativeDataNames')
      .leftJoinAndSelect('story.recipient', 'recipient')
      .leftJoinAndSelect('story.country', 'country')
      .leftJoinAndSelect('story.organisations', 'organisations')
      .addSelect('organisations.verified', 'organisations_verified') // Select verified property here
      .leftJoinAndSelect('story.translations', 'translations')
      .leftJoinAndSelect('translations.language', 'language')
      .leftJoinAndSelect('story.user', 'user')
      .leftJoinAndSelect('user.organisation', 'organisation')
      .loadRelationCountAndMap('story.votes', 'story.votes')
      .loadRelationCountAndMap('story.views', 'story.views')
      .leftJoinAndSelect(
        (subQuery) => this.subQueryComments(subQuery),
        'comments',
        '`comments`.`comments_story_id` = `story`.`id`',
      )
      .leftJoin(
        (subQuery) => this.subQueryIsReplied(subQuery),
        'replied',
        '(`replied`.`replied_id` = `story`.`id`) AND (`replied`.`user_organisation_id` IN (`organisations`.`id`))',
      )
      .groupBy('story.id')
      .addGroupBy('categories.id')
      .addGroupBy('thematic.id')
      .addGroupBy('organisations.id')
      .addGroupBy('organisations.verified') // Group by verified to include it in the result set
      .addGroupBy('translations.id')
      .addGroupBy('storyAdministrativeData.id')
      .addGroupBy('administrativeDataNames.id')

      .where(`story.id IN (:ids)`, { ids });

    switch (order) {
      case StoryOrderEnum.NEWEST_FIRST: {
        query.orderBy('story.createdAt', 'DESC');
        break;
      }
      case StoryOrderEnum.OLDEST_FIRST: {
        query.orderBy('story.createdAt', 'ASC');
        break;
      }
      case StoryOrderEnum.UPVOTED: {
        query.orderBy('vote_count', 'DESC');
        break;
      }
      default: {
        query.orderBy('story.createdAt', 'DESC');
        break;
      }
    }

    return query.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_STORY_FAILED);
    });
  }

  async findStoriesForUNExport(
    ids: string[],
    order: StoryOrderEnum,
  ): Promise<Record<string, any>[]> {
    const query = this.createQueryBuilder('story')
      .leftJoin('story.country', 'country')
      .addSelect('country.name', 'country_name')
      .leftJoin('story.recipient', 'recipient')
      .addSelect([
        'recipient.nickname',
        'recipient.email',
        'recipient.age_by_moderator',
        'recipient.gender_by_moderator',
        'recipient.is_minority_by_moderator',
      ])
      .leftJoin('story.categories', 'categories')
      .addSelect('categories.id', 'categories_id')
      .leftJoin('story.thematics', 'thematic')
      .addSelect('thematic.id', 'thematic_id')
      .leftJoin('story.difficulties', 'difficulties')
      .addSelect('difficulties.id', 'difficultyIds')
      .leftJoin('story.organisations', 'organisations')
      .addSelect('organisations.name', 'organisations_name')
      .leftJoin('story.translations', 'translations', 'translations.language_id = 1')
      .addSelect(['translations.content'])
      .leftJoin('story.storyAdministrativeData', 'storyAdministrativeData')
      .leftJoin('storyAdministrativeData.administrativeData', 'administrativeData')
      .leftJoin('administrativeData.names', 'administrativeDataNames')
      .addSelect([
        'administrativeDataNames.name',
        'MAX(administrativeData.level) AS administrative_level'
      ])
      .leftJoin('story.commentsRel', 'comments')
      .leftJoin('comments.translations', 'commentTranslations', 'commentTranslations.language_id = 1')
      .addSelect([
        'COUNT(comments.id) AS story_comments',
        `GROUP_CONCAT(DISTINCT commentTranslations.content ORDER BY commentTranslations.id SEPARATOR " | ") AS commentsContents`,
      ])
      .where('story.id IN (:...ids)', { ids })
      .groupBy('story.id')
      .addGroupBy('country.name')
      .addGroupBy('recipient.id')
      .addGroupBy('categories.id')
      .addGroupBy('thematic.id')
      .addGroupBy('difficulties.id')
      .addGroupBy('organisations.id')
      .addGroupBy('translations.id')
      .addGroupBy('administrativeDataNames.id');

    switch (order) {
      case StoryOrderEnum.NEWEST_FIRST:
        query.orderBy('story.createdAt', 'DESC');
        break;
      case StoryOrderEnum.OLDEST_FIRST:
        query.orderBy('story.createdAt', 'ASC');
        break;
      default:
        query.orderBy('story.createdAt', 'DESC');
        break;
    }

    try {
      return await query.execute();
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(GET_STORY_FAILED);
    }
  }

  async findStoryByIdAndParams(
    storyId: string,
    params: {
      withDetails: boolean;
      channel?: CHANNEL_CONSTANTS;
      status?: string;
    },
  ): Promise<StoryEntity> {
    const query = this.createQueryBuilder('story')
      .where('story.id = :storyId', { storyId })
      .addSelect('story.isUrgent');

    const thematicQuery = query.clone();
    const difficultiesQuery = query.clone();
    if (params.withDetails) {
      query
        .addSelect('replied.user_organisation_id', 'organisations_replied')
        .leftJoinAndSelect('story.markedAsSensitiveBy', 'markedAsSensitiveBy')
        .leftJoinAndSelect('story.recipient', 'recipient')
        .leftJoinAndSelect('story.country', 'country')
        .leftJoinAndSelect(
          'story.storyAdministrativeData',
          'storyAdministrativeData',
        )
        .leftJoinAndSelect(
          'storyAdministrativeData.administrativeData',
          'administrativeData',
        )
        .leftJoinAndSelect(
          'administrativeData.names',
          'administrativeDataNames',
        )
        .leftJoinAndSelect('story.categories', 'categories')
        .leftJoinAndSelect('story.translations', 'translations')
        .leftJoinAndSelect('story.language', 'story_language')
        .leftJoinAndSelect('translations.language', 'language')
        .leftJoinAndSelect('story.maternityStatus', 'maternityStatus')
        .leftJoinAndSelect('story.organisations', 'organisations')
        .leftJoinAndSelect('story.rejectReasons', 'rejectReasons')
        .leftJoinAndSelect('story.conversation', 'conversation')
        .leftJoinAndSelect('story.user', 'user')
        .leftJoinAndSelect('organisations.users', 'users')
        .leftJoinAndSelect('organisations.country', 'organisation.country')
        .leftJoinAndSelect('user.organisation', 'organisation')
        .loadRelationCountAndMap('story.votes', 'story.votes')
        .loadRelationCountAndMap('story.views', 'story.views')
        .leftJoinAndSelect(
          (subQuery) => this.subQueryComments(subQuery),
          'comments',
          '`comments`.`comments_story_id` = `story`.`id`',
        )
        .leftJoin(
          (subQuery) => this.subQueryIsReplied(subQuery),
          'replied',
          '(`replied`.`replied_id` = `story`.`id`) AND (`replied`.`user_organisation_id` IN (`organisations`.`id`))',
        )
        .groupBy('categories.id')
        .addGroupBy('maternityStatus.id')
        .addGroupBy('organisations.id')
        .addGroupBy('translations.id')
        .addGroupBy('storyAdministrativeData.id')
        .addGroupBy('administrativeDataNames.id')
        .addGroupBy('rejectReasons.id')
        .addGroupBy('users.id');

      thematicQuery
        .leftJoinAndSelect(
          'story.thematics',
          'thematic',
          'story_thematic.story_id = story.id',
        )
        .leftJoinAndSelect('thematic.parent', 'thematicParent')
        .groupBy('thematic.id');

      difficultiesQuery
        .leftJoinAndSelect('story.difficulties', 'difficulties')
        .groupBy('difficulties.id');
    }

    if (params.channel) {
      query.andWhere('story.channel = :channel', { channel: params.channel });
    }

    if (params.status) {
      query.andWhere('story.status = :status', { status: params.status });
    }

    const [mainResult, thematicResult, difficultiesResult] = await Promise.all([
      query.getOne(),
      thematicQuery.getOne(),
      difficultiesQuery.getOne(),
    ]);

    return mainResult
      ? { ...mainResult, ...thematicResult, ...difficultiesResult }
      : null;
  }

  async getAdministrativeDataIdsByCountryId(countryId: number) {
    return this.createQueryBuilder('story')
      .select('storyAdministrativeData.administrativeAreaId')
      .where('story.country_id = :countryId', {
        countryId,
      })
      .andWhere('story.status = :status', {
        status: STORY_STATUS.PUBLISHED,
      })
      .innerJoin('story.storyAdministrativeData', 'storyAdministrativeData')
      .execute();
  }

  async getPendingStoriesByIds(
    ids: string[],
    order: StoryModeratorOrderEnum,
    languageId: number,
    defaultLanguageId: number,
  ) {
    const query = this.createQueryBuilder('story')
      .select('story.id', 'id')
      .addSelect('story.createdAt', 'createdAt')
      .addSelect('story.channel', 'channel')
      .addSelect('story.status', 'status')
      .addSelect('story.conversationId', 'conversationId')
      .leftJoinAndSelect('story.assignedModerator', 'assignedModerator')
      .addSelect('country.code', 'countryCode')
      .addSelect('language.code', 'languageCode')
      .addSelect('categories.code', 'categoryCode')
      .addSelect('ivrrMessages.s3FileId', 's3FileId')
      .addSelect('ivrrMessages.recordingDuration', 'recordingDuration')
      .addSelect('translations.content', 'userContent')
      .addSelect('translations_default.content', 'defaultContent')
      .addSelect('translations_original.content', 'originalContent')
      .addSelect('story.isSensitive', 'isSensitive')
      .addSelect('translations.numberOfWords', 'numberOfWordsOfUserContent')
      .addSelect(
        'translations_default.numberOfWords',
        'numberOfWordsOfDefaultContent',
      )
      .addSelect(
        'translations_original.numberOfWords',
        'numberOfWordsOfOriginalContent',
      )
      .leftJoin('story.country', 'country')
      .leftJoin('story.categories', 'categories')
      .leftJoin('story.language', 'language')
      .leftJoin('story.conversation', 'conversation')
      .leftJoin('conversation.ivrrMessages', 'ivrrMessages')
      .leftJoinAndSelect(
        'story.translations',
        'translations',
        'translations.languageId = :languageId',
        { languageId },
      )
      .leftJoin(
        'story.translations',
        'translations_default',
        'translations_default.languageId = :defaultLanguageId',
        { defaultLanguageId },
      )
      .leftJoin(
        'story.translations',
        'translations_original',
        'translations_original.languageId = story.languageId',
      )
      .groupBy(
        'story.id, story.createdAt, story.channel, story.status, story.conversationId, country.code, language.code, categories.code, ivrrMessages.s3FileId, ivrrMessages.recordingDuration',
      )
      .addGroupBy('assignedModerator.id')
      .where(`story.id IN (:ids)`, { ids });

    this.applyStoryModeratorOrder(query, order);
    return query.execute();
  }

  private getQueryForFilteredStories = (
    params:
      | StoryPaginationWithOrderAndFilterDto
      | IncomingDataDashboardFilterDTO,
  ) => {
    const query = this.createQueryBuilder('story')
      .select('story.id', 'id')
      .leftJoin('story.language', 'language')
      .leftJoin('story.country', 'country')
      .leftJoin('story.conversation', 'conversation')
      .leftJoin('story.translations', 'translations')
      .leftJoin('conversation.ivrrMessages', 'ivrrMessages')
      .groupBy('story.id')
      .where({
        status: Not(
          In([
            STORY_STATUS.PUBLISHED,
            STORY_STATUS.REJECTED,
            STORY_STATUS.SENT_TO_CASE_MANAGER,
            STORY_STATUS.CONDITIONALLY_REJECTED,
          ]),
        ),
      });

    if (params.language) {
      query.andWhere('language.code IN (:languageCode)', {
        languageCode: params.language
          .split(',')
          .filter((item) => !!item)
          .map((value) => value.trim()),
      });
    }
    if (params.country) {
      query.andWhere('country.code IN (:countryCode)', {
        countryCode: params.country
          .split(',')
          .filter((item) => !!item)
          .map((value) => value.trim()),
      });
    }
    if (params.channel) {
      query.andWhere('story.channel IN (:channel)', {
        channel: params.channel
          .split(',')
          .filter((item) => !!item)
          .map((value) => value.trim()),
      });
    }
    if (params.from) {
      query.andWhere('story.createdAt >= :from', {
        from: params.from,
      });
    }
    if (params.to) {
      query.andWhere('story.createdAt <= :to', {
        to: params.to,
      });
    }
    if (params.status) {
      query.andWhere('story.status IN (:statuses)', {
        statuses: params.status
          .split(',')
          .filter((item) => !!item)
          .map((value) => value.trim()),
      });
    }
    if (params.durationMin !== undefined) {
      query.andWhere('ivrrMessages.recordingDuration >= :durationMin', {
        durationMin: params.durationMin,
      });
    }
    if (params.durationMax !== undefined) {
      query.andWhere('ivrrMessages.recordingDuration <= :durationMax', {
        durationMax: params.durationMax,
      });
    }
    if (params.isSensitive !== undefined) {
      query.andWhere('story.isSensitive = :isSensitive', {
        isSensitive: params.isSensitive,
      });
    }
    if (params.order) {
      this.applyStoryModeratorOrder(query, params.order);
    }

    if (params.searchTerm) {
      query
        .andWhere(
          'MATCH(translations.content) AGAINST(:searchTerm IN NATURAL LANGUAGE MODE)',
          { searchTerm: params.searchTerm },
        )
        .getRawMany();
    }

    return query;
  };

  async applyStoryModeratorOrder(
    query: SelectQueryBuilder<StoryEntity>,
    order: StoryModeratorOrderEnum,
  ) {
    switch (order) {
      case StoryModeratorOrderEnum.NEWEST_FIRST:
        query.orderBy('story.createdAt', 'DESC');
        break;
      case StoryModeratorOrderEnum.OLDEST_FIRST:
        query.orderBy('story.createdAt', 'ASC');
        break;
      case StoryModeratorOrderEnum.NOT_STARTED: {
        query
          .addSelect(
            `CASE WHEN story.status = :notStartedValue then :startsFromValue else :othersValue end`,
            'sort_rank',
          )
          .setParameter('notStartedValue', STORY_STATUS.NOT_STARTED)
          .setParameter('startsFromValue', OrderHierarchy.STARTS_FROM)
          .setParameter('othersValue', OrderHierarchy.OTHERS)
          .orderBy('sort_rank');
        break;
      }
      case StoryModeratorOrderEnum.PENDING_PUBLICATION: {
        query
          .addSelect(
            `CASE WHEN story.status = :pendingPublicationValue then :startsFromValue else :othersValue end`,
            'sort_rank',
          )
          .setParameter(
            'pendingPublicationValue',
            STORY_STATUS.PENDING_PUBLICATION,
          )
          .setParameter('startsFromValue', OrderHierarchy.STARTS_FROM)
          .setParameter('othersValue', OrderHierarchy.OTHERS)
          .orderBy('sort_rank');
        break;
      }
      default: {
        query.orderBy('story.createdAt', 'ASC');
        break;
      }
    }
  }

  async getNumberOfPendingStories(
    params: IncomingDataDashboardFilterDTO,
  ): Promise<number> {
    return this.getQueryForFilteredStories(params).getCount();
  }

  async findPendingStoriesIds(
    params: StoryPaginationWithOrderAndFilterDto,
  ): Promise<string[]> {
    const query = this.getQueryForFilteredStories(params);

    const result = await query.getRawMany();

    return result.map((row) => row.id);
  }

  async findStoriesWithoutDefinedAdministrativeArea(
    countryId: number,
  ): Promise<StoryEntity[]> {
    return this.find({
      where: {
        place: Not(IsNull()),
        countryId,
        status: Not(
          In([STORY_STATUS.REJECTED, STORY_STATUS.SENT_TO_CASE_MANAGER]),
        ),
      },
      relations: ['storyAdministrativeData', 'country'],
    });
  }
}
