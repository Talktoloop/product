/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TranslationRO } from './TranslationRO';
import type { UserCommentDetailsRO } from './UserCommentDetailsRO';

export type CommentStoryListRO = {
    content: string;
    id: string;
    createdAt: string;
    user: UserCommentDetailsRO;
    votes: number;
    authorNickname: string;
    storyId: string;
    contentType: 'manual' | 'machine';
    language: string;
    children: Array<string>;
    translations: Array<TranslationRO>;
};

