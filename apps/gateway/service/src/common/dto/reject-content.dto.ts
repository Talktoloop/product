import { ApiProperty } from '@nestjs/swagger';

export class RejectContentDto {
  @ApiProperty({ type: 'number', required: true, isArray: true })
  reasonIds?: number[];

  @ApiProperty({ type: 'string', required: true, isArray: true })
  reasonTexts?: string[];

  @ApiProperty({ required: false })
  rationale?: string;

  @ApiProperty({ required: false })
  notificationLanguage?: string;
}

export class RejectContentWithStoryDto extends RejectContentDto {
  @ApiProperty({ required: true })
  storyId: string;
}

export class RejectStoriesDto {
  @ApiProperty({
    type: RejectContentWithStoryDto,
    required: true,
    isArray: true,
  })
  storiesToReject: RejectContentWithStoryDto[];
}
