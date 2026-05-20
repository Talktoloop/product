/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SortingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of possible sorting values
     * @returns any
     * @throws ApiError
     */
    public storySortingControllerGetListOfSortingValues(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story/moderator/pending/sorting',
        });
    }

}
