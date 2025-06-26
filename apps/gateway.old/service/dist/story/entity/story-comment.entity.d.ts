import { StoryEntity } from './story.entity';
import { UserEntity } from '../../user/entity/user.entity';
export declare class StoryCommentEntity {
    id: string;
    story: StoryEntity;
    user: UserEntity;
    createdAt: Date;
    publishedAt?: Date;
}
