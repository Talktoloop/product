import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class TypeValuesRO {
  @Expose()
  @ApiProperty({ type: String, example: 'SEAH' })
  type: string;

  @Expose()
  @ApiProperty({ type: Boolean, required: false })
  isAnonymousData?: boolean;

  @Expose()
  @ApiProperty({ type: Number, isArray: true, example: [0, 1, 1, 0] })
  values: number[];
}
