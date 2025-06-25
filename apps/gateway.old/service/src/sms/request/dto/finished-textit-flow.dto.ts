import { ApiProperty } from '@nestjs/swagger';

export class FinishedTextItFlowDTO {
  @ApiProperty()
  from: string;

  @ApiProperty()
  to: string;
}
