import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SubmitReportDto {
  @ApiProperty()
  reportType: 'feedback' | 'reply';

  @ApiProperty()
  postId: string;

  @ApiProperty()
  guidelineBreaches: string[];

  @ApiPropertyOptional()
  replySpecification?: string;

  @ApiPropertyOptional()
  additionalInfo?: string;

  @ApiPropertyOptional()
  contactEmail?: string;
}
