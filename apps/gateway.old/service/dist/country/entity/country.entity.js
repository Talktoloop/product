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
exports.CountryEntity = void 0;
const typeorm_1 = require("typeorm");
const story_entity_1 = require("../../story/entity/story.entity");
const case_sync_entity_1 = require("../../airtable-client/entity/case-sync.entity");
const country_administrative_data_entity_1 = require("./country-administrative-data.entity");
const language_entity_1 = require("../../language/entity/language.entity");
const organisation_entity_1 = require("../../organisation/entity/organisation.entity");
let CountryEntity = class CountryEntity {
};
exports.CountryEntity = CountryEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CountryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 2 }),
    __metadata("design:type", String)
], CountryEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], CountryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CountryEntity.prototype, "prefix", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'default_language_id_for_administrative_data' }),
    __metadata("design:type", Number)
], CountryEntity.prototype, "defaultLanguageId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.LanguageEntity, (lang) => lang.countries),
    (0, typeorm_1.JoinColumn)({ name: 'default_language_id_for_administrative_data' }),
    __metadata("design:type", language_entity_1.LanguageEntity)
], CountryEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => country_administrative_data_entity_1.CountryAdministrativeDataEntity, (administrativeArea) => administrativeArea.country),
    __metadata("design:type", Array)
], CountryEntity.prototype, "administrativeData", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => organisation_entity_1.OrganisationEntity, (organisation) => organisation.country),
    __metadata("design:type", Array)
], CountryEntity.prototype, "organisations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_entity_1.StoryEntity, (story) => story.country),
    __metadata("design:type", Array)
], CountryEntity.prototype, "stories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => case_sync_entity_1.CaseSyncEntity, (caseSync) => caseSync.country),
    __metadata("design:type", Array)
], CountryEntity.prototype, "cases", void 0);
exports.CountryEntity = CountryEntity = __decorate([
    (0, typeorm_1.Entity)('country')
], CountryEntity);
//# sourceMappingURL=country.entity.js.map