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
exports.CaseManagerLanguageEntity = void 0;
const language_entity_1 = require("../../language/entity/language.entity");
const typeorm_1 = require("typeorm");
const case_manager_entity_1 = require("./case-manager.entity");
let CaseManagerLanguageEntity = class CaseManagerLanguageEntity {
};
exports.CaseManagerLanguageEntity = CaseManagerLanguageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CaseManagerLanguageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], CaseManagerLanguageEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language_id', type: 'smallint' }),
    __metadata("design:type", Number)
], CaseManagerLanguageEntity.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.LanguageEntity, (language) => language.caseManagers),
    (0, typeorm_1.JoinColumn)({ name: 'language_id' }),
    __metadata("design:type", language_entity_1.LanguageEntity)
], CaseManagerLanguageEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'case_manager_id', type: 'varchar' }),
    __metadata("design:type", String)
], CaseManagerLanguageEntity.prototype, "caseManagerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => case_manager_entity_1.CaseManagerEntity, (caseManger) => caseManger.languages),
    (0, typeorm_1.JoinColumn)({ name: 'case_manager_id' }),
    __metadata("design:type", case_manager_entity_1.CaseManagerEntity)
], CaseManagerLanguageEntity.prototype, "caseManager", void 0);
exports.CaseManagerLanguageEntity = CaseManagerLanguageEntity = __decorate([
    (0, typeorm_1.Entity)('case_manager_text')
], CaseManagerLanguageEntity);
//# sourceMappingURL=case-manager-language.entity.js.map