import { CountryEntity } from './country.entity';
import { StoryAdministrativeDataEntity } from '../../story/entity/story-administrative-data.entity';
import { CountryAdministrativeDataNameEntity } from './country-administrative-data-name.entity';
export declare class CountryAdministrativeDataEntity {
    id: number;
    hasChild: boolean;
    countryId: number;
    parentId: number;
    externalId: number;
    level: number;
    country?: CountryEntity;
    createdAt: Date;
    parent?: CountryAdministrativeDataEntity;
    children?: CountryAdministrativeDataEntity[];
    storyAdministrativeData?: StoryAdministrativeDataEntity[];
    names?: CountryAdministrativeDataNameEntity[];
}
