import { StoryEntity } from '../entity/story.entity';
import { StoryWebModeratorRO } from '../response/story-web-moderator.ro';
import { LanguageEntity } from '../../language/entity/language.entity';
export declare const storyWebDetailsMapper: (story: StoryEntity, historicalContent: string, storyLanguageId: number, userLanguageId: number, defaultLanguage: LanguageEntity) => StoryWebModeratorRO;
