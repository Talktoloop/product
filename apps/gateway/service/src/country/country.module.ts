import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CountryController } from './controller/country.controller';
import { AdministrativeDataController } from './controller/administrative-data.controller';
import { CountryEntity } from './entity/country.entity';
import { CountryRepository } from './repository/country.repository';
import { CountryService } from './service/country.service';
import { ConfigProvider } from '../common/provider/config.provider';
import { dynamicConfiguration } from '../config/default';
import { ConfigModule } from '@nestjs/config';
import { CountryAdministrativeDataEntity } from './entity/country-administrative-data.entity';
import { CountryAdministrativeDataRepository } from './repository/country-administrative-data.repository';
import { AdministrativeDataService } from './service/administrative-data.service';
import { StoryModule } from '../story/story.module';
import { AdministrativeXlsxDataService } from './service/administrative-xlsx-data.service';
import { CountryAdministrativeDataNameEntity } from './entity/country-administrative-data-name.entity';
import { CountryAdministrativeDataNameRepository } from './repository/country-administrative-data-name.repository';
import { LanguageModule } from '../language/language.module';
import { NotificationModule } from '../notification/notification.module';
import { AirTableCountryService } from '../airtable-client/service/airtable-country.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([
      CountryEntity,
      CountryRepository,
      CountryAdministrativeDataEntity,
      CountryAdministrativeDataRepository,
      CountryAdministrativeDataNameEntity,
      CountryAdministrativeDataNameRepository,
    ]),
    forwardRef(() => StoryModule),
    forwardRef(() => LanguageModule),
    NotificationModule,
  ],
  controllers: [CountryController, AdministrativeDataController],
  providers: [
    CountryService,
    AdministrativeDataService,
    AdministrativeXlsxDataService,
    ConfigProvider,
    AirTableCountryService,
  ],
  exports: [CountryService, AdministrativeDataService],
})
export class CountryModule {}
