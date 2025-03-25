import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { StoryEntity } from './story.entity';

@Entity('story_recipient')
export class StoryRecipientEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar' })
  nickname: string;

  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar' })
  lastName: string;

  @Column({ name: 'gender_by_user', type: 'varchar' })
  genderByUser: string;

  @Column({ name: 'gender_by_moderator', type: 'tinyint' })
  genderByModerator: number;

  @Column({ name: 'age_by_user', type: 'varchar' })
  ageByUser: string;

  @Column({ name: 'age_by_moderator', type: 'tinyint' })
  ageByModerator: number;

  @Column({ name: 'difficulty_by_user', type: 'varchar' })
  difficultyByUser: string;

  @Column({ name: 'difficulty_by_moderator', type: 'tinyint' })
  difficultyByModerator: number;

  @Column({name: 'is_minority_by_moderator',
    type: 'boolean', nullable: true })
  isMinority: boolean;

  @Column({ name: 'communicator_id', type: 'varchar' })
  communicatorId: string;

  @Column({ name: 'user_want_contact', type: 'boolean' })
  userWantContact: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => StoryEntity, (story) => story.recipient)
  story: StoryEntity;
}
