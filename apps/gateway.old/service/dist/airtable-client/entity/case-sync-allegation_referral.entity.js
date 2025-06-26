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
exports.CaseSyncAllegationReferralEntity = void 0;
const typeorm_1 = require("typeorm");
const case_sync_entity_1 = require("./case-sync.entity");
const case_sync_allegation_referral_organisation_entity_1 = require("./case-sync-allegation_referral_organisation.entity");
let CaseSyncAllegationReferralEntity = class CaseSyncAllegationReferralEntity {
    constructor(data) {
        var _a, _b, _c, _d;
        if (data) {
            this.allegationReferralDate = (_a = data === null || data === void 0 ? void 0 : data.allegationReferralDate) !== null && _a !== void 0 ? _a : undefined;
            this.responseToAllegationReferralDate =
                (_b = data === null || data === void 0 ? void 0 : data.responseToAllegationReferralDate) !== null && _b !== void 0 ? _b : undefined;
            this.organisations = (_c = data === null || data === void 0 ? void 0 : data.organisations) !== null && _c !== void 0 ? _c : undefined;
            this.caseId = (_d = data === null || data === void 0 ? void 0 : data.caseId) !== null && _d !== void 0 ? _d : undefined;
        }
    }
};
exports.CaseSyncAllegationReferralEntity = CaseSyncAllegationReferralEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CaseSyncAllegationReferralEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'case_id', type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], CaseSyncAllegationReferralEntity.prototype, "caseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'allegation_referral_date', type: 'datetime' }),
    __metadata("design:type", Date)
], CaseSyncAllegationReferralEntity.prototype, "allegationReferralDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'response_to_allegation_referral_date', type: 'datetime' }),
    __metadata("design:type", Date)
], CaseSyncAllegationReferralEntity.prototype, "responseToAllegationReferralDate", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'case_id', referencedColumnName: 'caseUUID' }),
    (0, typeorm_1.ManyToOne)(() => case_sync_entity_1.CaseSyncEntity, (entity) => entity.authorPerspective),
    __metadata("design:type", case_sync_entity_1.CaseSyncEntity)
], CaseSyncAllegationReferralEntity.prototype, "case", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => case_sync_allegation_referral_organisation_entity_1.CaseSyncAllegationReferralOrganisationEntity, (organisation) => organisation.allegationReferral, { cascade: true }),
    __metadata("design:type", Array)
], CaseSyncAllegationReferralEntity.prototype, "organisations", void 0);
exports.CaseSyncAllegationReferralEntity = CaseSyncAllegationReferralEntity = __decorate([
    (0, typeorm_1.Entity)('case_sync_allegation_referral'),
    __metadata("design:paramtypes", [Object])
], CaseSyncAllegationReferralEntity);
//# sourceMappingURL=case-sync-allegation_referral.entity.js.map