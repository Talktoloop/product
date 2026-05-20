/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusRO } from '../models/StatusRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get confirmation status
     * @returns StatusRO
     * @throws ApiError
     */
    public authControllerGetEmailConfirmation({
        email,
    }: {
        email: string,
    }): CancelablePromise<StatusRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/auth/confirmation',
            query: {
                'email': email,
            },
        });
    }

}
