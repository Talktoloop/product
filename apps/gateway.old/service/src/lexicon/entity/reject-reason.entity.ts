import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { CommentRejectReasonEntity } from '../../comment/entity/comment-reject-reason.entity';
import { StoryRejectReasonEntity } from '../../story/entity/story-reject-reason.entity';

@Entity('reject_reason')
export class RejectReasonEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 200 })
  code: string;

  @OneToMany(
    () => CommentRejectReasonEntity,
    (commentRejectReason: CommentRejectReasonEntity) =>
      commentRejectReason.rejectReason,
  )
  public commentRejectReasons: CommentRejectReasonEntity[];

  @OneToMany(
    () => StoryRejectReasonEntity,
    (commentRejectReason: StoryRejectReasonEntity) =>
      commentRejectReason.rejectReason,
  )
  public storyRejectReasons: StoryRejectReasonEntity[];

  @ManyToOne(
    () => RejectReasonEntity,
    (rejection: RejectReasonEntity) => rejection.children,
    {
      onDelete: 'CASCADE',
      cascade: true,
    },
  )
  @JoinColumn({ name: 'parent_rejection_id' })
  parent?: RejectReasonEntity;

  @OneToMany(
    () => RejectReasonEntity,
    (subReason: RejectReasonEntity) => subReason.parent,
  )
  children?: RejectReasonEntity[];

  @Column({ name: 'is_top_level', default: false })
  isTopLevel: boolean;
}
