import { Repository } from 'typeorm';
import { StoryAdministrativeDataEntity } from '../entity/story-administrative-data.entity';
import { AdministrativeDataToExport } from '../type/administrative-data-to-export.type';
export declare class StoryAdministrativeDataRepository extends Repository<StoryAdministrativeDataEntity> {
    private readonly logger;
    findByStoryId(storyId: string, relations?: string[]): Promise<StoryAdministrativeDataEntity[]>;
    findAdministrativeDataToExport(): Promise<AdministrativeDataToExport[]>;
}
