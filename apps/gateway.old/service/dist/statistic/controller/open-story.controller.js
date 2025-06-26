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
exports.OpenStoryController = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const swagger_1 = require("@nestjs/swagger");
const open_story_service_1 = require("../service/open-story.service");
const stories_and_replies_grouped_by_category_ro_1 = require("../response/stories-and-replies-grouped-by-category.ro");
const average_response_time_per_story_type_ro_1 = require("../response/average-response-time-per-story-type.ro");
const stories_divided_by_disability_ro_1 = require("../response/stories-divided-by-disability.ro");
const stories_type_and_replies_ro_1 = require("../response/stories-type-and-replies.ro");
const stories_author_per_age_and_gender_ro_1 = require("../response/stories-author-per-age-and-gender.ro");
const filter_dto_1 = require("../../common/dto/filter.dto");
const filter_schema_1 = require("../../common/request/schema/filter.schema");
const shared_1 = require("@ourloop/shared");
const stories_code_dates_ro_1 = require("../response/stories-code-dates.ro");
const thematic_service_1 = require("../../lexicon/service/thematic.service");
const helpers_1 = require("../../common/helpers");
const timeline_for_stories_and_retries_schema_1 = require("../request/schema/timeline-for-stories-and-retries-schema");
const timeline_for_stories_and_retries_mapper_1 = require("../mapper/timeline-for-stories-and-retries.mapper");
const count_ro_1 = require("../response/count.ro");
const organisation_service_1 = require("../../organisation/organisation.service");
const summary_mapper_1 = require("../mapper/summary.mapper");
const metabase_link_1 = require("../response/metabase-link");
const language_service_1 = require("../../language/language.service");
const country_service_1 = require("../../country/service/country.service");
const story_service_1 = require("../../story/service/story.service");
const comment_service_1 = require("../../comment/service/comment.service");
const passport_1 = require("@nestjs/passport");
let OpenStoryController = class OpenStoryController {
    constructor(openStoryService, thematicService, organisationService, languageService, countryService, storyService, commentService) {
        this.openStoryService = openStoryService;
        this.thematicService = thematicService;
        this.organisationService = organisationService;
        this.languageService = languageService;
        this.countryService = countryService;
        this.storyService = storyService;
        this.commentService = commentService;
    }
    async getSignedMetabaseURL() {
        return {
            url: this.openStoryService.getSignedMetabaseURL()
        };
    }
    async getSummary(filters) {
        const country = await this.countryService.findByCode(filters.country);
        const [organisations, languages, storyIds, commentIds] = await Promise.all([
            this.organisationService.findAll(),
            this.languageService.getVisibleLanguages(),
            this.storyService.findStoryIdsByParams({
                countryIds: country ? [country.id] : undefined,
            }, false),
            this.commentService.findCommentIdsByCountryAndStatus(country === null || country === void 0 ? void 0 : country.id, shared_1.COMMENT_STATUS.PUBLISHED),
        ]);
        return (0, summary_mapper_1.summaryMapper)({ organisations, languages, storyIds, commentIds });
    }
    async getStoriesTypeAndReplies(filters) {
        return this.openStoryService.getDataForStoriesTypeAndReplies(filters);
    }
    async getStoriesDividedByDisabilities(filters) {
        return this.openStoryService.getStoriesDividedByDisabilities(filters);
    }
    async getAvgResponseTimePerStoryType(filters) {
        return this.openStoryService.getAvgResponseTimePerStoryType(filters);
    }
    async getStoriesAuthorPerAgeAndGender(filters) {
        const age = await this.openStoryService.getStoriesAuthorPerAge(filters);
        const gender = await this.openStoryService.getStoriesAuthorPerGender(filters);
        return { age, gender };
    }
    async getStoriesAndRepliesGroupedByCategory(filters) {
        return this.openStoryService.getStoriesAndRepliesGroupedByCategoryAndType(filters);
    }
    async getStoriesPerThematicArea(filters) {
        return this.openStoryService.getStoriesPerThematicArea(filters);
    }
    async getTimelineForStoriesAndRetries(filters) {
        filters = (await (0, helpers_1.updateThematicFilters)(filters, this.thematicService));
        const categories = await this.openStoryService.getFilteredCategories(filters, { order: 'ASC' });
        const noSensitiveStoriesWithCategoryByPeriod = await this.openStoryService.getNoSensitiveStoriesWithCategoryByPeriod(filters);
        const sensitiveStoriesByPeriod = await this.openStoryService.getSensitiveStoriesByPeriod(filters);
        const commentsByPeriod = await this.openStoryService.getCommentsByPeriod(filters);
        return (0, timeline_for_stories_and_retries_mapper_1.timelineForStoriesAndRetriesMapper)(filters, categories, noSensitiveStoriesWithCategoryByPeriod, sensitiveStoriesByPeriod, commentsByPeriod);
    }
    async getOpenStoriesCount(filters) {
        return this.openStoryService.getCountOfStories(filters);
    }
};
exports.OpenStoryController = OpenStoryController;
__decorate([
    (0, common_1.Get)('/signed-embedd-url'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get the Metabase open feedback dashboard embedd url',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: metabase_link_1.MetabaseOpenFeedbackLinkRO }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OpenStoryController.prototype, "getSignedMetabaseURL", null);
__decorate([
    (0, common_1.Get)('/summary'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get number of stories, comments, organisations and languages',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: stories_type_and_replies_ro_1.StoriesTypeAndRepliesRO }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], OpenStoryController.prototype, "getSummary", null);
__decorate([
    (0, common_1.Get)('/stories-type-and-replies'),
    (0, swagger_1.ApiOperation)({ summary: 'Get statistics for story type and replies' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: stories_type_and_replies_ro_1.StoriesTypeAndRepliesRO }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], OpenStoryController.prototype, "getStoriesTypeAndReplies", null);
__decorate([
    (0, common_1.Get)('/stories-by-disabilities'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get statistics for stories divided by disabilities',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: stories_divided_by_disability_ro_1.StoriesDividedByDisabilityRO,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], OpenStoryController.prototype, "getStoriesDividedByDisabilities", null);
__decorate([
    (0, common_1.Get)('/average-response-time-per-story-type'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get statistics average response time per story type',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: average_response_time_per_story_type_ro_1.AvgResponseTimePerStoryTypeRO,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], OpenStoryController.prototype, "getAvgResponseTimePerStoryType", null);
__decorate([
    (0, common_1.Get)('/stories-authors-age-gender'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get statistics stories authors per age and gender divided by story type',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: stories_author_per_age_and_gender_ro_1.StoriesAuthorPerAgeAndGenderRO,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], OpenStoryController.prototype, "getStoriesAuthorPerAgeAndGender", null);
__decorate([
    (0, common_1.Get)('/stories-and-replies-grouped-by-category'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get statistics for stories and replies by category',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: stories_and_replies_grouped_by_category_ro_1.StoriesAndRepliesGroupedByCategoryRO,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], OpenStoryController.prototype, "getStoriesAndRepliesGroupedByCategory", null);
__decorate([
    (0, common_1.Get)('/stories-per-thematic-area'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get statistics stories per thematic area divided by story type',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: stories_author_per_age_and_gender_ro_1.StoriesCodeValuesRO,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], OpenStoryController.prototype, "getStoriesPerThematicArea", null);
__decorate([
    (0, common_1.Get)('/timeline-for-stories-and-retries'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get timeline for stories and retries',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: stories_code_dates_ro_1.StoriesCodeDatesRO,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(timeline_for_stories_and_retries_schema_1.timelineForStoriesAndRetriesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], OpenStoryController.prototype, "getTimelineForStoriesAndRetries", null);
__decorate([
    (0, common_1.Get)('/open-stories-count'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Count of open stories',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: count_ro_1.CountRO,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], OpenStoryController.prototype, "getOpenStoriesCount", null);
exports.OpenStoryController = OpenStoryController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiTags)('Statistic - Open'),
    (0, common_1.Controller)('open-story'),
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    __metadata("design:paramtypes", [open_story_service_1.OpenStoryService,
        thematic_service_1.ThematicService,
        organisation_service_1.OrganisationService,
        language_service_1.LanguageService,
        country_service_1.CountryService,
        story_service_1.StoryService,
        comment_service_1.CommentService])
], OpenStoryController);
//# sourceMappingURL=open-story.controller.js.map