import { ApiProperty } from '@nestjs/swagger';

class DemographicDTO {
  @ApiProperty({ type: [Number], required: false })
  age?: number[];

  @ApiProperty({ type: [Number], required: false })
  gender?: number[];

  @ApiProperty({ type: [Number], required: false })
  difficulty?: number[];

  @ApiProperty({ type: [Number], required: false })
  minority?: number[];
}

class RegionDTO {
  @ApiProperty({ type: [Number], required: false })
  regionIds?: number[];

  @ApiProperty({ type: [String], required: false })
  countries?: string[];

  @ApiProperty({ type: [Number], required: false })
  semiClicked?: number[];

  @ApiProperty({ type: [Object], isArray: true, required: false })
  selectedRegionsOrCountries?: any[];
}

class DateDTO {
  @ApiProperty({ type: String, required: false })
  from?: string;

  @ApiProperty({ type: String, required: false })
  to?: string;
}

class FiltersDTO {
  @ApiProperty({ type: [Number], nullable: true, required: false })
  presetFilters?: number[] | null;

  @ApiProperty({ type: [Number], required: false })
  type?: number[];

  @ApiProperty({ type: DemographicDTO, required: false })
  demographic?: DemographicDTO;

  @ApiProperty({ type: RegionDTO, required: false })
  region?: RegionDTO;

  @ApiProperty({ type: [Number], required: false })
  thematic?: number[];

  @ApiProperty({ type: [String], required: false })
  organisation?: string[];

  @ApiProperty({ type: DateDTO, required: false })
  date?: DateDTO;

  @ApiProperty({ type: [Number], required: false })
  repliedTo?: number[];

  @ApiProperty({ type: [Number], required: false })
  channelFilter?: number[];
}

export class CreatePresetDTO {
  @ApiProperty({ type: String, required: false })
  userId?: string;

  @ApiProperty({ type: String, required: false })
  presetName?: string;

  @ApiProperty({ type: FiltersDTO, required: false })
  filters?: FiltersDTO;
}

export class UpdatePresetDTO {
  @ApiProperty({ type: String, required: false })
  presetId?: string;

  @ApiProperty({ type: FiltersDTO, required: false })
  filters?: FiltersDTO;
}