import { faker } from '@faker-js/faker';
import { ASSISTANCE_STATUS } from '../../src/airtable-client/constant/assistance-status.constant';
import { CASE_STATUS } from '../../src/airtable-client/constant/case-status.constant';
import { addSyncData } from '../entity/airtable.mock';
import { GENDER_TEXT } from '../../src/airtable-client/constant/gender.constant';
import { ALLEGATION_TYPE_TEXT } from '../../src/airtable-client/constant/allegation-type.constant';
import { CaseSyncAuthorPerspectiveEntity } from '../../src/airtable-client/entity/case-sync-author-perspective.entity';
import { AUTHOR_PERSPECTIVE } from '../../src/airtable-client/constant/author-perspective.constant';
import { ORGANISATION_TYPE_TEXT } from '../../src/airtable-client/constant/organisation-type.constant';
import { ASSISTANCE_RENDERED } from '../../src/airtable-client/constant/assistance-rendered.constant';
import { CASE_ACCOUNTABILITY } from '../../src/airtable-client/constant/case-accountability.constant';
import { URGENT } from '../../src/airtable-client/constant/urgent.constant';
import { getKeyByValue } from '../../src/common/helpers';
import { INVESTIGATION_OUTCOME } from '../../src/airtable-client/constant/investigation-outcome.constant';
import { REFERRED_FOR_ASSISTANCE } from '../../src/airtable-client/constant/referred-for-assistance.constant';
import { CaseSyncSurvivorDisabilityEntity } from '../../src/airtable-client/entity/case-sync-survivor-disability.entity';
import { RESPONSIVENESS_STATUS } from '../../src/airtable-client/constant/responsiveness-status.constant';
import { CaseSyncThematicAreaSubsectionEntity } from '../../src/airtable-client/entity/case-sync-thematic-area-subsection.entity';
import { CaseSyncInvestigationEntity } from '../../src/airtable-client/entity/case-sync-investigation.entity';
import { CaseSyncAllegationReferralEntity } from '../../src/airtable-client/entity/case-sync-allegation_referral.entity';
import { CaseSyncAllegationReferralOrganisationEntity } from '../../src/airtable-client/entity/case-sync-allegation_referral_organisation.entity';
import { addDays, subDays } from 'date-fns';

