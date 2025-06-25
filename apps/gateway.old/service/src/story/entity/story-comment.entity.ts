import {
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { StoryEntity } from './story.entity';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('story_comment')
export class StoryCommentEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  id: string;

  @ManyToOne(() => StoryEntity, (story: StoryEntity) => story.comments)
  @JoinColumn({ name: 'story_id' })
  story: StoryEntity;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'published_at' })
  publishedAt?: Date;
}
