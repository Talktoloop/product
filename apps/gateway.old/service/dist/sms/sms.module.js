"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsModule = void 0;
const common_1 = require("@nestjs/common");
const message_entity_1 = require("./entity/message.entity");
const message_repository_1 = require("./repository/message.repository");
const database_module_1 = require("../database/database.module");
const conversation_controller_1 = require("./controller/conversation.controller");
const message_service_1 = require("./service/message.service");
const language_entity_1 = require("../language/entity/language.entity");
const language_repository_1 = require("../language/language.repository");
const story_module_1 = require("../story/story.module");
const message_controller_1 = require("./controller/message.controller");
const shared_1 = require("@ourloop/shared");
const story_entity_1 = require("../story/entity/story.entity");
const story_repository_1 = require("../story/repository/story.repository");
const country_module_1 = require("../country/country.module");
const config_provider_1 = require("../common/provider/config.provider");
const default_1 = require("../config/default");
const config_1 = require("@nestjs/config");
const language_module_1 = require("../language/language.module");
const twilio_provider_1 = require("../common/provider/twilio.provider");
const textit_provider_1 = require("../common/provider/textit-provider");
const cerbos_service_1 = require("../common/cerbos/cerbos.service");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
let SmsModule = class SmsModule {
};
exports.SmsModule = SmsModule;
exports.SmsModule = SmsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([
                message_entity_1.MessageEntity,
                message_repository_1.MessageRepository,
                language_entity_1.LanguageEntity,
                language_repository_1.LanguageRepository,
                story_entity_1.StoryEntity,
                story_repository_1.StoryRepository,
            ]),
            (0, common_1.forwardRef)(() => story_module_1.StoryModule),
            (0, common_1.forwardRef)(() => country_module_1.CountryModule),
            (0, common_1.forwardRef)(() => language_module_1.LanguageModule),
        ],
        controllers: [conversation_controller_1.ConversationController, message_controller_1.MessageController],
        providers: [
            message_service_1.MessageService,
            shared_1.ClientProxyProvider,
            config_provider_1.ConfigProvider,
            twilio_provider_1.TwilioProvider,
            textit_provider_1.TextItProvider,
            cerbos_service_1.CerbosService,
            permission_guard_1.PermissionGuard
        ],
        exports: [message_service_1.MessageService],
    })
], SmsModule);
//# sourceMappingURL=sms.module.js.map