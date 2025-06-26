import { PaginationRO } from '../../common/response/pagination.ro';
import { ExportedStoryRO } from './exported-story.ro';
export declare class ExportedStoriesWithPaginationRO {
    meta: PaginationRO;
    items: ExportedStoryRO[];
}
