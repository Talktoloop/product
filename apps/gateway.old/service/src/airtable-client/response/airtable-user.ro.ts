import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AirTableUserRO {
  @Expose()
  @ApiProperty()
  airTableUserCellId?: string;

  @Expose()
  @ApiProperty()
  dBUserId: string;
}
