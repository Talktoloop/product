import { ApiProperty } from '@nestjs/swagger';
export class SaveTranslationDto {
  @ApiProperty({ example: 'This is my test content' })
  content: string;
  @ApiProperty({ example: 'en' })
  language: string;
}
