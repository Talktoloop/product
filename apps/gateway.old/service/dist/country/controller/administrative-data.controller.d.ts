import { AdministrativeDataService } from '../service/administrative-data.service';
import { AdministrativeXlsxDataService } from '../service/administrative-xlsx-data.service';
import { CountryService } from '../service/country.service';
import { ImportRegionDTO, ImportXlsxRegionDTO } from '../request/dto/import-region.dto';
import { GetAdministrativeDataDTO } from '../request/dto/get-administrative-data.dto';
import { AdministrativeDataRO } from '../response/administrative-data.ro';
import { StoryService } from '../../story/service/story.service';
import { ParseRegionDTO } from '../request/dto/parse-region.dto';
import { UnparsedLocation } from '../type/unparsed-location.type';
import { FindRegionsDTO } from '../request/dto/find-regions.dto';
import { SearchResultRO } from '../response/search-result.ro';
import { LanguageService } from '../../language/language.service';
import { AdministrativeDataPathRO } from '../response/administrative-data-path.ro';
export declare class AdministrativeDataController {
    private readonly storyService;
    private readonly countryService;
    private readonly languageService;
    private readonly administrativeDataService;
    private readonly administrativeXlsxDataService;
    constructor(storyService: StoryService, countryService: CountryService, languageService: LanguageService, administrativeDataService: AdministrativeDataService, administrativeXlsxDataService: AdministrativeXlsxDataService);
    getAdministrativeData(userLanguageId: number, params: GetAdministrativeDataDTO): Promise<AdministrativeDataRO[]>;
    getAdministrativeDataPath(id: number, reqHeaders: Headers, userLanguageId: number): Promise<AdministrativeDataPathRO>;
    findAdministrativeData(userLanguageId: number, params: FindRegionsDTO): Promise<SearchResultRO>;
    parseCountryRegions(params: ParseRegionDTO): Promise<{
        numberOfParsedPlaces: number;
        numberOfStoriesWithoutDefinedAdministrativeArea: number;
        unparsedLocations: UnparsedLocation[];
    }>;
    importCountryRegions(params: ImportRegionDTO): Promise<Record<string, any>[]>;
    importXlsxCountryRegions(file: Express.Multer.File, params: ImportXlsxRegionDTO): Promise<import("../response/region.ro").RegionRO[]>;
}
