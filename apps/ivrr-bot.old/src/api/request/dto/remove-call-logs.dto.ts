import { ApiProperty } from '@nestjs/swagger';

export class RemoveCallLogsDto {
  @ApiProperty()
  callLogSid: string;

  @ApiProperty()
  onlyCallLog: boolean;
}
