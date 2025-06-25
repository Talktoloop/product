import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { StoryEntity } from './story.entity';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('story_vote')
export class StoryVoteEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'hash', type: 'varchar' })
  hash: string;

  @Column({ name: 'story_id', type: 'varchar' })
  storyId: string;

  @ManyToOne(() => StoryEntity, (story: StoryEntity) => story.votes)
  @JoinColumn({ name: 'story_id' })
  story: StoryEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'user_id', type: 'varchar' })
  userId?: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.storyVotes)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
