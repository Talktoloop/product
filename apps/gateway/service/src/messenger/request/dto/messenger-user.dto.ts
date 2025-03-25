import { ApiProperty } from '@nestjs/swagger';

export class MessengerUserRequestDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  gender?: string;

  @ApiProperty()
  age?: string;

  @ApiProperty()
  disability?: string;

  @ApiProperty()
  country?: string;
}
