import { Module } from '@nestjs/common';
import { StoryModule } from './story/story.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { OrganisationModule } from './organisation/organisation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { LexiconModule } from './lexicon/lexicon.module';
import { AuthModule } from './auth/auth.module';
import { NotificationModule } from './notification/notification.module';
import { LanguageModule } from './language/language.module';
import { ClientProxyProvider, AppHooksService } from '@ourloop/shared';
import { DashboardModule } from './dashboard/dashboard.module';
import { SmsModule } from './sms/sms.module';
import { CaseManagerModule } from './case-manager/case-manager.module';
import { CountryModule } from './country/country.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { StatisticModule } from './statistic/statistic.module';
import { AirTableClientModule } from './airtable-client/airtable-client.module';
import { MessengerModule } from './messenger/messenger.module';
import { dynamicConfiguration } from './config/default';
import { ConfigModule } from '@nestjs/config';
import { ConfigProvider } from './common/provider/config.provider';
import { IvrrModule } from './ivrr/ivrr.module';
import { ConfigService } from '@nestjs/config';
import { SubscriptionModule } from './subscription/subscription.module';
import { BrevoProvider } from './common/provider/brevo.provider';
import { CerbosService } from './common/cerbos/cerbos.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dynamicConfiguration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseConfig: any = configService.get('database');
        if (
          databaseConfig.enable_ssl === false ||
          databaseConfig.enable_ssl === 'false'
        ) {
          delete databaseConfig.ssl;
        }

        return {
          ...databaseConfig,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          migrationsRun:
            configService.get('application.environment') === 'test',
          migrations: [__dirname + '/migrations/*{.ts,.js}'],
        };
      },
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 10,
          limit: 10,
        },
      ],
    }),
    StoryModule,
    CommentModule,
    UserModule,
    OrganisationModule,
    CategoryModule,
    LexiconModule,
    AuthModule,
    NotificationModule,
    LanguageModule,
    DashboardModule,
    SmsModule,
    CaseManagerModule,
    CountryModule,
    StatisticModule,
    AirTableClientModule,
    MessengerModule,
    IvrrModule,
    SubscriptionModule,
  ],
  providers: [ClientProxyProvider, ConfigProvider, AppHooksService, BrevoProvider, CerbosService],
  exports: [ConfigModule, CerbosService],
})
export class AppModule {}
