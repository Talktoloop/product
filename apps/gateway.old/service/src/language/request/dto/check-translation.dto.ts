import { ApiProperty } from '@nestjs/swagger';

export class checkTranslationDto {
  @ApiProperty({ required: true })
  content: string;
}
