import { ApiProperty } from '@nestjs/swagger';

export class SendTokenDTO {
  @ApiProperty({ type: String, required: true })
  email: string;
}
