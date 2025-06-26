import { CaseSyncEntity } from '../../airtable-client/entity/case-sync.entity';
import { TypeValuesRO } from '../response/type-value.ro';
export declare const casesGroupedByCaseAccountabilityAndOrganisationTypeMapper: (data: Array<(CaseSyncEntity & {
    count: number;
})[]>) => TypeValuesRO[];
