import { StoryEntity } from '../../story/entity/story.entity';
import { CountryAdministrativeDataEntity } from '../../country/entity/country-administrative-data.entity';
export declare class StoryAdministrativeDataEntity {
    id: number;
    administrativeAreaId: number;
    storyId: string;
    administrativeData?: CountryAdministrativeDataEntity;
    story?: StoryEntity;
    createdAt: Date;
}
