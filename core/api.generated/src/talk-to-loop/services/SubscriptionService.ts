/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenerateTokenDTO } from '../models/GenerateTokenDTO';
import type { SendTokenDTO } from '../models/SendTokenDTO';
import type { SubscriptionAccessDTO } from '../models/SubscriptionAccessDTO';
import type { SubscriptionTokenRO } from '../models/SubscriptionTokenRO';
import type { SuccessRO } from '../models/SuccessRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubscriptionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Send email with subscription request
     * @returns SuccessRO
     * @throws ApiError
     */
    public subscriptionControllerSendEmailWithSubscriptionRequest({
        requestBody,
    }: {
        requestBody: SubscriptionAccessDTO,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/subscription/request',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Generate subscription user token
     * @returns SubscriptionTokenRO
     * @throws ApiError
     */
    public subscriptionControllerGenerateSubscriptionToken({
        requestBody,
    }: {
        requestBody: GenerateTokenDTO,
    }): CancelablePromise<SubscriptionTokenRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/subscription/generate-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send subscription user token by email
     * @returns SuccessRO
     * @throws ApiError
     */
    public subscriptionControllerSendSubscriptionToken({
        requestBody,
    }: {
        requestBody: SendTokenDTO,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/subscription/send-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
