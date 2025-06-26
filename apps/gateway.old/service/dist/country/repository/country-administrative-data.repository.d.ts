import { Repository, SelectQueryBuilder } from 'typeorm';
import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';
import { StoryAdministrativeDataEntity } from '../../story/entity/story-administrative-data.entity';
import { AdministrativeDataWithDetails } from '../type/administrative-data-with-details.type';
export declare class CountryAdministrativeDataRepository extends Repository<CountryAdministrativeDataEntity> {
    private readonly logger;
    findById(id: number, relations?: string[]): Promise<CountryAdministrativeDataEntity>;
    findByIds(ids: number[], relations?: string[]): Promise<CountryAdministrativeDataEntity[]>;
    findAdministrativeDataByIdOrFail(id: number, relations?: string[]): Promise<CountryAdministrativeDataEntity>;
    getNumberOfStoriesByAdministrationDataParentId(parentId: number): Promise<number>;
    getNumberOfStories(subQuery: SelectQueryBuilder<StoryAdministrativeDataEntity>): SelectQueryBuilder<StoryAdministrativeDataEntity>;
    findByCountryIdAndIds(ids: number[], countryId: number, onlyWithStory?: boolean): Promise<Array<AdministrativeDataWithDetails>>;
    findByIdsWithRelations(ids: number[], relations: string[]): Promise<CountryAdministrativeDataEntity[]>;
    getAdministrativeDataWithNumberOfStories(countryId: number, parentId: number): Promise<Array<AdministrativeDataWithDetails>>;
}
