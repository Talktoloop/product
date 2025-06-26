import { StoryEntity } from '../../story/entity/story.entity';
import { CaseSyncEntity } from '../../airtable-client/entity/case-sync.entity';
import { CountryAdministrativeDataEntity } from './country-administrative-data.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
export declare class CountryEntity {
    id: number;
    code: string;
    name: string;
    prefix: number;
    defaultLanguageId: number;
    language: LanguageEntity;
    administrativeData?: CountryAdministrativeDataEntity[];
    organisations?: OrganisationEntity[];
    stories?: StoryEntity[];
    cases?: CaseSyncEntity[];
}
