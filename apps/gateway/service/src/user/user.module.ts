import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { OrganisationApplicationController } from './controller/organisation-application.controller';
import { DatabaseModule } from '../database/database.module';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';
import { GooglePlacesProvider } from '../common/provider/google-places-provider';
import { GeoIPProvider } from '../common/provider/geo-ip-provider';
import { GeocodingProvider } from '../common/provider/geocoding-provider';
import { CountryModule } from '../country/country.module';
import { ConfigProvider } from '../common/provider/config.provider';
import { dynamicConfiguration } from '../config/default';
import { ConfigModule } from '@nestjs/config';
import { OrganisationApplicationEntity } from './entity/organisation-application.entity';
import { OrganisationApplicationRepository } from './repository/organisation-application.repository';
import { OrganisationApplicationService } from './service/organisation-application.service';
import { UserConsentEntity } from './entity/user-consent.entity';
import { UserConsentRepository } from './repository/user-consent.repository';
import { AuthModule } from '../auth/auth.module';
import { SubscriptionModule } from '../subscription/subscription.module';
import { AirTableUserService } from '../airtable-client/service/airtable-user.service';
import { AirTableOrganisationService } from '../airtable-client/service/airtable-organisation.service';
import { OrganisationRepository } from '../organisation/organisation.repository';
import { OrganisationModule } from '../organisation/organisation.module';
import { NotificationModule } from '../notification/notification.module';
import { ClientProxyProvider } from '@ourloop/shared';
import { PresetEntity } from './entity/filters-preset.entity';
import { FiltersPresetRepository } from './repository/filters-preset.repository';
import { FiltersPresetService } from './service/filters-preset.service';
import { FiltersPresetController } from './controller/filters-preset.controller';
import { BrevoProvider } from '../common/provider/brevo.provider';
import { BrevoService } from './service/brevo.service';
import { CerbosService } from '../common/cerbos/cerbos.service';
import { PermissionGuard } from '../auth/cerbos/permission.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([
      UserEntity,
      UserRepository,
      OrganisationApplicationEntity,
      OrganisationApplicationRepository,
      UserConsentEntity,
      UserConsentRepository,
      OrganisationRepository,
      PresetEntity,
      FiltersPresetRepository,
    ]),
    CountryModule,
    AuthModule,
    SubscriptionModule,
    forwardRef(() => OrganisationModule),
    NotificationModule,
  ],
  providers: [
    UserService,
    OrganisationApplicationService,
    GooglePlacesProvider,
    GeoIPProvider,
    GeocodingProvider,
    ConfigProvider,
    AirTableUserService,
    AirTableOrganisationService,
    ClientProxyProvider,
    FiltersPresetService,
    BrevoService,
    BrevoProvider,
    PermissionGuard, CerbosService
  ],
  controllers: [
    UserController,
    OrganisationApplicationController,
    FiltersPresetController,
  ],
  exports: [
    UserService,
    OrganisationApplicationService,
    FiltersPresetService,
  ],
})
export class UserModule { }
