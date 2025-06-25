import { ApiProperty } from '@nestjs/swagger';
import {
  Exclude,
  Expose,
  Transform,
  TransformFnParams,
} from 'class-transformer';

@Exclude()
export class CheckTranslationRO {
  @Expose({ name: 'LanguageCode' })
  @ApiProperty({ name: 'language', example: 'en' })
  @Transform(({ value }: TransformFnParams) => value ?? '')
  language?: string;
  @Expose({ name: 'Score' })
  @ApiProperty({ name: 'probability', example: 30 })
  @Transform(({ value }: TransformFnParams) =>
    value ? Math.round(value * 100) : 0,
  )
  probability?: number;
}
