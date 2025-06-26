import { OrderEnum } from '../types';
import { FilterWithPaginationDto } from './filter-with-pagination.dto';
export declare class PaginationWithOrderAndFilterDto extends FilterWithPaginationDto {
    order?: OrderEnum;
}
