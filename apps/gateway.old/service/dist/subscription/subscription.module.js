"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const config_1 = require("@nestjs/config");
const default_1 = require("../config/default");
const subscription_controller_1 = require("./controller/subscription.controller");
const subscription_service_1 = require("./service/subscription.service");
const notification_module_1 = require("../notification/notification.module");
const organisation_module_1 = require("../organisation/organisation.module");
const organisation_repository_1 = require("../organisation/organisation.repository");
const config_provider_1 = require("../common/provider/config.provider");
const user_repository_1 = require("../user/repository/user.repository");
const user_token_repository_1 = require("./repository/user-token.repository");
const organisation_token_repository_1 = require("./repository/organisation-token.repository");
const user_module_1 = require("../user/user.module");
const subscription_application_repository_1 = require("../subscription/repository/subscription-application.repository");
const airtable_user_service_1 = require("../airtable-client/service/airtable-user.service");
const organisation_application_repository_1 = require("../user/repository/organisation-application.repository");
const airtable_organisation_service_1 = require("../airtable-client/service/airtable-organisation.service");
let SubscriptionModule = class SubscriptionModule {
};
exports.SubscriptionModule = SubscriptionModule;
exports.SubscriptionModule = SubscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([
                organisation_repository_1.OrganisationRepository,
                user_repository_1.UserRepository,
                user_token_repository_1.UserTokenRepository,
                organisation_token_repository_1.OrganisationTokenRepository,
                subscription_application_repository_1.SubscriptionApplicationRepository,
                organisation_application_repository_1.OrganisationApplicationRepository
            ]),
            notification_module_1.NotificationModule,
            (0, common_1.forwardRef)(() => organisation_module_1.OrganisationModule),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
        ],
        controllers: [subscription_controller_1.SubscriptionController],
        providers: [subscription_service_1.SubscriptionService, airtable_user_service_1.AirTableUserService, airtable_organisation_service_1.AirTableOrganisationService, config_provider_1.ConfigProvider],
        exports: [subscription_service_1.SubscriptionService],
    })
], SubscriptionModule);
//# sourceMappingURL=subscription.module.js.map