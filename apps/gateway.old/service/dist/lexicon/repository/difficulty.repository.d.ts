import { Repository } from 'typeorm';
import { DifficultyEntity } from '../entity/difficulty.entity';
import { LexiconRepositoryFactory } from '../factory/repository.factory';
import { CountCodeId } from '../../statistic/interfaces/code-count-id.interface';
import { FilterDto } from '../../common/dto/filter.dto';
export declare class DifficultyRepository extends Repository<DifficultyEntity> implements LexiconRepositoryFactory {
    findAll(): Promise<DifficultyEntity[]>;
    findByIdOrFail(id: number): Promise<DifficultyEntity>;
    findCounts(filters: FilterDto): Promise<CountCodeId[]>;
}
