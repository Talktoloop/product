import { CategoryRepository } from './category.repository';
import { CategoryEntity } from './entity/category.entity';
import { FilterDto } from '../common/dto/filter.dto';
import { CountCodeId } from '../statistic/interfaces/code-count-id.interface';
export declare class CategoryService {
    private readonly categoryRepository;
    findByIdOrFail(id: number): Promise<CategoryEntity>;
    constructor(categoryRepository: CategoryRepository);
    findAllCounts(filters?: FilterDto): Promise<CountCodeId[]>;
    findAll(order?: Record<string, string>): Promise<CategoryEntity[]>;
    findByCodes(codes: string[]): Promise<CategoryEntity[]>;
}
