import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class TypeAverageCountRO {
  @Expose()
  @ApiProperty({ type: String, example: 'SEAH' })
  type: string;

  @Expose()
  @ApiProperty({ type: Number, example: 1000 })
  average: number;

  @Expose()
  @ApiProperty({ type: Number, example: 20 })
  count: number;
}
