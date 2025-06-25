import { ApiProperty } from '@nestjs/swagger';

export class TranscribeHistoricalStoriesDto {
  @ApiProperty({ required: true })
  language: string;

  @ApiProperty({ required: true })
  minDuration: number;
}
