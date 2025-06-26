import { DifficultyRepository } from '../repository/difficulty.repository';
import { DifficultyEntity } from '../entity/difficulty.entity';
import { LexiconServiceFactory } from '../factory/service.factory';
import { FilterDto } from '../../common/dto/filter.dto';
import { CountCodeId } from '../../statistic/interfaces/code-count-id.interface';
export declare class DifficultyService implements LexiconServiceFactory {
    private readonly difficultlyRepository;
    findAllCounts(filters: FilterDto): Promise<CountCodeId[]>;
    constructor(difficultlyRepository: DifficultyRepository);
    findAll(): Promise<DifficultyEntity[]>;
    findByIdOrFail(id: number): Promise<DifficultyEntity>;
    findByCodes(codes: string[]): Promise<DifficultyEntity[]>;
}
