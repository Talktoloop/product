import {
  Column,
  Entity,
  PrimaryColumn,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { StoryEntity } from '../../story/entity/story.entity';
import { CommentVoteEntity } from '../../comment/entity/comment-vote.entity';
import { StoryVoteEntity } from '../../story/entity/story-vote.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { MessageEntity } from '../../sms/entity/message.entity';
import { StoryHistoricalTranslationEntity } from '../../story/entity/story-historical-translation.entity';
import { OrganisationApplicationEntity } from './organisation-application.entity';
import { UserTokenEntity } from '../../subscription/entity/user-token.entity';
import { UserExportCsvActivityEntity } from './user-export-csv-activity.entity';
import { SubscriptionApplicationEntity } from '../../subscription/entity/subscription-application.entity';

@Entity('user')
export class UserEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  id: string;

  @Column({ name: 'cognito_sub_id', type: 'varchar', length: 36, nullable: true })
  @Index()
  cognitoSubId: string;

  @Column({ name: 'language_id', type: 'smallint' })
  languageId: number;

  @Column({ name: 'email', type: 'varchar', length: 100 })
  @Index({ unique: true })
  email: string;

  @Column({ name: 'nickname', type: 'varchar', length: 60 })
  nickname?: string;

  @Column({ name: 'first_name', type: 'varchar', length: 50 })
  firstName?: string;

  @Column({ name: 'last_name', type: 'varchar', length: 50 })
  lastName?: string;

  @Column({ name: 'is_enabled', type: 'boolean' })
  isEnabled: boolean;

  @Column({ name: 'notifications', type: 'boolean', default: true })
  notifications: boolean;

  @Column({ type: 'boolean', default: true })
  reminders: boolean;

  @Column({ name: 'hide_last_name', type: 'boolean', default: false })
  hideLastName: boolean;

  @Column({ name: 'organisation_id', type: 'varchar' })
  organisation_id: string;

  @Column({ name: 'optin_marketing', type: 'boolean', default: 'false' })
  optin_marketing: boolean;

  @Column({ name: 'terms_of_service_id', type: 'smallint' })
  termsOfServiceId: number;

  @Column({ name: 'community_guidelines_id', type: 'smallint' })
  communityGuidelinesId: number;

  @Column({ name: 'privacy_policy_id', type: 'smallint' })
  privacyPolicyId: number;

  @Column({ name: 'consents_date' })
  consentsDate: Date;

  @Column({ name: 'account_status', type: 'varchar' })
  accountStatus: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'last_activity', type: 'datetime' })
  lastActivity: Date;

  @Column({ name: 'invitation_date', type: 'datetime' })
  invitationDate: Date;

  @Column({ name: 'planned_deletion_date' })
  plannedDeletionDate: Date;

  @ManyToOne(() => UserEntity, (user) => user.invitations)
  @JoinColumn({ name: 'invited_by' })
  invitedBy: UserEntity;

  @OneToMany(() => StoryEntity, (story) => story.assignedModerator)
  stories: StoryEntity[];

  @OneToMany(() => UserEntity, (user) => user.invitedBy)
  invitations: UserEntity[];

  @Column({ name: 'registration_date', type: 'datetime' })
  registrationDate: Date;

  @ManyToOne(
    () => OrganisationEntity,
    (organisation: OrganisationEntity) => organisation.users,
  )
  @JoinColumn({ name: 'organisation_id' })
  organisation?: OrganisationEntity;

  @OneToOne(
    () => OrganisationApplicationEntity,
    (organisationApplication) => organisationApplication.user,
  )
  organisationApplication?: OrganisationApplicationEntity;

  @OneToMany(() => CommentEntity, (comment: CommentEntity) => comment.user)
  public comments?: CommentEntity[];

  @OneToMany(() => MessageEntity, (message: MessageEntity) => message.user)
  public messages?: MessageEntity[];

  @OneToMany(() => StoryEntity, (story: StoryEntity) => story.user)
  public story_users?: UserEntity[];

  @OneToMany(
    () => StoryHistoricalTranslationEntity,
    (historicalTranslation: StoryHistoricalTranslationEntity) =>
      historicalTranslation.user,
  )
  public historicalTranslations?: StoryHistoricalTranslationEntity[];

  @OneToMany(
    () => CommentVoteEntity,
    (commentVote: CommentVoteEntity) => commentVote.user,
  )
  public commentVotes?: CommentVoteEntity[];

  @OneToMany(
    () => StoryVoteEntity,
    (storyVote: StoryVoteEntity) => storyVote.user,
  )
  public storyVotes?: StoryVoteEntity[];

  @Column({ name: 'role', type: 'int' })
  role: number;

  @ManyToOne(() => LanguageEntity, (language: LanguageEntity) => language.users)
  @JoinColumn({ name: 'language_id' })
  language: LanguageEntity;

  @OneToMany(
    () => StoryEntity,
    (story: StoryEntity) => story.markedAsSensitiveBy,
  )
  markedAsSensitiveBy?: StoryEntity[];

  @OneToMany(() => StoryEntity, (story: StoryEntity) => story.statusChangedBy)
  storiesStatusChangedBy?: StoryEntity[];

  @OneToOne(() => UserTokenEntity, (userToken) => userToken.user)
  subscriptionToken: UserTokenEntity;

  @OneToMany(
    () => UserExportCsvActivityEntity,
    (exportCsvActivity) => exportCsvActivity.user,
  )
  exportCsvActivities: UserExportCsvActivityEntity[];

  @OneToMany(
    () => SubscriptionApplicationEntity,
    (subscriptionApplication) => subscriptionApplication.user,
  )
  subscriptionApplication: SubscriptionApplicationEntity[];
}
