"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const category_module_1 = require("../category/category.module");
const lexicon_module_1 = require("../lexicon/lexicon.module");
const open_story_controller_1 = require("./controller/open-story.controller");
const open_story_for_comment_repository_1 = require("./repository/open-story-for-comment.repository");
const open_story_for_story_repository_1 = require("./repository/open-story-for-story.repository");
const open_story_for_category_repository_1 = require("./repository/open-story-for-category.repository");
const open_story_service_1 = require("./service/open-story.service");
const cache_provider_1 = require("../common/provider/cache-provider");
const case_repository_1 = require("./repository/case.repository");
const case_controller_1 = require("./controller/case.controller");
const case_service_1 = require("./service/case.service");
const category_repository_1 = require("../category/category.repository");
const case_filter_controller_1 = require("./controller/case-filter.controller");
const country_module_1 = require("../country/country.module");
const default_1 = require("../config/default");
const config_1 = require("@nestjs/config");
const config_provider_1 = require("../common/provider/config.provider");
const case_investigation_repository_1 = require("./repository/case-investigation.repository");
const organisation_module_1 = require("../organisation/organisation.module");
const language_module_1 = require("../language/language.module");
const story_module_1 = require("../story/story.module");
const comment_module_1 = require("../comment/comment.module");
let StatisticModule = class StatisticModule {
};
exports.StatisticModule = StatisticModule;
exports.StatisticModule = StatisticModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([
                case_repository_1.CaseRepository,
                open_story_for_comment_repository_1.OpenStoryForCommentRepository,
                open_story_for_category_repository_1.OpenStoryForCategoryRepository,
                open_story_for_story_repository_1.OpenStoryForStoryRepository,
                category_repository_1.CategoryRepository,
                case_investigation_repository_1.CaseInvestigationRepository,
            ]),
            cache_provider_1.CacheProvider,
            lexicon_module_1.LexiconModule,
            category_module_1.CategoryModule,
            country_module_1.CountryModule,
            organisation_module_1.OrganisationModule,
            language_module_1.LanguageModule,
            story_module_1.StoryModule,
            comment_module_1.CommentModule,
        ],
        controllers: [open_story_controller_1.OpenStoryController, case_controller_1.CaseController, case_filter_controller_1.CaseFilterController],
        providers: [open_story_service_1.OpenStoryService, case_service_1.CaseService, config_provider_1.ConfigProvider],
    })
], StatisticModule);
//# sourceMappingURL=statistic.module.js.map