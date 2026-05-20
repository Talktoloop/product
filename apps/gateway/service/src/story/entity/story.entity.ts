import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { CategoryEntity } from '../../category/entity/category.entity';
import { DifficultyEntity } from '../../lexicon/entity/difficulty.entity';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { ThematicEntity } from '../../lexicon/entity/thematic.entity';
import { MaternityStatusEntity } from '../../lexicon/entity/maternity-status.entity';
import { StoryViewEntity } from './story-view.entity';
import { StoryVoteEntity } from './story-vote.entity';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { UserEntity } from '../../user/entity/user.entity';
import { StoryTranslationEntity } from './story-translation.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { StoryConversationEntity } from './story-conversation.entity';
import { MARKED_AS_SENSITIVE_BY } from '../../common/constant/marked-as-sensitive.constant';
import { CountryEntity } from '../../country/entity/country.entity';
import { StoryRejectReasonEntity } from './story-reject-reason.entity';
import { StoryRecipientEntity } from './story-recipient.entity';
import { StoryAdministrativeDataEntity } from './story-administrative-data.entity';
import { STORY_STATUS } from '@ourloop/shared';
import { StoryOrganisationTagEntity } from './story-organisation-tag.entity';
import { FeedbackVulnerabilityFactorsEntity } from './feedback-vulnerability-factors.entity';

