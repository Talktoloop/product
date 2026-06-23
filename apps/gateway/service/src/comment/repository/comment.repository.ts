import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CommentEntity } from '../entity/comment.entity';
import {
  CustomError,
  COMMENT_NOT_FOUND,
  COMMENT_STATUS,
  STORY_STATUS,
  GET_COMMENTS_FAILED,
} from '@ourloop/shared';
import { PaginationWithExtendedFilterDto } from '../../common/dto/pagination-with-extended-filter.dto';
import { paginateQueryResult } from '../../common/helpers';
import { Pagination } from '../../common/type/pagination.type';
import { DashboardFilterDTO } from '../../dashboard/request/dto/dashboard-filter.dto';
import { Logger, BadRequestException } from '@nestjs/common';

@EntityRepository(CommentEntity)
export class CommentRepository extends Repository<CommentEntity> {
  private readonly logger = new Logger(CommentRepository.name);
  private getQueryForFilteredComments = (
    params: PaginationWithExtendedFilterDto | DashboardFilterDTO,
    statuses: COMMENT_STATUS[],
  ) => {
    const query = this.createQueryBuilder('comment')
      .leftJoinAndSelect('comment.language', 'language')
      .leftJoinAndSelect('comment.recipient', 'recipient')
      .leftJoinAndSelect(
        'comment.story',
        'story',
        'story.id = comment.story_id',
      )
      .leftJoinAndSelect(
        'story.country',
        'country',
        'country.id = story.country_id',
      )
      .leftJoinAndSelect('comment.translations', 'translations')
      .where('story.status = :story_status', {
        story_status: STORY_STATUS.PUBLISHED,
      })
      .andWhere('comment.status IN (:statuses)', {
        statuses,
      });

    if (params.language) {
      query.andWhere('language.code IN (:languageCode)', {
        languageCode: params.language.split(',').filter((item) => !!item),
      });
    }
    if (params.country) {
      query.andWhere('country.code IN (:countryCode)', {
        countryCode: params.country.split(',').filter((item) => !!item),
      });
    }
    if (params.channel) {
      query.andWhere('comment.channel IN (:channel)', {
        channel: params.channel.split(',').filter((item) => !!item),
      });
    }

    if (params.from) {
      query.andWhere('comment.createdAt >= :from', {
        from: params.from,
      });
    }
    if (params.to) {
      query.andWhere('comment.createdAt <= :to', {
        to: params.to,
      });
    }

    if (params.searchTerm) {
      query.andWhere(
        'MATCH(translations.content) AGAINST(:searchTerm IN NATURAL LANGUAGE MODE)',
        { searchTerm: params.searchTerm },
      );
    }

    return query;
  };

