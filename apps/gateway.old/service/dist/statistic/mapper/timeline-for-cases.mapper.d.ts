import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { StoriesCodeDatesRO } from '../response/stories-code-dates.ro';
import { FilterCasesDto } from '../request/dto/filter.dto';
export declare const timelineForCasesMapper: (params: FilterCasesDto, casesWithAllegationTypeByPeriod: (QuantityPerMonth & {
    code: string;
})[], urgentCasesByPeriod: QuantityPerMonth[]) => StoriesCodeDatesRO[];
