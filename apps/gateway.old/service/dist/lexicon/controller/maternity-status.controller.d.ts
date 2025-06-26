import { MaternityStatusService } from '../service/maternity-status.service';
import { MaternityStatusEntity } from '../entity/maternity-status.entity';
export declare class MaternityStatusController {
    private readonly maternintyStatusService;
    constructor(maternintyStatusService: MaternityStatusService);
    getListOfmaternintyStatus(): Promise<MaternityStatusEntity[]>;
}
