/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AirTableSyncAllegationReferralDTO } from './AirTableSyncAllegationReferralDTO';
import type { AirTableSyncInvestigationDTO } from './AirTableSyncInvestigationDTO';

export type AirTableSyncDTO = {
    caseUUID: string;
    storyCreated: string;
    urgency?: string;
    caseStatus: string;
    caseCreated: string;
    authorPerspective?: Array<string>;
    allegationType?: string;
    allegationOrganization?: Array<string>;
    incidentDate?: string;
    incidentCountry?: string;
    incidentProvince?: string;
    survivorGender?: string;
    survivorAge?: string;
    survivorDisability?: Array<string>;
    authorNeedAssistance?: string;
    assistanceStatus?: string;
    caseProcessed?: string;
    referralResponse?: string;
    assessmentMade?: string;
    investigationStatus?: string;
    informingAuthor?: string;
    caseClosed?: string;
    caseUnaccountedClosedStatus?: string;
    assistanceReferralMade?: string;
    assistanceWhoMadeReferral?: string;
    investigations?: Array<AirTableSyncInvestigationDTO>;
    allegationReferrals?: Array<AirTableSyncAllegationReferralDTO>;
    organisationType?: string;
    caseAccountability?: string;
    processAndReferLastUpdateTime?: string;
    responseToReferralLastUpdateTime?: string;
    enoughInformationToInvestigateLastUpdate?: string;
    investigationStatusLastUpdate?: string;
    authorInformedOfCaseOutcomesLastUpdate?: string;
    decisionToInvestigateStatusLastUpdate?: string;
    thematicArea?: Array<string>;
    thematicAreaSubsection?: Array<string>;
    processAndReferStatus?: string;
    investigationResult?: string;
    referredToAssistance?: string;
    hasTheSurvivorBeenRenderedAssistanceValue?: string;
};

