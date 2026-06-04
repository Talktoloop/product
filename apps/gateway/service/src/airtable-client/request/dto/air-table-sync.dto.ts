import { ApiProperty } from '@nestjs/swagger';
import { CASE_STATUS } from '../../constant/case-status.constant';

export class AirTableSyncInvestigationDTO {
  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  investigationOpened?: Date;

  @ApiProperty({ required: false, example: 'ADRA' })
  whichOrganisationDoingInvestigation?: string;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  investigationClosed?: Date;

  @ApiProperty({
    type: String,
    required: false,
    example: 'Offender faced disciplinary action',
  })
  investigationOutcome?: string;

  @ApiProperty({
    type: Boolean,
    required: false,
    example: false,
  })
  referralToClearCheckMade?: boolean;
}

export class AirTableSyncAllegationReferralOrganisationDTO {
  @ApiProperty({
    type: String,
    required: false,
  })
  name?: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  type?: string;
}

export class AirTableSyncAllegationReferralDTO {
  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  allegationReferralDate?: Date;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  responseToAllegationReferralDate?: Date;

  @ApiProperty({
    type: AirTableSyncAllegationReferralOrganisationDTO,
    required: false,
    isArray: true,
  })
  organisations?: AirTableSyncAllegationReferralOrganisationDTO[];
}

export class AirTableSyncDTO {
  @ApiProperty({ type: String })
  caseUUID: string;

  @ApiProperty({ type: Date, example: '2021-05-05 09:43:54.000000' })
  storyCreated: Date;

  @ApiProperty({
    type: Boolean,
    required: false,
    example: false,
  })
  notSensitive?: boolean;

  @ApiProperty({ example: 'Needs immediate assistance', required: false })
  urgency?: string;

  @ApiProperty({ example: 'Open' })
  caseStatus: CASE_STATUS;

  @ApiProperty({ type: Date, example: '2021-05-05 09:43:54.000000' })
  caseCreated: Date;

  @ApiProperty({
    type: String,
    required: false,
    example: ['Organisation personnel'],
    isArray: true,
  })
  authorPerspective?: string[];

  @ApiProperty({ required: false, example: 'Protection' })
  allegationType?: string;

  @ApiProperty({
    type: String,
    required: false,
    example: ['OXFAM'],
    isArray: true,
  })
  allegationOrganization?: string[]; //Select or create the organisation the Allegation is against

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  incidentDate?: Date;

  @ApiProperty({ required: false, example: 'Zambia' })
  incidentCountry?: string;

  @ApiProperty({ required: false, example: 'Mazabuka' })
  incidentProvince?: string;

  @ApiProperty({ required: false, example: 'Male' })
  survivorGender?: string;

  @ApiProperty({ required: false, example: '6-13' })
  survivorAge?: string;

  @ApiProperty({ required: false, example: 'ojasdhuhqweurqwer' })
  loopId?: string;

  @ApiProperty({
    type: String,
    required: false,
    example: ['Hearing'],
    isArray: true,
  })
  survivorDisability?: string[];

  @ApiProperty({
    type: String,
    required: false,
    example: ['Female-headed household'],
    isArray: true,
  })
  vulnerabilityFactors?: string[];

  @ApiProperty({ required: false, example: 'No' })
  minorityGroup?: string;

  @ApiProperty({ required: false, example: 'No, not applicable' })
  authorNeedAssistance?: string;

  @ApiProperty({
    type: String,
    required: false,
    example: 'Assistance already provided',
  })
  assistanceStatus?: string;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  caseProcessed?: Date;

  @ApiProperty({
    type: String,
    required: false,
    example: 'Pending response to allegation referral',
  })
  referralResponse?: string;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  assessmentMade: Date;

  @ApiProperty({
    type: String,
    required: false,
    example: 'Investigation closed',
  })
  investigationStatus?: string;

  @ApiProperty({
    type: String,
    required: false,
    example: 'Author informed n/a, or reachable',
  })
  informingAuthor?: string;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  caseClosed?: Date;

  @ApiProperty({
    type: String,
    required: false,
    example: 'vestigation N/A, allegation ou',
  })
  caseUnaccountedClosedStatus?: string;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  assistanceReferralMade?: Date;

  @ApiProperty({ required: false, example: 'ADRA' })
  assistanceWhoMadeReferral?: string;

  @ApiProperty({
    type: AirTableSyncInvestigationDTO,
    required: false,
    isArray: true,
  })
  investigations?: AirTableSyncInvestigationDTO[];

  @ApiProperty({
    type: AirTableSyncAllegationReferralDTO,
    required: false,
    isArray: true,
  })
  allegationReferrals?: AirTableSyncAllegationReferralDTO[];

  @ApiProperty({
    type: String,
    required: false,
    example: 'National / community-based organisation',
  })
  organisationType: string;

  @ApiProperty({
    type: String,
    required: false,
    example: 'Process and refer',
  })
  caseAccountability;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  processAndReferLastUpdateTime?: Date;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  responseToReferralLastUpdateTime?: Date;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  enoughInformationToInvestigateLastUpdate?: Date;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  investigationStatusLastUpdate?: Date;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  authorInformedOfCaseOutcomesLastUpdate?: Date;

  @ApiProperty({
    type: Date,
    required: false,
    example: '2021-05-05 09:43:54.000000',
  })
  decisionToInvestigateStatusLastUpdate?: Date;

  @ApiProperty({
    type: String,
    required: false,
    example: ['1. Emergency response'],
    isArray: true,
  })
  thematicArea?: string[];

  @ApiProperty({
    type: String,
    required: false,
    example: ['1.a ID cards'],
    isArray: true,
  })
  thematicAreaSubsection?: string[];

  @ApiProperty({
    type: String,
    required: false,
    example: 'Referral to organisation made',
  })
  processAndReferStatus?: string;

  @ApiProperty({
    type: String,
    required: false,
    example: 'Investigation closed',
  })
  investigationResult?: string;

  @ApiProperty({
    type: String,
    required: false,
    example: 'No, not applicable',
  })
  referredToAssistance?: string;

  @ApiProperty({
    type: String,
    required: false,
    example: 'Yes, longer term support rendered',
  })
  hasTheSurvivorBeenRenderedAssistanceValue?: string;
}
