"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const story_module_1 = require("./story/story.module");
const comment_module_1 = require("./comment/comment.module");
const user_module_1 = require("./user/user.module");
const organisation_module_1 = require("./organisation/organisation.module");
const typeorm_1 = require("@nestjs/typeorm");
const category_module_1 = require("./category/category.module");
const lexicon_module_1 = require("./lexicon/lexicon.module");
const auth_module_1 = require("./auth/auth.module");
const notification_module_1 = require("./notification/notification.module");
const language_module_1 = require("./language/language.module");
const shared_1 = require("@ourloop/shared");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const sms_module_1 = require("./sms/sms.module");
const case_manager_module_1 = require("./case-manager/case-manager.module");
const country_module_1 = require("./country/country.module");
const throttler_1 = require("@nestjs/throttler");
const statistic_module_1 = require("./statistic/statistic.module");
const airtable_client_module_1 = require("./airtable-client/airtable-client.module");
const messenger_module_1 = require("./messenger/messenger.module");
const default_1 = require("./config/default");
const config_1 = require("@nestjs/config");
const config_provider_1 = require("./common/provider/config.provider");
const ivrr_module_1 = require("./ivrr/ivrr.module");
const config_2 = require("@nestjs/config");
const subscription_module_1 = require("./subscription/subscription.module");
const brevo_provider_1 = require("./common/provider/brevo.provider");
const cerbos_service_1 = require("./common/cerbos/cerbos.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                load: [default_1.dynamicConfiguration],
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_2.ConfigService],
                useFactory: (configService) => {
                    const databaseConfig = configService.get('database');
                    if (databaseConfig.enable_ssl === false ||
                        databaseConfig.enable_ssl === 'false') {
                        delete databaseConfig.ssl;
                    }
                    return Object.assign(Object.assign({}, databaseConfig), { entities: [__dirname + '/**/*.entity{.ts,.js}'], migrationsRun: configService.get('application.environment') === 'test', migrations: [__dirname + '/migrations/*{.ts,.js}'] });
                },
            }),
            throttler_1.ThrottlerModule.forRoot({
                throttlers: [
                    {
                        ttl: 10,
                        limit: 10,
                    },
                ],
            }),
            story_module_1.StoryModule,
            comment_module_1.CommentModule,
            user_module_1.UserModule,
            organisation_module_1.OrganisationModule,
            category_module_1.CategoryModule,
            lexicon_module_1.LexiconModule,
            auth_module_1.AuthModule,
            notification_module_1.NotificationModule,
            language_module_1.LanguageModule,
            dashboard_module_1.DashboardModule,
            sms_module_1.SmsModule,
            case_manager_module_1.CaseManagerModule,
            country_module_1.CountryModule,
            statistic_module_1.StatisticModule,
            airtable_client_module_1.AirTableClientModule,
            messenger_module_1.MessengerModule,
            ivrr_module_1.IvrrModule,
            subscription_module_1.SubscriptionModule,
        ],
        providers: [shared_1.ClientProxyProvider, config_provider_1.ConfigProvider, shared_1.AppHooksService, brevo_provider_1.BrevoProvider, cerbos_service_1.CerbosService],
        exports: [config_1.ConfigModule, cerbos_service_1.CerbosService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map