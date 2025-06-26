import { FilterDto } from '../../common/dto/filter.dto';
import { IdWithCounterRO } from '../response/id-with-counter.ro';
import { GenderService } from '../service/gender.service';
import { ThematicService } from '../service/thematic.service';
export declare class GenderController {
    private readonly genderService;
    private readonly thematicService;
    constructor(genderService: GenderService, thematicService: ThematicService);
    getListOfGenderValues(filters: FilterDto): Promise<IdWithCounterRO[]>;
}
