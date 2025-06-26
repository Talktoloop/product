import { Repository } from 'typeorm';
import { PresetEntity } from '../entity/filters-preset.entity';
export declare class FiltersPresetRepository extends Repository<PresetEntity> {
    getPresetFilters(userId: string): Promise<PresetEntity[]>;
    createUserPresetFilters(userId: string, filters: any, presetName: string): Promise<void>;
    shareUserPresetFilters(presetId: string, organisationId: string): Promise<void>;
    updateUserPresetFilters(filterId: string, filters: any): Promise<void>;
    deleteUserPresetFilters(userId: string, presetId: string): Promise<void>;
}
