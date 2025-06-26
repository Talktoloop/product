import { CaseSyncEntity } from './case-sync.entity';
export declare class CaseSyncInvestigationEntity {
    constructor(data?: {
        investigationOpened?: Date;
        investigationClosed?: Date;
        whichOrganisationDoingInvestigation?: string;
        investigationOutcome?: string;
        referralToClearCheckMade?: boolean;
        caseId?: string;
    });
    id: number;
    caseId: string;
    investigationOpened: Date;
    investigationClosed: Date;
    whichOrganisationDoingInvestigation: string;
    investigationOutcome: string;
    referralToClearCheckMade?: boolean;
    case: CaseSyncEntity;
}
