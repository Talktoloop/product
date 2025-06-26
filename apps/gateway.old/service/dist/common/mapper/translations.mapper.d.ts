import { StoryTranslationEntity } from '../../story/entity/story-translation.entity';
import { CommentTranslationEntity } from '../../comment/entity/comment-translation.entity';
import { TranslationRO } from '../../common/response/translation';
export declare const translationsMapper: (translations: (StoryTranslationEntity | CommentTranslationEntity | Record<string, undefined>)[], selectedLanguageId: number, languageId: number, notAllowEmpty?: boolean) => TranslationRO[];
