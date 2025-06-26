import { ExportedStory } from '../type/exported-story.type';
import { CountryEntity } from '../../country/entity/country.entity';
import { ExportedStoriesWithPaginationRO } from '../response/exported-stories-pagination.ro';
export declare const exportedStoriesMapper: (data: ExportedStory[], countries: CountryEntity[], userLanguageId: number, defaultLanguageId: number, frontendUrl: string, storyIds: string[], page: number, limit: number) => ExportedStoriesWithPaginationRO;
