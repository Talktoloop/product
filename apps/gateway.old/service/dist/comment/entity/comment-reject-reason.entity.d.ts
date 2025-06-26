import { CommentEntity } from './comment.entity';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';
export declare class CommentRejectReasonEntity {
    id?: number;
    commentId: string;
    rejectReasonId: number;
    rejectReasonText: string;
    comment?: CommentEntity;
    rejectReason?: RejectReasonEntity;
}
