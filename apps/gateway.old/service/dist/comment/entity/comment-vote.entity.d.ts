import { CommentEntity } from './comment.entity';
import { UserEntity } from '../../user/entity/user.entity';
export declare class CommentVoteEntity {
    id: number;
    hash: string;
    commentId: string;
    comment: CommentEntity;
    createdAt: Date;
    userId?: string;
    user?: UserEntity;
}
