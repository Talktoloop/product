import { FiltersPresetRepository } from '../repository/filters-preset.repository';
export declare class FiltersPresetService {
    private readonly presetFiltersRepository;
    constructor(presetFiltersRepository: FiltersPresetRepository);
    getPresetFilters(userId: string): Promise<import("../entity/filters-preset.entity").PresetEntity[]>;
    createUserPresetFilters(userId: string, filters: any, presetName: string): Promise<void>;
    shareUserPresetFilters(presetId: string, organisationId: string): Promise<void>;
    updateUserPresetFilters(filterId: string, filters: any): Promise<void>;
    deleteUserPresetFilters(userId: string, filterId: string): Promise<void>;
}
