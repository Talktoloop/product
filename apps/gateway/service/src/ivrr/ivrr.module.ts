import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { ClientProxyProvider, S3Service, S3Provider } from '@ourloop/shared';
import { StoryModule } from '../story/story.module';
import { dynamicConfiguration } from '../config/default';
import { ConfigProvider } from '../common/provider/config.provider';
import { IvrrService } from './service/ivrr.service';
import { IvrrController } from './controller/ivrr.controller';
import { CountryEntity } from '../country/entity/country.entity';
import { CountryRepository } from '../country/repository/country.repository';
import { LanguageEntity } from '../language/entity/language.entity';
import { LanguageRepository } from '../language/language.repository';
import { IvrrCallEntity } from './entity/ivrr-call.entity';
import { IvrrCallRepository } from './repository/ivrr-call.repository';
import { StoryRepository } from '../story/repository/story.repository';
import { StoryEntity } from '../story/entity/story.entity';
import { LambdaServiceProvider } from '../common/provider/aws-translation-provider';
import { CommentModule } from '../comment/comment.module';
import { CommentEntity } from '../comment/entity/comment.entity';
import { CommentRepository } from '../comment/repository/comment.repository';
import { HttpModule } from '@nestjs/axios';
import { LanguageModule } from '../language/language.module';
import { PermissionGuard } from '../auth/cerbos/permission.guard';
import { CerbosService } from '../common/cerbos/cerbos.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([
      StoryEntity,
      StoryRepository,
      CommentEntity,
      CommentRepository,
      IvrrCallEntity,
      IvrrCallRepository,
      LanguageEntity,
      LanguageRepository,
      CountryEntity,
      CountryRepository,
    ]),
    forwardRef(() => StoryModule),
    forwardRef(() => CommentModule),
    forwardRef(() => LanguageModule),
    HttpModule,
  ],
  controllers: [IvrrController],
  providers: [
    IvrrService,
    ClientProxyProvider,
    ConfigProvider,
    LambdaServiceProvider,
    S3Provider,
    S3Service,
    CerbosService,
    PermissionGuard
  ],
  exports: [IvrrService],
})
export class IvrrModule { }
