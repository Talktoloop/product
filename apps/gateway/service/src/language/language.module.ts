import { forwardRef, Module } from '@nestjs/common';
import { LanguageEntity } from './entity/language.entity';
import { LanguageRepository } from './language.repository';
import { DatabaseModule } from '../database/database.module';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { AwsTranslationServiceProvider } from '../common/provider/aws-translation-provider';
import { GoogleTranslationServiceProvider } from '../common/provider/google-translation-provider';
import { StoryModule } from '../story/story.module';
import { CommentModule } from '../comment/comment.module';
import { ConfigProvider } from '../common/provider/config.provider';
import { dynamicConfiguration } from '../config/default';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([LanguageEntity, LanguageRepository]),
    forwardRef(() => StoryModule),
    forwardRef(() => CommentModule),
  ],
  controllers: [LanguageController],
  providers: [
    LanguageService,
    AwsTranslationServiceProvider,
    GoogleTranslationServiceProvider,
    ConfigProvider,
  ],
  exports: [LanguageService],
})
export class LanguageModule {}
