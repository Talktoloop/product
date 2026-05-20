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

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @Column({ type: 'varchar', nullable: true })
  nickname: string;

  @Column({ name: 'first_name', type: 'varchar', nullable: true })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', nullable: true })
  lastName: string;

  @Column({ name: 'gender_by_user', type: 'varchar', nullable: true })
  genderByUser: string;

  @Column({ name: 'gender_by_moderator', type: 'tinyint', nullable: true })
  genderByModerator: number;

  @Column({ name: 'age_by_user', type: 'varchar', nullable: true })
  ageByUser: string;

  @Column({ name: 'age_by_moderator', type: 'tinyint', nullable: true })
  ageByModerator: number;

  @Column({ name: 'difficulty_by_user', type: 'varchar', nullable: true })
  difficultyByUser: string;

  @Column({ name: 'difficulty_by_moderator', type: 'tinyint', nullable: true })
  difficultyByModerator: number;

  @Column({name: 'is_minority_by_moderator',
    type: 'boolean', nullable: true })
  isMinority: boolean;

  @Column({ name: 'communicator_id', type: 'varchar', nullable: true })
  communicatorId: string;

  @Column({ name: 'user_want_contact', type: 'boolean', nullable: true, default: true })
  userWantContact: boolean;

  @Column({name: "additional_contact_details", type: 'text', nullable: true})
  additionalContactDetails: string

  @Column({name: "disabilities_other_explanation", type: 'text', nullable: true})
  disabilitiesOtherExplanation: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => StoryEntity, (story) => story.recipient)
  story: StoryEntity;
}
