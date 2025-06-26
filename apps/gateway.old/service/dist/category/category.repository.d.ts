import { Repository } from 'typeorm';
import { CategoryEntity } from './entity/category.entity';
import { FilterDto } from '../common/dto/filter.dto';
import { CountId } from '../statistic/interfaces/count-id.interface';
export declare class CategoryRepository extends Repository<CategoryEntity> {
    findAll(): Promise<CategoryEntity[]>;
    findByIds(ids: string[], order?: Record<string, string>): Promise<CategoryEntity[]>;
    findCounts(filters?: FilterDto): Promise<CountId[]>;
    findByIdOrFail(id: number): Promise<CategoryEntity>;
}
