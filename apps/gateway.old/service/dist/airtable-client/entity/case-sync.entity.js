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
exports.CaseSyncEntity = void 0;
const typeorm_1 = require("typeorm");
const case_status_constant_1 = require("../constant/case-status.constant");
const case_sync_author_perspective_entity_1 = require("./case-sync-author-perspective.entity");
const case_sync_thematic_area_entity_1 = require("./case-sync-thematic-area.entity");
const case_sync_thematic_area_subsection_entity_1 = require("./case-sync-thematic-area-subsection.entity");
const case_sync_survivor_disability_entity_1 = require("./case-sync-survivor-disability.entity");
const country_entity_1 = require("../../country/entity/country.entity");
const case_sync_investigation_entity_1 = require("./case-sync-investigation.entity");
const case_sync_allegation_referral_entity_1 = require("./case-sync-allegation_referral.entity");
let CaseSyncEntity = class CaseSyncEntity {
};
exports.CaseSyncEntity = CaseSyncEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', name: 'case_uuid' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "caseUUID", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'story_created' }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "storyCreated", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'urgency', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "urgency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'initial_urgency', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "initialUrgency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'case_status', type: 'enum', enum: case_status_constant_1.CASE_STATUS }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "caseStatus", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'case_created' }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "caseCreated", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'allegation_type', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "allegationType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'referred_to_assistance', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "referredToAssistance", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'allegation_organization', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "allegationOrganization", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'incident_date' }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "incidentDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'incident_country', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "incidentCountry", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'incident_province', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "incidentProvince", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'survivor_gender', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "survivorGender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'survivor_age', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "survivorAge", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'author_need_assistance', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "authorNeedAssistance", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'assistance_status', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "assistanceStatus", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'case_processed' }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "caseProcessed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'referral_response', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "referralResponse", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'assessment_made' }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "assessmentMade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'investigation_status', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "investigationStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'informing_author', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "informingAuthor", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'case_closed' }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "caseClosed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'case_unaccounted_closed_status', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "caseUnaccountedClosedStatus", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'assistance_referral_made' }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "assistanceReferralMade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'assistance_who_made_referral', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "assistanceWhoMadeReferral", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'has_the_survivor_been_rendered_assistance',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "hasTheSurvivorBeenRenderedAssistance", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organisation_type', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "organisationType", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => case_sync_author_perspective_entity_1.CaseSyncAuthorPerspectiveEntity, (caseAuthorPerspective) => caseAuthorPerspective.case, { cascade: true }),
    __metadata("design:type", Array)
], CaseSyncEntity.prototype, "authorPerspective", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'case_accountability', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "caseAccountability", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'process_and_refer_last_update_time', type: 'datetime' }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "processAndReferLastUpdateTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'response_to_referral_last_update_time', type: 'datetime' }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "responseToReferralLastUpdateTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'enough_information_to_investigate_last_update',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "enoughInformationToInvestigateLastUpdate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'investigation_status_last_update',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "investigationStatusLastUpdate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'author_informed_of_case_outcomes_last_update',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "authorInformedOfCaseOutcomesLastUpdate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'decision_to_investigate_status_last_update',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], CaseSyncEntity.prototype, "decisionToInvestigateStatusLastUpdate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => case_sync_allegation_referral_entity_1.CaseSyncAllegationReferralEntity, (caseAllegationReferral) => caseAllegationReferral.case, { cascade: true }),
    __metadata("design:type", Array)
], CaseSyncEntity.prototype, "allegationReferrals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => case_sync_survivor_disability_entity_1.CaseSyncSurvivorDisabilityEntity, (survivorDisability) => survivorDisability.case, { cascade: true }),
    __metadata("design:type", Array)
], CaseSyncEntity.prototype, "survivorDisability", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => case_sync_thematic_area_entity_1.CaseSyncThematicAreaEntity, (caseThematicArea) => caseThematicArea.case, { cascade: true }),
    __metadata("design:type", Array)
], CaseSyncEntity.prototype, "thematicArea", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => case_sync_thematic_area_subsection_entity_1.CaseSyncThematicAreaSubsectionEntity, (caseThematicAreaSubsection) => caseThematicAreaSubsection.case, { cascade: true }),
    __metadata("design:type", Array)
], CaseSyncEntity.prototype, "thematicAreaSubsection", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => case_sync_investigation_entity_1.CaseSyncInvestigationEntity, (investigation) => investigation.case, { cascade: true }),
    __metadata("design:type", Array)
], CaseSyncEntity.prototype, "investigations", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'process_and_refer_status', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "processAndReferStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'investigation_result', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "investigationResult", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'has_the_survivor_been_rendered_assistance_value',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], CaseSyncEntity.prototype, "hasTheSurvivorBeenRenderedAssistanceValue", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'incident_country', referencedColumnName: 'name' }),
    (0, typeorm_1.ManyToOne)(() => country_entity_1.CountryEntity, (entity) => entity.cases),
    __metadata("design:type", country_entity_1.CountryEntity)
], CaseSyncEntity.prototype, "country", void 0);
exports.CaseSyncEntity = CaseSyncEntity = __decorate([
    (0, typeorm_1.Entity)('case_sync')
], CaseSyncEntity);
//# sourceMappingURL=case-sync.entity.js.map