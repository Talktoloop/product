import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CategoryModule } from '../category/category.module';
import { LexiconModule } from '../lexicon/lexicon.module';
import { OpenStoryController } from './controller/open-story.controller';
import { OpenStoryForCommentRepository } from './repository/open-story-for-comment.repository';
import { OpenStoryForStoryRepository } from './repository/open-story-for-story.repository';
import { OpenStoryForCategoryRepository } from './repository/open-story-for-category.repository';
import { OpenStoryService } from './service/open-story.service';
import { CacheProvider } from '../common/provider/cache-provider';
import { CaseRepository } from './repository/case.repository';
import { CaseController } from './controller/case.controller';
import { CaseService } from './service/case.service';
import { CategoryRepository } from '../category/category.repository';
import { CaseFilterController } from './controller/case-filter.controller';
import { CountryModule } from '../country/country.module';
import { dynamicConfiguration } from '../config/default';
import { ConfigModule } from '@nestjs/config';
import { ConfigProvider } from '../common/provider/config.provider';
import { CaseInvestigationRepository } from './repository/case-investigation.repository';
import { OrganisationModule } from '../organisation/organisation.module';
import { LanguageModule } from '../language/language.module';
import { StoryModule } from '../story/story.module';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([
      CaseRepository,
      OpenStoryForCommentRepository,
      OpenStoryForCategoryRepository,
      OpenStoryForStoryRepository,
      CategoryRepository,
      CaseInvestigationRepository,
    ]),
    CacheProvider,
    LexiconModule,
    CategoryModule,
    CountryModule,
    OrganisationModule,
    LanguageModule,
    StoryModule,
    CommentModule,
  ],
  controllers: [OpenStoryController, CaseController, CaseFilterController],
  providers: [OpenStoryService, CaseService, ConfigProvider],
})
export class StatisticModule {}
