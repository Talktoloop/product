import { CommentEntity } from '../../comment/entity/comment.entity';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';
import { IvrrCommentDTO } from '@ourloop/shared';
export declare const ivrrCommentMapper: (comment: CommentEntity, reasons?: RejectReasonEntity[]) => IvrrCommentDTO;
