import { IdWithCounterRO } from '../response/id-with-counter.ro';
import { FilterDto } from '../../common/dto/filter.dto';
import { CountCodeId } from '../../statistic/interfaces/code-count-id.interface';
export declare class AgeService {
    findAll(): IdWithCounterRO[];
    findAllCounts(filters?: FilterDto): Promise<IdWithCounterRO[]>;
    findCounts(filters: FilterDto): Promise<CountCodeId[]>;
}
