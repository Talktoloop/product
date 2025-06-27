export interface IPresetFilters {
  page?: string;
  limit?: string;
  order?: string;
  type?: number[];
  thematic?: number[];
  organisation?: string[];
  channelFilter?: number[];
  repliedTo?: number[];
  age?: number[];
  gender?: number[];
  difficulty?: number[];
  minority?: number[];
  country?: string[];
  regionIds?: number[];
  selectedRegionsOrCountries?: { id: number; name: string }[];
  semiClicked?: any[];
  from?: string;
  to?: string;
  searchTerm?: string;
}

export interface PresetData {
  presetName: string;
  filters: IPresetFilters;
}

export interface Preset {
  id: string;
  name: string;
  filters: IPresetFilters;
}

export type Presets = Preset[];
