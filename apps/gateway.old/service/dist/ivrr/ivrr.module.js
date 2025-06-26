"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvrrModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("../database/database.module");
const shared_1 = require("@ourloop/shared");
const story_module_1 = require("../story/story.module");
const default_1 = require("../config/default");
const config_provider_1 = require("../common/provider/config.provider");
const ivrr_service_1 = require("./service/ivrr.service");
const ivrr_controller_1 = require("./controller/ivrr.controller");
const country_entity_1 = require("../country/entity/country.entity");
const country_repository_1 = require("../country/repository/country.repository");
const language_entity_1 = require("../language/entity/language.entity");
const language_repository_1 = require("../language/language.repository");
const ivrr_call_entity_1 = require("./entity/ivrr-call.entity");
const ivrr_call_repository_1 = require("./repository/ivrr-call.repository");
const story_repository_1 = require("../story/repository/story.repository");
const story_entity_1 = require("../story/entity/story.entity");
const aws_translation_provider_1 = require("../common/provider/aws-translation-provider");
const comment_module_1 = require("../comment/comment.module");
const comment_entity_1 = require("../comment/entity/comment.entity");
const comment_repository_1 = require("../comment/repository/comment.repository");
const axios_1 = require("@nestjs/axios");
const language_module_1 = require("../language/language.module");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
const cerbos_service_1 = require("../common/cerbos/cerbos.service");
let IvrrModule = class IvrrModule {
};
exports.IvrrModule = IvrrModule;
exports.IvrrModule = IvrrModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([
                story_entity_1.StoryEntity,
                story_repository_1.StoryRepository,
                comment_entity_1.CommentEntity,
                comment_repository_1.CommentRepository,
                ivrr_call_entity_1.IvrrCallEntity,
                ivrr_call_repository_1.IvrrCallRepository,
                language_entity_1.LanguageEntity,
                language_repository_1.LanguageRepository,
                country_entity_1.CountryEntity,
                country_repository_1.CountryRepository,
            ]),
            (0, common_1.forwardRef)(() => story_module_1.StoryModule),
            (0, common_1.forwardRef)(() => comment_module_1.CommentModule),
            (0, common_1.forwardRef)(() => language_module_1.LanguageModule),
            axios_1.HttpModule,
        ],
        controllers: [ivrr_controller_1.IvrrController],
        providers: [
            ivrr_service_1.IvrrService,
            shared_1.ClientProxyProvider,
            config_provider_1.ConfigProvider,
            aws_translation_provider_1.LambdaServiceProvider,
            shared_1.S3Provider,
            shared_1.S3Service,
            cerbos_service_1.CerbosService,
            permission_guard_1.PermissionGuard
        ],
        exports: [ivrr_service_1.IvrrService],
    })
], IvrrModule);
//# sourceMappingURL=ivrr.module.js.map