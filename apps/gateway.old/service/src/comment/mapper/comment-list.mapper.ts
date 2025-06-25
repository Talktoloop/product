import { plainToClass } from 'class-transformer';
import { CommentEntity } from '../entity/comment.entity';
import { CommentStoryListRO } from '../response/comment-story-list.ro';
import { getTranslationByLanguageId } from '../../common/helpers';
import { formatUser } from '../../common/mapper/user.mapper';
import { translationsMapper } from '../../common/mapper/translations.mapper';

export const commentListMapper = (
  comments: CommentEntity[],
  languageId: number,
): CommentStoryListRO[] => {
  return comments.map((comment: CommentEntity) => {
    let translation = getTranslationByLanguageId(
      comment.translations,
      comment.languageId,
      languageId,
    );

    return plainToClass(CommentStoryListRO, {
      ...comment,
      authorNickname: comment.recipient?.nickname,
      comment_status: comment.status,
      content: translation?.content,
      contentType: translation?.type,
      user: formatUser(comment.user),
      language: comment.translations.find(
        (translation) => translation.languageId === comment.languageId,
      ).language.code,
      translations: translationsMapper(
        comment.translations,
        null,
        comment.languageId,
      ),
      thematics: comment.thematics.map((thematic)=>{
        return thematic.id
      }),
      children: comment.children.map((commentChild: CommentEntity) => {
        translation = getTranslationByLanguageId(
          commentChild.translations,
          commentChild.languageId,
          languageId,
        );

        return plainToClass(CommentStoryListRO, {
          ...commentChild,
          authorNickname: commentChild.recipient?.nickname,
          content: translation?.content,
          contentType: translation?.type,
          language: commentChild.translations.find(
            (translation) => translation.languageId === commentChild.languageId,
          ).language.code,
          translations: translationsMapper(
            commentChild.translations,
            null,
            commentChild.languageId,
          ),
          user: formatUser(commentChild.user),
          thematics: commentChild.thematics.map((thematic)=>{
            return thematic.id
          })
        });
      }),
    });
  });
};
