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
exports.CaseManagerEntity = void 0;
const typeorm_1 = require("typeorm");
const case_manager_language_entity_1 = require("./case-manager-language.entity");
let CaseManagerEntity = class CaseManagerEntity {
};
exports.CaseManagerEntity = CaseManagerEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar' }),
    __metadata("design:type", String)
], CaseManagerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], CaseManagerEntity.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CaseManagerEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint' }),
    __metadata("design:type", Boolean)
], CaseManagerEntity.prototype, "visible", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CaseManagerEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CaseManagerEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => case_manager_language_entity_1.CaseManagerLanguageEntity, (caseManager) => caseManager.caseManager),
    __metadata("design:type", Array)
], CaseManagerEntity.prototype, "languages", void 0);
exports.CaseManagerEntity = CaseManagerEntity = __decorate([
    (0, typeorm_1.Entity)('case_manager')
], CaseManagerEntity);
//# sourceMappingURL=case-manager.entity.js.map