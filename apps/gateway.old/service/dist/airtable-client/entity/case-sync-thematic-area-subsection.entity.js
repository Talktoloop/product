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
exports.CaseSyncThematicAreaSubsectionEntity = void 0;
const typeorm_1 = require("typeorm");
const case_sync_entity_1 = require("./case-sync.entity");
let CaseSyncThematicAreaSubsectionEntity = class CaseSyncThematicAreaSubsectionEntity {
    constructor(data) {
        var _a, _b;
        if (data) {
            this.thematicAreaSubsection = (_a = data === null || data === void 0 ? void 0 : data.thematicAreaSubsection) !== null && _a !== void 0 ? _a : undefined;
            this.caseId = (_b = data === null || data === void 0 ? void 0 : data.caseId) !== null && _b !== void 0 ? _b : undefined;
        }
    }
};
exports.CaseSyncThematicAreaSubsectionEntity = CaseSyncThematicAreaSubsectionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CaseSyncThematicAreaSubsectionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'case_id', type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], CaseSyncThematicAreaSubsectionEntity.prototype, "caseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'thematic_area_subsection', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncThematicAreaSubsectionEntity.prototype, "thematicAreaSubsection", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'case_id', referencedColumnName: 'caseUUID' }),
    (0, typeorm_1.ManyToOne)(() => case_sync_entity_1.CaseSyncEntity, (entity) => entity.thematicAreaSubsection),
    __metadata("design:type", case_sync_entity_1.CaseSyncEntity)
], CaseSyncThematicAreaSubsectionEntity.prototype, "case", void 0);
exports.CaseSyncThematicAreaSubsectionEntity = CaseSyncThematicAreaSubsectionEntity = __decorate([
    (0, typeorm_1.Entity)('case_sync_thematic_area_subsection'),
    __metadata("design:paramtypes", [Object])
], CaseSyncThematicAreaSubsectionEntity);
//# sourceMappingURL=case-sync-thematic-area-subsection.entity.js.map