import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserHideLastNameRO {
  @Expose()
  @ApiProperty()
  nickname: string;

  @Expose()
  @ApiProperty()
  success: boolean;
}
