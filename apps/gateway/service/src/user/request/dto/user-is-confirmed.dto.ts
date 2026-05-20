import { ApiProperty } from '@nestjs/swagger';

export class UserIsConfirmedDTO {
  @ApiProperty({ maxLength: 100 })
  email: string;
}
