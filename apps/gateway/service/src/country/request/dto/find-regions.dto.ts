import { ApiProperty } from '@nestjs/swagger';

export class FindRegionsDTO {
  @ApiProperty({ type: Number, required: true })
  countryId: number;

  @ApiProperty({ type: Number, required: false })
  parentId: number;

  @ApiProperty({ type: String, required: true })
  phrase: string;

  @ApiProperty({ type: Boolean, required: true, default: false })
  onlyWithStory: boolean;
}
