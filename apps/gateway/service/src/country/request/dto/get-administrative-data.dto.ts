import { ApiProperty } from '@nestjs/swagger';

export class GetAdministrativeDataDTO {
  @ApiProperty({ required: false, type: Number })
  parentId: number;

  @ApiProperty({ required: true, type: Number })
  countryId: number;

  @ApiProperty({ type: Boolean, default: false, required: false })
  onlyWithStory: boolean;
}
