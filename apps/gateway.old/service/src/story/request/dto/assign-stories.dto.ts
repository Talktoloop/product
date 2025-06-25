import { ApiProperty } from '@nestjs/swagger';

export class AssignStoriesDTO {
  @ApiProperty({ type: 'string', isArray: true, required: true })
  storyIds?: string[];
}
