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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const country_ro_1 = require("../response/country.ro");
const countries_mapper_1 = require("../mapper/countries.mapper");
const country_service_1 = require("../service/country.service");
const shared_1 = require("@ourloop/shared");
const get_countries_dto_1 = require("../request/dto/get-countries.dto");
const get_countries_schema_1 = require("../request/schema/get-countries.schema");
const success_ro_1 = require("../../common/response/success.ro");
const airtable_country_service_1 = require("../../airtable-client/service/airtable-country.service");
let CountryController = class CountryController {
    constructor(countryService, airTableCountryService) {
        this.countryService = countryService;
        this.airTableCountryService = airTableCountryService;
    }
    async getCountries(params) {
        var _a;
        const countries = await this.countryService.getCountriesWithNumberOfStories((_a = params.onlyWithStory) !== null && _a !== void 0 ? _a : false);
        return (0, countries_mapper_1.countiesMapper)(countries);
    }
    async getCountryCodes() {
        return this.countryService
            .getCountries()
            .then((countries) => countries.map((country) => country.code));
    }
    async importToAirtable() {
        const result = await this.airTableCountryService.importCountriesToAirTable();
        return { success: (result === null || result === void 0 ? void 0 : result.length) > 0 };
    }
};
exports.CountryController = CountryController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of countries' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: country_ro_1.CountryRO, isArray: true }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(get_countries_schema_1.getCountriesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_countries_dto_1.GetCountriesDTO]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getCountries", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, common_1.Get)('/codes'),
    (0, swagger_1.ApiOperation)({ summary: 'Get country codes' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getCountryCodes", null);
__decorate([
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Import countries to airtable' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Get)('import-to-airtable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "importToAirtable", null);
exports.CountryController = CountryController = __decorate([
    (0, swagger_1.ApiTags)('Country'),
    (0, common_1.Controller)('country'),
    __metadata("design:paramtypes", [country_service_1.CountryService,
        airtable_country_service_1.AirTableCountryService])
], CountryController);
//# sourceMappingURL=country.controller.js.map