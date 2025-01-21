/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LexiconRO } from './LexiconRO';
import type { TranslationRO } from './TranslationRO';
import type { UserCommentDetailsRO } from './UserCommentDetailsRO';

export type CommentModeratorRO = {
    content: string;
    id: string;
    createdAt: string;
    user: UserCommentDetailsRO;
    votes: number;
    authorNickname: string;
    storyId: string;
    contentType: 'manual' | 'machine';
    language: string;
    emailProvided: boolean;
    translations: Array<TranslationRO>;
    s3FileId: string;
    storyLanguage: string;
    parentCommentId: string;
    status: number;
    userId: string;
    publishedAt: string;
    channel: string;
    storyChannel: string;
    rejectRationale: string;
    rejectReasons: Array<LexiconRO>;
};

