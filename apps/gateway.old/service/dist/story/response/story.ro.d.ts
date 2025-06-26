import { CategoryRO } from '../../category/response/category.ro';
import { LexiconRO } from '../../lexicon/response/lexicon.ro';
import { StoryListRO } from './story-list.ro';
import { TranslationRO } from '../../common/response/translation';
export declare class StoryRO extends StoryListRO {
    categories: CategoryRO[];
    difficulty: string;
    difficulties: LexiconRO[];
    maternityStatus: LexiconRO[];
    age: number;
    gender: number;
    language: string;
    translations: TranslationRO[];
    channel: string;
}
