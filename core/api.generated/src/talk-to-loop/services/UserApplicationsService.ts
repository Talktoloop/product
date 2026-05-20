/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddOrganisationApplicationDto } from '../models/AddOrganisationApplicationDto';
import type { SuccessRO } from '../models/SuccessRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserApplicationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Apply to the organization
     * @returns SuccessRO
     * @throws ApiError
     */
    public organisationApplicationControllerAddOrganisationApplication({
        requestBody,
    }: {
        requestBody: AddOrganisationApplicationDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/user/application',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
