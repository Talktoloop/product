import { RejectReasonRepository } from '../repository/reject-reason.repository';
import { RejectReasonEntity } from '../entity/reject-reason.entity';
export declare class RejectReasonService {
    private readonly rejectReasonRepository;
    constructor(rejectReasonRepository: RejectReasonRepository);
    findAll(): Promise<RejectReasonEntity[]>;
    findByIdsOrFail(ids: number[]): Promise<RejectReasonEntity[]>;
    findOneByParamsOrFail(params: {
        id?: number;
        code?: string;
    }): Promise<RejectReasonEntity>;
}
