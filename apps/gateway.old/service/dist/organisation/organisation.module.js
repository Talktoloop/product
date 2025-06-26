"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationModule = void 0;
const common_1 = require("@nestjs/common");
const organisation_service_1 = require("./organisation.service");
const organisation_controller_1 = require("./organisation.controller");
const database_module_1 = require("../database/database.module");
const organisation_entity_1 = require("./entity/organisation.entity");
const organisation_repository_1 = require("./organisation.repository");
const user_module_1 = require("../user/user.module");
const notification_module_1 = require("../notification/notification.module");
const language_module_1 = require("../language/language.module");
const config_1 = require("@nestjs/config");
const default_1 = require("../config/default");
const config_provider_1 = require("../common/provider/config.provider");
const story_module_1 = require("../story/story.module");
const country_module_1 = require("../country/country.module");
const airtable_organisation_service_1 = require("../airtable-client/service/airtable-organisation.service");
const cerbos_service_1 = require("../common/cerbos/cerbos.service");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
let OrganisationModule = class OrganisationModule {
};
exports.OrganisationModule = OrganisationModule;
exports.OrganisationModule = OrganisationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([organisation_entity_1.OrganisationEntity, organisation_repository_1.OrganisationRepository]),
            user_module_1.UserModule,
            notification_module_1.NotificationModule,
            language_module_1.LanguageModule,
            (0, common_1.forwardRef)(() => story_module_1.StoryModule),
            (0, common_1.forwardRef)(() => country_module_1.CountryModule),
        ],
        providers: [organisation_service_1.OrganisationService, config_provider_1.ConfigProvider, airtable_organisation_service_1.AirTableOrganisationService, permission_guard_1.PermissionGuard, cerbos_service_1.CerbosService],
        controllers: [organisation_controller_1.OrganisationController],
        exports: [organisation_service_1.OrganisationService],
    })
], OrganisationModule);
//# sourceMappingURL=organisation.module.js.map