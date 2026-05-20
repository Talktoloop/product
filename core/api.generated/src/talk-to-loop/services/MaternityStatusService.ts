/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LexiconRO } from '../models/LexiconRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MaternityStatusService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of maternity status
     * @returns LexiconRO
     * @throws ApiError
     */
    public maternityStatusControllerGetListOfmaternintyStatus(): CancelablePromise<Array<LexiconRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/maternity_status',
        });
    }

}
