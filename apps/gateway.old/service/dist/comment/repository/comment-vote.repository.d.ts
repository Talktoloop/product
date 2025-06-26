import { Repository } from 'typeorm';
import { CommentVoteEntity } from '../entity/comment-vote.entity';
import { CommentEntity } from '../entity/comment.entity';
import { UserEntity } from '../../user/entity/user.entity';
export declare class CommentVoteRepository extends Repository<CommentVoteEntity> {
    saveVoteIfNotExits(comment: CommentEntity, hash: string, user: UserEntity): Promise<boolean>;
    removeVoteIfNotExits(comment: CommentEntity, hash: string, user?: UserEntity): Promise<boolean>;
}
