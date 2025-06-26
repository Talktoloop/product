import { OrderEnum } from '../../../common/types';
export declare class ExportToJsonDTO {
    country?: string;
    type?: string[] | string;
    age?: string[] | string;
    gender?: string[] | string;
    difficulty?: string[] | string;
    organisation?: string;
    thematic?: string[] | string;
    from: string;
    to: string;
    page: number;
    limit: number;
    order?: OrderEnum;
    searchTerm?: string;
}
