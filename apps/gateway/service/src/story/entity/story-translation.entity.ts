import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index
} from 'typeorm';
import { StoryEntity } from './story.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';
import { StoryHistoricalTranslationEntity } from './story-historical-translation.entity';

@Entity('story_translation')
export class StoryTranslationEntity {
  constructor(
    data: {
      storyId?: string;
      languageId?: number;
      content?: string;
      language?: LanguageEntity;
      numberOfWords?: number;
      status?: TRANSLATION_STATUS_CONSTANTS;
      type?: TRANSLATION_TYPE_CONSTANTS;
    } = {},
  ) {
    this.storyId = data.storyId;
    this.languageId = data.languageId;
    this.content = data.content;
    this.language = data.language;
    this.numberOfWords = data.numberOfWords;
    this.status = data.status;
    this.type = data.type;
  }

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'number_of_words', type: 'smallint' })
  numberOfWords: number;

  @Column({ name: 'language_id', type: 'smallint' })
  languageId: number;

  @Column({ name: 'story_id', type: 'varchar', length: 36 })
  storyId: string;

  @Index('IDX_FullText_Content', { fulltext: true })
  @Column({ name: 'content', type: 'text' })
  content: string;

  @Column({ name: 'is_original_content', type: 'boolean' })
  isOriginalContent: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;

  @Column({ name: 'type', type: 'enum', enum: TRANSLATION_TYPE_CONSTANTS })
  type: TRANSLATION_TYPE_CONSTANTS;

  @ManyToOne(() => StoryEntity, (story: StoryEntity) => story.translations)
  @JoinColumn({ name: 'story_id' })
  story: StoryEntity;

  @OneToMany(
    () => StoryHistoricalTranslationEntity,
    (historicalTranslation: StoryHistoricalTranslationEntity) =>
      historicalTranslation.translation,
  )
  public historicalTranslations?: StoryHistoricalTranslationEntity[];

  @ManyToOne(
    () => LanguageEntity,
    (language: LanguageEntity) => language.stories,
  )
  @JoinColumn({ name: 'language_id' })
  language: LanguageEntity;

  @Column({ name: 'status', type: 'int' })
  status: TRANSLATION_STATUS_CONSTANTS;
}
