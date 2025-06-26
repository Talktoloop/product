"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTableSyncDTO = exports.AirTableSyncAllegationReferralDTO = exports.AirTableSyncAllegationReferralOrganisationDTO = exports.AirTableSyncInvestigationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const case_status_constant_1 = require("../../constant/case-status.constant");
class AirTableSyncInvestigationDTO {
}
exports.AirTableSyncInvestigationDTO = AirTableSyncInvestigationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncInvestigationDTO.prototype, "investigationOpened", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'ADRA' }),
    __metadata("design:type", String)
], AirTableSyncInvestigationDTO.prototype, "whichOrganisationDoingInvestigation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncInvestigationDTO.prototype, "investigationClosed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'Offender faced disciplinary action',
    }),
    __metadata("design:type", String)
], AirTableSyncInvestigationDTO.prototype, "investigationOutcome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
        required: false,
        example: false,
    }),
    __metadata("design:type", Boolean)
], AirTableSyncInvestigationDTO.prototype, "referralToClearCheckMade", void 0);
class AirTableSyncAllegationReferralOrganisationDTO {
}
exports.AirTableSyncAllegationReferralOrganisationDTO = AirTableSyncAllegationReferralOrganisationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], AirTableSyncAllegationReferralOrganisationDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], AirTableSyncAllegationReferralOrganisationDTO.prototype, "type", void 0);
class AirTableSyncAllegationReferralDTO {
}
exports.AirTableSyncAllegationReferralDTO = AirTableSyncAllegationReferralDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncAllegationReferralDTO.prototype, "allegationReferralDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncAllegationReferralDTO.prototype, "responseToAllegationReferralDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: AirTableSyncAllegationReferralOrganisationDTO,
        required: false,
        isArray: true,
    }),
    __metadata("design:type", Array)
], AirTableSyncAllegationReferralDTO.prototype, "organisations", void 0);
class AirTableSyncDTO {
}
exports.AirTableSyncDTO = AirTableSyncDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "caseUUID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, example: '2021-05-05 09:43:54.000000' }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "storyCreated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
        required: false,
        example: false,
    }),
    __metadata("design:type", Boolean)
], AirTableSyncDTO.prototype, "notSensitive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Needs immediate assistance', required: false }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "urgency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Open' }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "caseStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, example: '2021-05-05 09:43:54.000000' }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "caseCreated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: ['Organisation personnel'],
        isArray: true,
    }),
    __metadata("design:type", Array)
], AirTableSyncDTO.prototype, "authorPerspective", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Protection' }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "allegationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: ['OXFAM'],
        isArray: true,
    }),
    __metadata("design:type", Array)
], AirTableSyncDTO.prototype, "allegationOrganization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "incidentDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Zambia' }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "incidentCountry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Mazabuka' }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "incidentProvince", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Male' }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "survivorGender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: '6-13' }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "survivorAge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'ojasdhuhqweurqwer' }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "loopId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: ['Hearing'],
        isArray: true,
    }),
    __metadata("design:type", Array)
], AirTableSyncDTO.prototype, "survivorDisability", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'No, not applicable' }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "authorNeedAssistance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'Assistance already provided',
    }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "assistanceStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "caseProcessed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'Pending response to allegation referral',
    }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "referralResponse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "assessmentMade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'Investigation closed',
    }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "investigationStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'Author informed n/a, or reachable',
    }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "informingAuthor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "caseClosed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'vestigation N/A, allegation ou',
    }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "caseUnaccountedClosedStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "assistanceReferralMade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'ADRA' }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "assistanceWhoMadeReferral", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: AirTableSyncInvestigationDTO,
        required: false,
        isArray: true,
    }),
    __metadata("design:type", Array)
], AirTableSyncDTO.prototype, "investigations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: AirTableSyncAllegationReferralDTO,
        required: false,
        isArray: true,
    }),
    __metadata("design:type", Array)
], AirTableSyncDTO.prototype, "allegationReferrals", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'National / community-based organisation',
    }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "organisationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'Process and refer',
    }),
    __metadata("design:type", Object)
], AirTableSyncDTO.prototype, "caseAccountability", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "processAndReferLastUpdateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "responseToReferralLastUpdateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "enoughInformationToInvestigateLastUpdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "investigationStatusLastUpdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "authorInformedOfCaseOutcomesLastUpdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
        example: '2021-05-05 09:43:54.000000',
    }),
    __metadata("design:type", Date)
], AirTableSyncDTO.prototype, "decisionToInvestigateStatusLastUpdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: ['1. Emergency response'],
        isArray: true,
    }),
    __metadata("design:type", Array)
], AirTableSyncDTO.prototype, "thematicArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: ['1.a ID cards'],
        isArray: true,
    }),
    __metadata("design:type", Array)
], AirTableSyncDTO.prototype, "thematicAreaSubsection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'Referral to organisation made',
    }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "processAndReferStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'Investigation closed',
    }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "investigationResult", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'No, not applicable',
    }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "referredToAssistance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        example: 'Yes, longer term support rendered',
    }),
    __metadata("design:type", String)
], AirTableSyncDTO.prototype, "hasTheSurvivorBeenRenderedAssistanceValue", void 0);
//# sourceMappingURL=air-table-sync.dto.js.map