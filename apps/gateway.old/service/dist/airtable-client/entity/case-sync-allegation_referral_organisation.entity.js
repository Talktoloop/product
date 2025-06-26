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
exports.CaseSyncAllegationReferralOrganisationEntity = void 0;
const typeorm_1 = require("typeorm");
const case_sync_allegation_referral_entity_1 = require("./case-sync-allegation_referral.entity");
let CaseSyncAllegationReferralOrganisationEntity = class CaseSyncAllegationReferralOrganisationEntity {
    constructor(data) {
        var _a, _b, _c;
        if (data) {
            this.name = (_a = data === null || data === void 0 ? void 0 : data.name) !== null && _a !== void 0 ? _a : undefined;
            this.type = (_b = data === null || data === void 0 ? void 0 : data.type) !== null && _b !== void 0 ? _b : undefined;
            this.allegationReferralId = (_c = data === null || data === void 0 ? void 0 : data.allegationReferralId) !== null && _c !== void 0 ? _c : undefined;
        }
    }
};
exports.CaseSyncAllegationReferralOrganisationEntity = CaseSyncAllegationReferralOrganisationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CaseSyncAllegationReferralOrganisationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'allegation_referral_id', type: 'int' }),
    __metadata("design:type", Number)
], CaseSyncAllegationReferralOrganisationEntity.prototype, "allegationReferralId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncAllegationReferralOrganisationEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncAllegationReferralOrganisationEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'allegation_referral_id', referencedColumnName: 'id' }),
    (0, typeorm_1.ManyToOne)(() => case_sync_allegation_referral_entity_1.CaseSyncAllegationReferralEntity, (entity) => entity.organisations),
    __metadata("design:type", case_sync_allegation_referral_entity_1.CaseSyncAllegationReferralEntity)
], CaseSyncAllegationReferralOrganisationEntity.prototype, "allegationReferral", void 0);
exports.CaseSyncAllegationReferralOrganisationEntity = CaseSyncAllegationReferralOrganisationEntity = __decorate([
    (0, typeorm_1.Entity)('case_sync_allegation_referral_organisation'),
    __metadata("design:paramtypes", [Object])
], CaseSyncAllegationReferralOrganisationEntity);
//# sourceMappingURL=case-sync-allegation_referral_organisation.entity.js.map