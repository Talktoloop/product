import { CaseRepository } from '../repository/case.repository';
import { HowManyCaseReceivedRO } from '../response/how-many-case-received.ro';
import { CaseSyncEntity } from '../../airtable-client/entity/case-sync.entity';
import { TypeValuesRO } from '../response/type-value.ro';
import { WhatAreTheOutcomesRO } from '../response/what-are-the-outcomes.ro';
import { TypeAverageCountRO } from '../response/type-average-count.ro';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { FilterCasesDto } from '../request/dto/filter.dto';
import { CountRO } from '../response/count.ro';
import { AverageTakenTimeToCompleteStepRO } from '../response/average-taken-time-to-complete-step.ro';
import { ResponsiveByStepRO } from '../response/responsive-by-step.ro';
import { CountryService } from '../../country/service/country.service';
import { ConfigService } from '@nestjs/config';
import { CaseInvestigationRepository } from '../repository/case-investigation.repository';
export declare class CaseService {
    private readonly caseInvestigationRepository;
    private readonly caseRepository;
    private readonly countryService;
    private readonly config;
    constructor(caseInvestigationRepository: CaseInvestigationRepository, caseRepository: CaseRepository, countryService: CountryService, config: ConfigService);
    caseStatusConditions: {
        condition: string;
        values: string[];
    }[];
    getSignedMetabaseURL(): string;
    getCountOfCases(filters: FilterCasesDto): Promise<CountRO>;
    getUniqueGender(): Promise<string[]>;
    getUniqueCountries(): Promise<string[]>;
    averageTakenTime(filters: FilterCasesDto): Promise<TypeAverageCountRO[]>;
    whatAreTheTypeOfCasesInTheAccountability(filters: FilterCasesDto): Promise<TypeValuesRO[]>;
    whatAreTheOutcomes(filters: FilterCasesDto): Promise<WhatAreTheOutcomesRO>;
    getInfoDidPeopleReceivedAssistance(filters: FilterCasesDto): Promise<TypeValuesRO[]>;
    getSurvivorsPerAge(filters?: FilterCasesDto): Promise<TypeValuesRO[]>;
    checkIfChartShouldBeAnonymized(response: TypeValuesRO[]): TypeValuesRO[];
    getInformationHowManyCasesReceived(filters?: FilterCasesDto): Promise<HowManyCaseReceivedRO>;
    getCasesGroupedByAllegationAndAuthorPerspective(filters: FilterCasesDto): Promise<(CaseSyncEntity & {
        count: number;
        authorPerspective: string;
    })[]>;
    getCasesGroupedByCaseAccountabilityAndOrganisationType(filters: FilterCasesDto): Promise<Array<(CaseSyncEntity & {
        count: number;
    })[]>>;
    getSurvivorsPerGender(filters: FilterCasesDto): Promise<TypeValuesRO[]>;
    getDataForTypeOfOrganisationByAllogation(filters: FilterCasesDto): Promise<TypeValuesRO[]>;
    getCasesWithAllegationTypeByPeriod(filters: FilterCasesDto): Promise<(QuantityPerMonth & {
        code: string;
    })[]>;
    getUrgentCasesByPeriod(filters: FilterCasesDto): Promise<QuantityPerMonth[]>;
    getAverageTakenTimeToCompleteStep(filters: FilterCasesDto): Promise<AverageTakenTimeToCompleteStepRO>;
    getDataAboutResponsiveByStep(filters: FilterCasesDto): Promise<ResponsiveByStepRO>;
}
