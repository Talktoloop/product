import { Repository } from 'typeorm';
import { StoryVoteEntity } from '../entity/story-vote.entity';
import { StoryEntity } from '../entity/story.entity';
import { UserEntity } from '../../user/entity/user.entity';
export declare class StoryVoteRepository extends Repository<StoryVoteEntity> {
    saveVoteIfNotExits(story: StoryEntity, hash: string, user?: UserEntity): Promise<boolean>;
    removeVoteIfNotExits(story: StoryEntity, hash: string, user?: UserEntity): Promise<boolean>;
}
