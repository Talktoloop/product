import { CaseSyncEntity } from '../../airtable-client/entity/case-sync.entity';
import { FindOptions, ObjectLiteral, Repository } from 'typeorm';
import { CaseGenderCount } from '../interfaces/case-gender-count.interface';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { FilterCasesDto } from '../request/dto/filter.dto';
import { CountRO } from '../response/count.ro';
export declare class CaseRepository extends Repository<CaseSyncEntity> {
    getCountOfCases(filters: FilterCasesDto): Promise<CountRO[]>;
    getAvgTakenTime(filters?: FilterCasesDto): Promise<{
        averageDays: number;
        averageHours: number;
        count: number;
    }[]>;
    getAvgTakenTimeByAllegationType(filters: FilterCasesDto): Promise<{
        count: number;
        average: number;
        allegationType: string;
    }[]>;
    countOfCasesByAccountabilityAndAllegationType(filters: FilterCasesDto, condition: string, parameters?: ObjectLiteral): Promise<{
        count: number;
        allegationType: string;
    }[]>;
    countReferralToClearCheckMade(filters: FilterCasesDto): Promise<number>;
    countCaseOutcome(filters: FilterCasesDto): Promise<{
        count: number;
        investigationOutcome: string;
    }[]>;
    countInfoAboutReceivedAssistancesByAllegationType(filters: FilterCasesDto, allegationType: string): Promise<{
        count: number;
        hasTheSurvivorBeenRenderedAssistanceValue: string;
    }[]>;
    countOrganizationTypeByAllegationType(filters: FilterCasesDto, allegationType: string): Promise<{
        count: number;
        organisationType: string;
    }[]>;
    countCaseAgesByAllegationType(filters: FilterCasesDto, allegationType: string): Promise<{
        count: number;
        age: string;
    }[]>;
    countWhen(where?: string | ObjectLiteral | FindOptions<CaseSyncEntity> | FindOptions<CaseSyncEntity>[], filters?: FilterCasesDto): Promise<number | any>;
    getCasesGroupedByAllegationAndAuthorPerspective(filters: FilterCasesDto): Promise<(CaseSyncEntity & {
        count: number;
        authorPerspective: string;
    })[]>;
    countCaseGenderByAllegationType(filters: FilterCasesDto, allegationType: string): Promise<CaseGenderCount[]>;
    getCasesWithAllegationTypeByPeriod(filters: FilterCasesDto): Promise<(QuantityPerMonth & {
        code: string;
    })[]>;
    getUrgentCasesByPeriod(filters: FilterCasesDto): Promise<QuantityPerMonth[]>;
    getAverageTakenTimeToProcessAndReferByCaseProcessedDate(filters: FilterCasesDto): Promise<{
        average: number;
        count: number;
    }[]>;
    getAverageTakenTimeToProcessAndReferByAsistanceReferralMadeDate(filters: FilterCasesDto): Promise<{
        average: number;
        count: number;
    }[]>;
    getAverageTakenTimeToRespondToReferral(filters: FilterCasesDto): Promise<{
        average: number;
        count: number;
    }[]>;
    getAverageTakenTimeToAssessWhetherToInvestigateByInvestigationOpenedDate(filters: FilterCasesDto): Promise<{
        average: number;
        count: number;
    }[]>;
    getAverageTakenTimeToAssessWhetherToInvestigateByAssessmentMadeDate(filters: FilterCasesDto): Promise<{
        average: number;
        count: number;
    }[]>;
    getAverageTakenTimeToInformTheAuthorOfOutcomeByCaseProcessed(filters: FilterCasesDto): Promise<{
        average: number;
        count: number;
    }[]>;
    getAverageTakenTimeToInformTheAuthorOfOutcomeByAssessmentMade(filters: FilterCasesDto): Promise<{
        average: number;
        count: number;
    }[]>;
    getAverageTakenTimeToInformTheAuthorOfOutcomeByInvestigationClosed(filters: FilterCasesDto): Promise<{
        average: number;
        count: number;
    }[]>;
    getAverageTakenTimeToCompleteInvestigation(filters: FilterCasesDto): Promise<{
        average: number;
        count: number;
    }[]>;
    getCountOfOrganizationsByColumnsAndValues(filters: FilterCasesDto, condition: string, parameters?: ObjectLiteral): Promise<any>;
    getCountOfOpenCasesByColumnsAndValues(filters: FilterCasesDto, columns?: {
        name: string;
        values: string[];
    }[]): Promise<number>;
    getCountOfClosedCases(filters: FilterCasesDto): Promise<number>;
    getUniqueCountries(): Promise<{
        country: string;
    }[]>;
    getUniqueAllegationType(): Promise<{
        allegationType: string;
    }[]>;
    getUniqueOrganisationType(): Promise<{
        organisationType: string;
    }[]>;
    getUniqueInvestigationOutcome(): Promise<{
        investigationOutcome: string;
    }[]>;
    getUniqueReferredToAssistance(): Promise<{
        referredToAssistance: string;
    }[]>;
    getUniqueAgeValues(): Promise<{
        age: string;
    }[]>;
    getUniqueGender(): Promise<{
        gender: string;
    }[]>;
    getUniqueDisability(): Promise<{
        disability: string;
    }[]>;
}
