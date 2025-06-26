"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessengerModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("../database/database.module");
const shared_1 = require("@ourloop/shared");
const category_repository_1 = require("../category/category.repository");
const category_entity_1 = require("../category/entity/category.entity");
const country_entity_1 = require("../country/entity/country.entity");
const country_repository_1 = require("../country/repository/country.repository");
const language_entity_1 = require("../language/entity/language.entity");
const language_repository_1 = require("../language/language.repository");
const story_module_1 = require("../story/story.module");
const facebook_controller_1 = require("./controller/facebook.controller");
const messenger_message_entity_1 = require("./entity/messenger-message.entity");
const messenger_message_repository_1 = require("./repository/messenger-message.repository");
const messenger_service_1 = require("./service/messenger.service");
const default_1 = require("../config/default");
const whats_app_controller_1 = require("./controller/whats-app.controller");
const telegram_controller_1 = require("./controller/telegram.controller");
const config_provider_1 = require("../common/provider/config.provider");
const cerbos_service_1 = require("../common/cerbos/cerbos.service");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
let MessengerModule = class MessengerModule {
};
exports.MessengerModule = MessengerModule;
exports.MessengerModule = MessengerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([
                messenger_message_entity_1.MessengerMessageEntity,
                messenger_message_repository_1.MessengerMessageRepository,
                language_entity_1.LanguageEntity,
                language_repository_1.LanguageRepository,
                category_entity_1.CategoryEntity,
                category_repository_1.CategoryRepository,
                country_entity_1.CountryEntity,
                country_repository_1.CountryRepository,
            ]),
            (0, common_1.forwardRef)(() => story_module_1.StoryModule),
        ],
        controllers: [
            facebook_controller_1.FacebookMessengerController,
            whats_app_controller_1.WhatsAppMessengerController,
            telegram_controller_1.TelegramMessengerController,
        ],
        providers: [messenger_service_1.MessengerService, shared_1.ClientProxyProvider, config_provider_1.ConfigProvider, cerbos_service_1.CerbosService, permission_guard_1.PermissionGuard],
        exports: [messenger_service_1.MessengerService],
    })
], MessengerModule);
//# sourceMappingURL=messenger.module.js.map