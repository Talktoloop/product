import {
  Column,
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { StoryEntity } from '../../story/entity/story.entity';
import { UserEntity } from '../../user/entity/user.entity';
import { CommentVoteEntity } from './comment-vote.entity';
import { CommentTranslationEntity } from './comment-translation.entity';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { LanguageEntity } from '../../language/entity/language.entity';
import { CommentRejectReasonEntity } from './comment-reject-reason.entity';
import { CommentRecipientEntity } from './comment-recipient.entity';
import { ThematicEntity } from '../../lexicon/entity/thematic.entity';

@Entity('story_comment')
export class CommentEntity {
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column({ name: 'language_id', type: 'smallint' })
  languageId: number;

  @Column({ name: 'story_id', type: 'varchar' })
  storyId: string;

  @ManyToOne(() => StoryEntity, (story: StoryEntity) => story.comments)
  @JoinColumn({ name: 'story_id' })
  story: StoryEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'published_at' })
  publishedAt?: Date;

  @Column({ name: 'status', type: 'varchar' })
  status: string;

  @Column({ name: 'solution_proposed', type: 'boolean' })
  solution_proposed: boolean;

  @Column({ name: 's3_file_id', type: 'varchar' })
  s3FileId: string;

  @Column({ name: 'parent_comment_id', type: 'varchar' })
  parentCommentId?: string;

  @Column({ name: 'channel', type: 'enum', enum: CHANNEL_CONSTANTS })
  channel: CHANNEL_CONSTANTS;

  @Column({ name: 'reject_reason_language_id', type: 'smallint' })
  rejectReasonLanguageId: number;

  @ManyToOne(() => LanguageEntity, (lang: LanguageEntity) => lang.comments_lang)
  @JoinColumn({ name: 'language_id' })
  language: LanguageEntity;

  @OneToMany(
    () => CommentTranslationEntity,
    (translation) => translation.comment,
    { cascade: ['insert', 'update'] },
  )
  translations: CommentTranslationEntity[];

  @ManyToOne(
    () => CommentEntity,
    (comment: CommentEntity) => comment.children,
    {
      onDelete: 'CASCADE',
      cascade: true,
    },
  )
  @JoinColumn({ name: 'parent_comment_id' })
  parent?: CommentEntity;

  @OneToMany(
    () => CommentEntity,
    (subComment: CommentEntity) => subComment.parent,
  )
  children?: CommentEntity[];

  @Column({ name: 'user_id', type: 'varchar' })
  userId?: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

  @OneToMany(
    () => CommentVoteEntity,
    (vote: CommentVoteEntity) => vote.comment,
    {
      onDelete: 'CASCADE',
      cascade: true,
    },
  )
  public votes: CommentVoteEntity[];

  @OneToMany(
    () => CommentRejectReasonEntity,
    (rejectReason: CommentRejectReasonEntity) => rejectReason.comment,
    {
      onDelete: 'CASCADE',
      cascade: true,
    },
  )
  public rejectReasons: CommentRejectReasonEntity[];

  @Column({ name: 'reject_rationale', type: 'text' })
  rejectRationale?: string;

  @Column({ name: 'recipient_id', type: 'int' })
  recipientId: number;

  @OneToOne(() => CommentRecipientEntity, (recipient) => recipient.comment)
  @JoinColumn({ name: 'recipient_id' })
  recipient: CommentRecipientEntity;

  @ManyToMany(() => ThematicEntity, { onDelete: 'CASCADE', cascade: true })
  @JoinTable({
    name: 'story_comment_thematic',
    joinColumns: [{ name: 'story_comment_id' }],
    inverseJoinColumns: [{ name: 'thematic_id' }],
  })
  thematics: ThematicEntity[];
}
