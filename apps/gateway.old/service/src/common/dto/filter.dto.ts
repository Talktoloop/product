type StringOrNumber = string | number;

import { ApiProperty } from '@nestjs/swagger';
import { CHANNEL_CONSTANTS } from '../constant/channel.constant';

export class FilterDto {
  @ApiProperty({ type: 'string', required: false })
  country?: string;

  @ApiProperty({ type: 'string', required: false })
  type?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  age?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  gender?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  difficulty?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  minority?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  organisation?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  thematic?: StringOrNumber;

  @ApiProperty({ type: CHANNEL_CONSTANTS, required: false })
  channel?: CHANNEL_CONSTANTS;

  @ApiProperty({ required: false, type: Date })
  from: string;

  @ApiProperty({ required: false, type: Date })
  to: string;

  @ApiProperty({ required: false, type: String })
  regionId?: string;

  thematicAreaToFiltration?: Record<string, unknown>;

  @ApiProperty({ required: false, type: String })
  searchTerm?: string;

  @ApiProperty({ type: 'string', required: false })
  repliedTo?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  replies_by_specific_organisation?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  language?: StringOrNumber;
}
