"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./service/user.service");
const user_controller_1 = require("./controller/user.controller");
const organisation_application_controller_1 = require("./controller/organisation-application.controller");
const database_module_1 = require("../database/database.module");
const user_entity_1 = require("./entity/user.entity");
const user_repository_1 = require("./repository/user.repository");
const google_places_provider_1 = require("../common/provider/google-places-provider");
const geo_ip_provider_1 = require("../common/provider/geo-ip-provider");
const geocoding_provider_1 = require("../common/provider/geocoding-provider");
const country_module_1 = require("../country/country.module");
const config_provider_1 = require("../common/provider/config.provider");
const default_1 = require("../config/default");
const config_1 = require("@nestjs/config");
const organisation_application_entity_1 = require("./entity/organisation-application.entity");
const organisation_application_repository_1 = require("./repository/organisation-application.repository");
const organisation_application_service_1 = require("./service/organisation-application.service");
const user_consent_entity_1 = require("./entity/user-consent.entity");
const user_consent_repository_1 = require("./repository/user-consent.repository");
const auth_module_1 = require("../auth/auth.module");
const subscription_module_1 = require("../subscription/subscription.module");
const airtable_user_service_1 = require("../airtable-client/service/airtable-user.service");
const airtable_organisation_service_1 = require("../airtable-client/service/airtable-organisation.service");
const organisation_repository_1 = require("../organisation/organisation.repository");
const organisation_module_1 = require("../organisation/organisation.module");
const notification_module_1 = require("../notification/notification.module");
const shared_1 = require("@ourloop/shared");
const filters_preset_entity_1 = require("./entity/filters-preset.entity");
const filters_preset_repository_1 = require("./repository/filters-preset.repository");
const filters_preset_service_1 = require("./service/filters-preset.service");
const filters_preset_controller_1 = require("./controller/filters-preset.controller");
const brevo_provider_1 = require("../common/provider/brevo.provider");
const brevo_service_1 = require("./service/brevo.service");
const cerbos_service_1 = require("../common/cerbos/cerbos.service");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([
                user_entity_1.UserEntity,
                user_repository_1.UserRepository,
                organisation_application_entity_1.OrganisationApplicationEntity,
                organisation_application_repository_1.OrganisationApplicationRepository,
                user_consent_entity_1.UserConsentEntity,
                user_consent_repository_1.UserConsentRepository,
                organisation_repository_1.OrganisationRepository,
                filters_preset_entity_1.PresetEntity,
                filters_preset_repository_1.FiltersPresetRepository,
            ]),
            country_module_1.CountryModule,
            auth_module_1.AuthModule,
            subscription_module_1.SubscriptionModule,
            (0, common_1.forwardRef)(() => organisation_module_1.OrganisationModule),
            notification_module_1.NotificationModule,
        ],
        providers: [
            user_service_1.UserService,
            organisation_application_service_1.OrganisationApplicationService,
            google_places_provider_1.GooglePlacesProvider,
            geo_ip_provider_1.GeoIPProvider,
            geocoding_provider_1.GeocodingProvider,
            config_provider_1.ConfigProvider,
            airtable_user_service_1.AirTableUserService,
            airtable_organisation_service_1.AirTableOrganisationService,
            shared_1.ClientProxyProvider,
            filters_preset_service_1.FiltersPresetService,
            brevo_service_1.BrevoService,
            brevo_provider_1.BrevoProvider,
            permission_guard_1.PermissionGuard, cerbos_service_1.CerbosService
        ],
        controllers: [
            user_controller_1.UserController,
            organisation_application_controller_1.OrganisationApplicationController,
            filters_preset_controller_1.FiltersPresetController,
        ],
        exports: [
            user_service_1.UserService,
            organisation_application_service_1.OrganisationApplicationService,
            filters_preset_service_1.FiltersPresetService,
        ],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map