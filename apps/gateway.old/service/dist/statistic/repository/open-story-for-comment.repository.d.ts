import { CommentRepository } from '../../comment/repository/comment.repository';
import { FilterDto } from '../../common/dto/filter.dto';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { Author } from '../interfaces/author.interface';
export declare class OpenStoryForCommentRepository extends CommentRepository {
    getCommentsByPeriod(filters: FilterDto): Promise<QuantityPerMonth[]>;
    getUniqueAuthorsIdsForComment(filters?: FilterDto): Promise<Author[]>;
    getNumberOfOrganizationRepliesForSenstiveStories(filters?: FilterDto): Promise<number>;
    getNumberOfCommunityRepliesForSenstiveStories(filters?: FilterDto): Promise<number>;
    getTotalResponsesCount(filters?: FilterDto): Promise<number>;
}
