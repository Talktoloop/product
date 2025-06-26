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
exports.CaseSyncSurvivorDisabilityEntity = void 0;
const typeorm_1 = require("typeorm");
const case_sync_entity_1 = require("./case-sync.entity");
let CaseSyncSurvivorDisabilityEntity = class CaseSyncSurvivorDisabilityEntity {
    constructor(data) {
        var _a, _b;
        if (data) {
            this.survivorDisability = (_a = data === null || data === void 0 ? void 0 : data.survivorDisability) !== null && _a !== void 0 ? _a : undefined;
            this.caseId = (_b = data === null || data === void 0 ? void 0 : data.caseId) !== null && _b !== void 0 ? _b : undefined;
        }
    }
};
exports.CaseSyncSurvivorDisabilityEntity = CaseSyncSurvivorDisabilityEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CaseSyncSurvivorDisabilityEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'case_id', type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], CaseSyncSurvivorDisabilityEntity.prototype, "caseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'survivor_disability', type: 'varchar' }),
    __metadata("design:type", String)
], CaseSyncSurvivorDisabilityEntity.prototype, "survivorDisability", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'case_id', referencedColumnName: 'caseUUID' }),
    (0, typeorm_1.ManyToOne)(() => case_sync_entity_1.CaseSyncEntity, (entity) => entity.survivorDisability),
    __metadata("design:type", case_sync_entity_1.CaseSyncEntity)
], CaseSyncSurvivorDisabilityEntity.prototype, "case", void 0);
exports.CaseSyncSurvivorDisabilityEntity = CaseSyncSurvivorDisabilityEntity = __decorate([
    (0, typeorm_1.Entity)('case_sync_survivor_disability'),
    __metadata("design:paramtypes", [Object])
], CaseSyncSurvivorDisabilityEntity);
//# sourceMappingURL=case-sync-survivor-disability.entity.js.map