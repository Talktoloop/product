import { FilterDto } from '../../common/dto/filter.dto';
import { CountCodeIdWithChildren } from '../../statistic/interfaces/code-count-id.interface';
import { ThematicService } from '../service/thematic.service';
export declare class ThematicController {
    private readonly thematicService;
    constructor(thematicService: ThematicService);
    getListOfThematicAreas(filters: FilterDto): Promise<CountCodeIdWithChildren[]>;
}
