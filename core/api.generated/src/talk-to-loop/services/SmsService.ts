/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FinishedTextItFlowDTO } from '../models/FinishedTextItFlowDTO';
import type { PhoneAvailabilityRO } from '../models/PhoneAvailabilityRO';
import type { SendMessageDto } from '../models/SendMessageDto';
import type { SuccessRO } from '../models/SuccessRO';
import type { TextItOutgoingMessageDto } from '../models/TextItOutgoingMessageDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SmsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Send SMS Message
     * @returns SuccessRO
     * @throws ApiError
     */
    public messageControllerSendSmsMessage({
        requestBody,
    }: {
        requestBody: SendMessageDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/sms/message',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns PhoneAvailabilityRO
     * @throws ApiError
     */
    public messageControllerCheckPhoneAvailability({
        storyId,
    }: {
        storyId: string,
    }): CancelablePromise<PhoneAvailabilityRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/sms/is-phone-available/{storyId}',
            path: {
                'storyId': storyId,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public messageControllerFinishedTextItFLow({
        requestBody,
    }: {
        requestBody: FinishedTextItFlowDTO,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/sms/textit-finished-flow',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public messageControllerSendTextItMessage({
        requestBody,
    }: {
        requestBody: TextItOutgoingMessageDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/sms/textit-message',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
