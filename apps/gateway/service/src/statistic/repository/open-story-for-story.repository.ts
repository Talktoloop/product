import { Injectable } from '@nestjs/common';
import { StoryRepository } from '../../story/repository/story.repository';
import { SelectQueryBuilder, Brackets } from 'typeorm';
import config from '../../config/typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryEntity } from '../../story/entity/story.entity';
import { STORY_STATUS, COMMENT_STATUS, _omit } from '@ourloop/shared';
import { StoriesDividedByDisabilityQueryResult } from '../response/stories-divided-by-disability.ro';
import { StoryAgeCount } from '../interfaces/story-age-count.interface';
import { FilterDto } from '../../common/dto/filter.dto';
import {
  addFilterCondition,
  addFilterJoins,
  isEmpty,
  addSensitiveStoryFilter,
  getConnection,
  addResponsivenessConditions,
} from '../../common/helpers';
import { Author } from '../interfaces/author.interface';
import { TimeToResponse } from '../interfaces/time-to-response.interface';
import { ThematicIdCount } from '../interfaces/thematic-id-count.interface';
import { StoryGenderCount } from '../interfaces/story-gender-count.interface';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { startOfMonth, endOfMonth, formatISO } from 'date-fns';
import { CountRO } from '../response/count.ro';

@Injectable()
@EntityRepository(StoryEntity)
export class OpenStoryForStoryRepository extends StoryRepository {
  findCountOfStoriesByFilter(filters: FilterDto): Promise<CountRO[]> {
    let query = this.createQueryBuilder('story')
      .select('COUNT(DISTINCT story.id)', 'count')
      .where('story.status = :status', {
        status: STORY_STATUS.PUBLISHED,
      });

    query = addResponsivenessConditions(query, filters);

    const filter = _omit(filters as Record<string, any>, [
      'page',
      'limit',
      'order',
      'organisationResponsiveness',
      'communityResponsiveness',
    ]);

    if (!isEmpty(filter)) {
      query = addFilterCondition(filter, addFilterJoins(query));
    }

    return query.execute();
  }
  private subQueryThematic = (
    sub: SelectQueryBuilder<any>,
    status: string,
    filters?: FilterDto,
    id?: number,
  ) => {
    let query = sub
      .select('COUNT(DISTINCT story.id)', 'count')
      .addSelect(
        'CASE WHEN thematic.parent_thematic_id IS NOT NULL THEN thematic.parent_thematic_id ELSE thematic.id END',
        'thematicId',
      )
      .addFrom('story', 'story')
      .leftJoin('story.categories', 'category')
      .leftJoin('story.thematics', 'thematic')
      .where('thematic_id IS NOT NULL')
      .andWhere('status =:status', { status });

    if (id) {
      query.andWhere('category.id = :id', { id });
    }

    query.groupBy('thematic.id').addGroupBy('thematic.parent_thematic_id');

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query;
  };

  async getSensitiveStoriesByPeriod(
    filters: FilterDto,
  ): Promise<QuantityPerMonth[]> {
    let query = this.createQueryBuilder('story')
      .select('DATE_FORMAT(story.created_at, "%Y-%m")', 'month')
      .addSelect('COUNT(DISTINCT story.id)', 'count');

    query = addSensitiveStoryFilter(query)
      .andWhere('story.created_at between :start and :end', {
        start: formatISO(startOfMonth(new Date(filters.from))),
        end: formatISO(endOfMonth(new Date(filters.to))),
      })
      .orderBy('month')
      .groupBy('month');

    if (!isEmpty(filters)) {
      query = addFilterCondition(
        _omit(filters as Record<string, any>, ['from', 'to']),
        addFilterJoins(query),
      );
    }

    return query.execute();
  }

  async getStoriesPerThematicArea(
    filters: FilterDto,
    status: string,
    id?: number,
  ): Promise<ThematicIdCount[]> {
    const connection = await getConnection(config);

    const query = connection
      .createQueryBuilder()
      .select('i.thematicId')
      .addSelect('MAX(i.count)', 'count')
      .from(
        (subQuery) => this.subQueryThematic(subQuery, status, filters, id),
        'i',
      )
      .groupBy('i.thematicId');

    return query.execute();
  }

  async getCountOfSensitiveStoriesDividedByGender(
    filters: FilterDto,
  ): Promise<StoryGenderCount[]> {
    let query = this.createQueryBuilder('story')
      .select('COUNT(DISTINCT story.id)', 'count')
      .addSelect('recipient.genderByModerator', 'gender')
      .leftJoin('story.recipient', 'recipient');

    query = addSensitiveStoryFilter(query).groupBy('gender');

    if (!isEmpty(filters)) {
      query = addFilterCondition(
        filters,
        addFilterJoins(query, ['story.recipient']),
      );
    }

    return query.execute();
  }

