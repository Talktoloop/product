import { FiltersPresetService } from '../service/filters-preset.service';
import { CreatePresetDTO, UpdatePresetDTO } from '../request/dto/add-user-preset-data.dto';
import { UserEntity } from '../entity/user.entity';
export declare class FiltersPresetController {
    private readonly presetFiltersService;
    constructor(presetFiltersService: FiltersPresetService);
    getUserPresetFilters(user: UserEntity): Promise<Record<string, any>>;
    createUserPresetFilters(user: UserEntity, data: CreatePresetDTO): Promise<void>;
    shareUserPresetFilters(user: UserEntity, presetId: string): Promise<void>;
    updateUserPresetFilters(filtersData: UpdatePresetDTO): Promise<void>;
    deleteUserPresetFilters(user: UserEntity, presetId: string): Promise<void>;
}