  async findCommentIdsByStatus(
    status: COMMENT_STATUS,
    storyIds?: string[],
  ): Promise<Array<CommentEntity>> {
    const query = this.createQueryBuilder('comment')
      .select('comment.id', 'id')
      .addSelect('comment.story_id', 'storyId')
      .where('comment.status = :status', { status });

    if (storyIds?.length) {
      query.andWhere('comment.story_id IN (:...storyIds)', { storyIds });
    }

    return query.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_COMMENTS_FAILED);
    });
  }

  async getNumberOfComments(
    params: DashboardFilterDTO,
    statuses: COMMENT_STATUS[],
  ): Promise<number> {
    return this.getQueryForFilteredComments(params, statuses).getCount();
  }

  // Returns published comments (and replies) with their translated text and the
  // PUBLIC author identity (recipient nickname + organisation), for the data
  // export. We deliberately do NOT expose the account holder's real first/last
  // name here: the export is downloadable without a login, and the public
  // comment view only ever shows the pseudonymous nickname + organisation
  // (see comment-list.mapper.ts). One row per (comment, language); callers pick
  // the original-language content and group by storyId.
  async findPublishedCommentsToExport(storyIds: string[]): Promise<
    Array<{
      commentId: string;
      storyId: string;
      parentCommentId: string | null;
      commentLanguageId: number;
      translationLanguageId: number;
      content: string;
      createdAt: Date;
      nickname?: string;
      organisationName?: string;
    }>
  > {
    if (!storyIds.length) {
      return [];
    }

    return this.createQueryBuilder('comment')
      .select('comment.id', 'commentId')
      .addSelect('comment.story_id', 'storyId')
      .addSelect('comment.parent_comment_id', 'parentCommentId')
      .addSelect('comment.language_id', 'commentLanguageId')
      .addSelect('comment.created_at', 'createdAt')
      .addSelect('translations.language_id', 'translationLanguageId')
      .addSelect('translations.content', 'content')
      .addSelect('recipient.nickname', 'nickname')
      .addSelect('organisation.name', 'organisationName')
      .leftJoin('comment.translations', 'translations')
      .leftJoin('comment.recipient', 'recipient')
      .leftJoin('comment.user', 'user')
      .leftJoin('user.organisation', 'organisation')
      .where('comment.status = :status', {
        status: COMMENT_STATUS.PUBLISHED,
      })
      .andWhere('comment.story_id IN (:...storyIds)', { storyIds })
      .execute()
      .catch((error) => {
        this.logger.error(error);
        throw new BadRequestException(GET_COMMENTS_FAILED);
      });
  }

  async findCommentIdsByCountryAndStatus(
    countryId: number,
    status: COMMENT_STATUS,
  ) {
    const query = this.createQueryBuilder('comment')
      .select('comment.id', 'id')
      .innerJoin(
        'comment.story',
        'story',
        'story.id = comment.story_id AND comment.status = :status',
        { status },
      );

    if (countryId) {
      query.andWhere('story.country_id = :countryId', { countryId });
    }

    return query.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_COMMENTS_FAILED);
    });
  }

  async findPendingComments(
    params: PaginationWithExtendedFilterDto,
  ): Promise<Pagination> {
    const query = this.getQueryForFilteredComments(params, [
      COMMENT_STATUS.PENDING_REVIEW,
      COMMENT_STATUS.PENDING_EDIT,
    ]);

    if (params.order) {
      query.orderBy('comment.createdAt', params.order);
    } else {
      query.orderBy('comment.createdAt', 'ASC');
    }

    return paginateQueryResult(query, params.limit, params.page);
  }

  async findCommentsByStatus(
    params: PaginationWithExtendedFilterDto,
    status: COMMENT_STATUS,
    withDetails = false,
  ): Promise<Pagination> {
    const query = this.getQueryForFilteredComments(params, [status]);

    if (withDetails) {
      query
        .leftJoinAndSelect('comment.user', 'user')
        .leftJoinAndSelect('story.statusChangedBy', 'statusChangedBy')
        .leftJoinAndSelect('story.categories', 'categories')
        .leftJoinAndSelect('story.language', 'storyLanguage');
    }

    query.orderBy('comment.createdAt', params.order ?? 'ASC');

    return paginateQueryResult(query, params.limit, params.page);
  }

  async findAll(storyId: string): Promise<CommentEntity[]> {
    const query = this.createQueryBuilder('comment')
      .leftJoinAndSelect(
        'comment.children',
        'children',
        `children.status IN(:childrenStatus)`,
        {
          childrenStatus: [
            COMMENT_STATUS.PUBLISHED,
            COMMENT_STATUS.PENDING_REVIEW,
            COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
          ],
        },
      )
      .leftJoinAndSelect('children.thematics', 'childrenThematic')
      .leftJoinAndSelect('children.recipient', 'childrenRecipient')
      .leftJoinAndSelect('children.translations', 'childrenTranslations')
      .leftJoinAndSelect('childrenTranslations.language', 'childrenLanguage')
      .leftJoinAndSelect('comment.translations', 'translations')
      .leftJoinAndSelect('translations.language', 'language')
      .loadRelationCountAndMap('comment.votes', 'comment.votes')
      .leftJoinAndSelect('comment.recipient', 'recipient')
      .leftJoinAndSelect('comment.user', 'user')
      .leftJoinAndSelect('user.organisation', 'organisation')
      .leftJoinAndSelect('children.user', 'children_user')
      .leftJoinAndSelect(
        'children_user.organisation',
        'children_user_organisation',
      )
      .leftJoinAndSelect('comment.thematics', 'thematic')
      .loadRelationCountAndMap('children.votes', 'children.votes')
      .orderBy('comment.created_at', 'DESC')
      .addOrderBy('children.created_at', 'DESC')
      .where('comment.storyId = :storyId', { storyId })
      .andWhere('comment.status IN(:commentStatus)', {
        commentStatus: [
          COMMENT_STATUS.PUBLISHED,
          COMMENT_STATUS.PENDING_REVIEW,
          COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
        ],
      })
      .andWhere('comment.parentCommentId IS NULL');

    return query.getMany();
  }

  findByIdOrFail(id: string, relations: string[] = []): Promise<CommentEntity> {
    if (!id) {
      throw new CustomError(COMMENT_NOT_FOUND, {
        error: 'Comment ID does not exist',
      });
    }

    return this.findOne({ where: { id }, relations }).then((data) => {
      if (!data) {
        throw new CustomError(COMMENT_NOT_FOUND, {
          error: 'Comment ID does not exist',
        });
      }

      return data;
    });
  }

  findCommentDetailsById(id: string): Promise<CommentEntity> {
    return this.createQueryBuilder('comment')
      .loadRelationCountAndMap('comment.votes', 'comment.votes')
      .leftJoinAndSelect('comment.recipient', 'recipient')
      .leftJoinAndSelect('comment.language', 'comment_language')
      .leftJoinAndSelect('comment.translations', 'translations')
      .leftJoinAndSelect('translations.language', 'language')
      .leftJoinAndSelect('comment.user', 'user')
      .leftJoinAndSelect('user.organisation', 'organisation')
      .leftJoinAndSelect('comment.rejectReasons', 'rejectReasons')
      .leftJoinAndSelect('rejectReasons.rejectReason', 'rejectReason')
      .leftJoinAndSelect('comment.story', 'story')
      .leftJoinAndSelect('story.language', 'story_language')
      .leftJoinAndSelect('story.recipient', 'story_recipient')
      .leftJoinAndSelect('story.conversation', 'conversation')
      .leftJoinAndSelect('comment.thematics', 'thematic')
      .where('comment.id = :id', { id })
      .getOne();
  }
}
