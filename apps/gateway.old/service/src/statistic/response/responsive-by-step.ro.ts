import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { TypeValuesRO } from './type-value.ro';

@Exclude()
export class ResponsiveByStepRO {
  @Expose()
  @ApiProperty({ type: TypeValuesRO, isArray: true })
  steps: TypeValuesRO[];

  @Expose()
  @ApiProperty({ type: Number })
  closedCases: number;
}
