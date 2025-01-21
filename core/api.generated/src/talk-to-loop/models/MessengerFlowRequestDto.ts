/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessengerUserRequestDto } from './MessengerUserRequestDto';

export type MessengerFlowRequestDto = {
    storyUuid: string;
    lastFlowId?: string;
    flowStartedAt: string;
    senderId: string;
    pageId: string;
    lang: string;
    additionalInfo: string;
    storyType: string;
    shareUserInfo: boolean;
    user: MessengerUserRequestDto;
    flowResponses: Array<string>;
};

