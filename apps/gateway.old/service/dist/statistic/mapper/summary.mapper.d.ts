import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { SummaryRO } from '../response/summary.ro';
export declare const summaryMapper: (data: {
    organisations: OrganisationEntity[];
    languages: LanguageEntity[];
    storyIds: string[];
    commentIds: string[];
}) => SummaryRO;
