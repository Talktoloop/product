import { ApiProperty } from '@nestjs/swagger';
import {
  Exclude,
  Expose,
  Transform,
  TransformFnParams,
} from 'class-transformer';

@Exclude()
export class LanguageRO {
  @Expose({ name: 'code' })
  @ApiProperty({ example: 'en' })
  language: string;

  @Expose({ name: 'provider' })
  @ApiProperty({ example: true })
  @Transform(({ value }: TransformFnParams) => !!value)
  mtSupported: boolean;

  @Expose()
  @ApiProperty({ example: 1 })
  id: number;
}
