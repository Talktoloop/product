import { Injectable } from '@nestjs/common';
import { StoryRepository } from '../story/repository/story.repository';
import { CommentRepository } from '../comment/repository/comment.repository';
import { IncomingStoriesAndCommentsRO } from './response/incoming-stories-and-comments.ro';
import { OutgoingCommentsRO } from './response/outgoing-comments.ro';
import { DashboardFilterDTO } from './request/dto/dashboard-filter.dto';
import { IncomingDataDashboardFilterDTO } from './request/dto/incoming-data-dashboard-filter.dto';
import { COMMENT_STATUS } from '@ourloop/shared';

@Injectable()
export class DashboardService {
  constructor(
    private readonly storyRepository: StoryRepository,
    private readonly commentRepository: CommentRepository,
  ) {}

  async getNumberOfIncomingStoriesAndComments(
    params: IncomingDataDashboardFilterDTO,
  ): Promise<IncomingStoriesAndCommentsRO> {
    const [numberOfStories, numberOfComments] = await Promise.all([
      this.storyRepository.getNumberOfPendingStories(params),
      this.commentRepository.getNumberOfComments(params, [
        COMMENT_STATUS.PENDING_REVIEW,
        COMMENT_STATUS.PENDING_EDIT,
      ]),
    ]);

    return {
      numberOfStories,
      numberOfComments,
    };
  }

  async getNumberOfOutgoingComments(
    params: DashboardFilterDTO,
  ): Promise<OutgoingCommentsRO> {
    const [numberOfPendingRecordingComments, numberOfScheduledComments] =
      await Promise.all([
        this.commentRepository.getNumberOfComments(params, [
          COMMENT_STATUS.PENDING_RECORDING,
        ]),
        this.commentRepository.getNumberOfComments(params, [
          COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
        ]),
      ]);

    return {
      numberOfPendingRecordingComments,
      numberOfScheduledComments,
    };
  }
}
