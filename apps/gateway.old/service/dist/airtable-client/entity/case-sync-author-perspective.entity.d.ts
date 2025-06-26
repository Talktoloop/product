import { CaseSyncEntity } from './case-sync.entity';
export declare class CaseSyncAuthorPerspectiveEntity {
    constructor(data?: {
        authorPerspective: string;
        caseId?: string;
    });
    id: number;
    caseId: string;
    authorPerspective?: string;
    case: CaseSyncEntity;
}
