import { CategoryRepository } from '../../category/category.repository';
import { CategoryEntity } from '../../category/entity/category.entity';
import { FilterDto } from '../../common/dto/filter.dto';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
export declare class OpenStoryForCategoryRepository extends CategoryRepository {
    getNoSensitiveStoriesWithCategoryByPeriod(filters: FilterDto): Promise<(QuantityPerMonth & {
        code: string;
    })[]>;
    getStoriesAndRepliesGroupedByCategory(filters?: FilterDto): Promise<(CategoryEntity & {
        numberOfStories: number;
        numberOfCommentsFromOrganizations: number;
        numberOfCommentsFromCommunity: number;
    })[]>;
}
