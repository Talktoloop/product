import { ApiProperty } from '@nestjs/swagger';

export class VerifyStoryTranslationDto {
  @ApiProperty()
  language: string;

  @ApiProperty()
  content: string;
}
