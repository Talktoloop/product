import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StoryTranslationEntity } from '../../story/entity/story-translation.entity';
import { CommentTranslationEntity } from '../../comment/entity/comment-translation.entity';
import { UserEntity } from '../../user/entity/user.entity';
import { StoryEntity } from '../../story/entity/story.entity';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { PROVIDER_TYPE } from '../interface/provider.enum';
import { CaseManagerLanguageEntity } from '../../case-manager/entity/case-manager-language.entity';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { CountryEntity } from '../../country/entity/country.entity';

@Entity('language')
export class LanguageEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'is_default', type: 'boolean', default: false })
  isDefault: boolean;

  @Column({ type: 'boolean', default: true })
  visible: boolean;

  @Column({ name: 'provider', type: 'varchar' })
  provider?: PROVIDER_TYPE;

  @Column({ name: 'alternative_provider', type: 'varchar' })
  alternativeProvider?: PROVIDER_TYPE;

  @Column({ name: 'code', type: 'varchar', length: 4 })
  code: string;

  @Column({ name: 'transcribe_lang', type: 'varchar', length: 2 })
  transcribeLang: string;

  @Column({ name: 'dialect', type: 'varchar', length: 4, nullable: true })
  dialect?: string;

  @OneToMany(
    () => StoryTranslationEntity,
    (translation) => translation.language,
  )
  stories: StoryTranslationEntity[];

  @OneToMany(() => CountryEntity, (country) => country.language)
  countries: CountryEntity[];

  @OneToMany(
    () => CommentTranslationEntity,
    (translation) => translation.language,
  )
  comments: CommentTranslationEntity[];

  @OneToMany(() => UserEntity, (user) => user.language)
  users: UserEntity[];

  @OneToMany(() => StoryEntity, (story) => story.language)
  stories_lang: StoryEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.language)
  comments_lang: CommentEntity[];

  @OneToMany(
    () => CaseManagerLanguageEntity,
    (caseManager) => caseManager.language,
  )
  caseManagers: CaseManagerLanguageEntity[];

  @OneToMany(
    () => StoryConversationEntity,
    (conversation: StoryConversationEntity) => conversation.language,
  )
  public conversations?: StoryConversationEntity[];
}
