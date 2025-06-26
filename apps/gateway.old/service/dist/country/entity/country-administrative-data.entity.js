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
exports.CountryAdministrativeDataEntity = void 0;
const typeorm_1 = require("typeorm");
const country_entity_1 = require("./country.entity");
const story_administrative_data_entity_1 = require("../../story/entity/story-administrative-data.entity");
const country_administrative_data_name_entity_1 = require("./country-administrative-data-name.entity");
let CountryAdministrativeDataEntity = class CountryAdministrativeDataEntity {
};
exports.CountryAdministrativeDataEntity = CountryAdministrativeDataEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CountryAdministrativeDataEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'has_child' }),
    __metadata("design:type", Boolean)
], CountryAdministrativeDataEntity.prototype, "hasChild", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', name: 'country_id' }),
    __metadata("design:type", Number)
], CountryAdministrativeDataEntity.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'parent_id' }),
    __metadata("design:type", Number)
], CountryAdministrativeDataEntity.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'external_id' }),
    __metadata("design:type", Number)
], CountryAdministrativeDataEntity.prototype, "externalId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint' }),
    __metadata("design:type", Number)
], CountryAdministrativeDataEntity.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.CountryEntity, (country) => country.administrativeData),
    (0, typeorm_1.JoinColumn)({ name: 'country_id' }),
    __metadata("design:type", country_entity_1.CountryEntity)
], CountryAdministrativeDataEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CountryAdministrativeDataEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CountryAdministrativeDataEntity, (administrativeArea) => administrativeArea.children, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", CountryAdministrativeDataEntity)
], CountryAdministrativeDataEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CountryAdministrativeDataEntity, (administrativeData) => administrativeData.parent),
    __metadata("design:type", Array)
], CountryAdministrativeDataEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_administrative_data_entity_1.StoryAdministrativeDataEntity, (storyAdministrativeData) => storyAdministrativeData.administrativeData),
    __metadata("design:type", Array)
], CountryAdministrativeDataEntity.prototype, "storyAdministrativeData", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => country_administrative_data_name_entity_1.CountryAdministrativeDataNameEntity, (storyAdministrativeDataName) => storyAdministrativeDataName.administrativeData, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], CountryAdministrativeDataEntity.prototype, "names", void 0);
exports.CountryAdministrativeDataEntity = CountryAdministrativeDataEntity = __decorate([
    (0, typeorm_1.Entity)('country_administrative_area')
], CountryAdministrativeDataEntity);
//# sourceMappingURL=country-administrative-data.entity.js.map