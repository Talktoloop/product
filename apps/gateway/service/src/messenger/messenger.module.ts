import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { ClientProxyProvider } from '@ourloop/shared';
import { CategoryRepository } from '../category/category.repository';
import { CategoryEntity } from '../category/entity/category.entity';
import { CountryEntity } from '../country/entity/country.entity';
import { CountryRepository } from '../country/repository/country.repository';
import { LanguageEntity } from '../language/entity/language.entity';
import { LanguageRepository } from '../language/language.repository';
import { StoryModule } from '../story/story.module';
import { FacebookMessengerController } from './controller/facebook.controller';
import { MessengerMessageEntity } from './entity/messenger-message.entity';
import { MessengerMessageRepository } from './repository/messenger-message.repository';
import { MessengerService } from './service/messenger.service';
import { dynamicConfiguration } from '../config/default';
import { WhatsAppMessengerController } from './controller/whats-app.controller';
import { TelegramMessengerController } from './controller/telegram.controller';
import { ConfigProvider } from '../common/provider/config.provider';
import { CerbosService } from '../common/cerbos/cerbos.service';
import { PermissionGuard } from '../auth/cerbos/permission.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([
      MessengerMessageEntity,
      MessengerMessageRepository,
      LanguageEntity,
      LanguageRepository,
      CategoryEntity,
      CategoryRepository,
      CountryEntity,
      CountryRepository,
    ]),
    forwardRef(() => StoryModule),
  ],
  controllers: [
    FacebookMessengerController,
    WhatsAppMessengerController,
    TelegramMessengerController,
  ],
  providers: [MessengerService, ClientProxyProvider, ConfigProvider, CerbosService, PermissionGuard],
  exports: [MessengerService],
})
export class MessengerModule { }
