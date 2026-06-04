import * as Joi from 'joi';
import { CASE_STATUS } from '../../constant/case-status.constant';

export const airTableSyncSchema: Joi.ObjectSchema = Joi.object({
  caseUUID: Joi.string().trim().max(32).invalid('').required(),
  storyCreated: Joi.date().required(),
  notSensitive: Joi.boolean().allow(null).optional(),
  urgency: Joi.string().trim().allow('').allow(null).max(100).optional(),
  caseStatus: Joi.string()
    .trim()
    .invalid('')
    .required()
    .valid(...Object.values(CASE_STATUS)),
  caseCreated: Joi.date().required(),
  authorPerspective: Joi.array().items(Joi.string().trim().max(100)).optional(),
  allegationType: Joi.string().trim().max(100).allow('').allow(null).optional(),
  allegationOrganization: Joi.array()
    .items(Joi.string().trim().max(200))
    .optional(),
  incidentDate: Joi.date().optional().allow(null),
  incidentCountry: Joi.string().trim().max(50).allow('').allow(null).optional(),
  incidentProvince: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  survivorGender: Joi.string().trim().max(10).allow('').allow(null).optional(),
  survivorAge: Joi.string().trim().max(10).allow('').allow(null).optional(),
  survivorDisability: Joi.array()
    .items(Joi.string().allow(null).trim().max(100))
    .optional(),
  vulnerabilityFactors: Joi.array()
    .items(Joi.string().allow(null).trim().max(100))
    .optional(),
  minorityGroup: Joi.string().trim().max(100).allow('').allow(null).optional(),
  authorNeedAssistance: Joi.string()
    .trim()
    .max(200)
    .allow('')
    .allow(null)
    .optional(),
  assistanceStatus: Joi.string()
    .trim()
    .max(50)
    .allow('')
    .allow(null)
    .optional(),
  caseProcessed: Joi.date().optional().allow(null),
  referralResponse: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  loopId: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  assessmentMade: Joi.date().optional().allow(null),
  investigationStatus: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  informingAuthor: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  caseClosed: Joi.date().optional().allow(null),
  caseUnaccountedClosedStatus: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  assistanceReferralMade: Joi.date().optional().allow(null),
  assistanceWhoMadeReferral: Joi.string()
    .trim()
    .max(50)
    .allow('')
    .allow(null)
    .optional(),
  allegationReferrals: Joi.array().items({
    allegationReferralDate: Joi.date().allow(null).optional(),
    responseToAllegationReferralDate: Joi.date().allow(null).optional(),
    organisations: Joi.array().items({
      name: Joi.string().max(200).allow(null, '').optional(),
      type: Joi.string().max(50).allow(null, '').optional(),
    }),
  }),
  investigations: Joi.array().items({
    investigationOpened: Joi.date().optional().allow(null),
    whichOrganisationDoingInvestigation: Joi.string()
      .trim()
      .max(100)
      .allow('')
      .allow(null)
      .optional(),
    investigationClosed: Joi.date().optional().allow(null),
    investigationOutcome: Joi.string()
      .trim()
      .max(100)
      .allow('')
      .allow(null)
      .optional(),
    referralToClearCheckMade: Joi.boolean().allow(null).optional(),
  }),
  organisationType: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  hasTheSurvivorBeenRenderedAssistance: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  caseAccountability: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  processAndReferLastUpdateTime: Joi.date().optional().allow(null),
  responseToReferralLastUpdateTime: Joi.date().optional().allow(null),
  enoughInformationToInvestigateLastUpdate: Joi.date().optional().allow(null),
  investigationStatusLastUpdate: Joi.date().optional().allow(null),
  authorInformedOfCaseOutcomesLastUpdate: Joi.date().optional().allow(null),
  decisionToInvestigateStatusLastUpdate: Joi.date().optional().allow(null),
  thematicArea: Joi.array()
    .items(Joi.string().trim().max(100).allow(null, ''))
    .optional(),
  thematicAreaSubsection: Joi.array()
    .items(Joi.string().trim().max(100).allow(null, ''))
    .optional(),
  processAndReferStatus: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  investigationResult: Joi.string()
    .trim()
    .max(100)
    .allow('')
    .allow(null)
    .optional(),
  referredToAssistance: Joi.string().trim().max(100).allow('', null).optional(),
  hasTheSurvivorBeenRenderedAssistanceValue: Joi.string()
    .trim()
    .max(100)
    .allow('', null)
    .optional(),
});
