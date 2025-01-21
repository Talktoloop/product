/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TranslationDto } from './TranslationDto';

export type UpdateStoryDto = {
    gender: number;
    age: number;
    organisations: Array<string>;
    categories: Array<number>;
    difficulties: Array<number>;
    maternityStatus: Array<number>;
    thematics: Array<number>;
    language?: string;
    authorNickname?: string;
    content?: string;
    difficulty?: 'no' | 'yes' | 'no_answer';
    place?: string;
    isSensitive?: boolean;
    translations: Array<TranslationDto>;
    pinnedMessageIds: Array<number>;
    regionId?: number;
    countryId: number;
};