  async getCountOfStoriesForStoryTypeDividedByGender(
    id: number,
    filters?: FilterDto,
  ): Promise<StoryGenderCount[]> {
    let query = this.createQueryBuilder('story')
      .select('COUNT(DISTINCT story.id)', 'count')
      .addSelect('recipient.genderByModerator', 'gender')
      .leftJoin('story.recipient', 'recipient')
      .where({ status: STORY_STATUS.PUBLISHED })
      .andWhere('type.id = :id', { id })
      .groupBy('gender');

    if (!isEmpty(filters)) {
      query = addFilterCondition(
        filters,
        addFilterJoins(query, ['story.recipient']),
      );
    } else {
      query.leftJoin('story.categories', 'type');
    }

    return query.execute();
  }

  async getCountOfSensitiveStoriesDividedByAge(
    filters: FilterDto,
  ): Promise<StoryAgeCount[]> {
    let query = this.createQueryBuilder('story')
      .select('COUNT(DISTINCT story.id)', 'count')
      .addSelect('recipient.ageByModerator', 'age')
      .leftJoin('story.recipient', 'recipient');

    query = addSensitiveStoryFilter(query).groupBy('age');

    if (!isEmpty(filters)) {
      query = addFilterCondition(
        filters,
        addFilterJoins(query, ['story.recipient']),
      );
    }

    return query.execute();
  }

  async getCountOfStoriesForStoryTypeDividedByAge(
    id: number,
    filters?: FilterDto,
  ): Promise<StoryAgeCount[]> {
    let query = this.createQueryBuilder('story')
      .select('COUNT(DISTINCT story.id)', 'count')
      .addSelect('recipient.ageByModerator', 'age')
      .leftJoin('story.recipient', 'recipient')
      .where({ status: STORY_STATUS.PUBLISHED })
      .andWhere('type.id = :id', { id })
      .groupBy('age');

    if (!isEmpty(filters)) {
      query = addFilterCondition(
        filters,
        addFilterJoins(query, ['story.recipient']),
      );
    } else {
      query.leftJoin('story.categories', 'type');
    }

    return query.execute();
  }

  organisationBase(filters?: FilterDto): SelectQueryBuilder<StoryEntity> {
    let query = this.createQueryBuilder('story')
      .select('story.id')
      .leftJoin('story.commentsRel', 'comments')
      .leftJoin('comments.user', 'user')
      .where({ status: STORY_STATUS.PUBLISHED })
      .andWhere('comments.status = :commentsStatus', {
        commentsStatus: COMMENT_STATUS.PUBLISHED,
      })
      .andWhere('user.organisation IS NOT NULL')
      .groupBy('story.id');

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query;
  }

  async getStoriesTotal(filters?: FilterDto): Promise<number> {
    if (!filters)
      return this.count({ where: { status: STORY_STATUS.PUBLISHED } });

    let query = this.createQueryBuilder('story')
      .select('story.id')
      .where({ status: STORY_STATUS.PUBLISHED });

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.getCount();
  }

  async getCountOfStoriesWithResponds(filters?: FilterDto): Promise<number> {
    let query = this.createQueryBuilder('story')
      .select('story.id')
      .leftJoin('story.commentsRel', 'comments')
      .where({ status: STORY_STATUS.PUBLISHED })
      .andWhere('comments.status = :commentsStatus', {
        commentsStatus: COMMENT_STATUS.PUBLISHED,
      })

      .groupBy('story.id');

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.getCount();
  }

  async getCountOfStoriesWithOrganisationResponds(
    filters?: FilterDto,
  ): Promise<number> {
    return this.organisationBase(filters).getCount();
  }

  async getUniqueTaggedOrganisationIds(
    filters?: FilterDto,
  ): Promise<{ id: string }[]> {
    let query = this.createQueryBuilder('story')
      .select('organisation_id', 'id')
      .where({ status: STORY_STATUS.PUBLISHED })
      .andWhere('organisation_id IS NOT NULL')
      .groupBy('organisation_id');

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    } else {
      query.leftJoin(
        'story_organisation',
        'story_organisation',
        'story.id = story_organisation.story_id',
      );
    }

