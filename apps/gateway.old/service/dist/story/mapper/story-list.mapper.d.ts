import { StoryEntity } from '../entity/story.entity';
import { StoryListRO } from '../response/story-list.ro';
import { StoryListPaginationRO } from '../response/story-list-pagination.ro';
import { StoryFilterAndOrderDto } from '../request/dto/story-filter-and-order.dto';
import { LanguageEntity } from '../../language/entity/language.entity';
export declare const storiesToStoriesRO: (stories: StoryEntity[]) => StoryListRO[];
export declare const mapStoryDetails: (story: Record<string, unknown>, translations: any[], organisations: any[], categories: any[], thematicIds: string[], administrativeData: any[], userLanguageId: number, defaultLanguage: LanguageEntity) => StoryListRO;
export declare const storiesToStoriesPaginationRO: (data: Record<string, string>[], storyIds: string[], params: StoryFilterAndOrderDto, languageId: number, defaultLanguage: LanguageEntity) => StoryListPaginationRO;
