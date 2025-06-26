import { Repository } from 'typeorm';
import { CommentEntity } from '../entity/comment.entity';
import { COMMENT_STATUS } from '@ourloop/shared';
import { PaginationWithExtendedFilterDto } from '../../common/dto/pagination-with-extended-filter.dto';
import { Pagination } from '../../common/type/pagination.type';
import { DashboardFilterDTO } from '../../dashboard/request/dto/dashboard-filter.dto';
export declare class CommentRepository extends Repository<CommentEntity> {
    private readonly logger;
    private getQueryForFilteredComments;
    findCommentIdsByStatus(status: COMMENT_STATUS): Promise<Array<CommentEntity>>;
    getNumberOfComments(params: DashboardFilterDTO, statuses: COMMENT_STATUS[]): Promise<number>;
    findCommentIdsByCountryAndStatus(countryId: number, status: COMMENT_STATUS): Promise<any>;
    findPendingComments(params: PaginationWithExtendedFilterDto): Promise<Pagination>;
    findCommentsByStatus(params: PaginationWithExtendedFilterDto, status: COMMENT_STATUS, withDetails?: boolean): Promise<Pagination>;
    findAll(storyId: string): Promise<CommentEntity[]>;
    findByIdOrFail(id: string, relations?: string[]): Promise<CommentEntity>;
    findCommentDetailsById(id: string): Promise<CommentEntity>;
}
