/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AirTableSyncDTO } from '../models/AirTableSyncDTO';
import type { DeleteCasesDTO } from '../models/DeleteCasesDTO';
import type { SuccessRO } from '../models/SuccessRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AirTableSyncService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Add or update AirTableRow
     * @returns SuccessRO
     * @throws ApiError
     */
    public airTableClientControllerSynchronizeARow({
        requestBody,
        authorization,
    }: {
        requestBody: AirTableSyncDTO,
        authorization?: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/airtable-client',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete AirTableRow
     * @returns SuccessRO
     * @throws ApiError
     */
    public airTableClientControllerRemoveARows({
        requestBody,
        authorization,
    }: {
        requestBody: DeleteCasesDTO,
        authorization?: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/airtable-client',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
