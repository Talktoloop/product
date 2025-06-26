import { Repository } from 'typeorm';
import { ThematicEntity } from '../entity/thematic.entity';
import { CountCodeId } from '../../statistic/interfaces/code-count-id.interface';
import { FilterDto } from '../../common/dto/filter.dto';
export declare class ThematicRepository extends Repository<ThematicEntity> {
    findCounts(filters?: FilterDto): Promise<CountCodeId[]>;
    findAll(): Promise<ThematicEntity[]>;
    findByIdOrFail(id: number): Promise<ThematicEntity>;
    findByIds(ids: number[]): Promise<ThematicEntity[]>;
}
