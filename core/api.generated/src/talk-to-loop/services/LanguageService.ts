/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { checkTranslationDto } from '../models/checkTranslationDto';
import type { CheckTranslationRO } from '../models/CheckTranslationRO';
import type { LanguageRO } from '../models/LanguageRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LanguageService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Check translation content
     * @returns CheckTranslationRO
     * @throws ApiError
     */
    public languageControllerCheckTranslation({
        requestBody,
    }: {
        requestBody: checkTranslationDto,
    }): CancelablePromise<CheckTranslationRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/language/check',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get list of supported languages
     * @returns LanguageRO
     * @throws ApiError
     */
    public languageControllerGetListOfTranslations(): CancelablePromise<Array<LanguageRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/language',
        });
    }

}
