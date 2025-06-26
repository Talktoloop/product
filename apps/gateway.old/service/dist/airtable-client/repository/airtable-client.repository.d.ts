import { Repository } from 'typeorm';
import { CaseSyncEntity } from '../entity/case-sync.entity';
export declare class AirTableClientRepository extends Repository<CaseSyncEntity> {
    findByUUID(caseUUID: string): Promise<CaseSyncEntity>;
    findNotAnonymized(): Promise<CaseSyncEntity[]>;
}
