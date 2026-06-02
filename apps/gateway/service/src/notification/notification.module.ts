import { Module, forwardRef } from '@nestjs/common';
import { NotificationService } from './service/notification.service';
import { UserModule } from '../user/user.module';
import { StoryNotificationService } from './service/story-notification.service';
import { CommentNotificationService } from './service/comment-notification.service';
import { ClientProxyProvider, MailJetService } from '@ourloop/shared';
import { DatabaseModule } from '../database/database.module';
import { MailJetProvider } from '../common/provider/mailjet.provider';
import { LanguageEntity } from '../language/entity/language.entity';
import { LanguageRepository } from '../language/language.repository';
import { ConfigProvider } from '../common/provider/config.provider';
import { dynamicConfiguration } from '../config/default';
import { ConfigModule } from '@nestjs/config';
import { NotificationController } from './controller/notification.controller';
import { SmsModule } from '../sms/sms.module';
import { UserRepository } from '../user/repository/user.repository';
import { OrganisationRepository } from './../organisation/organisation.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    forwardRef(() => UserModule),
    DatabaseModule.forFeature([
      LanguageEntity,
      LanguageRepository,
      UserRepository,
      OrganisationRepository,
    ]),
    SmsModule,
  ],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    StoryNotificationService,
    CommentNotificationService,
    MailJetProvider,
    ClientProxyProvider,

    ConfigProvider,
    MailJetService,
  ],
  exports: [
    NotificationService,
    StoryNotificationService,
    CommentNotificationService,
    MailJetProvider,
  ],
})
export class NotificationModule { }
