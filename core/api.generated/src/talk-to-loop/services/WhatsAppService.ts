/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessengerAvailabilityRO } from '../models/MessengerAvailabilityRO';
import type { SendMessageDto } from '../models/SendMessageDto';
import type { SendMessageRO } from '../models/SendMessageRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WhatsAppService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Send WhatsApp Messenger Message
     * @returns SendMessageRO
     * @throws ApiError
     */
    public whatsAppMessengerControllerSendWhatsAppMessage({
        requestBody,
    }: {
        requestBody: SendMessageDto,
    }): CancelablePromise<SendMessageRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/messenger/whatsapp/message',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns MessengerAvailabilityRO
     * @throws ApiError
     */
    public whatsAppMessengerControllerCheckWhatsAppAvailability({
        storyId,
    }: {
        storyId: string,
    }): CancelablePromise<MessengerAvailabilityRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/messenger/whatsapp/is-conversation-available/{storyId}',
            path: {
                'storyId': storyId,
            },
        });
    }

}
