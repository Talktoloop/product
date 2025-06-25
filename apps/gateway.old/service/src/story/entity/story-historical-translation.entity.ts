import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { StoryTranslationEntity } from './story-translation.entity';

@Entity('story_translation_history')
export class StoryHistoricalTranslationEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'translation_id', type: 'int' })
  translationId: number;

  @Column({ name: 'is_recoverable', type: 'boolean' })
  isRecoverable: boolean;

  @Column({ name: 'moderator_id', type: 'string' })
  userId: string;

  @Column({ name: 'content', type: 'text' })
  content: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @ManyToOne(
    () => UserEntity,
    (user: UserEntity) => user.historicalTranslations,
  )
  @JoinColumn({ name: 'moderator_id' })
  user?: UserEntity;

  @ManyToOne(
    () => StoryTranslationEntity,
    (translation: StoryTranslationEntity) => translation.historicalTranslations,
  )
  @JoinColumn({ name: 'translation_id' })
  translation?: StoryTranslationEntity;
}