    return query.execute();
  }

  async getUniqueNotAnonymousStoryAuthors(
    filters?: FilterDto,
  ): Promise<Author[]> {
    let query = this.createQueryBuilder('story')
      .select('user_id', 'userId')
      .addSelect('user.nickname', 'nickname')
      .leftJoin('story.user', 'user')
      .where({ status: STORY_STATUS.PUBLISHED })
      .andWhere(
        new Brackets((qb) => {
          qb.where('story.user_id is not null');
          qb.orWhere('user.nickname is not null');
        }),
      )
      .groupBy('userId, user.nickname');

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.execute();
  }

  async getNumberOfAnonymousStoryAuthors(filters?: FilterDto): Promise<number> {
    let query = this.createQueryBuilder('story')
      .select('user_id', 'userId')
      .addSelect('user.nickname', 'nickname')
      .leftJoin('story.user', 'user')
      .where({ status: STORY_STATUS.PUBLISHED })
      .andWhere('story.user_id is null')
      .andWhere('user.nickname is null');

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.getCount();
  }

  async getNumberOStoriesByStatus(
    filters: FilterDto,
    status: string,
  ): Promise<number> {
    let query = this.createQueryBuilder('story').where(
      'story.status = :status',
      {
        status,
      },
    );

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.getCount();
  }

  private partialQueryForGetStoriesDividedByDisabilities = (
    sub: SelectQueryBuilder<any>,
    status: string,
    isSub = false,
    filters?: FilterDto,
  ) => {
    let subQuery = sub
      .select('difficulty.code', 'code')
      .addSelect('COUNT(difficulty.id)', 'count')
      .where('status = :status', { status })
      .andWhere('difficulty.id IS NOT NULL')
      .groupBy('difficulty.id');

    if (isSub) {
      subQuery.from('story', 'story');
      subQuery = addFilterCondition(filters, addFilterJoins(subQuery));

      subQuery.addSelect(`CONCAT(difficulty.id, '',story.id)`, 'alias');
      subQuery.addGroupBy('alias');
    }

    return subQuery;
  };

  async getStoriesDividedByDisabilities(
    filters?: FilterDto,
  ): Promise<StoriesDividedByDisabilityQueryResult[]> {
    const query = this.createQueryBuilder('story');
    const connection = await getConnection(config);

    if (!isEmpty(filters)) {
      const queryParent = connection
        .createQueryBuilder()
        .select('COUNT(sub.code)', 'count')
        .addSelect('sub.code', 'code')
        .addFrom(
          (subQuery) =>
            this.partialQueryForGetStoriesDividedByDisabilities(
              subQuery,
              STORY_STATUS.PUBLISHED,
              true,
              filters,
            ),
          'sub',
        )
        .addGroupBy('sub.code');

      return queryParent.execute();
    } else {
      return this.partialQueryForGetStoriesDividedByDisabilities(
        query,
        STORY_STATUS.PUBLISHED,
      )
        .leftJoin('story.difficulties', 'difficulty')
        .execute();
    }
  }

  async getNumberOfSensitiveStories(filters?: FilterDto): Promise<number> {
    let query = this.createQueryBuilder('story');

    query = addSensitiveStoryFilter(query);

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.getCount();
  }

  async getAvgStoryResponseTimePerStoryType(
    storyTypeId: number,
    filters?: FilterDto,
  ): Promise<TimeToResponse[]> {
    let query = this.createQueryBuilder('story')
      .select(
        'TIMESTAMPDIFF(MINUTE, story.published_at, story_comment.published_at)',
        'time',
      )
      .innerJoin(
        'story_comment',
        'story_comment',
        'story_comment.id = (SELECT id FROM story_comment c WHERE c.story_id = story.id AND c.status = :commentStatus ORDER BY published_at ASC LIMIT 1 )',
      )
      .innerJoin('story_category', 'sc', 'sc.story_id = story.id')
      .where('story.status =  :storyStatus')
      .andWhere('sc.category_id = :storyTypeId')
      .groupBy('story_comment.id')
      .addGroupBy('story.published_at')
      .setParameters({
        commentStatus: COMMENT_STATUS.PUBLISHED,
        storyStatus: STORY_STATUS.PUBLISHED,
        storyTypeId,
      });

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.execute();
  }

  async getAvgResponseTime(filters?: FilterDto): Promise<TimeToResponse[]> {
    let query = this.createQueryBuilder('story')
      .select(
        'TIMESTAMPDIFF(MINUTE, story.published_at, story_comment.published_at)',
        'time',
      )
      .addSelect('story_comment.id')
      .innerJoin(
        'story_comment',
        'story_comment',
        'story_comment.id = (SELECT id FROM story_comment c WHERE c.story_id = story.id AND c.status = :commentStatus ORDER BY published_at ASC LIMIT 1 )',
      )
      .innerJoin('story_category', 'sc', 'sc.story_id = story.id')
      .where('story.status =  :storyStatus')
      .groupBy('story_comment.id')
      .addGroupBy('story.published_at')
      .setParameters({
        commentStatus: COMMENT_STATUS.PUBLISHED,
        storyStatus: STORY_STATUS.PUBLISHED,
      });

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.execute();
  }
}
