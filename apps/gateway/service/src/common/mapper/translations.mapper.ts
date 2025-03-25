import { plainToClass } from 'class-transformer';
import { StoryTranslationEntity } from '../../story/entity/story-translation.entity';
import { CommentTranslationEntity } from '../../comment/entity/comment-translation.entity';
import { TranslationRO } from '../../common/response/translation';
import { getTranslationByLanguageId } from '../../common/helpers';

export const translationsMapper = (
  translations: (
    | StoryTranslationEntity
    | CommentTranslationEntity
    | Record<string, undefined>
  )[],
  selectedLanguageId: number,
  languageId: number,
  notAllowEmpty = true,
): TranslationRO[] => {
  return translations
    .filter(
      (translation: StoryTranslationEntity | CommentTranslationEntity) =>
        translation.languageId !== selectedLanguageId,
    )
    .map((element: StoryTranslationEntity | CommentTranslationEntity) => {
      let content = element.content;

      if (!element.content && notAllowEmpty) {
        const reserveTranslation = getTranslationByLanguageId(
          translations,
          languageId,
          element.languageId,
        );

        content = reserveTranslation.content;
      }

      return plainToClass(TranslationRO, {
        ...element,
        code: element.language.code,
        content,
      });
    });
};
