/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryRO } from './CategoryRO';
import type { LexiconRO } from './LexiconRO';
import type { OrganisationStoriesRO } from './OrganisationStoriesRO';
import type { TranslationRO } from './TranslationRO';
import type { UserCommentDetailsRO } from './UserCommentDetailsRO';

export type StoryWebModeratorRO = {
    id: string;
    content: string;
    publishedAt: string;
    place: string;
    channel: string;
    authorNickname: string;
    country: string;
    countryId: number;
    organisations: Array<OrganisationStoriesRO>;
    votes: number;
    views: number;
    comments: number;
    user: UserCommentDetailsRO;
    contentType: 'manual' | 'machine';
    language: string;
    translations: Array<TranslationRO>;
    thematics: Array<number>;
    categories: Array<CategoryRO>;
    difficulties: Array<LexiconRO>;
    maternityStatus: Array<LexiconRO>;
    difficulty: string;
    historicalContent: string;
    contactAccepted: boolean;
    age: number;
    gender: number;
    createdAt: string;
    emailProvided: boolean;
    isSensitive: boolean;
    markedAsSensitiveBy: 'author' | 'moderator';
    caseManagerNote: string;
    status: string;
    caseManagerReturnedAt: string;
};

