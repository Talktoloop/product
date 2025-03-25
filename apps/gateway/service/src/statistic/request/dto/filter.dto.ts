type StringOrNumber = string | number;

import { ApiProperty } from '@nestjs/swagger';

export class FilterCasesDto {
  @ApiProperty({ type: 'string', required: false })
  country?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  age?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  gender?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  organisationType?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  investigationOutcome?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  referredForAssistance?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  caseType?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  disability?: StringOrNumber;

  @ApiProperty({ type: 'string', required: false })
  thematic?: StringOrNumber;

  @ApiProperty({ required: false, type: Date })
  from: string;

  @ApiProperty({ required: false, type: Date })
  to: string;
}
