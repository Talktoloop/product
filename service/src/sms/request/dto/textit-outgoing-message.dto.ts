import { ApiProperty } from '@nestjs/swagger';

export class TextItOutgoingMessageDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  text: string;

  @ApiProperty()
  to: string;

  @ApiProperty()
  to_no_plus: string;

  @ApiProperty()
  from: string;

  @ApiProperty()
  from_no_plus: number;

  @ApiProperty()
  channel: string;
}
