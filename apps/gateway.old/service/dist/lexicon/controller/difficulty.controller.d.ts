import { DifficultyService } from '../service/difficulty.service';
import { FilterDto } from '../../common/dto/filter.dto';
import { ThematicService } from '../service/thematic.service';
import { CountCodeId } from '../../statistic/interfaces/code-count-id.interface';
export declare class DifficultyController {
    private readonly difficultyService;
    private readonly thematicService;
    constructor(difficultyService: DifficultyService, thematicService: ThematicService);
    getListOfOrganisations(filters: FilterDto): Promise<CountCodeId[]>;
}
