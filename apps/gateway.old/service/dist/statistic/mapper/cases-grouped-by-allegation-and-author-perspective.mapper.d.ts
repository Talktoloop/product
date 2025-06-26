import { CaseSyncEntity } from '../../airtable-client/entity/case-sync.entity';
import { TypeValuesRO } from '../response/type-value.ro';
export declare const casesGroupedByAllegationAndAuthorPerspectiveMapper: (data: (CaseSyncEntity & {
    count: number;
    authorPerspective: string;
})[]) => TypeValuesRO[];
