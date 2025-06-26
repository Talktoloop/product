"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const country_controller_1 = require("./controller/country.controller");
const administrative_data_controller_1 = require("./controller/administrative-data.controller");
const country_entity_1 = require("./entity/country.entity");
const country_repository_1 = require("./repository/country.repository");
const country_service_1 = require("./service/country.service");
const config_provider_1 = require("../common/provider/config.provider");
const default_1 = require("../config/default");
const config_1 = require("@nestjs/config");
const country_administrative_data_entity_1 = require("./entity/country-administrative-data.entity");
const country_administrative_data_repository_1 = require("./repository/country-administrative-data.repository");
const administrative_data_service_1 = require("./service/administrative-data.service");
const story_module_1 = require("../story/story.module");
const administrative_xlsx_data_service_1 = require("./service/administrative-xlsx-data.service");
const country_administrative_data_name_entity_1 = require("./entity/country-administrative-data-name.entity");
const country_administrative_data_name_repository_1 = require("./repository/country-administrative-data-name.repository");
const language_module_1 = require("../language/language.module");
const notification_module_1 = require("../notification/notification.module");
const airtable_country_service_1 = require("../airtable-client/service/airtable-country.service");
let CountryModule = class CountryModule {
};
exports.CountryModule = CountryModule;
exports.CountryModule = CountryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([
                country_entity_1.CountryEntity,
                country_repository_1.CountryRepository,
                country_administrative_data_entity_1.CountryAdministrativeDataEntity,
                country_administrative_data_repository_1.CountryAdministrativeDataRepository,
                country_administrative_data_name_entity_1.CountryAdministrativeDataNameEntity,
                country_administrative_data_name_repository_1.CountryAdministrativeDataNameRepository,
            ]),
            (0, common_1.forwardRef)(() => story_module_1.StoryModule),
            (0, common_1.forwardRef)(() => language_module_1.LanguageModule),
            notification_module_1.NotificationModule,
        ],
        controllers: [country_controller_1.CountryController, administrative_data_controller_1.AdministrativeDataController],
        providers: [
            country_service_1.CountryService,
            administrative_data_service_1.AdministrativeDataService,
            administrative_xlsx_data_service_1.AdministrativeXlsxDataService,
            config_provider_1.ConfigProvider,
            airtable_country_service_1.AirTableCountryService,
        ],
        exports: [country_service_1.CountryService, administrative_data_service_1.AdministrativeDataService],
    })
], CountryModule);
//# sourceMappingURL=country.module.js.map