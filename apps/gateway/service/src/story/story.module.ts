import { Module, forwardRef } from '@nestjs/common';
import { StoryController } from './controller/story.controller';
import { StoryService } from './service/story.service';
import { StoryRepository } from './repository/story.repository';
import { DatabaseModule } from '../database/database.module';
import { StoryVoteRepository } from './repository/story-vote.repository';
import { StoryRecipientRepository } from './repository/story-recipient.repository';
import { LexiconModule } from '../lexicon/lexicon.module';
import { OrganisationModule } from '../organisation/organisation.module';
import { CategoryModule } from '../category/category.module';
import { NotificationModule } from '../notification/notification.module';
import { UserModule } from '../user/user.module';
import { ClientProxyProvider } from '@ourloop/shared';
import { StoryModeratorController } from './controller/story-moderator.controller';
import { StoryModeratorService } from './service/story-moderator.service';
import { LanguageRepository } from '../language/language.repository';
import { StoryTranslationRepository } from './repository/story-translation.repository';
import { StoryTranslationModeratorController } from './controller/story-translation-moderator.controller';
import { StoryTranslationModeratorService } from './service/story-translation-moderator.service';
import { LanguageModule } from '../language/language.module';
import { CountryModule } from '../country/country.module';
import { AirTableSensitiveCasesProvider } from '../common/provider/airtable-provider';
import { dynamicConfiguration } from '../config/default';
import { ConfigModule } from '@nestjs/config';
import { MessengerModule } from '../messenger/messenger.module';
import { ConfigProvider } from '../common/provider/config.provider';
import { SmsModule } from '../sms/sms.module';
import { StoryIVRRModeratorController } from './controller/story-moderator-ivrr.controller';
import { CaseManagerModule } from '../case-manager/case-manager.module';
import { MessengerMessageRepository } from '../messenger/repository/messenger-message.repository';
import { MessageRepository } from '../sms/repository/message.repository';
import { StoryRejectReasonRepository } from './repository/story-reject-reason.repository';
import { IvrrModule } from '../ivrr/ivrr.module';
import { CacheProvider } from '../common/provider/cache-provider';
import { ExportService } from './service/export.service';
import { StoryHistoricalTranslationRepository } from './repository/story-historical-translation.repository';
import { StoryHistoricalTranslationModeratorService } from './service/story-historical-translation-moderator.service';
import { StoryViewRepository } from './repository/story-view.repository';
import { StoryConversationRepository } from './repository/story-conversation.repository';
import { StoryConversationService } from './service/story-conversation.service';
import { StoryRecipientService } from './service/story-recipient.service';
import { StoryAdministrativeDataRepository } from './repository/story-administrative-data.repository';
import { ExportController } from './controller/export.controller';
import { CountryAdministrativeDataRepository } from '../country/repository/country-administrative-data.repository';
import { SubscriptionModule } from '../subscription/subscription.module';
import { CommentModule } from '../comment/comment.module';
import { CategoryRepository } from '../category/category.repository';
import { UserExportCsvActivityRepository } from '../user/repository/user-export-csv-activity.repository';
import { AirTableOrganisationService } from '../airtable-client/service/airtable-organisation.service';
import { OrganisationRepository } from '../organisation/organisation.repository';
import { CommentRepository } from '../comment/repository/comment.repository';
import { IvrrCallRepository } from '../ivrr/repository/ivrr-call.repository';
import { PosthogService } from './service/posthog.service';
import { UNDataExportService } from './service/un-data-export.service';
import { StoryOrganisationTagRepository } from './repository/story-organisation-tag.repository';
import { FeedbackVulnerabilityFactorsRepository } from './repository/feedback-vulnerability-factors.repository';
import { FeedbackVulnerabilityFactorsEntity } from './entity/feedback-vulnerability-factors.entity';
import { FeedbackVulnerabilityFactorsService } from './service/feedback-vulnerability-factors.service';
import { VulnerabilityFactorsRepository } from '../lexicon/repository/vulnerability-factors.repository';
import { VulnerabilityFactorsEntity } from '../lexicon/entity/vulnerability-factors.entity';
import { CerbosService } from '../common/cerbos/cerbos.service';
import { PermissionGuard } from '../auth/cerbos/permission.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([
      StoryAdministrativeDataRepository,
      StoryHistoricalTranslationRepository,
      StoryRepository,
      StoryViewRepository,
      StoryRejectReasonRepository,
      LanguageRepository,
      StoryTranslationRepository,
      MessengerMessageRepository,
      MessageRepository,
      StoryVoteRepository,
      StoryRecipientRepository,
      StoryConversationRepository,
      CountryAdministrativeDataRepository,
      CategoryRepository,
      UserExportCsvActivityRepository,
      OrganisationRepository,
      CommentRepository,
      IvrrCallRepository,
      StoryOrganisationTagRepository,
      FeedbackVulnerabilityFactorsRepository,
      FeedbackVulnerabilityFactorsEntity,
      VulnerabilityFactorsRepository,
      VulnerabilityFactorsEntity,
    ]),
    forwardRef(() => LexiconModule),
    forwardRef(() => OrganisationModule),
    forwardRef(() => CategoryModule),
    forwardRef(() => NotificationModule),
    forwardRef(() => UserModule),
    forwardRef(() => LanguageModule),
    forwardRef(() => CountryModule),
    forwardRef(() => MessengerModule),
    forwardRef(() => SmsModule),
    CaseManagerModule,
    IvrrModule,
    CacheProvider,
    SubscriptionModule,
    CommentModule,
  ],
  controllers: [
    StoryModeratorController,
    StoryController,
    StoryTranslationModeratorController,
    StoryModeratorController,
    StoryIVRRModeratorController,
    ExportController,
  ],
  providers: [
    ExportService,
    UNDataExportService,
    StoryService,
    StoryModeratorService,
    StoryTranslationModeratorService,
    StoryHistoricalTranslationModeratorService,
    ClientProxyProvider,
    AirTableSensitiveCasesProvider,
    ConfigProvider,
    StoryConversationService,
    StoryRecipientService,
    AirTableOrganisationService,
    PosthogService,
    FeedbackVulnerabilityFactorsService,
    PermissionGuard,
    CerbosService
  ],
  exports: [
    ExportService,
    UNDataExportService,
    StoryService,
    StoryModeratorService,
    StoryTranslationModeratorService,
    StoryConversationService,
    StoryRecipientService,
    FeedbackVulnerabilityFactorsService,
  ],
})
export class StoryModule { }
