import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { RejectReasonEntity } from '../entity/reject-reason.entity';
export declare class RejectReasonRepository extends Repository<RejectReasonEntity> {
    protected readonly logger: Logger;
    findAll(): Promise<RejectReasonEntity[]>;
    findOneByParams(params: Record<string, unknown>): Promise<RejectReasonEntity | void>;
}
