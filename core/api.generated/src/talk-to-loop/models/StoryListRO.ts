/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganisationStoriesRO } from './OrganisationStoriesRO';
import type { UserCommentDetailsRO } from './UserCommentDetailsRO';

export type StoryListRO = {
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
    translations: Array<string>;
    thematics: Array<number>;
};