@Entity('story')
export class StoryEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  id: string;

  @Column({ name: 'language_id', type: 'smallint' })
  languageId: number;

  @ManyToOne(() => LanguageEntity, (lang: LanguageEntity) => lang.stories_lang)
  @JoinColumn({ name: 'language_id' })
  language: LanguageEntity;

  @Column({ name: 'status_changed_by', type: 'varchar' })
  statusChangedByUserId: string;

  @Column({ name: 'place', type: 'varchar', length: 100 })
  place?: string;

  @Column({ name: 'user_id', type: 'string' })
  userId: string;

  @Column({ name: 'status', type: 'varchar' })
  status: STORY_STATUS;

  @Column({ name: 'country_id', type: 'int' })
  countryId: number;

  @Column({ name: 'reject_reason_language_id', type: 'smallint' })
  rejectReasonLanguageId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @CreateDateColumn({ name: 'published_at' })
  publishedAt?: Date;

  @Column({ name: 'conversation_id', type: 'int' })
  conversationId: number;

  @Column({ name: 'case_manager_note', type: 'varchar' })
  caseManagerNote: string;

  @Column({ name: 'recipient_id', type: 'integer' })
  recipientId: number;

  @Column({ name: 'assigned_moderator_id', type: 'varchar' })
  assigned_moderator_id: string;

  @Column({ name: 'case_manager_returned_at' })
  caseManagerReturnedAt: Date;

  @Column({ name: 'edited', type: 'boolean' })
  edited: boolean;

  @ManyToOne(() => CountryEntity, (country: CountryEntity) => country.stories)
  @JoinColumn({ name: 'country_id' })
  country?: CountryEntity;

  @OneToOne(() => StoryConversationEntity, (conversation) => conversation.story)
  @JoinColumn({ name: 'conversation_id' })
  conversation: StoryConversationEntity;

  @OneToOne(() => StoryRecipientEntity, (recipient) => recipient.story)
  @JoinColumn({ name: 'recipient_id' })
  recipient: StoryRecipientEntity;

  @ManyToOne(() => UserEntity, (user) => user.stories, { onDelete: 'SET NULL', eager: true }) // Many stories to one user
  @JoinColumn({ name: 'assigned_moderator_id' })
  assignedModerator: UserEntity;

  @OneToMany(() => StoryTranslationEntity, (translation) => translation.story, {
    cascade: ['insert', 'update'],
  })
  translations: StoryTranslationEntity[];

  @OneToMany(
    () => StoryAdministrativeDataEntity,
    (administrativeArea) => administrativeArea.story,
    {
      cascade: ['insert', 'update'],
    },
  )
  storyAdministrativeData: StoryAdministrativeDataEntity[];

  @ManyToMany(() => CategoryEntity, { onDelete: 'CASCADE', cascade: true })
  @JoinTable({
    name: 'story_category',
    joinColumns: [{ name: 'story_id' }],
    inverseJoinColumns: [{ name: 'category_id' }],
  })
  categories: CategoryEntity[];

  @ManyToMany(() => DifficultyEntity, { onDelete: 'CASCADE', cascade: true })
  @JoinTable({
    name: 'story_difficulty',
    joinColumns: [{ name: 'story_id' }],
    inverseJoinColumns: [{ name: 'difficulty_id' }],
  })
  difficulties: DifficultyEntity[];

  @ManyToMany(() => OrganisationEntity, { onDelete: 'CASCADE', cascade: true })
  @JoinTable({
    name: 'story_organisation',
    joinColumns: [{ name: 'story_id' }],
    inverseJoinColumns: [{ name: 'organisation_id' }],
  })
  organisations: OrganisationEntity[];

  @ManyToMany(() => ThematicEntity, { onDelete: 'CASCADE', cascade: true })
  @JoinTable({
    name: 'story_thematic',
    joinColumns: [{ name: 'story_id' }],
    inverseJoinColumns: [{ name: 'thematic_id' }],
  })
  thematics: ThematicEntity[];

  @ManyToMany(() => MaternityStatusEntity, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  @JoinTable({
    name: 'story_pregnancy_status',
    joinColumns: [{ name: 'story_id' }],
    inverseJoinColumns: [{ name: 'pregnancy_status_id' }],
  })
  maternityStatus: MaternityStatusEntity[];

  @OneToMany(() => StoryViewEntity, (view: StoryViewEntity) => view.story, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public views: StoryEntity[];

  @OneToMany(() => StoryVoteEntity, (vote: StoryVoteEntity) => vote.story, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public votes: StoryVoteEntity[];

  @OneToMany(() => CommentEntity, (comment: CommentEntity) => comment.story, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public commentsRel: CommentEntity[];

  @Column({ type: 'int', select: false, insert: false, readonly: true })
  comments: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.story_users)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

  @Column({ name: 'reject_rationale', type: 'text' })
  rejectRationale?: string;

  @Column({ name: 'isSensitive', type: 'tinyint' })
  isSensitive: boolean;

  @Column({ name: 'is_urgent', type: 'boolean' })
  isUrgent: boolean;

  @Column({
    name: 'marked_as_sensitive_by_role',
    type: 'enum',
    enum: MARKED_AS_SENSITIVE_BY,
  })
  markedAsSensitiveByRole?: MARKED_AS_SENSITIVE_BY;

  @Column({
    name: 'marked_as_sensitive_by_user_id',
    type: 'varchar',
  })
  markedAsSensitiveByUserId?: string;

  @Column({ name: 'channel', type: 'enum', enum: CHANNEL_CONSTANTS })
  channel: CHANNEL_CONSTANTS;

  @OneToMany(
    () => StoryRejectReasonEntity,
    (rejectReason: StoryRejectReasonEntity) => rejectReason.story,
    {
      onDelete: 'CASCADE',
      cascade: true,
    },
  )
  public rejectReasons: StoryRejectReasonEntity[];

  @JoinColumn({
    name: 'marked_as_sensitive_by_user_id',
  })
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.markedAsSensitiveBy)
  markedAsSensitiveBy: UserEntity;

  @JoinColumn({
    name: 'status_changed_by',
  })
  @ManyToOne(
    () => UserEntity,
    (user: UserEntity) => user.storiesStatusChangedBy,
  )
  statusChangedBy: UserEntity;

  @Column({ name: 'on_behalf_of', type: 'varchar' })
  onBehalfOf?: string;

  @OneToMany(() => StoryOrganisationTagEntity, (tag) => tag.story)
  organisationsTagged: StoryOrganisationTagEntity[];

  @OneToMany(() => FeedbackVulnerabilityFactorsEntity, (fvf) => fvf.story)
  feedbackVulnerabilityFactors: FeedbackVulnerabilityFactorsEntity[];
}
