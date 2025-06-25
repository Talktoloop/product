import { ApiProperty } from '@nestjs/swagger';
import {
  Exclude,
  Expose,
  Transform,
  TransformFnParams,
} from 'class-transformer';
import { TranslationRO } from '../../common/response/translation';
import { CategoryRO } from '../../category/response/category.ro';
import { LexiconRO } from '../../lexicon/response/lexicon.ro';
import { StoryListRO } from './story-list.ro';
import { MARKED_AS_SENSITIVE_BY } from '../../common/constant/marked-as-sensitive.constant';

@Exclude()
export class StoryWebModeratorRO extends StoryListRO {
  @Expose()
  @ApiProperty({ type: CategoryRO, isArray: true })
  categories: CategoryRO[];

  @Expose()
  @ApiProperty({ type: LexiconRO, isArray: true })
  difficulties: LexiconRO[];

  @Expose()
  @ApiProperty({ type: LexiconRO, isArray: true })
  maternityStatus: LexiconRO[];

  @Expose()
  @ApiProperty({ type: String })
  difficulty: string;

  @Expose()
  @ApiProperty({ type: String })
  historicalContent: string;

  @Expose()
  @ApiProperty({ type: Boolean })
  contactAccepted: boolean;

  @Expose()
  @ApiProperty({ type: 'number' })
  age: number;

  @Expose()
  @ApiProperty({ type: 'number' })
  gender: number;

  @Expose()
  @ApiProperty()
  createdAt: string;

  @Expose()
  @ApiProperty({ type: Boolean })
  emailProvided: boolean;

  @Expose()
  @ApiProperty()
  @Transform(({ value }: TransformFnParams) => !!value)
  isSensitive: boolean;

  @Expose()
  @ApiProperty({ type: TranslationRO, isArray: true })
  translations: TranslationRO[];

  @Expose()
  @ApiProperty()
  language: string;

  @Expose({ name: 'markedAsSensitiveByRole' })
  @ApiProperty({
    enum: MARKED_AS_SENSITIVE_BY,
    example: MARKED_AS_SENSITIVE_BY.AUTHOR,
  })
  markedAsSensitiveBy: MARKED_AS_SENSITIVE_BY;

  @Expose()
  @ApiProperty()
  caseManagerNote: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  status: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  caseManagerReturnedAt?: string;

  @Expose()
  @ApiProperty({ type: Boolean })
  isUrgent: boolean;

  @Expose()
  @ApiProperty({ type: Boolean })
  isMinority: boolean;
}
