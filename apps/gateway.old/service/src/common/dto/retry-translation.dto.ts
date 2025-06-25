import { ApiProperty } from '@nestjs/swagger';
export class RetryTranslationDto {
  @ApiProperty({ example: 'en' })
  language: string;
}
