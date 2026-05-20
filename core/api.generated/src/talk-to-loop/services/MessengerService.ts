/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessengerAvailabilityRO } from '../models/MessengerAvailabilityRO';
import type { SendMessageDto } from '../models/SendMessageDto';
import type { SuccessRO } from '../models/SuccessRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MessengerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any
     * @throws ApiError
     */
    public facebookMessengerControllerTestInternal(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/messenger/facebook/test-external',
        });
    }

    /**
     * Send Facebook Messenger Message
     * @returns SuccessRO
     * @throws ApiError
     */
    public facebookMessengerControllerSendMessengerMessage({
        requestBody,
    }: {
        requestBody: SendMessageDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/messenger/facebook/message',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns MessengerAvailabilityRO
     * @throws ApiError
     */
    public facebookMessengerControllerCheckMessengerAvailability({
        storyId,
    }: {
        storyId: string,
    }): CancelablePromise<MessengerAvailabilityRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/messenger/facebook/is-conversation-available/{storyId}',
            path: {
                'storyId': storyId,
            },
        });
    }

}
