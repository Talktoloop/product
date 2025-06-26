import { CommentEntity } from '../entity/comment.entity';
import { CommentListModeratorRO } from '../response/comment-list-moderator.ro';
export declare const commentListModeratorMapper: (comments: CommentEntity[]) => CommentListModeratorRO[];
