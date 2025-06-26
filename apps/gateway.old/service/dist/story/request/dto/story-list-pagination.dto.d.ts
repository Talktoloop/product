import { StoryEntity } from '../../entity/story.entity';
export declare class PaginatedStoryListResultDto {
    data: StoryEntity[];
    page: number;
    limit: number;
    totalCount: number;
}
