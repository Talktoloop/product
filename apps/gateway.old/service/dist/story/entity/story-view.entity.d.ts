import { StoryEntity } from './story.entity';
export declare class StoryViewEntity {
    id: number;
    hash: string;
    storyId: string;
    story: StoryEntity;
    createdAt: Date;
}
