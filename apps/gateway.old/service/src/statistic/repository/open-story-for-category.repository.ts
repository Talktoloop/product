import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../category/category.repository';
import { Brackets } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CategoryEntity } from '../../category/entity/category.entity';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { STORY_STATUS, COMMENT_STATUS, _omit } from '@ourloop/shared';
import { FilterDto } from '../../common/dto/filter.dto';
import {
  addFilterCondition,
  addFilterJoins,
  isEmpty,
} from '../../common/helpers';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { startOfMonth, endOfMonth, formatISO } from 'date-fns';

@Injectable()
@EntityRepository(CategoryEntity)
export class OpenStoryForCategoryRepository extends CategoryRepository {
  async getNoSensitiveStoriesWithCategoryByPeriod(
    filters: FilterDto,
  ): Promise<(QuantityPerMonth & { code: string })[]> {
    let query = this.createQueryBuilder('category')
      .select('MAX(category.code)', 'code')
      .leftJoin('story_category', 'sc', 'sc.category_id = category.id')
      .leftJoin(
        'story',
        'story',
        'story.id = sc.story_id and story.status = :storyStatus',
        {
          storyStatus: STORY_STATUS.PUBLISHED,
        },
      )
      .addSelect('DATE_FORMAT(story.published_at, "%Y-%m")', 'month')
      .addSelect('COUNT(DISTINCT story.id)', 'count')
      .where('story.published_at between :start and :end', {
        start: formatISO(startOfMonth(new Date(filters.from))),
        end: formatISO(endOfMonth(new Date(filters.to))),
      })
      .orderBy('month, category.id')
      .groupBy('month, category.id');

    if (!isEmpty(filters)) {
      query = addFilterCondition(
        _omit(filters as Record<string, any>, ['from', 'to']),
        addFilterJoins(query, ['story_category']),
      );
    }

    return query.execute();
  }

  async getStoriesAndRepliesGroupedByCategory(filters?: FilterDto): Promise<
    (CategoryEntity & {
      numberOfStories: number;
      numberOfCommentsFromOrganizations: number;
      numberOfCommentsFromCommunity: number;
    })[]
  > {
    const query = this.createQueryBuilder('category')
      .select('category.id as id')
      .addSelect('category.code as code')
      .addSelect((qb) => {
        let subQuery = qb
          .select("COUNT(DISTINCT CONCAT(c.id, '.', story.id))", 'count')
          .from(CategoryEntity, 'c')
          .innerJoin('story_category', 'sc', 'sc.category_id = c.id')
          .innerJoin(
            'story',
            'story',
            'story.id = sc.story_id AND story.status = :storyStatus',
            { storyStatus: STORY_STATUS.PUBLISHED },
          )
          .where('c.id = category.id');

        if (!isEmpty(filters)) {
          subQuery = addFilterCondition(
            filters,
            addFilterJoins(subQuery, ['story_category']),
          );
        }

        return subQuery;
      }, 'numberOfStories')
      .addSelect((qb) => {
        let subQuery = qb
          .select('COUNT(DISTINCT comment.id)', 'count')
          .from(CommentEntity, 'comment')
          .innerJoin(
            'story_category',
            'sc',
            'sc.category_id = category.id and sc.story_id = comment.story_id',
          )
          .innerJoin(
            'story',
            'story',
            'story.id = sc.story_id AND story.status = :storyStatus',
            { storyStatus: STORY_STATUS.PUBLISHED },
          )
          .innerJoin(
            'user',
            'u',
            'u.id = comment.user_id and u.organisation_id is not null',
          )
          .leftJoin('story_organisation', 'so', 'story.id = so.story_id')
          .leftJoin(
            'organisation',
            'organisations',
            'so.organisation_id = organisations.id',
          )
          .where('comment.status = :commentStatus', {
            commentStatus: COMMENT_STATUS.PUBLISHED,
          });

        if (!isEmpty(filters)) {
          subQuery = addFilterCondition(
            filters,
            addFilterJoins(subQuery, ['story_category', 'story.organisations']),
          );
        }

        return subQuery;
      }, 'numberOfCommentsFromOrganizations')
      .addSelect(
        (qb) => {
          let subQuery = qb
            .select('COUNT(DISTINCT comment.id)', 'count')
            .from(CommentEntity, 'comment')
            .innerJoin(
              'story_category',
              'sc',
              'sc.category_id = category.id and sc.story_id = comment.story_id',
            )
            .innerJoin(
              'story',
              'story',
              'story.id = sc.story_id AND story.status = :storyStatus',
              { storyStatus: STORY_STATUS.PUBLISHED },
            )
            .leftJoin('user', 'u', 'u.id = comment.user_id')
            .leftJoin('story_organisation', 'so', 'story.id = so.story_id')
            .leftJoin(
              'organisation',
              'organisations',
              'so.organisation_id = organisations.id',
            )
            .where(
              new Brackets((qb) => {
                qb.where('comment.user_id is null');
                qb.orWhere('u.organisation_id is null');
              }),
            )
            .andWhere('comment.status = :commentStatus', {
              commentStatus: COMMENT_STATUS.PUBLISHED,
            });

          if (!isEmpty(filters)) {
            subQuery = addFilterCondition(
              filters,
              addFilterJoins(subQuery, [
                'story_category',
                'story.organisations',
              ]),
            );
          }

          return subQuery;
        },

        'numberOfCommentsFromCommunity',
      )
      .orderBy('category.order', 'ASC');

    if (filters.type) {
      query.where('category.id IN(:types)', {
        types: filters.type.toString().split(','),
      });
    }

    return query.execute();
  }
}
