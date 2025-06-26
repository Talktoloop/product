import { CountryEntity } from '../entity/country.entity';
import { SearchResultRO } from '../response/search-result.ro';
import { AdministrativeDataWithParents } from '../type/administrative-data-with-parents.type';
import { LanguageEntity } from '../../language/entity/language.entity';
import { FindRegionsDTO } from '../request/dto/find-regions.dto';
export declare const searchResultMapper: (country: CountryEntity, params: FindRegionsDTO, userLanguageId: number, defaultLanguage: LanguageEntity, data: AdministrativeDataWithParents) => SearchResultRO;
