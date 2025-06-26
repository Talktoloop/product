"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModule = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("./service/notification.service");
const user_module_1 = require("../user/user.module");
const story_notification_service_1 = require("./service/story-notification.service");
const comment_notification_service_1 = require("./service/comment-notification.service");
const shared_1 = require("@ourloop/shared");
const database_module_1 = require("../database/database.module");
const mailjet_provider_1 = require("../common/provider/mailjet.provider");
const language_entity_1 = require("../language/entity/language.entity");
const language_repository_1 = require("../language/language.repository");
const config_provider_1 = require("../common/provider/config.provider");
const default_1 = require("../config/default");
const config_1 = require("@nestjs/config");
const notification_controller_1 = require("./controller/notification.controller");
const sms_module_1 = require("../sms/sms.module");
const user_repository_1 = require("../user/repository/user.repository");
const organisation_repository_1 = require("./../organisation/organisation.repository");
const case_manager_module_1 = require("../case-manager/case-manager.module");
let NotificationModule = class NotificationModule {
};
exports.NotificationModule = NotificationModule;
exports.NotificationModule = NotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            database_module_1.DatabaseModule.forFeature([
                language_entity_1.LanguageEntity,
                language_repository_1.LanguageRepository,
                user_repository_1.UserRepository,
                organisation_repository_1.OrganisationRepository,
            ]),
            sms_module_1.SmsModule,
            case_manager_module_1.CaseManagerModule
        ],
        controllers: [notification_controller_1.NotificationController],
        providers: [
            notification_service_1.NotificationService,
            story_notification_service_1.StoryNotificationService,
            comment_notification_service_1.CommentNotificationService,
            mailjet_provider_1.MailJetProvider,
            shared_1.ClientProxyProvider,
            config_provider_1.ConfigProvider,
            shared_1.MailJetService,
        ],
        exports: [
            notification_service_1.NotificationService,
            story_notification_service_1.StoryNotificationService,
            comment_notification_service_1.CommentNotificationService,
            mailjet_provider_1.MailJetProvider,
        ],
    })
], NotificationModule);
//# sourceMappingURL=notification.module.js.map