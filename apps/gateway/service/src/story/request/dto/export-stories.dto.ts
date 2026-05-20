import { ApiProperty } from '@nestjs/swagger';

export class ExportStoriesDTO {
  @ApiProperty({ type: String, required: true })
  email: string;

  @ApiProperty({ type: String, required: true })
  country: string;

  @ApiProperty({ required: false, type: Boolean })
  withSensitiveStories: boolean;

  @ApiProperty({ required: false, type: String })
  organisation: string;

  @ApiProperty({ required: false, type: Date })
  from: string;

  @ApiProperty({ required: false, type: Date })
  to: string;
}
