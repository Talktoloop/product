import { Module, forwardRef } from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { OrganisationController } from './organisation.controller';
import { DatabaseModule } from '../database/database.module';
import { OrganisationEntity } from './entity/organisation.entity';
import { OrganisationRepository } from './organisation.repository';
import { UserModule } from '../user/user.module';
import { NotificationModule } from '../notification/notification.module';
import { LanguageModule } from '../language/language.module';
import { ConfigModule } from '@nestjs/config';
import { dynamicConfiguration } from '../config/default';
import { ConfigProvider } from '../common/provider/config.provider';
import { StoryModule } from '../story/story.module';
import { CountryModule } from '../country/country.module';
import { AirTableOrganisationService } from '../airtable-client/service/airtable-organisation.service';
import { CerbosService } from '../common/cerbos/cerbos.service';
import { PermissionGuard } from '../auth/cerbos/permission.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([OrganisationEntity, OrganisationRepository]),
    UserModule,
    NotificationModule,
    LanguageModule,
    forwardRef(() => StoryModule),
    forwardRef(() => CountryModule),
  ],
  providers: [OrganisationService, ConfigProvider, AirTableOrganisationService, PermissionGuard, CerbosService],
  controllers: [OrganisationController],
  exports: [OrganisationService],
})
export class OrganisationModule { }
