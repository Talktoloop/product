import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { CategoryEntity } from '../../category/entity/category.entity';
import { StoriesCodeDatesRO } from '../response/stories-code-dates.ro';
import { FilterDto } from '../../common/dto/filter.dto';
export declare const timelineForStoriesAndRetriesMapper: (params: FilterDto, categories: CategoryEntity[], noSensitiveStoriesWithCategoryByPeriod: (QuantityPerMonth & {
    code: string;
})[], sensitiveStoriesByPeriod: QuantityPerMonth[], commentsByPeriod: QuantityPerMonth[]) => StoriesCodeDatesRO[];
