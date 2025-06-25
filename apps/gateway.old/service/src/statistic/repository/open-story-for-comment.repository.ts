import { Injectable } from '@nestjs/common';
import {
  addFilterCondition,
  addFilterJoins,
  isEmpty,
  addSensitiveStoryFilter,
} from '../../common/helpers';
import { Brackets } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { CommentRepository } from '../../comment/repository/comment.repository';
import { STORY_STATUS, COMMENT_STATUS, _omit } from '@ourloop/shared';
import { FilterDto } from '../../common/dto/filter.dto';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { startOfMonth, endOfMonth, formatISO } from 'date-fns';
import { Author } from '../interfaces/author.interface';

@Injectable()
@EntityRepository(CommentEntity)
export class OpenStoryForCommentRepository extends CommentRepository {
  async getCommentsByPeriod(filters: FilterDto): Promise<QuantityPerMonth[]> {
    let query = this.createQueryBuilder('comment')
      .select('DATE_FORMAT(comment.published_at, "%Y-%m")', 'month')
      .addSelect('COUNT(DISTINCT comment.id)', 'count')
      .innerJoin('comment.story', 'story')
      .where('comment.published_at between :start and :end', {
        start: formatISO(startOfMonth(new Date(filters.from))),
        end: formatISO(endOfMonth(new Date(filters.to))),
      })
      .andWhere('comment.status = :status', {
        status: COMMENT_STATUS.PUBLISHED,
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

  getUniqueAuthorsIdsForComment(filters?: FilterDto): Promise<Author[]> {
    let query = this.createQueryBuilder('comment')
      .select('comment.userId', 'userId')
      .addSelect('comment.nickname', 'nickname')
      .innerJoin('story', 'story', 'comment.story_id = story.id')
      .where({ status: COMMENT_STATUS.PUBLISHED })
      .andWhere('comment.userId IS NOT NULL')
      .groupBy('comment.userId, comment.nickname');

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.execute();
  }

  async getNumberOfOrganizationRepliesForSenstiveStories(
    filters?: FilterDto,
  ): Promise<number> {
    let query = this.createQueryBuilder('comment')
      .innerJoin('story', 'story', 'comment.story_id = story.id')
      .innerJoin(
        'user',
        'u',
        'u.id = comment.user_id and u.organisation_id is not null',
      );

    query = addSensitiveStoryFilter(query).andWhere(
      'comment.status = :status',
      {
        status: COMMENT_STATUS.PUBLISHED,
      },
    );

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }
    return query.getCount();
  }

  async getNumberOfCommunityRepliesForSenstiveStories(
    filters?: FilterDto,
  ): Promise<number> {
    let query = this.createQueryBuilder('comment')
      .innerJoin('story', 'story', 'comment.story_id = story.id')
      .leftJoin('user', 'u', 'u.id = comment.user_id');

    query = addSensitiveStoryFilter(query)
      .andWhere(
        new Brackets((qb) => {
          qb.where('comment.user_id is null').orWhere(
            'u.organisation_id is null',
          );
        }),
      )
      .andWhere('comment.status = :status', {
        status: COMMENT_STATUS.PUBLISHED,
      });

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.getCount();
  }

  async getTotalResponsesCount(filters?: FilterDto): Promise<number> {
    let query = this.createQueryBuilder('comment')
      .select('comment.id')
      .innerJoin('story', 'story', 'comment.story_id = story.id')
      .where('comment.status = :commentStatus', {
        commentStatus: COMMENT_STATUS.PUBLISHED,
      })
      .andWhere('story.status = :storyStatus', {
        storyStatus: STORY_STATUS.PUBLISHED,
      });

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.getCount();
  }
}
