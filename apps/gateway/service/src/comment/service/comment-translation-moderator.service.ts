import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { CommentRepository } from '../repository/comment.repository';
import { CommentTranslationRepository } from '../repository/comment-translation.repository';
import { VerifyCommentTranslationDto } from '../request/dto/verify-comment-translation.dto';
import {
  COMMENT_NOT_FOUND,
  COMMENT_TRANSLATION_UPDATE_ERROR,
  CustomError,
  RETRY_TRANSLATION_INCORRECT_LANGUAGE_CODE_ERROR,
  STORY_UPDATE_ERROR,
} from '@ourloop/shared';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { CommentEntity } from '../entity/comment.entity';
import { SaveTranslationDto } from '../../common/dto/save-translation.dto';
import { CommentTranslationEntity } from '../entity/comment-translation.entity';
import { LanguageService } from '../../language/language.service';
import { CommentService } from './comment.service';
import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';
import {
  includesTranslatableContent,
  updatedOriginalContent,
} from '../../common/helpers';
import { SOURCE_TYPE } from '../../common/constant/source-type.constants';
import { LanguageEntity } from '../../language/entity/language.entity';
import { Not } from 'typeorm';

@Injectable()
export class CommentTranslationModeratorService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly commentTranslationRepository: CommentTranslationRepository,
    @Inject(forwardRef(() => LanguageService))
    private readonly languageService: LanguageService,
    @Inject(forwardRef(() => CommentService))
    private readonly commentService: CommentService,
  ) {}

  async retryTranslation(
    commentId: string,
    languageCode: string,
  ): Promise<boolean> {
    try {
      const languageEntity = await this.languageService.getLanguageByCode(
        languageCode,
      );
      const comment = await this.commentService.findComment(commentId, [
        'translations',
        'translations.language',
      ]);

      if (!comment) {
        throw new CustomError(COMMENT_NOT_FOUND, {
          error: `This comment doesnt exist`,
        });
      }

      const { status } = comment.translations.find(
        ({ language: { code } }) => code === languageEntity.code,
      );
      if (status !== TRANSLATION_STATUS_CONSTANTS.ERROR) {
        throw new CustomError(RETRY_TRANSLATION_INCORRECT_LANGUAGE_CODE_ERROR, {
          error: `This translation has different status than ERROR`,
        });
      }

      let content, language: LanguageEntity;

      ({ content, language } = comment.translations.find(
        ({ language: { id } }) => id === comment.languageId,
      ));

      //Find first human translations
      if (!language.provider) {
        ({ content, language } = comment.translations.find(
          ({ type, languageId }) =>
            type === TRANSLATION_TYPE_CONSTANTS.MANUAL &&
            languageId !== comment.languageId,
        ));
      }

      await this.languageService.invokeTranslation(
        comment.id,
        content,
        language.id,
        SOURCE_TYPE.COMMENT,
      );

      return true;
    } catch (error) {
      throw new CustomError(COMMENT_TRANSLATION_UPDATE_ERROR, error.error);
    }
  }
  async saveTranslationToRepository(
    translation: CommentTranslationEntity,
  ): Promise<CommentTranslationEntity> {
    return this.commentTranslationRepository.save(translation);
  }

  async saveTranslation(
    { language, content }: SaveTranslationDto,
    commentId: string,
  ): Promise<CommentTranslationEntity> {
    let result;

    const languageEntity = await this.languageService.getLanguageByCode(
      language,
    );

    try {
      const comment = await this.commentService.findComment(commentId, [
        'translations',
        'translations.language',
        'language',
      ]);

      let translation =
        await this.commentTranslationRepository.findExistingCommentTranslation(
          commentId,
          languageEntity.id,
        );

      if (!translation) {
        translation = new CommentTranslationEntity({
          commentId,
          languageId: languageEntity.id,
          content,
        });
      }
      const originalContent = translation.content;

      translation.content = content;
      translation.status = TRANSLATION_STATUS_CONSTANTS.TRANSLATED;
      translation.type = TRANSLATION_TYPE_CONSTANTS.MANUAL;
      result = await this.saveTranslationToRepository(translation);

      if (
        updatedOriginalContent(
          comment.language.code,
          language,
          originalContent,
          content,
        )
      ) {
        await this.commentTranslationRepository.delete({
          commentId: comment.id,
          languageId: Not(comment.languageId),
        });

        this.languageService.invokeTranslation(
          comment.id,
          content,
          comment.languageId,
          SOURCE_TYPE.COMMENT,
        );
      } else if (!includesTranslatableContent(comment.translations)) {
        this.languageService.invokeTranslation(
          commentId,
          content,
          languageEntity.id,
          SOURCE_TYPE.COMMENT,
        );
      }
    } catch (error) {
      throw new CustomError(error.message, error.error);
    }
    return result;
  }
  async getTranslations(commentId: string): Promise<CommentEntity> {
    return this.commentRepository.findByIdOrFail(commentId, [
      'translations',
      'translations.language',
    ]);
  }

  async removeCommentTranslation(
    commentId: string,
    code: string,
  ): Promise<DeleteResult> {
    const comment = await this.commentRepository.findByIdOrFail(commentId, [
      'translations',
      'translations.language',
    ]);
    const translation = comment.translations.find(
      (translation) =>
        translation.language.code === code &&
        translation.language.id !== comment.languageId,
    );

    if (!translation) {
      return;
    }

    return this.commentTranslationRepository.delete(translation.id);
  }

  async setTranslationAsVerified(
    commentId: string,
    data: VerifyCommentTranslationDto,
  ): Promise<UpdateResult> {
    const comment = await this.commentRepository.findByIdOrFail(commentId, [
      'translations',
      'translations.language',
    ]);
    const translation = comment.translations.find(
      (item) => item.language?.code === data.language,
    );

    if (!translation || translation.languageId === comment.languageId) {
      return;
    }

    return this.commentTranslationRepository
      .update(
        {
          commentId,
          languageId: translation.language.id,
        },
        {
          type: TRANSLATION_TYPE_CONSTANTS.MANUAL,
          content: data.content,
        },
      )
      .catch(() => {
        throw new CustomError(STORY_UPDATE_ERROR, {
          error: 'comment not verified - function setTranslationAsVerified',
        });
      });
  }
}
