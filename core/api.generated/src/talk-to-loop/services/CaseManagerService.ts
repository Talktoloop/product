/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaseManagerRO } from '../models/CaseManagerRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CaseManagerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get random case manager
     * @returns CaseManagerRO
     * @throws ApiError
     */
    public caseManagerControllerGetRandomCaseManager({
        contentLanguage,
    }: {
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<CaseManagerRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case-manager',
            headers: {
                'content-language': contentLanguage,
            },
        });
    }

}
