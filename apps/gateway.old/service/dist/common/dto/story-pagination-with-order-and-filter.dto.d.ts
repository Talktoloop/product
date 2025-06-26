import { StoryModeratorOrderEnum } from '../types';
import { FilterWithPaginationDto } from './filter-with-pagination.dto';
export declare class StoryPaginationWithOrderAndFilterDto extends FilterWithPaginationDto {
    order?: StoryModeratorOrderEnum;
    language?: string;
    status?: string;
    durationMin?: number;
    durationMax?: number;
    isSensitive?: boolean;
}
