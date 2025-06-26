import { CommentEntity } from '../entity/comment.entity';
import { CommentStoryListRO } from '../response/comment-story-list.ro';
export declare const commentListMapper: (comments: CommentEntity[], languageId: number) => CommentStoryListRO[];
