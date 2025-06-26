import { CaseService } from '../service/case.service';
import { CountCodeIdWithChildren } from '../interfaces/code-count-id.interface';
export declare class CaseFilterController {
    private readonly caseService;
    constructor(caseService: CaseService);
    getReferredForAssistanceValues(): Promise<string[]>;
    getInvestigationOutcomeValues(): Promise<string[]>;
    getOrganisationTypes(): Promise<string[]>;
    getCaseTypes(): Promise<string[]>;
    getCountries(): Promise<string[]>;
    getAgeValues(): Promise<string[]>;
    getGenderValues(): Promise<string[]>;
    getDisabilityValues(): Promise<string[]>;
    getThematicAreaValues(): Promise<CountCodeIdWithChildren[]>;
}
