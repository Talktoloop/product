import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { StoryEntity } from './story.entity';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';

@Entity('story_reject_reason')
export class StoryRejectReasonEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id?: number;

  @Column({ name: 'story_id', type: 'varchar', length: 36 })
  storyId: string;

  @Column({ name: 'reject_reason_id', type: 'int' })
  rejectReasonId: number;

  @Column({ name: 'reject_reason_text', type: 'varchar' })
  rejectReasonText: string;

  @ManyToOne(() => StoryEntity, (story: StoryEntity) => story.rejectReasons)
  @JoinColumn({ name: 'story_id' })
  story?: StoryEntity;

  @ManyToOne(
    () => RejectReasonEntity,
    (rejectReason: RejectReasonEntity) => rejectReason.storyRejectReasons,
  )
  @JoinColumn({ name: 'reject_reason_id' })
  rejectReason?: RejectReasonEntity;
}
