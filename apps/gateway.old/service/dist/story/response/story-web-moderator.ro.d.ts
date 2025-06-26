import { TranslationRO } from '../../common/response/translation';
import { CategoryRO } from '../../category/response/category.ro';
import { LexiconRO } from '../../lexicon/response/lexicon.ro';
import { StoryListRO } from './story-list.ro';
import { MARKED_AS_SENSITIVE_BY } from '../../common/constant/marked-as-sensitive.constant';
export declare class StoryWebModeratorRO extends StoryListRO {
    categories: CategoryRO[];
    difficulties: LexiconRO[];
    maternityStatus: LexiconRO[];
    difficulty: string;
    historicalContent: string;
    contactAccepted: boolean;
    age: number;
    gender: number;
    createdAt: string;
    emailProvided: boolean;
    isSensitive: boolean;
    translations: TranslationRO[];
    language: string;
    markedAsSensitiveBy: MARKED_AS_SENSITIVE_BY;
    caseManagerNote: string;
    status: string;
    caseManagerReturnedAt?: string;
    isUrgent: boolean;
    isMinority: boolean;
}
