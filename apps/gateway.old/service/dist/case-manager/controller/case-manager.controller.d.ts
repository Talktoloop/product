import { CaseManagerRO } from '../response/case-manager.ro';
import { CaseManagerService } from '../service/case-manager.service';
export declare class CaseManagerController {
    private readonly caseManagerService;
    constructor(caseManagerService: CaseManagerService);
    getRandomCaseManager(languageId: number): Promise<CaseManagerRO>;
}
