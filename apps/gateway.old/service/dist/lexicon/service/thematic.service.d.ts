import { ThematicRepository } from '../repository/thematic.repository';
import { ThematicEntity } from '../entity/thematic.entity';
import { LexiconServiceFactory } from '../factory/service.factory';
import { CountCodeIdWithChildren } from '../../statistic/interfaces/code-count-id.interface';
import { FilterDto } from '../../common/dto/filter.dto';
export declare class ThematicService implements LexiconServiceFactory {
    private readonly thematicRepository;
    constructor(thematicRepository: ThematicRepository);
    findAllCounts(filters?: FilterDto): Promise<CountCodeIdWithChildren[]>;
    findAll(): Promise<ThematicEntity[]>;
    findDataToExport(): Promise<ThematicEntity[]>;
    findByIds(ids: number[]): Promise<ThematicEntity[]>;
    findByIdOrFail(id: number): Promise<ThematicEntity>;
    findByCodes(codes: string[]): Promise<ThematicEntity[]>;
}
