import { CategoryRO } from './response/category.ro';
import { CategoryService } from './category.service';
import { FilterDto } from '../common/dto/filter.dto';
import { ThematicService } from '../lexicon/service/thematic.service';
export declare class CategoryController {
    private readonly categoryService;
    private readonly thematicService;
    constructor(categoryService: CategoryService, thematicService: ThematicService);
    getListOfCategories(filters: FilterDto): Promise<CategoryRO[]>;
}
