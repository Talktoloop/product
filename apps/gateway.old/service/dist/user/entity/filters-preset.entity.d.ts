import { UserFiltersPresetEntity } from './user-filters-preset.entity';
export declare class PresetEntity {
    id: string;
    name: string;
    filters: string[];
    userFiltersPresets: UserFiltersPresetEntity[];
}
