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
exports.CountryAdministrativeDataNameEntity = void 0;
const typeorm_1 = require("typeorm");
const country_administrative_data_entity_1 = require("./country-administrative-data.entity");
let CountryAdministrativeDataNameEntity = class CountryAdministrativeDataNameEntity {
};
exports.CountryAdministrativeDataNameEntity = CountryAdministrativeDataNameEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CountryAdministrativeDataNameEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'administrative_area_id', type: 'int' }),
    __metadata("design:type", Number)
], CountryAdministrativeDataNameEntity.prototype, "administrativeAreaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language_id', type: 'int' }),
    __metadata("design:type", Number)
], CountryAdministrativeDataNameEntity.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], CountryAdministrativeDataNameEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_administrative_data_entity_1.CountryAdministrativeDataEntity, (administrativeData) => administrativeData.names),
    (0, typeorm_1.JoinColumn)({ name: 'administrative_area_id' }),
    __metadata("design:type", country_administrative_data_entity_1.CountryAdministrativeDataEntity)
], CountryAdministrativeDataNameEntity.prototype, "administrativeData", void 0);
exports.CountryAdministrativeDataNameEntity = CountryAdministrativeDataNameEntity = __decorate([
    (0, typeorm_1.Entity)('country_administrative_area_name')
], CountryAdministrativeDataNameEntity);
//# sourceMappingURL=country-administrative-data-name.entity.js.map