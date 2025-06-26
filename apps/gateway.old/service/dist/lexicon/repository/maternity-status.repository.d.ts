import { Repository } from 'typeorm';
import { MaternityStatusEntity } from '../entity/maternity-status.entity';
import { LexiconRepositoryFactory } from '../factory/repository.factory';
export declare class MaternityStatusRepository extends Repository<MaternityStatusEntity> implements LexiconRepositoryFactory {
    findAll(): Promise<MaternityStatusEntity[]>;
    findByIdOrFail(id: number): Promise<MaternityStatusEntity>;
}
