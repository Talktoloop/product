import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { CaseManagerEntity } from '../entity/case-manager.entity';
export declare class CaseManagerRepository extends Repository<CaseManagerEntity> {
    protected readonly logger: Logger;
    getRandomManager(): Promise<CaseManagerEntity>;
    findByParams(params: Record<string, unknown>): Promise<CaseManagerEntity[] | void>;
}
