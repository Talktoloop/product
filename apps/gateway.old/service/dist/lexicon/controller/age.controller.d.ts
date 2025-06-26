import { FilterDto } from '../../common/dto/filter.dto';
import { IdWithCounterRO } from '../response/id-with-counter.ro';
import { AgeService } from '../service/age.service';
import { ThematicService } from '../service/thematic.service';
export declare class AgeController {
    private readonly ageService;
    private readonly thematicService;
    constructor(ageService: AgeService, thematicService: ThematicService);
    getListOfAgeValues(filters: FilterDto): Promise<IdWithCounterRO[]>;
}
