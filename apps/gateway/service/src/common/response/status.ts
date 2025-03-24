import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class StatusRO {
  @Expose()
  @ApiProperty({ type: Boolean })
  readonly status: boolean;
}
