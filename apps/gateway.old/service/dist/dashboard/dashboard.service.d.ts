import { StoryRepository } from '../story/repository/story.repository';
import { CommentRepository } from '../comment/repository/comment.repository';
import { IncomingStoriesAndCommentsRO } from './response/incoming-stories-and-comments.ro';
import { OutgoingCommentsRO } from './response/outgoing-comments.ro';
import { DashboardFilterDTO } from './request/dto/dashboard-filter.dto';
import { IncomingDataDashboardFilterDTO } from './request/dto/incoming-data-dashboard-filter.dto';
export declare class DashboardService {
    private readonly storyRepository;
    private readonly commentRepository;
    constructor(storyRepository: StoryRepository, commentRepository: CommentRepository);
    getNumberOfIncomingStoriesAndComments(params: IncomingDataDashboardFilterDTO): Promise<IncomingStoriesAndCommentsRO>;
    getNumberOfOutgoingComments(params: DashboardFilterDTO): Promise<OutgoingCommentsRO>;
}
