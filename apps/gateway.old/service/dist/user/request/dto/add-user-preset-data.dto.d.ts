declare class DemographicDTO {
    age?: number[];
    gender?: number[];
    difficulty?: number[];
    minority?: number[];
}
declare class RegionDTO {
    regionIds?: number[];
    countries?: string[];
    semiClicked?: number[];
    selectedRegionsOrCountries?: any[];
}
declare class DateDTO {
    from?: string;
    to?: string;
}
declare class FiltersDTO {
    presetFilters?: number[] | null;
    type?: number[];
    demographic?: DemographicDTO;
    region?: RegionDTO;
    thematic?: number[];
    organisation?: string[];
    date?: DateDTO;
    repliedTo?: number[];
    channelFilter?: number[];
}
export declare class CreatePresetDTO {
    userId?: string;
    presetName?: string;
    filters?: FiltersDTO;
}
export declare class UpdatePresetDTO {
    presetId?: string;
    filters?: FiltersDTO;
}
export {};
