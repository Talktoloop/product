import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { CommentEntity } from './comment.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';

@Entity('story_comment_translation')
export class CommentTranslationEntity {
  constructor(
    data: {
      commentId?: string;
      languageId?: number;
      content?: string;
    } = {},
  ) {
    this.commentId = data.commentId;
    this.languageId = data.languageId;
    this.content = data.content;
  }

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'language_id', type: 'smallint' })
  languageId: number;

  @Column({ name: 'comment_id', type: 'varchar', length: 36 })
  commentId: string;

  @Index('IDX_FullText_Content', { fulltext: true })
  @Column({ name: 'content', type: 'text' })
  content: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;

  @Column({ name: 'type', type: 'enum', enum: TRANSLATION_TYPE_CONSTANTS })
  type: TRANSLATION_TYPE_CONSTANTS;

  @ManyToOne(
    () => CommentEntity,
    (comment: CommentEntity) => comment.translations,
  )
  @JoinColumn({ name: 'comment_id' })
  comment: CommentEntity;

  @ManyToOne(
    () => LanguageEntity,
    (language: LanguageEntity) => language.comments,
  )
  @JoinColumn({ name: 'language_id' })
  language: LanguageEntity;

  @Column({ name: 'status', type: 'int' })
  status: TRANSLATION_STATUS_CONSTANTS;

  isOriginalContent?: boolean;
}
