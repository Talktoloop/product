import { ApiProperty } from '@nestjs/swagger';

export class ImportRegionDTO {
  @ApiProperty({ type: String, required: true })
  countryCode: string;

  @ApiProperty({
    type: Number,
    required: true,
    default: 4,
    description: 'It is nesting level in https://overpass-api.de/',
  })
  firstLevel: number;

  @ApiProperty({
    type: Number,
    required: true,
    default: 6,
    description: 'It is nesting level in https://overpass-api.de/',
  })
  lastLevel: number;

  @ApiProperty({ type: Boolean, required: true, default: false })
  saveDataInDB: boolean;

  @ApiProperty({
    type: String,
    required: false,
    description: 'IDs in https://overpass-api.de/',
  })
  exceptionIds: string;
}

export class ImportXlsxRegionDTO {
  @ApiProperty({ type: String, required: true })
  countryCode: string;

  @ApiProperty({ type: Boolean, required: true, default: false })
  saveDataInDB: boolean;
}