export const cases = [
  {
    caseUUID: faker.string.uuid(),
    storyCreated: new Date(),
    caseClosed: addDays(new Date(), 10),
    caseStatus: CASE_STATUS.closed,
    caseCreated: new Date(),
    urgency: getKeyByValue(URGENT, 0, false),
    initializeUrgency: getKeyByValue(URGENT, 0, false),
    allegationType: ALLEGATION_TYPE_TEXT.SEAH,
    survivorGender: GENDER_TEXT.female,
    authorPerspective: [
      new CaseSyncAuthorPerspectiveEntity({
        authorPerspective: AUTHOR_PERSPECTIVE.friendOrRelativeOfSurvivor,
      }),
      new CaseSyncAuthorPerspectiveEntity({
        authorPerspective: AUTHOR_PERSPECTIVE.organisationPersonnel,
      }),
    ],
    survivorAge: null,
    hasTheSurvivorBeenRenderedAssistance: ASSISTANCE_RENDERED.assistanceNA,
    caseAccountability: CASE_ACCOUNTABILITY.processAndRefer,
    processAndReferStatus: 'Not enough information to assess and refer',
    processAndReferResponsiveness:
      RESPONSIVENESS_STATUS.pendingDecisionOfAllegationReferral,
    referralResponse: 'Organisation is responsive',
    investigationStatus: 'Not enough information to investigate',
    investigationResult: 'Investigation closed',
    informingAuthor: 'Author informed n/a, or reachable',
    incidentCountry: 'Poland',
    referredToAssistance: REFERRED_FOR_ASSISTANCE.notApplicable,
    survivorDisability: [
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'Seeing',
      }),
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'None',
      }),
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'Hearing',
      }),
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'Walking or climbing steps',
      }),
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: null,
      }),
    ],
    referralResponseResponsiveness:
      RESPONSIVENESS_STATUS.pendingOrganisationResponse,
    investigationResponsiveness:
      RESPONSIVENESS_STATUS.pendingDecisionToInvestigate,
    investigationResultResponsiveness: RESPONSIVENESS_STATUS.investigationOpen,
    informingAuthorResponsiveness:
      RESPONSIVENESS_STATUS.pendingAuthorNotification,
    thematicAreaSubsection: [
      new CaseSyncThematicAreaSubsectionEntity({
        thematicAreaSubsection: '3.a Handwashing stations',
      }),
    ],
    assistanceReferralMade: addDays(new Date(), 2),
    organisationType: ORGANISATION_TYPE_TEXT.communityMember,
    allegationReferrals: [
      new CaseSyncAllegationReferralEntity({
        responseToAllegationReferralDate: addDays(new Date(), 3),
        organisations: [
          new CaseSyncAllegationReferralOrganisationEntity({
            name: faker.company.name(),
            type: ORGANISATION_TYPE_TEXT.communityMember,
          }),
        ],
      }),
      new CaseSyncAllegationReferralEntity({
        responseToAllegationReferralDate: addDays(new Date(), 3),
        organisations: [
          new CaseSyncAllegationReferralOrganisationEntity({
            name: faker.company.name(),
            type: ORGANISATION_TYPE_TEXT.governmentAuthorities,
          }),
        ],
      }),
      new CaseSyncAllegationReferralEntity({
        responseToAllegationReferralDate: addDays(new Date(), 3),
        organisations: [
          new CaseSyncAllegationReferralOrganisationEntity({
            name: faker.company.name(),
            type: faker.string.sample(10),
          }),
        ],
      }),
      new CaseSyncAllegationReferralEntity({
        responseToAllegationReferralDate: addDays(new Date(), 3),
        organisations: [
          new CaseSyncAllegationReferralOrganisationEntity({
            name: faker.company.name(),
            type: ORGANISATION_TYPE_TEXT.other,
          }),
        ],
      }),
    ],
    investigations: [
      new CaseSyncInvestigationEntity({
        investigationOpened: subDays(new Date(), 15),
        investigationClosed: subDays(new Date(), 9),
        investigationOutcome: INVESTIGATION_OUTCOME.notSubstantiated,
      }),
    ],
  },
  {
    caseUUID: faker.string.uuid(),
    storyCreated: new Date(),
    caseStatus: CASE_STATUS.open,
    caseCreated: new Date(),
    assistanceStatus: ASSISTANCE_STATUS.assistanceAlreadyProvided,
    allegationType: ALLEGATION_TYPE_TEXT.SEAH,
    survivorGender: GENDER_TEXT.female,
    authorPerspective: [
      new CaseSyncAuthorPerspectiveEntity({
        authorPerspective: AUTHOR_PERSPECTIVE.organisationPersonnel,
      }),
    ],
    survivorAge: 'No answer',
    hasTheSurvivorBeenRenderedAssistance: ASSISTANCE_RENDERED.yes,
    caseAccountability: CASE_ACCOUNTABILITY.completeInvestigation,
    processAndReferStatus:
      RESPONSIVENESS_STATUS.pendingDecisionOfAllegationReferral,
    processAndReferResponsiveness: null,
    referralResponse: 'Organisation is responsive',
    referralResponseResponsiveness:
      RESPONSIVENESS_STATUS.pendingOrganisationResponse,
    investigationStatus: 'Not enough information to investigate',
    investigationResponsiveness:
      RESPONSIVENESS_STATUS.pendingDecisionToInvestigate,
    investigationResult: 'Investigation closed',
    investigationResultResponsiveness: RESPONSIVENESS_STATUS.investigationOpen,
    informingAuthor: 'Author informed n/a, or reachable',
    informingAuthorResponsiveness:
      RESPONSIVENESS_STATUS.pendingAuthorNotification,
    incidentCountry: 'Germany',
    referredToAssistance: REFERRED_FOR_ASSISTANCE.yes,
    survivorDisability: [
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'None',
      }),
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'Hearing',
      }),
    ],
    thematicAreaSubsection: [
      new CaseSyncThematicAreaSubsectionEntity({
        thematicAreaSubsection: '1.a Medical Centres',
      }),
    ],
    organisationType: ORGANISATION_TYPE_TEXT.privateSector,
    allegationReferrals: [
      new CaseSyncAllegationReferralEntity({
        organisations: [
          new CaseSyncAllegationReferralOrganisationEntity({
            name: faker.company.name(),
            type: ORGANISATION_TYPE_TEXT.privateSector,
          }),
        ],
      }),
    ],
    assistanceReferralMade: addDays(new Date(), 3),
    investigations: [
      new CaseSyncInvestigationEntity({
        investigationOpened: subDays(new Date(), 15),
        investigationClosed: subDays(new Date(), 9),
        investigationOutcome:
          INVESTIGATION_OUTCOME.offenceSubstantiatedAndOffender,
      }),
    ],
  },
  {
    caseUUID: faker.string.uuid(),
    storyCreated: subDays(new Date(), 62),
    caseClosed: addDays(new Date(), 10),
    caseStatus: CASE_STATUS.open,
    caseCreated: subDays(new Date(), 31),
    urgency: getKeyByValue(URGENT, 0, false),
    initializeUrgency: getKeyByValue(URGENT, 0, false),
    assistanceStatus: ASSISTANCE_STATUS.referralForAssistanceHasBeenMade,
    survivorGender: null,
    allegationType: ALLEGATION_TYPE_TEXT.fraudOrCorruption,
    authorPerspective: [
      new CaseSyncAuthorPerspectiveEntity({
        authorPerspective: AUTHOR_PERSPECTIVE.other,
      }),
    ],
    survivorAge: 'No answer',
    organisationType: ORGANISATION_TYPE_TEXT.privateSector,
    hasTheSurvivorBeenRenderedAssistance:
      ASSISTANCE_RENDERED.noAssistanceOfferedButNotReceived,
    caseAccountability: CASE_ACCOUNTABILITY.decideToInvestigate,
    processAndReferStatus: 'Referral to organisation made',
    processAndReferResponsiveness:
      RESPONSIVENESS_STATUS.pendingDecisionOfAllegationReferralForMoreThan48Hours,
    referralResponse: 'Pending organisation response for more than 48 hours',
    referralResponseResponsiveness:
      RESPONSIVENESS_STATUS.pendingOrganisationResponseForMoreThan1Week,
    investigationStatus: 'Investigation opened',
    investigationResponsiveness:
      RESPONSIVENESS_STATUS.pendingDecisionToInvestigateOngoingForMoreThan6Weeks,
    investigationResult: 'Investigation open for more than 3 months',
    investigationResultResponsiveness:
      RESPONSIVENESS_STATUS.investigationOpenForMoreThan2Years,
    informingAuthor: 'Author informed',
    informingAuthorResponsiveness:
      RESPONSIVENESS_STATUS.pendingAuthorNotificationForMoreThan48Hours,
    referredToAssistance: REFERRED_FOR_ASSISTANCE.no,
    incidentCountry: 'Poland',
    survivorDisability: [
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: '',
      }),
    ],
    allegationReferrals: [
      new CaseSyncAllegationReferralEntity({
        organisations: [
          new CaseSyncAllegationReferralOrganisationEntity({
            name: faker.company.name(),
            type: ORGANISATION_TYPE_TEXT.privateSector,
          }),
        ],
      }),
    ],
    thematicAreaSubsection: [
      new CaseSyncThematicAreaSubsectionEntity({
        thematicAreaSubsection: '4.a Non-food items',
      }),
    ],
    assistanceReferralMade: addDays(new Date(), 7),
    investigations: [
      new CaseSyncInvestigationEntity({
        investigationOpened: subDays(new Date(), 15),
        investigationClosed: subDays(new Date(), 9),
        investigationOutcome: INVESTIGATION_OUTCOME.offenderFacedDisciplinary,
      }),
    ],
  },
  {
    caseUUID: faker.string.uuid(),
    storyCreated: subDays(new Date(), 153),
    caseClosed: addDays(new Date(), 15),
    caseStatus: CASE_STATUS.closed,
    caseCreated: subDays(new Date(), 92),
    urgency: getKeyByValue(URGENT, 0, false),
    initializeUrgency: getKeyByValue(URGENT, 0, false),
    assistanceStatus:
      ASSISTANCE_STATUS.referralForImmediateAssistanceHasBeenMade,
    survivorGender: GENDER_TEXT.male,
    survivorAge: '30-59',
    allegationType: ALLEGATION_TYPE_TEXT.protection,
    authorPerspective: [
      new CaseSyncAuthorPerspectiveEntity({
        authorPerspective: AUTHOR_PERSPECTIVE.survivor,
      }),
    ],
    organisationType: ORGANISATION_TYPE_TEXT.nationalArmedForces,
    allegationReferrals: [
      new CaseSyncAllegationReferralEntity({
        organisations: [
          new CaseSyncAllegationReferralOrganisationEntity({
            name: faker.company.name(),
            type: ORGANISATION_TYPE_TEXT.nationalArmedForces,
          }),
        ],
      }),
    ],
    caseAccountability: CASE_ACCOUNTABILITY.informAuthorOfOutcome,
    processAndReferStatus:
      'Pending decision of allegation referral for more than 48 hours',
    referralResponse: 'Pending organisation response for more than 1 week',
    investigationStatus:
      'Pending decision to investigate ongoing for more than 6 weeks',
    investigationResult: 'Investigation open for more than 2 years',
    informingAuthor: 'Author informed',
    referredToAssistance: REFERRED_FOR_ASSISTANCE.notApplicable,
    incidentCountry: 'Poland',
    survivorDisability: [
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: null,
      }),
    ],
    thematicAreaSubsection: [
      new CaseSyncThematicAreaSubsectionEntity({
        thematicAreaSubsection: '4.d Housing',
      }),
    ],
    investigations: [
      new CaseSyncInvestigationEntity({
        investigationOpened: subDays(new Date(), 15),
        investigationClosed: subDays(new Date(), 9),
        investigationOutcome:
          INVESTIGATION_OUTCOME.offenderResignedFromOrganisation,
      }),
    ],
  },
  {
    caseUUID: faker.string.uuid(),
    storyCreated: subDays(new Date(), 92),
    caseClosed: addDays(new Date(), 15),
    caseStatus: CASE_STATUS.closed,
    caseCreated: subDays(new Date(), 31),
    urgency: getKeyByValue(URGENT, 0, false),
    initializeDataset: getKeyByValue(URGENT, 0, false),
    assistanceStatus: ASSISTANCE_STATUS.assistanceAlreadyProvided,
    survivorGender: GENDER_TEXT.male,
    allegationType: ALLEGATION_TYPE_TEXT.protection,
    survivorAge: '30-59',
    organisationType: ORGANISATION_TYPE_TEXT.nationalArmedForces,
    allegationReferrals: [
      new CaseSyncAllegationReferralEntity({
        organisations: [
          new CaseSyncAllegationReferralOrganisationEntity({
            name: faker.company.name(),
            type: ORGANISATION_TYPE_TEXT.nationalArmedForces,
          }),
        ],
      }),
    ],
    hasTheSurvivorBeenRenderedAssistance:
      ASSISTANCE_RENDERED.noAssistanceOfferedButNotReceived,
    caseAccountability: CASE_ACCOUNTABILITY.processAndRefer,
    processAndReferStatus:
      'Pending decision of allegation referral for more than 1 week',
    referralResponse: 'Pending organisation response for more than 1 week',
    investigationStatus:
      'Pending decision to investigate ongoing for more than 3 months',
    investigationResult: 'Investigation open for more than 2 years',
    informingAuthor: 'Pending author notification for more than 48 hours',
    referredToAssistance: REFERRED_FOR_ASSISTANCE.notApplicable,
    incidentCountry: 'Poland',
    survivorDisability: [
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'Remembering',
      }),
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'Hearing',
      }),
    ],
    thematicAreaSubsection: [
      new CaseSyncThematicAreaSubsectionEntity({
        thematicAreaSubsection: '4.a Non-food items',
      }),
    ],
    investigations: [
      new CaseSyncInvestigationEntity({
        investigationOpened: subDays(new Date(), 15),
        investigationClosed: subDays(new Date(), 9),
        investigationOutcome: INVESTIGATION_OUTCOME.other,
      }),
    ],
  },
  {
    caseUUID: faker.string.uuid(),
    storyCreated: subDays(new Date(), 92),
    caseClosed: addDays(new Date(), 28),
    caseStatus: CASE_STATUS.closed,
    caseCreated: subDays(new Date(), 62),
    urgency: getKeyByValue(URGENT, 1, false),
    initializeDataset: getKeyByValue(URGENT, 1, false),
    assistanceStatus: ASSISTANCE_STATUS.referralForAssistanceHasBeenMade,
    survivorGender: GENDER_TEXT.nonBinary,
    allegationType: ALLEGATION_TYPE_TEXT.protection,
    survivorAge: '30-59',
    organisationType: ORGANISATION_TYPE_TEXT.communityMember,
    hasTheSurvivorBeenRenderedAssistance:
      ASSISTANCE_RENDERED.yesLongerTermSupportRendered,
    caseAccountability: CASE_ACCOUNTABILITY.processAndRefer,
    allegationReferrals: [
      new CaseSyncAllegationReferralEntity({
        responseToAllegationReferralDate: subDays(new Date(), 31),
        organisations: [
          new CaseSyncAllegationReferralOrganisationEntity({
            name: faker.company.name(),
            type: ORGANISATION_TYPE_TEXT.communityMember,
          }),
        ],
      }),
    ],
    enoughInformationToInvestigateLastUpdate: subDays(new Date(), 20),
    decisionToInvestigateStatusLastUpdate: subDays(new Date(), 19),
    investigationStatusLastUpdate: subDays(new Date(), 10),
    authorInformedOfCaseOutcomesLastUpdate: subDays(new Date(), 5),
    referredToAssistance: null,
    incidentCountry: 'Poland',
    survivorDisability: [
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'Self-care e.g. washing',
      }),
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'Hearing',
      }),
    ],
    thematicAreaSubsection: [
      new CaseSyncThematicAreaSubsectionEntity({
        thematicAreaSubsection: '1.a Medical Centres',
      }),
    ],
    investigations: [
      new CaseSyncInvestigationEntity({
        investigationOpened: subDays(new Date(), 15),
        investigationClosed: subDays(new Date(), 10),
        investigationOutcome:
          INVESTIGATION_OUTCOME.referralToMisconductDisclosureScheme,
      }),
    ],
  },
  {
    caseUUID: faker.string.uuid(),
    storyCreated: subDays(new Date(), 123),
    caseClosed: addDays(new Date(), 17),
    caseStatus: CASE_STATUS.closed,
    caseCreated: subDays(new Date(), 92),
    urgency: getKeyByValue(URGENT, 1, false),
    initializeDataset: getKeyByValue(URGENT, 1, false),
    assistanceStatus:
      ASSISTANCE_STATUS.referralForImmediateAssistanceHasBeenMade,
    survivorGender: GENDER_TEXT.nonBinary,
    allegationType: ALLEGATION_TYPE_TEXT.fraudOrCorruption,
    survivorAge: '30-59',
    organisationType: ORGANISATION_TYPE_TEXT.governmentAuthorities,
    hasTheSurvivorBeenRenderedAssistance: ASSISTANCE_RENDERED.assistanceNA,
    caseAccountability: CASE_ACCOUNTABILITY.respondToReferral,
    allegationReferrals: [
      new CaseSyncAllegationReferralEntity({
        responseToAllegationReferralDate: subDays(new Date(), 31),
        organisations: [
          new CaseSyncAllegationReferralOrganisationEntity({
            name: faker.company.name(),
            type: ORGANISATION_TYPE_TEXT.governmentAuthorities,
          }),
        ],
      }),
    ],
    assessmentMade: subDays(new Date(), 10),
    enoughInformationToInvestigateLastUpdate: subDays(new Date(), 25),
    decisionToInvestigateStatusLastUpdate: subDays(new Date(), 15),
    investigationStatusLastUpdate: subDays(new Date(), 10),
    authorInformedOfCaseOutcomesLastUpdate: subDays(new Date(), 3),
    referredToAssistance: REFERRED_FOR_ASSISTANCE.notApplicable,
    incidentCountry: 'Poland',
    survivorDisability: [
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'Communicating',
      }),
      new CaseSyncSurvivorDisabilityEntity({
        survivorDisability: 'Hearing',
      }),
    ],
    thematicAreaSubsection: [
      new CaseSyncThematicAreaSubsectionEntity({
        thematicAreaSubsection: '3.a Handwashing stations',
      }),
    ],
    investigationStatus: 'Not enough information to investigate',
    investigations: [
      new CaseSyncInvestigationEntity({
        investigationOpened: subDays(new Date(), 14),
        investigationClosed: subDays(new Date(), 10),
        investigationOutcome:
          INVESTIGATION_OUTCOME.referralToMisconductDisclosureScheme,
      }),
      new CaseSyncInvestigationEntity({
        investigationOpened: subDays(new Date(), 15),
        investigationClosed: subDays(new Date(), 9),
        investigationOutcome:
          INVESTIGATION_OUTCOME.offenceSubstantiatedAndOffender,
      }),
    ],
  },
];
export const initializeDataset = async (): Promise<void> => {
  return addSyncData(cases);
};
