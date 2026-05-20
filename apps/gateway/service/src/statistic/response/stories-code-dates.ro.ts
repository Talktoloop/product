import { ApiProperty } from '@nestjs/swagger';
import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class StoriesCodeDatesRO {
  @Expose()
  @ApiProperty({ example: 'concern' })
  code: string;

  @Expose()
  @ApiProperty({ example: [] })
  values: any[][];
}
