import { CaseSyncEntity } from './case-sync.entity';
import { CaseSyncAllegationReferralOrganisationEntity } from './case-sync-allegation_referral_organisation.entity';
export declare class CaseSyncAllegationReferralEntity {
    constructor(data?: {
        allegationReferralDate?: Date;
        responseToAllegationReferralDate?: Date;
        organisations?: CaseSyncAllegationReferralOrganisationEntity[];
        caseId?: string;
    });
    id: number;
    caseId: string;
    allegationReferralDate?: Date;
    responseToAllegationReferralDate: Date;
    case: CaseSyncEntity;
    organisations: CaseSyncAllegationReferralOrganisationEntity[];
}
