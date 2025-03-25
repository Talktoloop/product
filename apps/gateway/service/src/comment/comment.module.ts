import { Module, forwardRef } from '@nestjs/common';
import { CommentService } from './service/comment.service';
import { CommentModeratorService } from './service/comment-moderator.service';
import { CommentController } from './controller/comment.controller';
import { CommentEntity } from './entity/comment.entity';
import { CommentRepository } from './repository/comment.repository';
import { StoryModule } from '../story/story.module';
import { CommentVoteEntity } from './entity/comment-vote.entity';
import { CommentVoteRepository } from './repository/comment-vote.repository';
import { LexiconModule } from '../lexicon/lexicon.module';
import { NotificationModule } from '../notification/notification.module';
import { CommentModeratorController } from './controller/comment-moderator.controller';
import { CommentTranslationEntity } from './entity/comment-translation.entity';
import { CommentTranslationRepository } from './repository/comment-translation.repository';
import { CommentTranslationModeratorController } from './controller/comment-translation-moderator.controller';
import { CommentTranslationModeratorService } from './service/comment-translation-moderator.service';
import { LanguageEntity } from '../language/entity/language.entity';
import { LanguageRepository } from '../language/language.repository';
import { LanguageModule } from '../language/language.module';
import { MessengerModule } from '../messenger/messenger.module';
import { IvrrModule } from '../ivrr/ivrr.module';
import { CommentRecipientEntity } from './entity/comment-recipient.entity';
import { CommentRecipientRepository } from './repository/comment-recipient.repository';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { dynamicConfiguration } from '../config/default';
import { ConfigProvider } from '../common/provider/config.provider';
import { PermissionGuard } from '../auth/cerbos/permission.guard';
import { CerbosService } from '../common/cerbos/cerbos.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    DatabaseModule.forFeature([
      CommentEntity,
      CommentRepository,
      CommentVoteEntity,
      CommentVoteRepository,
      LanguageEntity,
      LanguageRepository,
      CommentTranslationEntity,
      CommentTranslationRepository,
      CommentRecipientEntity,
      CommentRecipientRepository,
    ]),
    forwardRef(() => StoryModule),
    forwardRef(() => NotificationModule),
    forwardRef(() => LexiconModule),
    forwardRef(() => LanguageModule),
    MessengerModule,
    IvrrModule,
  ],
  providers: [
    CommentService,
    CommentModeratorService,
    CommentTranslationModeratorService,
    ConfigProvider,
    PermissionGuard, CerbosService
  ],
  controllers: [
    CommentModeratorController,
    CommentController,
    CommentTranslationModeratorController,
  ],

  exports: [
    CommentTranslationModeratorService,
    CommentService,
    CommentModeratorService,
  ],
})
export class CommentModule { }
