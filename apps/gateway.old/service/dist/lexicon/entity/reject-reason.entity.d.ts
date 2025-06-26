import { CommentRejectReasonEntity } from '../../comment/entity/comment-reject-reason.entity';
import { StoryRejectReasonEntity } from '../../story/entity/story-reject-reason.entity';
export declare class RejectReasonEntity {
    id: number;
    code: string;
    commentRejectReasons: CommentRejectReasonEntity[];
    storyRejectReasons: StoryRejectReasonEntity[];
    parent?: RejectReasonEntity;
    children?: RejectReasonEntity[];
    isTopLevel: boolean;
}
