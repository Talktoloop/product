import { CaseSyncAllegationReferralEntity } from './case-sync-allegation_referral.entity';
export declare class CaseSyncAllegationReferralOrganisationEntity {
    constructor(data?: {
        name?: string;
        type?: string;
        allegationReferralId?: number;
    });
    id: number;
    allegationReferralId: number;
    name: string;
    type: string;
    allegationReferral: CaseSyncAllegationReferralEntity;
}
