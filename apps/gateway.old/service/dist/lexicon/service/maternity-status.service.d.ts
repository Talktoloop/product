import { MaternityStatusRepository } from '../repository/maternity-status.repository';
import { MaternityStatusEntity } from '../entity/maternity-status.entity';
import { LexiconServiceFactory } from '../factory/service.factory';
export declare class MaternityStatusService implements LexiconServiceFactory {
    private readonly maternityStatusRepository;
    constructor(maternityStatusRepository: MaternityStatusRepository);
    findAll(): Promise<MaternityStatusEntity[]>;
    findByIdOrFail(id: number): Promise<MaternityStatusEntity>;
}
