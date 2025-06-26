"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.airTableSyncSchema = void 0;
const Joi = __importStar(require("joi"));
const case_status_constant_1 = require("../../constant/case-status.constant");
exports.airTableSyncSchema = Joi.object({
    caseUUID: Joi.string().trim().max(32).invalid('').required(),
    storyCreated: Joi.date().required(),
    notSensitive: Joi.boolean().allow(null).optional(),
    urgency: Joi.string().trim().allow('').allow(null).max(100).optional(),
    caseStatus: Joi.string()
        .trim()
        .invalid('')
        .required()
        .valid(...Object.values(case_status_constant_1.CASE_STATUS)),
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
//# sourceMappingURL=air-table-sync.schema.js.map