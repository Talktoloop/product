import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { dynamicConfiguration } from '../config/default';
import { SubscriptionController } from './controller/subscription.controller';
import { SubscriptionService } from './service/subscription.service';
import { NotificationModule } from '../notification/notification.module';
import { OrganisationModule } from '../organisation/organisation.module';
import { OrganisationRepository } from '../organisation/organisation.repository';
import { ConfigProvider } from '../common/provider/config.provider';
import { UserRepository } from '../user/repository/user.repository';
import { UserTokenRepository } from './repository/user-token.repository';
import { OrganisationTokenRepository } from './repository/organisation-token.repository';
import { UserModule } from '../user/user.module';
import { SubscriptionApplicationRepository } from '../subscription/repository/subscription-application.repository';
import { AirTableUserService } from '../airtable-client/service/airtable-user.service';
import { OrganisationApplicationRepository } from '../user/repository/organisation-application.repository';
import { AirTableOrganisationService } from '../airtable-client/service/airtable-organisation.service';



@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([
      OrganisationRepository,
      UserRepository,
      UserTokenRepository,
      OrganisationTokenRepository,
      SubscriptionApplicationRepository,
      OrganisationApplicationRepository
    ]),
    NotificationModule,
    forwardRef(() => OrganisationModule),
    forwardRef(() => UserModule),
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, AirTableUserService, AirTableOrganisationService, ConfigProvider],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
