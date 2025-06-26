import { CaseSyncEntity } from './case-sync.entity';
export declare class CaseSyncThematicAreaSubsectionEntity {
    constructor(data?: {
        thematicAreaSubsection: string;
        caseId?: string;
    });
    id: number;
    caseId: string;
    thematicAreaSubsection?: string;
    case: CaseSyncEntity;
}
