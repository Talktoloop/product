/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SenderRO } from './SenderRO';

export type MessageRO = {
    id: number;
    storyId: string;
    content: string;
    isPinned: boolean;
    sender: SenderRO;
    createdAt: string;
};

