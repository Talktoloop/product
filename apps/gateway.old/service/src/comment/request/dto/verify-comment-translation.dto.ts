import { ApiProperty } from '@nestjs/swagger';

export class VerifyCommentTranslationDto {
  @ApiProperty()
  language: string;

  @ApiProperty()
  content: string;
}
