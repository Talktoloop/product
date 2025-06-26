import { StoryEntity } from './story.entity';
import { UserEntity } from '../../user/entity/user.entity';
export declare class StoryVoteEntity {
    id: number;
    hash: string;
    storyId: string;
    story: StoryEntity;
    createdAt: Date;
    userId?: string;
    user?: UserEntity;
}
