import { StoryEntity } from '../../entity/story.entity';

export class PaginatedStoryListResultDto {
  data: StoryEntity[];
  page: number;
  limit: number;
  totalCount: number;
}
