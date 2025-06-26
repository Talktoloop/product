import { CaseSyncEntity } from './case-sync.entity';
export declare class CaseSyncThematicAreaEntity {
    constructor(data?: {
        thematicArea: string;
        caseId?: string;
    });
    id: number;
    caseId: string;
    thematicArea?: string;
    case: CaseSyncEntity;
}
