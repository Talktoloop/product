import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { AGE_VALUE, GENDER_VALUE, CATEGORY_VALUE } from '../../common/types';
import { DIFFICULTY } from '../../airtable-client/constant/difficulty.constant';
import { THEMATIC } from '../../airtable-client/constant/thematic.constant';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { LANGUAGE } from '@ourloop/shared';
import { getThematicAreaChildrenKeys } from '../../common/helpers';

@Exclude()
export class ExportedStoryRO {
  @Expose()
  @ApiProperty({ type: String })
  feedbackId: string;

  @Expose()
  @ApiProperty({ enum: Object.values(CATEGORY_VALUE), isArray: true })
  categories: string[];

  @Expose()
  @ApiProperty({ type: Date })
  publishedAt: Date;

  @Expose()
  @ApiProperty({ type: String })
  countryCode: string;

  @Expose()
  @ApiProperty({ type: String })
  location: string;

  @Expose()
  @ApiProperty({
    enum: Object.keys(AGE_VALUE).map((value) =>
      value.toLowerCase().replace(/ /g, '_'),
    ),
  })
  age: string;

  @Expose()
  @ApiProperty({
    enum: Object.keys(GENDER_VALUE).map((value) => value.toLowerCase()),
  })
  gender: string;

  @Expose()
  @ApiProperty({
    enum: DIFFICULTY,
    isArray: true,
  })
  difficulties: string[];

  @Expose()
  @ApiProperty({
    enum: Object.values(THEMATIC).filter(
      (value) => value.split('.').length === 1,
    ),
  })
  thematicParents: string[];

  @Expose()
  @ApiProperty({
    enum: getThematicAreaChildrenKeys(),
  })
  thematicChildren: string[];

  @Expose()
  @ApiProperty({ type: String, isArray: true })
  organisations: string[];

  @Expose()
  @ApiProperty({ type: String })
  content: string;

  @Expose()
  @ApiProperty({ type: String })
  originalContent: string;

  @Expose()
  @ApiProperty({ type: String })
  url: string;

  @Expose()
  @ApiProperty({
    enum: Object.values(CHANNEL_CONSTANTS),
  })
  communicationChannel: string;

  @Expose()
  @ApiProperty({ type: Boolean })
  didAnyoneComment: boolean;

  @Expose()
  @ApiProperty({
    enum: Object.keys(LANGUAGE).map((value) => value.toLowerCase()),
  })
  originalContentLanguage: string;

  @Expose()
  @ApiProperty({ type: Boolean })
  isMinority: boolean;
}
