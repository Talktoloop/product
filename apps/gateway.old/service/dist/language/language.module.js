"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModule = void 0;
const common_1 = require("@nestjs/common");
const language_entity_1 = require("./entity/language.entity");
const language_repository_1 = require("./language.repository");
const database_module_1 = require("../database/database.module");
const language_controller_1 = require("./language.controller");
const language_service_1 = require("./language.service");
const aws_translation_provider_1 = require("../common/provider/aws-translation-provider");
const google_translation_provider_1 = require("../common/provider/google-translation-provider");
const story_module_1 = require("../story/story.module");
const comment_module_1 = require("../comment/comment.module");
const config_provider_1 = require("../common/provider/config.provider");
const default_1 = require("../config/default");
const config_1 = require("@nestjs/config");
let LanguageModule = class LanguageModule {
};
exports.LanguageModule = LanguageModule;
exports.LanguageModule = LanguageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([language_entity_1.LanguageEntity, language_repository_1.LanguageRepository]),
            (0, common_1.forwardRef)(() => story_module_1.StoryModule),
            (0, common_1.forwardRef)(() => comment_module_1.CommentModule),
        ],
        controllers: [language_controller_1.LanguageController],
        providers: [
            language_service_1.LanguageService,
            aws_translation_provider_1.AwsTranslationServiceProvider,
            aws_translation_provider_1.LambdaServiceProvider,
            google_translation_provider_1.GoogleTranslationServiceProvider,
            config_provider_1.ConfigProvider,
        ],
        exports: [language_service_1.LanguageService],
    })
], LanguageModule);
//# sourceMappingURL=language.module.js.map