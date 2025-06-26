"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenStoryService = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../../category/category.service");
const difficulty_service_1 = require("../../lexicon/service/difficulty.service");
const open_story_for_comment_repository_1 = require("../repository/open-story-for-comment.repository");
const open_story_for_category_repository_1 = require("../repository/open-story-for-category.repository");
const open_story_for_story_repository_1 = require("../repository/open-story-for-story.repository");
const types_1 = require("../../common/types");
const shared_1 = require("@ourloop/shared");
const helpers_1 = require("../../common/helpers");
const thematic_service_1 = require("../../lexicon/service/thematic.service");
const case_repository_1 = require("../repository/case.repository");
const category_repository_1 = require("../../category/category.repository");
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("@nestjs/config");
let OpenStoryService = class OpenStoryService {
    constructor(categoryRepository, openStoryForStoryRepository, openStoryForCommentRepository, openStoryForCategoryRepository, difficultyService, categoryService, thematicService, caseRepository, config) {
        this.categoryRepository = categoryRepository;
        this.openStoryForStoryRepository = openStoryForStoryRepository;
        this.openStoryForCommentRepository = openStoryForCommentRepository;
        this.openStoryForCategoryRepository = openStoryForCategoryRepository;
        this.difficultyService = difficultyService;
        this.categoryService = categoryService;
        this.thematicService = thematicService;
        this.caseRepository = caseRepository;
        this.config = config;
    }
    getSignedMetabaseURL() {
        var METABASE_SITE_URL = "https://meta.talktoloop.org";
        var METABASE_SECRET_KEY = this.config.get('metabase_secret_key');
        var payload = {
            resource: { dashboard: 2 },
            params: {},
            exp: Math.round(Date.now() / 1000) + (60 * 60)
        };
        var token = jwt.sign(payload, METABASE_SECRET_KEY);
        var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token +
            "#bordered=true&titled=true";
        return iframeUrl;
    }
    async getCountOfStories(filters) {
        filters = await (0, helpers_1.updateThematicFilters)(filters, this.thematicService);
        const [count] = await this.openStoryForStoryRepository.findCountOfStoriesByFilter(filters);
        return count;
    }
    async getStoriesPerThematicArea(filters) {
        const storyTypes = await this.categoryService.findAll({ order: 'ASC' });
        filters = await (0, helpers_1.updateThematicFilters)(filters, this.thematicService);
        const thematicElements = (await this.thematicService.findAll()).map(({ code, id }) => {
            return {
                code,
                id,
            };
        });
        let storyTypeCount;
        const data = await Promise.all(storyTypes.map(async ({ code, id }) => {
            storyTypeCount =
                await this.openStoryForStoryRepository.getStoriesPerThematicArea(filters, shared_1.STORY_STATUS.PUBLISHED, id);
            let response = {};
            const values = [];
            thematicElements.forEach((element) => {
                var _a, _b;
                values.push((_b = (_a = storyTypeCount.find(({ thematicId }) => thematicId === element.id)) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0);
            });
            response = Object.assign(Object.assign({}, response), { code, values });
            return response;
        }));
        storyTypeCount =
            await this.openStoryForStoryRepository.getStoriesPerThematicArea(filters, shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER);
        const values = [];
        thematicElements.forEach((element) => {
            var _a, _b;
            values.push((_b = (_a = storyTypeCount.find(({ thematicId }) => thematicId === element.id)) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0);
        });
        data.push({
            code: 'sensitive',
            values,
        });
        return data;
    }
    async getStoriesAuthorPerAge(filters) {
        const storyTypes = await this.categoryService.findAll({ order: 'ASC' });
        filters = await (0, helpers_1.updateThematicFilters)(filters, this.thematicService);
        const countOfStoriesForStoryTypeDividedByAge = await this.openStoryForStoryRepository.getCountOfSensitiveStoriesDividedByAge(filters);
        const response = await Promise.all(storyTypes.map(async ({ code, id }) => {
            var _a, _b;
            const storyTypeCountsAndAges = await this.openStoryForStoryRepository.getCountOfStoriesForStoryTypeDividedByAge(id, filters);
            let response = {};
            const values = [];
            for (const ageEnum in types_1.AGE_VALUE) {
                values.push((_b = (_a = storyTypeCountsAndAges.find(({ age }) => age === types_1.AGE_VALUE[ageEnum])) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0);
            }
            response = Object.assign(Object.assign({}, response), { code, values });
            return response;
        }));
        response.push({
            code: 'sensitive',
            values: Object.values(types_1.AGE_VALUE).map((value) => {
                var _a, _b;
                return (_b = (_a = countOfStoriesForStoryTypeDividedByAge.find(({ age }) => age === value)) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0;
            }),
        });
        return response;
    }
    async getStoriesAuthorPerGender(filters) {
        const storyTypes = await this.categoryService.findAll({ order: 'ASC' });
        filters = await (0, helpers_1.updateThematicFilters)(filters, this.thematicService);
        const countOfSensitiveStoriesDividedByGender = await this.openStoryForStoryRepository.getCountOfSensitiveStoriesDividedByGender(filters);
        const response = await Promise.all(storyTypes.map(async ({ code, id }) => {
            var _a, _b;
            const storyTypeCountsAndGender = await this.openStoryForStoryRepository.getCountOfStoriesForStoryTypeDividedByGender(id, filters);
            let response = {};
            const values = [];
            for (const genderEnum in types_1.GENDER_VALUE) {
                values.push((_b = (_a = storyTypeCountsAndGender.find(({ gender }) => gender === types_1.GENDER_VALUE[genderEnum])) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0);
            }
            response = Object.assign(Object.assign({}, response), { code, values });
            return response;
        }));
        response.push({
            code: 'sensitive',
            values: Object.values(types_1.GENDER_VALUE).map((value) => {
                var _a, _b;
                return (_b = (_a = countOfSensitiveStoriesDividedByGender.find(({ gender }) => gender === value)) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0;
            }),
        });
        return response;
    }
    calculateAvg(data) {
        return Math.round(data
            .filter((item) => item.time >= 0)
            .reduce((acc, item) => {
            acc = acc + item.time;
            return acc;
        }, 0) /
            data.length /
            60);
    }
    async getAvgResponseTimePerStoryType(filters) {
        const [storyTypes, averageProcessingTime] = await Promise.all([
            filters.type
                ? this.categoryRepository.findByIds(filters.type.toString().split(','))
                : this.categoryService.findAll({ order: 'ASC' }),
            this.caseRepository.getAvgTakenTime(),
        ]);
        filters = await (0, helpers_1.updateThematicFilters)(filters, this.thematicService);
        const data = await Promise.all(storyTypes.map(async ({ code, id }) => {
            const storyTypeTimes = await this.openStoryForStoryRepository.getAvgStoryResponseTimePerStoryType(id, filters);
            return {
                code,
                average: this.calculateAvg(storyTypeTimes),
            };
        }));
        const { average } = (0, helpers_1.getAverageValue)(averageProcessingTime.map((item) => ({
            average: item.averageHours,
            count: item.count,
        })));
        if (!filters.type) {
            data.push({
                code: 'sensitive',
                average,
            });
        }
        return data;
    }
    async getDataForStoriesTypeAndReplies(filters) {
        filters = await (0, helpers_1.updateThematicFilters)(filters, this.thematicService);
        const total = await this.openStoryForStoryRepository.getStoriesTotal(filters);
        let percentOfStoriesWithResponded = 0;
        let percentOfStoriesWithOrganisationResponded = 0;
        if (total > 0) {
            percentOfStoriesWithResponded = Math.round(((await this.openStoryForStoryRepository.getCountOfStoriesWithResponds(filters)) /
                total) *
                100);
            percentOfStoriesWithOrganisationResponded = Math.round(((await this.openStoryForStoryRepository.getCountOfStoriesWithOrganisationResponds(filters)) /
                total) *
                100);
        }
        const organisationIds = await this.openStoryForStoryRepository.getUniqueTaggedOrganisationIds(filters);
        const uniqueNotAnonymousAuthors = await this.openStoryForStoryRepository.getUniqueNotAnonymousStoryAuthors(filters);
        const numberOfAnonymousStoryAuthors = await this.openStoryForStoryRepository.getNumberOfAnonymousStoryAuthors(filters);
        const countOfResponses = await this.openStoryForCommentRepository.getTotalResponsesCount(filters);
        const timesForResponse = await this.openStoryForStoryRepository.getAvgResponseTime(filters);
        const avgResponseTime = timesForResponse.length > 0 ? this.calculateAvg(timesForResponse) : 0;
        const countOfFeedbacks = await this.openStoryForStoryRepository.getStoriesTotal(filters);
        return {
            percentOfStoriesWithResponded,
            percentOfStoriesWithOrganisationResponded,
            countOfTaggedOrganisation: organisationIds.length,
            uniqueAuthors: uniqueNotAnonymousAuthors.length + numberOfAnonymousStoryAuthors,
            countOfFeedbacks,
            avgResponseTime,
            countOfResponses,
        };
    }
    async getStoriesDividedByDisabilities(filters) {
        filters = await (0, helpers_1.updateThematicFilters)(filters, this.thematicService);
        const storiesDisabilities = await this.openStoryForStoryRepository.getStoriesDividedByDisabilities(filters);
        const total = await this.openStoryForStoryRepository.getStoriesTotal(filters);
        const disabilities = await this.difficultyService.findAll();
        const result = [];
        disabilities.forEach((disability) => {
            var _a, _b;
            let percent = 0;
            const count = (_b = (_a = storiesDisabilities.find(({ code }) => code === disability.code)) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0;
            if (total > 0) {
                percent = Math.round((count / total) * 100);
            }
            result.push({
                code: disability.code,
                percent,
                count,
            });
        });
        return result;
    }
    async getStoriesAndRepliesGroupedByCategoryAndType(filters) {
        filters = await (0, helpers_1.updateThematicFilters)(filters, this.thematicService);
        const categories = await this.categoryService.findAll({ order: 'ASC' });
        const storiesAndRepliesGroupedByCategory = await this.openStoryForCategoryRepository.getStoriesAndRepliesGroupedByCategory(filters);
        const numberOfSensitiveStories = await this.openStoryForStoryRepository.getNumberOfSensitiveStories(filters);
        const numberOfCommunityRepliesForSenstiveStories = await this.openStoryForCommentRepository.getNumberOfCommunityRepliesForSenstiveStories(filters);
        const numberOfOrganizationRepliesForSenstiveStories = await this.openStoryForCommentRepository.getNumberOfOrganizationRepliesForSenstiveStories(filters);
        const response = categories.map((category) => {
            const item = storiesAndRepliesGroupedByCategory.find((row) => row.code === category.code);
            if (item) {
                return {
                    code: item.code,
                    stories: [item.numberOfStories],
                    replies: [
                        item.numberOfCommentsFromCommunity,
                        item.numberOfCommentsFromOrganizations,
                    ],
                };
            }
            return {
                code: category.code,
                stories: [0],
                replies: [0, 0],
            };
        });
        response.push({
            code: 'sensitive',
            stories: [numberOfSensitiveStories],
            replies: [
                numberOfCommunityRepliesForSenstiveStories,
                numberOfOrganizationRepliesForSenstiveStories,
            ],
        });
        return response;
    }
    async getFilteredCategories(params, order = {}) {
        const categories = await this.categoryService.findAll(order);
        const categoryIds = params.type
            ? params.type.toString().split(',')
            : undefined;
        return categories.filter((category) => !categoryIds || categoryIds.includes(category.id.toString()));
    }
    async getNoSensitiveStoriesWithCategoryByPeriod(filters) {
        return this.openStoryForCategoryRepository.getNoSensitiveStoriesWithCategoryByPeriod(filters);
    }
    async getSensitiveStoriesByPeriod(filters) {
        return this.openStoryForStoryRepository.getSensitiveStoriesByPeriod(filters);
    }
    async getCommentsByPeriod(filters) {
        return this.openStoryForCommentRepository.getCommentsByPeriod(filters);
    }
};
exports.OpenStoryService = OpenStoryService;
exports.OpenStoryService = OpenStoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository,
        open_story_for_story_repository_1.OpenStoryForStoryRepository,
        open_story_for_comment_repository_1.OpenStoryForCommentRepository,
        open_story_for_category_repository_1.OpenStoryForCategoryRepository,
        difficulty_service_1.DifficultyService,
        category_service_1.CategoryService,
        thematic_service_1.ThematicService,
        case_repository_1.CaseRepository,
        config_1.ConfigService])
], OpenStoryService);
//# sourceMappingURL=open-story.service.js.map