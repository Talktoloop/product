import { plainToClass } from 'class-transformer';
import { getTranslationByLanguageId } from '../../common/helpers';
import { CommentEntity } from '../entity/comment.entity';
import { CommentModeratorRO } from '../response/comment-moderator.ro';
import { formatUser } from '../../common/mapper/user.mapper';
import { translationsMapper } from '../../common/mapper/translations.mapper';
import { LexiconRO } from '../../lexicon/response/lexicon.ro';

export const commentDetailsMapper = (
  comment: CommentEntity,
  languageId: number,
): CommentModeratorRO => {
  const translation = getTranslationByLanguageId(
    comment.translations,
    comment.languageId,
    languageId,
  );
  const email = comment.recipient?.email || comment.user?.email;

  return plainToClass(CommentModeratorRO, {
    ...comment,
    storyChannel: comment.story.channel,
    authorNickname: comment.recipient?.nickname,
    content: translation?.content,
    language: comment.language.code,
    storyLanguage: comment.story.language?.code,
    user: comment.user ? formatUser(comment.user) : null,
    emailProvided: !!email,
    email,
    translations: translationsMapper(
      comment.translations,
      null,
      comment.languageId,
    ),
    thematics: comment.thematics?.map((t) => t.id),
    rejectReasons: comment.rejectReasons.map((item) =>
      plainToClass(LexiconRO, item.rejectReason),
    ),
  });
};
