import { ApiProperty } from '@nestjs/swagger';
import { OrderEnum } from '../../../common/types';
import { AGE_VALUE, GENDER_VALUE, CATEGORY_VALUE } from '../../../common/types';
import { DIFFICULTY } from '../../../airtable-client/constant/difficulty.constant';
import { getThematicAreaChildrenKeys } from '../../../common/helpers';

export class ExportToJsonDTO {
  @ApiProperty({
    type: String,
    required: false,
    isArray: true,
    description:
      'Country code in format https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements',
  })
  country?: string;

  @ApiProperty({
    enum: Object.values(CATEGORY_VALUE),
    isArray: true,
    required: false,
  })
  type?: string[] | string;

  @ApiProperty({
    enum: Object.keys(AGE_VALUE).map((value) =>
      value.toLowerCase().replace(/ /g, '_'),
    ),
    isArray: true,
    required: false,
  })
  age?: string[] | string;

  @ApiProperty({
    enum: Object.keys(GENDER_VALUE).map((value) => value.toLowerCase()),
    isArray: true,
    required: false,
  })
  gender?: string[] | string;

  @ApiProperty({
    enum: Object.values(DIFFICULTY),
    isArray: true,
    required: false,
  })
  difficulty?: string[] | string;

  @ApiProperty({
    type: 'string',
    required: false,
    description: 'A phrase containing the name of the organization',
  })
  organisation?: string;

  @ApiProperty({
    enum: getThematicAreaChildrenKeys(),
    isArray: true,
    required: false,
  })
  thematic?: string[] | string;

  @ApiProperty({ required: false, type: Date })
  from: string;

  @ApiProperty({ required: false, type: Date })
  to: string;

  @ApiProperty({ type: 'number', required: true })
  page: number;

  @ApiProperty({ type: 'number', required: true })
  limit: number;

  @ApiProperty({ enum: OrderEnum, required: false })
  order?: OrderEnum;

  @ApiProperty({ type: 'string', required: false })
  searchTerm?: string;
}
