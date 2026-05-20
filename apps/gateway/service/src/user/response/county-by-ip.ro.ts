import { ApiProperty } from '@nestjs/swagger';
import {
  Exclude,
  Expose,
  Transform,
  TransformFnParams,
} from 'class-transformer';

@Exclude()
export class CountryByIpRO {
  @Expose()
  @ApiProperty({ example: 'pl' })
  @Transform(({ value }: TransformFnParams) =>
    value ? String(value).toLowerCase() : null,
  )
  country: string;
}
