import { RejectReasonService } from '../service/reject-reason.service';
import { RejectReasonEntity } from '../entity/reject-reason.entity';
export declare class RejectReasonController {
    private readonly rejectReasonService;
    constructor(rejectReasonService: RejectReasonService);
    getListOfOrganisations(): Promise<RejectReasonEntity[]>;
}
