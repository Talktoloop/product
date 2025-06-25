import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class StoriesDividedByDisabilityQueryResult {
  @Expose()
  @ApiProperty({ example: 'seeing' })
  code: string;

  @Expose()
  @ApiProperty({ example: 5 })
  count: number;
}

@Exclude()
export class StoriesDividedByDisabilityRO extends StoriesDividedByDisabilityQueryResult {
  @Expose()
  @ApiProperty({ example: 10 })
  percent: number;
}
