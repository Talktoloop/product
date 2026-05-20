import { Module, forwardRef } from '@nestjs/common';
import { MessageEntity } from './entity/message.entity';
import { MessageRepository } from './repository/message.repository';
import { DatabaseModule } from '../database/database.module';
import { ConversationController } from './controller/conversation.controller';
import { MessageService } from './service/message.service';
import { LanguageEntity } from '../language/entity/language.entity';
import { LanguageRepository } from '../language/language.repository';
import { StoryModule } from '../story/story.module';
import { MessageController } from './controller/message.controller';
import { ClientProxyProvider } from '@ourloop/shared';
import { StoryEntity } from '../story/entity/story.entity';
import { StoryRepository } from '../story/repository/story.repository';
import { CountryModule } from '../country/country.module';
import { ConfigProvider } from '../common/provider/config.provider';
import { dynamicConfiguration } from '../config/default';
import { ConfigModule } from '@nestjs/config';
import { LanguageModule } from '../language/language.module';
import { TwilioProvider } from '../common/provider/twilio.provider';
import { TextItProvider } from '../common/provider/textit-provider';
import { CerbosService } from '../common/cerbos/cerbos.service';
import { PermissionGuard } from '../auth/cerbos/permission.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([
      MessageEntity,
      MessageRepository,
      LanguageEntity,
      LanguageRepository,
      StoryEntity,
      StoryRepository,
    ]),
    forwardRef(() => StoryModule),
    forwardRef(() => CountryModule),
    forwardRef(() => LanguageModule),
  ],
  controllers: [ConversationController, MessageController],
  providers: [
    MessageService,
    ClientProxyProvider,
    ConfigProvider,
    TwilioProvider,
    TextItProvider,
    CerbosService,
    PermissionGuard
  ],
  exports: [MessageService],
})
export class SmsModule {}
