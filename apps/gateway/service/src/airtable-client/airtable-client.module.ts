import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AirTableClientController } from './airtable-client.controller';
import { AirTableClientRepository } from './repository/airtable-client.repository';
import { AirTableClientService } from './airtable-client.service';
import { CaseSyncEntity } from './entity/case-sync.entity';
import { CaseAuthorPerspectiveRepository } from './repository/case-author-perspective.repository';
import { CaseThematicAreaRepository } from './repository/case-thematic-area.repository';
import { CaseThematicAreaSubsectionRepository } from './repository/case-thematic-area-subsection.repository';
import { AirTableDashboardProvider } from '../common/provider/airtable-provider';
import { ConfigProvider } from '../common/provider/config.provider';
import { dynamicConfiguration } from '../config/default';
import { ConfigModule } from '@nestjs/config';
import { CaseSurvivorDisabilityAreaRepository } from './repository/case-survivor-disability.repository';
import { CaseSyncInvestigationRepository } from './repository/case-investigation.repository';
import { CaseSyncAllegationReferralRepository } from './repository/case-allegation-referral.repository';
import { CaseSyncAllegationReferralOrganisationRepository } from './repository/case-allegation-referral-organisation.repository';
import { AirTableUserService } from './service/airtable-user.service';
import { UserRepository } from '../user/repository/user.repository';
import { OrganisationApplicationRepository } from '../user/repository/organisation-application.repository';
import { AirTableOrganisationService } from './service/airtable-organisation.service';
import { OrganisationRepository } from '../organisation/organisation.repository';
import { StoryModule } from '../story/story.module';
import { LexiconModule } from '../lexicon/lexicon.module';

@Module({
  controllers: [AirTableClientController],
  providers: [
    AirTableClientService,
    AirTableDashboardProvider,
    ConfigProvider,
    AirTableUserService,
    AirTableOrganisationService,
  ],
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    LexiconModule,
    DatabaseModule.forFeature([
      CaseSyncEntity,
      AirTableClientRepository,
      CaseAuthorPerspectiveRepository,
      CaseThematicAreaRepository,
      CaseThematicAreaSubsectionRepository,
      CaseSurvivorDisabilityAreaRepository,
      CaseSyncInvestigationRepository,
      CaseSyncAllegationReferralRepository,
      CaseSyncAllegationReferralOrganisationRepository,
      UserRepository,
      OrganisationApplicationRepository,
      OrganisationRepository,
    ]),
    forwardRef(() => StoryModule),
  ],
  exports: [AirTableUserService],
})
export class AirTableClientModule { }
