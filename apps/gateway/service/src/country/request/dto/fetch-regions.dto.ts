import { ApiProperty } from '@nestjs/swagger';

export class FetchRegionsDTO {
  @ApiProperty({ type: String, required: true })
  countryCode: string;
}
