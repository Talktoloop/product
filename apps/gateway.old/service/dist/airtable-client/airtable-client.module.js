"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTableClientModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const airtable_client_controller_1 = require("./airtable-client.controller");
const airtable_client_repository_1 = require("./repository/airtable-client.repository");
const airtable_client_service_1 = require("./airtable-client.service");
const case_sync_entity_1 = require("./entity/case-sync.entity");
const case_author_perspective_repository_1 = require("./repository/case-author-perspective.repository");
const case_thematic_area_repository_1 = require("./repository/case-thematic-area.repository");
const case_thematic_area_subsection_repository_1 = require("./repository/case-thematic-area-subsection.repository");
const airtable_provider_1 = require("../common/provider/airtable-provider");
const config_provider_1 = require("../common/provider/config.provider");
const default_1 = require("../config/default");
const config_1 = require("@nestjs/config");
const case_survivor_disability_repository_1 = require("./repository/case-survivor-disability.repository");
const case_investigation_repository_1 = require("./repository/case-investigation.repository");
const case_allegation_referral_repository_1 = require("./repository/case-allegation-referral.repository");
const case_allegation_referral_organisation_repository_1 = require("./repository/case-allegation-referral-organisation.repository");
const airtable_user_service_1 = require("./service/airtable-user.service");
const user_repository_1 = require("../user/repository/user.repository");
const organisation_application_repository_1 = require("../user/repository/organisation-application.repository");
const airtable_organisation_service_1 = require("./service/airtable-organisation.service");
const organisation_repository_1 = require("../organisation/organisation.repository");
const story_module_1 = require("../story/story.module");
const lexicon_module_1 = require("../lexicon/lexicon.module");
let AirTableClientModule = class AirTableClientModule {
};
exports.AirTableClientModule = AirTableClientModule;
exports.AirTableClientModule = AirTableClientModule = __decorate([
    (0, common_1.Module)({
        controllers: [airtable_client_controller_1.AirTableClientController],
        providers: [
            airtable_client_service_1.AirTableClientService,
            airtable_provider_1.AirTableDashboardProvider,
            config_provider_1.ConfigProvider,
            airtable_user_service_1.AirTableUserService,
            airtable_organisation_service_1.AirTableOrganisationService,
        ],
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            lexicon_module_1.LexiconModule,
            database_module_1.DatabaseModule.forFeature([
                case_sync_entity_1.CaseSyncEntity,
                airtable_client_repository_1.AirTableClientRepository,
                case_author_perspective_repository_1.CaseAuthorPerspectiveRepository,
                case_thematic_area_repository_1.CaseThematicAreaRepository,
                case_thematic_area_subsection_repository_1.CaseThematicAreaSubsectionRepository,
                case_survivor_disability_repository_1.CaseSurvivorDisabilityAreaRepository,
                case_investigation_repository_1.CaseSyncInvestigationRepository,
                case_allegation_referral_repository_1.CaseSyncAllegationReferralRepository,
                case_allegation_referral_organisation_repository_1.CaseSyncAllegationReferralOrganisationRepository,
                user_repository_1.UserRepository,
                organisation_application_repository_1.OrganisationApplicationRepository,
                organisation_repository_1.OrganisationRepository,
            ]),
            (0, common_1.forwardRef)(() => story_module_1.StoryModule),
        ],
        exports: [airtable_user_service_1.AirTableUserService],
    })
], AirTableClientModule);
//# sourceMappingURL=airtable-client.module.js.map