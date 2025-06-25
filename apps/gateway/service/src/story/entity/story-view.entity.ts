import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { StoryEntity } from './story.entity';

@Entity('story_view')
export class StoryViewEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'hash', type: 'varchar' })
  hash: string;

  @Column({ name: 'story_id', type: 'varchar' })
  storyId: string;

  @ManyToOne(() => StoryEntity, (story: StoryEntity) => story.views)
  @JoinColumn({ name: 'story_id' })
  story: StoryEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
