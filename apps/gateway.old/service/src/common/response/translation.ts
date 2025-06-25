import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { TRANSLATION_STATUS_CONSTANTS } from '../constant/translation-status.constants';
import { TRANSLATION_TYPE_CONSTANTS } from '../constant/translation-type.constant';

@Exclude()
export class TranslationRO {
  @Expose()
  @ApiProperty({ example: 'Loren ipsum' })
  content: string;

  @Expose()
  @ApiProperty({ example: 'en' })
  code: string;

  @Expose()
  @ApiProperty({
    enum: TRANSLATION_TYPE_CONSTANTS,
    example: TRANSLATION_TYPE_CONSTANTS.MACHINE,
  })
  type: TRANSLATION_TYPE_CONSTANTS;

  @Expose()
  @ApiProperty({
    enum: TRANSLATION_STATUS_CONSTANTS,
    example: TRANSLATION_STATUS_CONSTANTS.TRANSLATING,
  })
  status: TRANSLATION_STATUS_CONSTANTS;
}
