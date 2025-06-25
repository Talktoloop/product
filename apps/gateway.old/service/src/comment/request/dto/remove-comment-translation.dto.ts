import { ApiProperty } from '@nestjs/swagger';

export class RemoveCommentTranslationDto {
  @ApiProperty()
  language: string;
}
