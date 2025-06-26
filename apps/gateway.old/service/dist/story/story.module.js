"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryModule = void 0;
const common_1 = require("@nestjs/common");
const story_controller_1 = require("./controller/story.controller");
const story_service_1 = require("./service/story.service");
const story_repository_1 = require("./repository/story.repository");
const database_module_1 = require("../database/database.module");
const story_vote_repository_1 = require("./repository/story-vote.repository");
const story_recipient_repository_1 = require("./repository/story-recipient.repository");
const lexicon_module_1 = require("../lexicon/lexicon.module");
const organisation_module_1 = require("../organisation/organisation.module");
const category_module_1 = require("../category/category.module");
const notification_module_1 = require("../notification/notification.module");
const user_module_1 = require("../user/user.module");
const shared_1 = require("@ourloop/shared");
const story_moderator_controller_1 = require("./controller/story-moderator.controller");
const story_moderator_service_1 = require("./service/story-moderator.service");
const language_repository_1 = require("../language/language.repository");
const story_translation_repository_1 = require("./repository/story-translation.repository");
const story_translation_moderator_controller_1 = require("./controller/story-translation-moderator.controller");
const story_translation_moderator_service_1 = require("./service/story-translation-moderator.service");
const language_module_1 = require("../language/language.module");
const country_module_1 = require("../country/country.module");
const airtable_provider_1 = require("../common/provider/airtable-provider");
const default_1 = require("../config/default");
const config_1 = require("@nestjs/config");
const messenger_module_1 = require("../messenger/messenger.module");
const config_provider_1 = require("../common/provider/config.provider");
const sms_module_1 = require("../sms/sms.module");
const story_moderator_ivrr_controller_1 = require("./controller/story-moderator-ivrr.controller");
const case_manager_module_1 = require("../case-manager/case-manager.module");
const messenger_message_repository_1 = require("../messenger/repository/messenger-message.repository");
const message_repository_1 = require("../sms/repository/message.repository");
const story_reject_reason_repository_1 = require("./repository/story-reject-reason.repository");
const ivrr_module_1 = require("../ivrr/ivrr.module");
const cache_provider_1 = require("../common/provider/cache-provider");
const export_service_1 = require("./service/export.service");
const story_historical_translation_repository_1 = require("./repository/story-historical-translation.repository");
const story_historical_translation_moderator_service_1 = require("./service/story-historical-translation-moderator.service");
const story_view_repository_1 = require("./repository/story-view.repository");
const story_conversation_repository_1 = require("./repository/story-conversation.repository");
const story_conversation_service_1 = require("./service/story-conversation.service");
const story_recipient_service_1 = require("./service/story-recipient.service");
const story_administrative_data_repository_1 = require("./repository/story-administrative-data.repository");
const export_controller_1 = require("./controller/export.controller");
const country_administrative_data_repository_1 = require("../country/repository/country-administrative-data.repository");
const subscription_module_1 = require("../subscription/subscription.module");
const comment_module_1 = require("../comment/comment.module");
const category_repository_1 = require("../category/category.repository");
const user_export_csv_activity_repository_1 = require("../user/repository/user-export-csv-activity.repository");
const airtable_organisation_service_1 = require("../airtable-client/service/airtable-organisation.service");
const organisation_repository_1 = require("../organisation/organisation.repository");
const comment_repository_1 = require("../comment/repository/comment.repository");
const ivrr_call_repository_1 = require("../ivrr/repository/ivrr-call.repository");
const posthog_service_1 = require("./service/posthog.service");
const un_data_export_service_1 = require("./service/un-data-export.service");
const cerbos_service_1 = require("../common/cerbos/cerbos.service");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
let StoryModule = class StoryModule {
};
exports.StoryModule = StoryModule;
exports.StoryModule = StoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([
                story_administrative_data_repository_1.StoryAdministrativeDataRepository,
                story_historical_translation_repository_1.StoryHistoricalTranslationRepository,
                story_repository_1.StoryRepository,
                story_view_repository_1.StoryViewRepository,
                story_reject_reason_repository_1.StoryRejectReasonRepository,
                language_repository_1.LanguageRepository,
                story_translation_repository_1.StoryTranslationRepository,
                messenger_message_repository_1.MessengerMessageRepository,
                message_repository_1.MessageRepository,
                story_vote_repository_1.StoryVoteRepository,
                story_recipient_repository_1.StoryRecipientRepository,
                story_conversation_repository_1.StoryConversationRepository,
                country_administrative_data_repository_1.CountryAdministrativeDataRepository,
                category_repository_1.CategoryRepository,
                user_export_csv_activity_repository_1.UserExportCsvActivityRepository,
                organisation_repository_1.OrganisationRepository,
                comment_repository_1.CommentRepository,
                ivrr_call_repository_1.IvrrCallRepository,
            ]),
            (0, common_1.forwardRef)(() => lexicon_module_1.LexiconModule),
            (0, common_1.forwardRef)(() => organisation_module_1.OrganisationModule),
            (0, common_1.forwardRef)(() => category_module_1.CategoryModule),
            (0, common_1.forwardRef)(() => notification_module_1.NotificationModule),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            (0, common_1.forwardRef)(() => language_module_1.LanguageModule),
            (0, common_1.forwardRef)(() => country_module_1.CountryModule),
            (0, common_1.forwardRef)(() => messenger_module_1.MessengerModule),
            (0, common_1.forwardRef)(() => sms_module_1.SmsModule),
            case_manager_module_1.CaseManagerModule,
            ivrr_module_1.IvrrModule,
            cache_provider_1.CacheProvider,
            subscription_module_1.SubscriptionModule,
            comment_module_1.CommentModule,
        ],
        controllers: [
            story_moderator_controller_1.StoryModeratorController,
            story_controller_1.StoryController,
            story_translation_moderator_controller_1.StoryTranslationModeratorController,
            story_moderator_controller_1.StoryModeratorController,
            story_moderator_ivrr_controller_1.StoryIVRRModeratorController,
            export_controller_1.ExportController,
        ],
        providers: [
            export_service_1.ExportService,
            un_data_export_service_1.UNDataExportService,
            story_service_1.StoryService,
            story_moderator_service_1.StoryModeratorService,
            story_translation_moderator_service_1.StoryTranslationModeratorService,
            story_historical_translation_moderator_service_1.StoryHistoricalTranslationModeratorService,
            shared_1.ClientProxyProvider,
            airtable_provider_1.AirTableSensitiveCasesProvider,
            config_provider_1.ConfigProvider,
            story_conversation_service_1.StoryConversationService,
            story_recipient_service_1.StoryRecipientService,
            airtable_organisation_service_1.AirTableOrganisationService,
            posthog_service_1.PosthogService,
            permission_guard_1.PermissionGuard,
            cerbos_service_1.CerbosService
        ],
        exports: [
            export_service_1.ExportService,
            un_data_export_service_1.UNDataExportService,
            story_service_1.StoryService,
            story_moderator_service_1.StoryModeratorService,
            story_translation_moderator_service_1.StoryTranslationModeratorService,
            story_conversation_service_1.StoryConversationService,
            story_recipient_service_1.StoryRecipientService,
        ],
    })
], StoryModule);
//# sourceMappingURL=story.module.js.map