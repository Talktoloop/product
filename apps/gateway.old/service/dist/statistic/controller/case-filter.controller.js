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
exports.CaseFilterController = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const swagger_1 = require("@nestjs/swagger");
const case_service_1 = require("../service/case.service");
const referred_for_assistance_constant_1 = require("../../airtable-client/constant/referred-for-assistance.constant");
const investigation_outcome_constant_1 = require("../../airtable-client/constant/investigation-outcome.constant");
const organisation_type_constant_1 = require("../../airtable-client/constant/organisation-type.constant");
const allegation_type_constant_1 = require("../../airtable-client/constant/allegation-type.constant");
const age_constant_1 = require("../../airtable-client/constant/age.constant");
const gender_constant_1 = require("../../airtable-client/constant/gender.constant");
const difficulty_constant_1 = require("../../airtable-client/constant/difficulty.constant");
const thematic_constant_1 = require("../../airtable-client/constant/thematic.constant");
const thematic_areas_mapper_1 = require("../mapper/thematic-areas.mapper");
const passport_1 = require("@nestjs/passport");
let CaseFilterController = class CaseFilterController {
    constructor(caseService) {
        this.caseService = caseService;
    }
    async getReferredForAssistanceValues() {
        return Object.keys(referred_for_assistance_constant_1.REFERRED_FOR_ASSISTANCE);
    }
    async getInvestigationOutcomeValues() {
        return Object.keys(investigation_outcome_constant_1.INVESTIGATION_OUTCOME);
    }
    async getOrganisationTypes() {
        return Object.keys(organisation_type_constant_1.ORGANISATION_TYPE_TEXT);
    }
    async getCaseTypes() {
        const allegationTypes = Object.keys(allegation_type_constant_1.ALLEGATION_TYPE_TEXT);
        return [...allegationTypes, 'urgentCases'];
    }
    async getCountries() {
        return this.caseService.getUniqueCountries();
    }
    async getAgeValues() {
        return Object.keys(age_constant_1.AGE_TEXT);
    }
    async getGenderValues() {
        return Object.keys(gender_constant_1.GENDER_TEXT);
    }
    async getDisabilityValues() {
        return Object.values(difficulty_constant_1.DIFFICULTY);
    }
    async getThematicAreaValues() {
        return (0, thematic_areas_mapper_1.thematicAreasMapper)(Object.values(thematic_constant_1.THEMATIC));
    }
};
exports.CaseFilterController = CaseFilterController;
__decorate([
    (0, common_1.Get)('/referred-for-assistance'),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    (0, swagger_1.ApiOperation)({
        summary: 'Filter values - referred for assistance',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseFilterController.prototype, "getReferredForAssistanceValues", null);
__decorate([
    (0, common_1.Get)('/investigation-outcome'),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    (0, swagger_1.ApiOperation)({
        summary: 'Filter values - investigation outcome',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseFilterController.prototype, "getInvestigationOutcomeValues", null);
__decorate([
    (0, common_1.Get)('/organisaiton-type'),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    (0, swagger_1.ApiOperation)({
        summary: 'Filter values - organisation types',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseFilterController.prototype, "getOrganisationTypes", null);
__decorate([
    (0, common_1.Get)('/case-type'),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    (0, swagger_1.ApiOperation)({
        summary: 'Filter values - case types',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseFilterController.prototype, "getCaseTypes", null);
__decorate([
    (0, common_1.Get)('/country'),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    (0, swagger_1.ApiOperation)({
        summary: 'Filter values - countries',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseFilterController.prototype, "getCountries", null);
__decorate([
    (0, common_1.Get)('/age'),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    (0, swagger_1.ApiOperation)({
        summary: 'Filter values - age',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseFilterController.prototype, "getAgeValues", null);
__decorate([
    (0, common_1.Get)('/gender'),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    (0, swagger_1.ApiOperation)({
        summary: 'Filter values - gender',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseFilterController.prototype, "getGenderValues", null);
__decorate([
    (0, common_1.Get)('/disability'),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    (0, swagger_1.ApiOperation)({
        summary: 'Filter values - disability',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseFilterController.prototype, "getDisabilityValues", null);
__decorate([
    (0, common_1.Get)('/thematic-area'),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    (0, swagger_1.ApiOperation)({
        summary: 'Filter values - thematic area',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseFilterController.prototype, "getThematicAreaValues", null);
exports.CaseFilterController = CaseFilterController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiTags)('Statistic - filters for cases'),
    (0, common_1.Controller)('case/filter'),
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    __metadata("design:paramtypes", [case_service_1.CaseService])
], CaseFilterController);
//# sourceMappingURL=case-filter.controller.js.map