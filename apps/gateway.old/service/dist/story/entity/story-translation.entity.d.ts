import { StoryEntity } from './story.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';
import { StoryHistoricalTranslationEntity } from './story-historical-translation.entity';
export declare class StoryTranslationEntity {
    constructor(data?: {
        storyId?: string;
        languageId?: number;
        content?: string;
        language?: LanguageEntity;
        numberOfWords?: number;
        status?: TRANSLATION_STATUS_CONSTANTS;
        type?: TRANSLATION_TYPE_CONSTANTS;
    });
    id: number;
    numberOfWords: number;
    languageId: number;
    storyId: string;
    content: string;
    isOriginalContent: boolean;
    createdAt: Date;
    updatedAt: Date;
    type: TRANSLATION_TYPE_CONSTANTS;
    story: StoryEntity;
    historicalTranslations?: StoryHistoricalTranslationEntity[];
    language: LanguageEntity;
    status: TRANSLATION_STATUS_CONSTANTS;
}
