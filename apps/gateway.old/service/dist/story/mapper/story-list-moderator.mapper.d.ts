import { StoryEntity } from '../entity/story.entity';
import { StoryListModeratorRO } from '../response/story-list-moderator.ro';
export declare const pendingStoriesMapper: (pendingStories: StoryEntity[]) => StoryListModeratorRO[];
