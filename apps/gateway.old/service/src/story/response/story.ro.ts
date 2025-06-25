import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { CategoryRO } from '../../category/response/category.ro';
import { LexiconRO } from '../../lexicon/response/lexicon.ro';
import { StoryListRO } from './story-list.ro';
import { TranslationRO } from '../../common/response/translation';

@Exclude()
export class StoryRO extends StoryListRO {
  @Expose()
  @ApiProperty({ type: CategoryRO, isArray: true })
  categories: CategoryRO[];

  @Expose()
  @ApiProperty({ type: String })
  difficulty: string;

  @Expose()
  @ApiProperty({ type: LexiconRO, isArray: true })
  difficulties: LexiconRO[];

  @Expose()
  @ApiProperty({ type: LexiconRO, isArray: true })
  maternityStatus: LexiconRO[];

  @Expose()
  @ApiProperty({ type: 'number' })
  age: number;

  @Expose()
  @ApiProperty({ type: 'number' })
  gender: number;

  @Expose()
  @ApiProperty({ type: 'string' })
  language: string;

  @Expose()
  @ApiProperty({ type: 'string', isArray: true })
  translations: TranslationRO[];

  @Expose()
  @ApiProperty({ type: 'string' })
  channel: string;
}
