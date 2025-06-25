import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CommentEntity } from './comment.entity';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';

@Entity('story_comment_reject_reason')
export class CommentRejectReasonEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id?: number;

  @Column({ name: 'comment_id', type: 'varchar', length: 36 })
  commentId: string;

  @Column({ name: 'reject_reason_id', type: 'int' })
  rejectReasonId: number;

  @Column({ name: 'reject_reason_text', type: 'varchar' })
  rejectReasonText: string;

  @ManyToOne(
    () => CommentEntity,
    (comment: CommentEntity) => comment.rejectReasons,
  )
  @JoinColumn({ name: 'comment_id' })
  comment?: CommentEntity;

  @ManyToOne(
    () => RejectReasonEntity,
    (rejectReason: RejectReasonEntity) => rejectReason.commentRejectReasons,
  )
  @JoinColumn({ name: 'reject_reason_id' })
  rejectReason?: RejectReasonEntity;
}
