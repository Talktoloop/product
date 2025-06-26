import { CommentEntity } from '../entity/comment.entity';
import { CommentModeratorRO } from '../response/comment-moderator.ro';
export declare const commentDetailsMapper: (comment: CommentEntity, languageId: number) => CommentModeratorRO;
