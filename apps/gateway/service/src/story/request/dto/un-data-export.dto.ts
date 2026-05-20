import { ApiProperty } from '@nestjs/swagger';

export class UNDataExportDto {
  [key: string]: unknown;

  @ApiProperty({ description: 'Unique ID of the feedback', type: String })
  uniqueId: string;

  @ApiProperty({ description: 'SCOPE Card Number', type: String })
  scopeCardNumber: string;

  @ApiProperty({ description: 'Date of receipt', type: Date })
  dateOfReceipt: Date | string;

  @ApiProperty({ description: 'Name of the data collector', type: String })
  nameOfDataCollector: string;

  @ApiProperty({ description: 'Country of the feedback', type: String })
  country: string;

  @ApiProperty({ description: 'Region of the feedback', type: String })
  region: string;

  @ApiProperty({ description: 'District of the feedback', type: String })
  district: string;

  @ApiProperty({ description: 'Settlement or Site Name', type: String })
  settlementOrSiteName: string;

  @ApiProperty({ description: 'Feedback channel', type: String })
  feedbackChannel: string;

  @ApiProperty({ description: 'Language of the interaction', type: String })
  languageOfInteraction: string;

  @ApiProperty({ description: 'Provided independently or with assistance', type: String })
  providedIndependentlyOrWithAssistance: string;

  @ApiProperty({ description: 'Reason for not sharing feedback independently', type: String })
  reasonForNotSharingFeedbackIndependently: string;

  @ApiProperty({ description: 'Consent to record feedback', type: Boolean })
  consentToRecordFeedback: string;

  @ApiProperty({ description: 'Name of feedback provider', type: String })
  nameOfFeedbackProvider: string;

  @ApiProperty({ description: 'Contact number of feedback provider', type: String })
  contactNumberOfFeedbackProvider: string;

  @ApiProperty({ description: 'Age range', type: String })
  ageRange: string;

  @ApiProperty({ description: 'Sex', type: String })
  sex: string;

  @ApiProperty({ description: 'Population type', type: String })
  populationType: string;

  @ApiProperty({ description: 'Communities with Minority Affiliations', type: String })
  communitiesWithMinorityAffiliations: string;

  @ApiProperty({ description: 'Vulnerability factor', type: String })
  vulnerabilityFactor: string;

  @ApiProperty({ description: 'Washington Group Q1 - Difficulty seeing', type: String })
  washingtonGroupQ1: string;

  @ApiProperty({ description: 'Washington Group Q2 - Difficulty hearing', type: String })
  washingtonGroupQ2: string;

  @ApiProperty({ description: 'Washington Group Q3 - Difficulty walking or climbing steps', type: String })
  washingtonGroupQ3: string;

  @ApiProperty({ description: 'Washington Group Q4 - Difficulty remembering or concentrating', type: String })
  washingtonGroupQ4: string;

  @ApiProperty({ description: 'Washington Group Q5 - Difficulty washing and/or dressing', type: String })
  washingtonGroupQ5: string;

  @ApiProperty({ description: 'Washington Group Q6 - Difficulty communicating', type: String })
  washingtonGroupQ6: string;

  @ApiProperty({ description: 'Complaint or Feedback Details', type: String })
  complaintOrFeedbackDetails: string;

  @ApiProperty({ description: 'Operational relevance or Service Mapping Sector', type: String })
  operationalRelevanceOrServiceMappingSector: string;

  @ApiProperty({ description: 'Responsibility Category (level-1)', type: String })
  responsibilityCategoryLevel1: string;

  @ApiProperty({ description: 'Sensitivity Category (level-2)', type: String })
  sensitivityCategoryLevel2: string;

  @ApiProperty({ description: 'Specific Sensitivity Category (level-2)', type: String })
  specificSensitivityCategoryLevel2: string;

  @ApiProperty({ description: 'Criticality Category (level-3)', type: String })
  criticalityCategoryLevel3: string;

  @ApiProperty({ description: 'Status of feedback', type: String })
  statusOfFeedback: string;

  @ApiProperty({ description: 'What action was taken?', type: String })
  actionTaken: string;

  @ApiProperty({ description: 'Date of referral', type: Date })
  dateOfReferral: Date | string;

  @ApiProperty({ description: 'Referred to (organization and department)', type: String })
  referredTo: string;

  @ApiProperty({ description: 'Name of focal point', type: String })
  nameOfFocalPoint: string;

  @ApiProperty({ description: 'Contact details of the focal point', type: String })
  contactDetailsOfFocalPoint: string;

  @ApiProperty({ description: 'Date of case resolution', type: Date })
  dateOfCaseResolution: Date | string;

  @ApiProperty({ description: 'Reason for action not possible', type: String })
  reasonForActionNotPossible: string;

  @ApiProperty({ description: 'Date of closing the loop', type: Date })
  dateOfClosingTheLoop: Date | string;

  @ApiProperty({ description: 'Comments', type: String })
  comments: string;

  @ApiProperty({ description: 'Key quote', type: String })
  keyQuote: string;

  @ApiProperty({ description: 'Rumour', type: String })
  rumour: string;

  constructor(partial: Partial<UNDataExportDto>) {
    Object.assign(this, partial);
  }
}
