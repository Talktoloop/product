import { ApiProperty } from '@nestjs/swagger';
import { DIFFICULTY_VALUE } from '../../../common/types';
import { getKeysWithLowerCase } from '../../../common/helpers';

export class TranslationDto {
  @ApiProperty({ type: 'string' })
  code: string;

  @ApiProperty({ type: 'string' })
  content: string;
}

export class UpdateStoryDto {
  @ApiProperty() gender?: number;
  @ApiProperty() age?: number;
  @ApiProperty({ type: 'string', isArray: true })
  organisations?: string[] | null;

  @ApiProperty({ type: 'number', isArray: true })
  categories?: number[] | null;

  @ApiProperty({ type: 'number', isArray: true })
  difficulties?: number[] | null;

  @ApiProperty({ type: 'number', isArray: true })
  maternityStatus?: number[] | null;

  @ApiProperty({ type: 'number', isArray: true })
  thematics?: number[] | null;

  @ApiProperty({ type: 'string', required: false })
  language?: string;

  @ApiProperty({ type: 'string', required: false })
  authorNickname?: string;

  @ApiProperty({ type: 'string', required: false })
  content?: string;

  @ApiProperty({
    type: 'enum',
    required: false,
    enum: getKeysWithLowerCase(DIFFICULTY_VALUE),
    example: getKeysWithLowerCase(DIFFICULTY_VALUE)[0],
  })
  difficulty?: string;

  @ApiProperty({ type: String, required: false })
  place?: string;

  @ApiProperty({ type: Boolean, required: false })
  isSensitive?: boolean;

  @ApiProperty({ type: TranslationDto, isArray: true })
  translations?: TranslationDto[];

  @ApiProperty({ type: 'number', isArray: true })
  pinnedMessageIds?: number[] | null;

  @ApiProperty({ required: false }) regionId?: number;

  @ApiProperty({ required: true }) countryId?: number;

  isUrgent?: boolean;
  isMinority?: boolean;
}
