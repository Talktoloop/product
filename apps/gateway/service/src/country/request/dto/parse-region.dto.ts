import { ApiProperty } from '@nestjs/swagger';

export class ParseRegionDTO {
  @ApiProperty({ type: String, required: true })
  countryCode: string;

  @ApiProperty({ type: String, required: false })
  email: string;
}
