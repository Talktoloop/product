import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AvgResponseTimePerStoryTypeRO {
  @Expose()
  @ApiProperty({ example: 'concern' })
  code: string;

  @Expose()
  @ApiProperty({ example: 5 })
  average: number;
}
