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
exports.CaseController = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const swagger_1 = require("@nestjs/swagger");
const how_many_case_received_ro_1 = require("../response/how-many-case-received.ro");
const type_value_ro_1 = require("../response/type-value.ro");
const case_service_1 = require("../service/case.service");
const cases_grouped_by_allegation_and_author_perspective_mapper_1 = require("../mapper/cases-grouped-by-allegation-and-author-perspective.mapper");
const what_are_the_outcomes_ro_1 = require("../response/what-are-the-outcomes.ro");
const type_average_count_ro_1 = require("../response/type-average-count.ro");
const stories_code_dates_ro_1 = require("../response/stories-code-dates.ro");
const timeline_for_cases_schema_1 = require("../request/schema/timeline-for-cases.schema");
const timeline_for_cases_mapper_1 = require("../mapper/timeline-for-cases.mapper");
const shared_1 = require("@ourloop/shared");
const filter_schema_1 = require("../request/schema/filter.schema");
const filter_dto_1 = require("../request/dto/filter.dto");
const count_ro_1 = require("../response/count.ro");
const average_taken_time_to_complete_step_ro_1 = require("../response/average-taken-time-to-complete-step.ro");
const responsive_by_step_ro_1 = require("../response/responsive-by-step.ro");
const cases_grouped_by_case_accountability_and_organisation_type_mapper_1 = require("../mapper/cases-grouped-by-case_accountability-and-organisation_type.mapper");
const filter_with_required_period_dto_1 = require("../request/dto/filter-with-required-period.dto");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const class_transformer_1 = require("class-transformer");
const metabase_link_1 = require("../response/metabase-link");
let CaseController = class CaseController {
    constructor(caseService, config) {
        this.caseService = caseService;
        this.config = config;
    }
    async getSignedMetabaseURL() {
        return {
            url: this.caseService.getSignedMetabaseURL()
        };
    }
    async getInformationHowManyCasesReceived(filters) {
        return this.caseService.getInformationHowManyCasesReceived(filters);
    }
    async getCasesGroupedByAllegationAndAuthorPerspective(filters) {
        const data = await this.caseService.getCasesGroupedByAllegationAndAuthorPerspective(filters);
        let mappedData = (0, cases_grouped_by_allegation_and_author_perspective_mapper_1.casesGroupedByAllegationAndAuthorPerspectiveMapper)(data);
        if (!this.config.get('application.anonymizeCharts')) {
            return mappedData;
        }
        mappedData = this.caseService.checkIfChartShouldBeAnonymized(mappedData);
        return mappedData;
    }
    async getSurvivorGender(filters) {
        let data = await this.caseService.getSurvivorsPerGender(filters);
        if (!this.config.get('application.anonymizeCharts')) {
            return data;
        }
        data = this.caseService.checkIfChartShouldBeAnonymized(data);
        return data;
    }
    async getSurvivorAge(filters) {
        let data = await this.caseService.getSurvivorsPerAge(filters);
        if (!this.config.get('application.anonymizeCharts')) {
            return data;
        }
        data = this.caseService.checkIfChartShouldBeAnonymized(data);
        return data;
    }
    async getDataForOrganisationType(filters) {
        return this.caseService.getDataForTypeOfOrganisationByAllogation(filters);
    }
    async getInfoDidPeopleReceivedAssistance(filters) {
        return this.caseService.getInfoDidPeopleReceivedAssistance(filters);
    }
    async whatAreTheOutcomes(filters) {
        const data = await this.caseService.whatAreTheOutcomes(filters);
        return (0, class_transformer_1.plainToClass)(what_are_the_outcomes_ro_1.WhatAreTheOutcomesRO, data);
    }
    async whatAreTheTypeOfCasesInTheAccountability(filters) {
        return this.caseService.whatAreTheTypeOfCasesInTheAccountability(filters);
    }
    async getAverageTakenTimeToCompleteStep(filters) {
        return this.caseService.getAverageTakenTimeToCompleteStep(filters);
    }
    async averageTakenTime(filters) {
        return this.caseService.averageTakenTime(filters);
    }
    async getDataAboutResponsiveByStep(filters) {
        return this.caseService.getDataAboutResponsiveByStep(filters);
    }
    async getTimelineForCases(filters) {
        const casesWithAllegationTypeByPeriod = await this.caseService.getCasesWithAllegationTypeByPeriod(filters);
        const urgentCasesByPeriod = await this.caseService.getUrgentCasesByPeriod(filters);
        return (0, timeline_for_cases_mapper_1.timelineForCasesMapper)(filters, casesWithAllegationTypeByPeriod, urgentCasesByPeriod);
    }
    async getCasesCount(filters) {
        return this.caseService.getCountOfCases(filters);
    }
    async getInformationAboutCaseAccountability(filters) {
        const data = await this.caseService.getCasesGroupedByCaseAccountabilityAndOrganisationType(filters);
        return (0, cases_grouped_by_case_accountability_and_organisation_type_mapper_1.casesGroupedByCaseAccountabilityAndOrganisationTypeMapper)(data);
    }
};
exports.CaseController = CaseController;
__decorate([
    (0, common_1.Get)('/signed-embedd-url'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get the Metabase open feedback dashboard embedd url',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: metabase_link_1.MetabaseOpenFeedbackLinkRO }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getSignedMetabaseURL", null);
__decorate([
    (0, common_1.Get)('/cases-received'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get information how many cases have been received',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: how_many_case_received_ro_1.HowManyCaseReceivedRO }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getInformationHowManyCasesReceived", null);
__decorate([
    (0, common_1.Get)('/allegation-type-author-perspective'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get cases grouped by allegation and author perspective',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: type_value_ro_1.TypeValuesRO,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getCasesGroupedByAllegationAndAuthorPerspective", null);
__decorate([
    (0, common_1.Get)('/survivor-gender'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get data for survivor gender',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: type_value_ro_1.TypeValuesRO, isArray: true }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getSurvivorGender", null);
__decorate([
    (0, common_1.Get)('/survivor-age'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get data for survivor age',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: type_value_ro_1.TypeValuesRO, isArray: true }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getSurvivorAge", null);
__decorate([
    (0, common_1.Get)('/organisation-type'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get data for organisation type',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: type_value_ro_1.TypeValuesRO, isArray: true }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getDataForOrganisationType", null);
__decorate([
    (0, common_1.Get)('/did-people-received-assistance'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get data for info did people referred for assistance received it',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: type_value_ro_1.TypeValuesRO, isArray: true }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getInfoDidPeopleReceivedAssistance", null);
__decorate([
    (0, common_1.Get)('/what-are-the-outcomes'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get data for what are the outcomes',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: what_are_the_outcomes_ro_1.WhatAreTheOutcomesRO }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "whatAreTheOutcomes", null);
__decorate([
    (0, common_1.Get)('/type-of-cases-accountability'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get data for what type of cases are in the accountability process now',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: type_value_ro_1.TypeValuesRO, isArray: true }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "whatAreTheTypeOfCasesInTheAccountability", null);
__decorate([
    (0, common_1.Get)('/average-taken-time-to-complete-step'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get data for whats the average time taken to complete each step of the accountability process',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: average_taken_time_to_complete_step_ro_1.AverageTakenTimeToCompleteStepRO,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getAverageTakenTimeToCompleteStep", null);
__decorate([
    (0, common_1.Get)('/average-taken-time'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get data for Whats the average time taken for different types of cases to be processed',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: type_average_count_ro_1.TypeAverageCountRO, isArray: true }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "averageTakenTime", null);
__decorate([
    (0, common_1.Get)('/how-responsive-by-step'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get data about responsive by each step of process',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: responsive_by_step_ro_1.ResponsiveByStepRO }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getDataAboutResponsiveByStep", null);
__decorate([
    (0, common_1.Get)('/timeline-for-cases'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get timeline for cases',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: stories_code_dates_ro_1.StoriesCodeDatesRO,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(timeline_for_cases_schema_1.timelineForCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_with_required_period_dto_1.FilterCasesWithRequiredPeriodDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getTimelineForCases", null);
__decorate([
    (0, common_1.Get)('/cases-count'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Count of cases',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: count_ro_1.CountRO,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getCasesCount", null);
__decorate([
    (0, common_1.Get)('/how-are-organisations-handling-allegations'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get information on how are organisation handling allegations',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: type_value_ro_1.TypeValuesRO,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterCasesDto]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getInformationAboutCaseAccountability", null);
exports.CaseController = CaseController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiTags)('Statistic - Cases'),
    (0, common_1.Controller)('case'),
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    __param(1, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [case_service_1.CaseService,
        config_1.ConfigService])
], CaseController);
//# sourceMappingURL=case.controller.js.map