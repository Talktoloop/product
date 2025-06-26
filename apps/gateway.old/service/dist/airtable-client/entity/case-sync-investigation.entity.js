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
exports.CaseSyncInvestigationEntity = void 0;
const typeorm_1 = require("typeorm");
const case_sync_entity_1 = require("./case-sync.entity");
let CaseSyncInvestigationEntity = class CaseSyncInvestigationEntity {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        if (data) {
            this.caseId = (_a = data === null || data === void 0 ? void 0 : data.caseId) !== null && _a !== void 0 ? _a : undefined;
            this.investigationOpened = (_b = data === null || data === void 0 ? void 0 : data.investigationOpened) !== null && _b !== void 0 ? _b : undefined;
            this.investigationClosed = (_c = data === null || data === void 0 ? void 0 : data.investigationClosed) !== null && _c !== void 0 ? _c : undefined;
            this.whichOrganisationDoingInvestigation =
                (_d = data === null || data === void 0 ? void 0 : data.whichOrganisationDoingInvestigation) !== null && _d !== void 0 ? _d : undefined;
            this.investigationOutcome = (_e = data === null || data === void 0 ? void 0 : data.investigationOutcome) !== null && _e !== void 0 ? _e : undefined;
            this.referralToClearCheckMade =
                (_f = data === null || data === void 0 ? void 0 : data.referralToClearCheckMade) !== null && _f !== void 0 ? _f : undefined;
        }
    }
};
exports.CaseSyncInvestigationEntity = CaseSyncInvestigationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CaseSyncInvestigationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'case_id', type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], CaseSyncInvestigationEntity.prototype, "caseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'investigation_opened', type: 'datetime' }),
    __metadata("design:type", Date)
], CaseSyncInvestigationEntity.prototype, "investigationOpened", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'investigation_closed', type: 'datetime' }),
    __metadata("design:type", Date)
], CaseSyncInvestigationEntity.prototype, "investigationClosed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'which_organisation_doing_investigation', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncInvestigationEntity.prototype, "whichOrganisationDoingInvestigation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'investigation_outcome', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncInvestigationEntity.prototype, "investigationOutcome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'referral_to_clear_check_made', type: 'boolean' }),
    __metadata("design:type", Boolean)
], CaseSyncInvestigationEntity.prototype, "referralToClearCheckMade", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'case_id', referencedColumnName: 'caseUUID' }),
    (0, typeorm_1.ManyToOne)(() => case_sync_entity_1.CaseSyncEntity, (entity) => entity.investigations),
    __metadata("design:type", case_sync_entity_1.CaseSyncEntity)
], CaseSyncInvestigationEntity.prototype, "case", void 0);
exports.CaseSyncInvestigationEntity = CaseSyncInvestigationEntity = __decorate([
    (0, typeorm_1.Entity)('case_sync_investigation'),
    __metadata("design:paramtypes", [Object])
], CaseSyncInvestigationEntity);
//# sourceMappingURL=case-sync-investigation.entity.js.map