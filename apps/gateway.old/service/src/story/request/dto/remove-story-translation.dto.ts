import { ApiProperty } from '@nestjs/swagger';

export class RemoveStoryTranslationDto {
  @ApiProperty()
  language: string;
}
