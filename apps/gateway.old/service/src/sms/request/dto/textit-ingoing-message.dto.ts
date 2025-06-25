import { ApiProperty } from '@nestjs/swagger';

export class TextItIngoingMessageDTO {
  @ApiProperty()
  phone: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  countryCode: string;
}
