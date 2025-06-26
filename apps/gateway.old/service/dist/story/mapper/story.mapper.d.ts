import { StoryEntity } from '../entity/story.entity';
import { StoryRO } from '../response/story.ro';
import { LanguageEntity } from '../../language/entity/language.entity';
export declare const storyToStoryRO: (story: StoryEntity, userLanguageId: number, defaultLanguage: LanguageEntity) => StoryRO;
