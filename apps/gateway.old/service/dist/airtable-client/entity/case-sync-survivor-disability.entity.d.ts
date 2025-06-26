import { CaseSyncEntity } from './case-sync.entity';
export declare class CaseSyncSurvivorDisabilityEntity {
    constructor(data?: {
        survivorDisability: string;
        caseId?: string;
    });
    id: number;
    caseId: string;
    survivorDisability?: string;
    case: CaseSyncEntity;
}
