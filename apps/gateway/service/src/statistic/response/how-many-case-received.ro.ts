import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class HowManyCaseReceivedRO {
  @Expose()
  @ApiProperty({ example: 10 })
  total: number;

  @Expose()
  @ApiProperty({ example: 2 })
  open: number;

  @Expose()
  @ApiProperty({ example: 20 })
  closed: number;

  @Expose()
  @ApiProperty({ example: 12 })
  urgent: number;

  @Expose()
  @ApiProperty({ example: 5 })
  assistanceProvided: number;
}
