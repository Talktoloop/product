import { plainToClass } from 'class-transformer';
import { CommentEntity } from '../entity/comment.entity';
import { CommentListModeratorRO } from '../response/comment-list-moderator.ro';
import { getTranslationByLanguageId } from '../../common/helpers';
import { CommentTranslationEntity } from '../entity/comment-translation.entity';
import { STORY_STATUS } from '@ourloop/shared';

export const commentListModeratorMapper = (
  comments: CommentEntity[],
): CommentListModeratorRO[] => {
  let translation: CommentTranslationEntity;

  return comments.map((comment: CommentEntity) => {
    if (comment.translations) {
      translation = getTranslationByLanguageId(
        comment.translations,
        comment.languageId,
        comment.languageId,
      ) as CommentTranslationEntity;
    }

    return plainToClass(CommentListModeratorRO, {
      ...comment,
      language: comment.language.code,
      storyLanguage: comment.story?.language?.code,
      country: comment.story?.country?.code,
      content: translation?.content,
      categories: comment.story?.categories
        ? comment.story.categories
            .sort((prev, next) => prev.order - next.order)
            .map((category) => category.code)
        : [],
      authorNickname: comment.recipient?.nickname ?? comment.user?.nickname,
      storyPublishedBy:
        comment.story.status === STORY_STATUS.PUBLISHED
          ? comment.story?.statusChangedBy?.nickname ?? null
          : null,
    });
  });
};
