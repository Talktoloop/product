import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';
import { CountryAdministrativeDataRepository } from '../repository/country-administrative-data.repository';
import { StoryEntity } from '../../story/entity/story.entity';
import { StoryService } from '../../story/service/story.service';
import { UnparsedLocation } from '../type/unparsed-location.type';
import { FindRegionsDTO } from '../request/dto/find-regions.dto';
import { AdministrativeDataWithDetails } from '../type/administrative-data-with-details.type';
import { AdministrativeDataWithParents } from '../type/administrative-data-with-parents.type';
import { CountryAdministrativeDataNameRepository } from '../repository/country-administrative-data-name.repository';
import { CountryEntity } from '../../country/entity/country.entity';
import { LibraryResponse } from 'node-mailjet';
import { NotificationService } from '../../notification/service/notification.service';
import { ConfigService } from '@nestjs/config';
import { CountryService } from './country.service';
export declare class AdministrativeDataService {
    private readonly administrativeDataRepository;
    private readonly administrativeDataNameRepository;
    private readonly storyService;
    private readonly notificationService;
    private readonly config;
    private readonly countryService;
    private readonly logger;
    constructor(administrativeDataRepository: CountryAdministrativeDataRepository, administrativeDataNameRepository: CountryAdministrativeDataNameRepository, storyService: StoryService, notificationService: NotificationService, config: ConfigService, countryService: CountryService);
    findByCountryCodeAndPhrase(countryCode: string, phrase: string, languageId?: number): Promise<Array<{
        administrativeAreaId: number;
    }>>;
    findAdministrativeDataOrFail(id: number, relations?: string[]): Promise<CountryAdministrativeDataEntity>;
    fetchOneLevel(name: string, level: number, exceptionIds: number[], defaultLanguageCode: string, languageCodes: string[]): Promise<[any]>;
    checkIfAdministrativeDataExists(countryId: number): Promise<boolean>;
    saveAdministrativeData(languages: Record<string, number>, data: Record<string, any>[], country: CountryEntity, defaultLanguageCode: string, level?: number, parentId?: any): Promise<void>;
    fetchAdministrativeData(phrase: string, level: number, limit: number, defaultLanguageCode: string, exceptionIds: number[], languageCodes: string[], arr?: any[]): Promise<Record<string, any>[]>;
    removeDuplicates(data: Record<string, any>[]): Record<string, any>[];
    checkIfHasChild(data: AdministrativeDataWithDetails[], onlyWithStory: boolean): Promise<AdministrativeDataWithDetails[]>;
    findAdministrativeDataWithCounters(countryId: number, parentId: number, onlyWithStory: boolean): Promise<Array<AdministrativeDataWithDetails>>;
    findPlaces(phrase: string, className?: string): Promise<any>;
    findPlaceDetails(id: number): Promise<any>;
    parseStoryPlaces(stories: StoryEntity[]): Promise<{
        numberOfParsedPlaces: number;
        unparsedLocations: UnparsedLocation[];
    }>;
    getStoryUrl(story: StoryEntity): string;
    prepareLocationName(story: StoryEntity): Promise<string>;
    parseFilteredStoryPlaces(stories: StoryEntity[], storyNotParsedIds: string[], numberOfParsedPlaces: number, unparsedLocations: UnparsedLocation[]): Promise<{
        numberOfParsedPlaces: number;
        unparsedLocations: UnparsedLocation[];
    }>;
    findParentsById(id: number, parents?: CountryAdministrativeDataEntity[]): Promise<CountryAdministrativeDataEntity[]>;
    findParents(items: AdministrativeDataWithDetails[], parents?: Array<{
        list: CountryAdministrativeDataEntity[];
        childId: number;
        key?: number;
    }>): Promise<Array<{
        list: CountryAdministrativeDataEntity[];
        childId: number;
        key?: number;
    }>>;
    findByCountryAndPhraseWithParents(params: FindRegionsDTO, userLanguageId: number, defaultLanguageId: number): Promise<AdministrativeDataWithParents>;
    assignAdministrativeDataToStory(regionId: number, storyId: string): Promise<void>;
    exportUnparsedLocationsToCSV(countryName: string, unparsedLocations: UnparsedLocation[]): Promise<string>;
    exportUnparsedLocationsToCSVAndSendEmail(email: string, country: CountryEntity, unparsedLocations: UnparsedLocation[]): Promise<LibraryResponse<any>>;
    getCountryByRegionId(regionId: number): Promise<CountryEntity>;
}
