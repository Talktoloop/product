import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { StoryEntity } from '../story/entity/story.entity';
import { StoryRepository } from '../story/repository/story.repository';
import { CommentRepository } from '../comment/repository/comment.repository';
import { CommentEntity } from '../comment/entity/comment.entity';

@Module({
  imports: [
    DatabaseModule.forFeature([
      StoryEntity,
      StoryRepository,
      CommentEntity,
      CommentRepository,
    ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
  exports: [DashboardService],
})
export class DashboardModule {}
