import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CountRO {
  @Expose()
  @ApiProperty({ example: 10 })
  count: number;
}
