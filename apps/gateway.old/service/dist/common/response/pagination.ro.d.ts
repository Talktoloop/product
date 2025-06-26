import { PaginationMeta } from '../../common/type/pagination-meta.type';
export declare class PaginationRO implements PaginationMeta {
    itemCount?: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}
