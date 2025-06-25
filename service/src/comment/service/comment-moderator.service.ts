import { Injectable, Logger } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CommentRepository } from '../repository/comment.repository';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { CommentEntity } from '../entity/comment.entity';
import {
  CustomError,
  COMMENT_INCORRECT_STATUS,
  COMMENT_NOT_FOUND,
  TRANSLATIONS_ARE_NEEDED,
  COMMENT_UPDATE_ERROR,
  COMMENT_STATUS,
} from '@ourloop/shared';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';
import { PaginationWithExtendedFilterDto } from '../../common/dto/pagination-with-extended-filter.dto';
import { RejectContentDto } from '../../common/dto/reject-content.dto';
import { LanguageRepository } from '../../language/language.repository';
import { includesTranslatableContent } from '../../common/helpers';
import { UpdateCommentCommentDTO } from '../request/dto/update-comment.dto';
import { LanguageService } from '../../language/language.service';
import { LanguageEntity } from '../../language/entity/language.entity';
import { CommentTranslationEntity } from '../entity/comment-translation.entity';
import { SOURCE_TYPE } from '../../common/constant/source-type.constants';
import { Pagination } from '../../common/type/pagination.type';
import { ThematicService } from '../../lexicon/service/thematic.service';

@Injectable()
export class CommentModeratorService {
  private readonly logger = new Logger(CommentModeratorService.name);
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly languageRepository: LanguageRepository,
    private readonly languageService: LanguageService,
    private readonly thematicService: ThematicService
  ) {}

  async changeOriginLanguage(
    comment: CommentEntity,
    language: LanguageEntity,
  ): Promise<CommentEntity> {
    const { translations, contentUpdated, oldOriginalContent } =
      await this.languageService.changeOriginLanguage(
        comment.translations,
        language,
        comment.languageId,
      );
    comment.translations = translations as CommentTranslationEntity[];

    if (!contentUpdated) {
      const newTranslation = new CommentTranslationEntity({
        commentId: comment.id,
        languageId: language.id,
        content: oldOriginalContent,
      });

      newTranslation.language = language;
      comment.translations.push(newTranslation);
    }

    return comment;
  }

  async updateComment(
    comment: CommentEntity,
    data: UpdateCommentCommentDTO,
  ): Promise<CommentEntity | void> {
    const language = await this.languageService.checkOriginLanguage(
      data.language,
    );

    const thematics = await this.thematicService.findByIds(data.thematics)

    if (language?.id !== comment.languageId) {
      comment = await this.changeOriginLanguage(comment, language);
    }

    const updatedComment = await this.commentRepository
      .save({
        ...comment,
        languageId: language?.id ?? comment.languageId,
        thematics: thematics,
        solution_proposed: data.solution_proposed
      })
      .catch((error) => {
        this.logger.error(error);
        throw new CustomError(COMMENT_UPDATE_ERROR, {
          error: 'comment update error - function updateComment',
        });
      });

    if (comment.languageId !== updatedComment.languageId && language.provider) {
      this.languageService.invokeTranslation(
        comment.id,
        comment.translations.find(
          (translation) => translation.language.code === language.code,
        ).content,
        updatedComment.languageId,
        SOURCE_TYPE.COMMENT,
      );
    }

    return updatedComment;
  }

  async removeComment(id: string): Promise<CommentEntity> {
    const comment = await this.commentRepository
      .findOneOrFail({ where: { id } })
      .catch((error) => {
        throw new CustomError(COMMENT_NOT_FOUND, {
          error: error?.message,
        });
      });

    return this.commentRepository.remove(comment);
  }

  async getPendingComments(
    params: PaginationWithExtendedFilterDto,
  ): Promise<Pagination> {
    return this.commentRepository.findPendingComments(params);
  }

  async getCommentsByStatus(
    params: PaginationWithExtendedFilterDto,
    status: COMMENT_STATUS,
    withDetails = false,
  ): Promise<Pagination> {
    return this.commentRepository.findCommentsByStatus(
      params,
      status,
      withDetails,
    );
  }

  async rejectComment(
    comment: CommentEntity,
    rejectContent: RejectContentDto,
    rejectReasons?: RejectReasonEntity[],
  ): Promise<CommentEntity> {
    if (comment.status === COMMENT_STATUS.REJECTED) {
      throw new CustomError(COMMENT_INCORRECT_STATUS, {
        error: 'comment incorrect status - function rejectComment',
      });
    }

    comment.status = COMMENT_STATUS.REJECTED;
    comment.rejectRationale = rejectContent.rationale;

    if (rejectReasons?.length > 0) {
      comment.rejectReasons = rejectReasons.map((rejectReason, key) => ({
        rejectReasonId: rejectReason.id,
        rejectReasonText: rejectContent.reasonTexts[key],
        commentId: comment.id,
      }));

      const language = await this.languageRepository.findOne({
        where: { code: rejectContent.notificationLanguage },
      });

      comment.rejectReasonLanguageId = language ? language.id : null;
    }

    return this.commentRepository.save(comment);
  }

  async unPublishComment(comment: CommentEntity): Promise<UpdateResult | void> {
    if (
      ![
        COMMENT_STATUS.PUBLISHED,
        COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
      ].includes(comment.status as COMMENT_STATUS)
    ) {
      throw new CustomError(COMMENT_INCORRECT_STATUS, {
        error: 'comment incorrect status - function unPublishComment',
      });
    }

    return this.commentRepository
      .update(comment.id, {
        status: COMMENT_STATUS.PENDING_REVIEW,
      })
      .catch(() => {
        throw new CustomError(COMMENT_UPDATE_ERROR, {
          error: 'comment not unpublished - function unPublishComment',
        });
      });
  }

  async setCommentS3FileId(
    comment: CommentEntity,
    s3FileId: string,
  ): Promise<CommentEntity> {
    comment.s3FileId = s3FileId;

    return this.commentRepository.save(comment);
  }

  async setCommentStatus(
    comment: CommentEntity,
    status: COMMENT_STATUS,
    restrictedStatuses: string[] = [],
  ): Promise<CommentEntity> {
    if (restrictedStatuses.includes(comment.status)) {
      throw new CustomError(COMMENT_INCORRECT_STATUS, {
        error: 'comment incorrect status - function publishComment',
      });
    }

    comment.status = status;

    return this.commentRepository.save(comment);
  }

  async publishComment(comment: CommentEntity): Promise<UpdateResult | void> {
    if (
      [COMMENT_STATUS.PUBLISHED, COMMENT_STATUS.PENDING_RECORDING].includes(
        comment.status as COMMENT_STATUS,
      )
    ) {
      throw new CustomError(COMMENT_INCORRECT_STATUS, {
        error: 'comment incorrect status - function publishComment',
      });
    }

    if (
      comment.story.channel === CHANNEL_CONSTANTS.IVRR &&
      comment.channel !== CHANNEL_CONSTANTS.IVRR
    ) {
      throw new CustomError(COMMENT_INCORRECT_STATUS, {
        error: 'comment incorrect status - function publishComment',
      });
    }

    if (!includesTranslatableContent(comment.translations)) {
      throw new CustomError(TRANSLATIONS_ARE_NEEDED, {
        error: 'machine-translated content id needed - function publishComment',
      });
    }

    return this.commentRepository
      .update(comment.id, {
        status: COMMENT_STATUS.PUBLISHED,
        publishedAt: !comment.publishedAt ? new Date() : comment.publishedAt,
      })
      .catch(() => {
        throw new CustomError(COMMENT_UPDATE_ERROR, {
          error: 'comment not published - function publishComment',
        });
      });
  }

  async getCommentDetailsByIdOrFail(id: string): Promise<CommentEntity> {
    return this.commentRepository.findCommentDetailsById(id).then((data) => {
      if (!data) {
        throw new CustomError(COMMENT_NOT_FOUND, {
          error: 'Comment ID does not exist',
        });
      }

      return data;
    });
  }
}
