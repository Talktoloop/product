import { CASE_STATUS } from '../../constant/case-status.constant';
export declare class AirTableSyncInvestigationDTO {
    investigationOpened?: Date;
    whichOrganisationDoingInvestigation?: string;
    investigationClosed?: Date;
    investigationOutcome?: string;
    referralToClearCheckMade?: boolean;
}
export declare class AirTableSyncAllegationReferralOrganisationDTO {
    name?: string;
    type?: string;
}
export declare class AirTableSyncAllegationReferralDTO {
    allegationReferralDate?: Date;
    responseToAllegationReferralDate?: Date;
    organisations?: AirTableSyncAllegationReferralOrganisationDTO[];
}
export declare class AirTableSyncDTO {
    caseUUID: string;
    storyCreated: Date;
    notSensitive?: boolean;
    urgency?: string;
    caseStatus: CASE_STATUS;
    caseCreated: Date;
    authorPerspective?: string[];
    allegationType?: string;
    allegationOrganization?: string[];
    incidentDate?: Date;
    incidentCountry?: string;
    incidentProvince?: string;
    survivorGender?: string;
    survivorAge?: string;
    loopId?: string;
    survivorDisability?: string[];
    authorNeedAssistance?: string;
    assistanceStatus?: string;
    caseProcessed?: Date;
    referralResponse?: string;
    assessmentMade: Date;
    investigationStatus?: string;
    informingAuthor?: string;
    caseClosed?: Date;
    caseUnaccountedClosedStatus?: string;
    assistanceReferralMade?: Date;
    assistanceWhoMadeReferral?: string;
    investigations?: AirTableSyncInvestigationDTO[];
    allegationReferrals?: AirTableSyncAllegationReferralDTO[];
    organisationType: string;
    caseAccountability: any;
    processAndReferLastUpdateTime?: Date;
    responseToReferralLastUpdateTime?: Date;
    enoughInformationToInvestigateLastUpdate?: Date;
    investigationStatusLastUpdate?: Date;
    authorInformedOfCaseOutcomesLastUpdate?: Date;
    decisionToInvestigateStatusLastUpdate?: Date;
    thematicArea?: string[];
    thematicAreaSubsection?: string[];
    processAndReferStatus?: string;
    investigationResult?: string;
    referredToAssistance?: string;
    hasTheSurvivorBeenRenderedAssistanceValue?: string;
}
