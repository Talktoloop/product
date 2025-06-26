import { PresetEntity } from './filters-preset.entity';
export declare class UserFiltersPresetEntity {
    id: string;
    userId: string;
    filtersPresetId: string;
    preset: PresetEntity;
    createdAt: Date;
    updatedAt: Date;
}
