import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ModeratorRO {
  @Expose()
  @ApiProperty()
  id: string;

  @Expose()
  @ApiProperty()
  nick_name: string;

  @Expose()
  @ApiProperty()
  email: number;
}
