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
exports.ExportController = void 0;
const common_1 = require("@nestjs/common");
const story_service_1 = require("../service/story.service");
const swagger_1 = require("@nestjs/swagger");
const success_ro_1 = require("../../common/response/success.ro");
const success_mapper_1 = require("../../common/mapper/success.mapper");
const shared_1 = require("@ourloop/shared");
const shared_2 = require("@ourloop/shared");
const passport_1 = require("@nestjs/passport");
const story_filter_and_order_dto_1 = require("../request/dto/story-filter-and-order.dto");
const export_stories_schema_1 = require("../request/schema/export-stories.schema");
const export_stories_dto_1 = require("../request/dto/export-stories.dto");
const country_service_1 = require("../../country/service/country.service");
const export_service_1 = require("../service/export.service");
const organisation_service_1 = require("../../organisation/organisation.service");
const language_service_1 = require("../../language/language.service");
const filter_schema_1 = require("../../common/request/schema/filter.schema");
const exported_stories_mapper_1 = require("../mapper/exported-stories.mapper");
const languages_constants_1 = require("../../common/constant/languages.constants");
const language_id_decorator_1 = require("../../language/language-id.decorator");
const config_1 = require("@nestjs/config");
const di_constant_1 = require("../../common/constant/di.constant");
const auth_decorator_1 = require("../../auth/auth.decorator");
const user_entity_1 = require("../../user/entity/user.entity");
const subscription_service_1 = require("../../subscription/service/subscription.service");
const exported_stories_pagination_ro_1 = require("../response/exported-stories-pagination.ro");
const export_to_json_dto_1 = require("../request/dto/export-to-json.dto");
const export_to_json_schema_1 = require("../request/schema/export-to-json.schema");
const helpers_1 = require("../../common/helpers");
const http_cache_interceptor_1 = require("../../common/interceptor/http-cache.interceptor");
const posthog_service_1 = require("../service/posthog.service");
const un_data_export_service_1 = require("../service/un-data-export.service");
const cerbos_service_1 = require("../../common/cerbos/cerbos.service");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
let ExportController = class ExportController {
    constructor(storyService, subscriptionService, exportService, countryService, organisationService, languageService, posthogService, UNExportService, cerbosService, config) {
        this.storyService = storyService;
        this.subscriptionService = subscriptionService;
        this.exportService = exportService;
        this.countryService = countryService;
        this.organisationService = organisationService;
        this.languageService = languageService;
        this.posthogService = posthogService;
        this.UNExportService = UNExportService;
        this.cerbosService = cerbosService;
        this.config = config;
    }
    async exportToCsvByModerator(params) {
        var _a;
        const [defaultLanguage, countries, organisations] = await Promise.all([
            this.languageService.getDefaultLanguage(),
            this.countryService.findByPhrase(params.country),
            this.organisationService.findByPhrases(params.organisation ? params.organisation.split(',') : null),
        ]);
        const countryIds = countries.map((country) => country.id);
        const storyIds = await this.storyService.findStoryIdsByParams({
            countryIds: countryIds.length ? countryIds : null,
            from: params.from,
            to: params.to,
            organisation: organisations
                ? organisations.map((item) => item.id).join(',')
                : organisations,
            withSensitiveStories: !!params.withSensitiveStories,
        }, true, [shared_2.STORY_STATUS.PUBLISHED, shared_2.STORY_STATUS.SENT_TO_CASE_MANAGER]);
        const data = await this.exportService.findDataByStoryIds(storyIds);
        this.exportService.exportStoriesToCSVAndSendEmail(params.email, defaultLanguage, data);
        return (0, success_mapper_1.responseToSuccessRO)(((_a = data.stories) === null || _a === void 0 ? void 0 : _a.length) > 0);
    }
    async exportToJson(params, userLanguageId) {
        if (!params.page) {
            params.page = 1;
        }
        if (params.searchTerm) {
            params.searchTerm = await this.storyService.sanitizeSearchTerm(params.searchTerm.trim());
        }
        const defaultLanguage = await this.languageService.getDefaultLanguage();
        userLanguageId = userLanguageId !== null && userLanguageId !== void 0 ? userLanguageId : defaultLanguage.id;
        const filters = await this.exportService.prepareSearchParameters(params);
        const [storyIds, countries] = await Promise.all([
            this.storyService.findStoryIdsByParams(Object.assign(Object.assign({}, filters), { order: filters.order, withSensitiveStories: false, search_term: params.searchTerm }), true),
            this.countryService.getCountries(),
        ]);
        const data = await this.exportService.findDataByStoryIds(storyIds, filters);
        const mappedStories = await this.exportService.mapData(data, userLanguageId, false);
        return (0, exported_stories_mapper_1.exportedStoriesMapper)(mappedStories, countries, userLanguageId, defaultLanguage.id, this.config.get('frontend.url'), storyIds, params.page, params.limit);
    }
    async exportToCsv(user, filters, userLanguageId, response) {
        const tokenData = await this.subscriptionService.getUserSubscriptionToken(user);
        const hasPermission = await this.cerbosService.checkPermissionWithToken({ id: user.id, role: user.role }, { kind: permission_enum_1.CERBOS_RESOURCES.STORY, id: permission_enum_1.CERBOS_ACTIONS.EXPORT, attr: { token: tokenData.token } }, permission_enum_1.CERBOS_ACTIONS.EXPORT);
        if (!hasPermission) {
            throw new common_1.ForbiddenException();
        }
        const userLanguage = userLanguageId
            ? await this.languageService.getLanguageById(userLanguageId)
            : await this.languageService.getDefaultLanguage();
        if (filters === null || filters === void 0 ? void 0 : filters.storySearchText) {
            filters.searchTerm = await this.storyService.sanitizeSearchTerm(filters === null || filters === void 0 ? void 0 : filters.storySearchText.trim());
        }
        const csvFileName = this.exportService.findCacheFile(`${(0, helpers_1.generateMD5)(JSON.stringify(filters))}-${userLanguage === null || userLanguage === void 0 ? void 0 : userLanguage.code}`);
        this.posthogService.trackDataExport(user.id, 'subscription');
        if (csvFileName) {
            return response
                .set({
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="feedback.csv"`,
            })
                .send(this.exportService.readFile(csvFileName, 'utf-8'));
        }
        const storyIds = await this.storyService.findStoryIdsByParams(Object.assign(Object.assign({}, filters), { withSensitiveStories: false, searchTerm: filters.searchTerm }), true);
        const data = await this.exportService.findDataByStoryIds(storyIds);
        const dataAsArray = await this.exportService.prepareStoriesToExport(userLanguage, data, [], false);
        this.exportService.saveCacheFile(this.exportService.generateCsvFileName(filters, userLanguage === null || userLanguage === void 0 ? void 0 : userLanguage.code), this.exportService.prepareCSVContent(dataAsArray));
        return response
            .set({
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="feedback.csv"`,
        })
            .send(this.exportService.prepareCSVContent(dataAsArray));
    }
    async saveUserCsvActivity(user) {
        const activity = await this.exportService.saveUserExportCsvActivity(user === null || user === void 0 ? void 0 : user.id);
        return { success: !!activity };
    }
    async exportUNFeedbackToCsv(filters, response) {
        filters.page = 1;
        filters.limit = 30;
        if (filters === null || filters === void 0 ? void 0 : filters.storySearchText) {
            filters.searchTerm = await this.storyService.sanitizeSearchTerm(filters === null || filters === void 0 ? void 0 : filters.storySearchText.trim());
        }
        let storyIds = [];
        const criteria = 'un-export';
        const filename = `${(0, helpers_1.generateMD5)(JSON.stringify(filters))}-${criteria}`;
        const csvFileName = this.exportService.findCacheFile(filename);
        if (csvFileName) {
            return response
                .set({
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="un-feedback.csv"`,
            })
                .send(this.exportService.readFile(csvFileName, 'utf-8'));
        }
        storyIds = await this.storyService.findStoryIdsByParams(Object.assign(Object.assign({}, filters), { withSensitiveStories: false, searchTerm: filters.searchTerm }), true);
        if (storyIds.length === 0) {
            return response
                .set({
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="${filename}.csv"`,
            })
                .send(this.exportService.prepareCSVContent([]));
        }
        return await this.UNExportService.processCsvExport(filters, storyIds, response, filename);
    }
};
exports.ExportController = ExportController;
__decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.UseGuards)(shared_2.BaseAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Export stories to CSV by moderator' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Post)('moderator'),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(export_stories_schema_1.exportStoriesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [export_stories_dto_1.ExportStoriesDTO]),
    __metadata("design:returntype", Promise)
], ExportController.prototype, "exportToCsvByModerator", null);
__decorate([
    (0, common_1.UseInterceptors)(http_cache_interceptor_1.HttpCacheInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('subscription')),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.Get)('json'),
    (0, swagger_1.ApiOperation)({
        summary: 'Export stories in JSON format by user with subscription',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: exported_stories_pagination_ro_1.ExportedStoriesWithPaginationRO }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(export_to_json_schema_1.exportToJsonSchema))),
    __param(1, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [export_to_json_dto_1.ExportToJsonDTO, Number]),
    __metadata("design:returntype", Promise)
], ExportController.prototype, "exportToJson", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.Get)('csv'),
    (0, swagger_1.ApiOperation)({
        summary: 'Export stories to CSV by user with subscription.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __param(2, (0, language_id_decorator_1.LanguageId)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        story_filter_and_order_dto_1.StoryFilterAndOrderDto, Number, Object]),
    __metadata("design:returntype", Promise)
], ExportController.prototype, "exportToCsv", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, common_1.Get)('user-csv-activity'),
    (0, swagger_1.ApiOperation)({
        summary: 'Collect information when user exit export csv modal',
    }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    __param(0, (0, auth_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ExportController.prototype, "saveUserCsvActivity", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, common_1.Get)('un-data/csv'),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, swagger_1.ApiOperation)({
        summary: 'Export UN feedback to CSV.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [story_filter_and_order_dto_1.StoryFilterAndOrderDto, Object]),
    __metadata("design:returntype", Promise)
], ExportController.prototype, "exportUNFeedbackToCsv", null);
exports.ExportController = ExportController = __decorate([
    (0, swagger_1.ApiTags)('Story Export'),
    (0, common_1.Controller)('export'),
    __param(9, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [story_service_1.StoryService,
        subscription_service_1.SubscriptionService,
        export_service_1.ExportService,
        country_service_1.CountryService,
        organisation_service_1.OrganisationService,
        language_service_1.LanguageService,
        posthog_service_1.PosthogService,
        un_data_export_service_1.UNDataExportService,
        cerbos_service_1.CerbosService,
        config_1.ConfigService])
], ExportController);
//# sourceMappingURL=export.controller.js.map