/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryRO } from '../models/CountryRO';
import type { SuccessRO } from '../models/SuccessRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CountryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of countries
     * @returns CountryRO
     * @throws ApiError
     */
    public countryControllerGetCountries({
        onlyWithStory = false,
    }: {
        onlyWithStory?: boolean,
    }): CancelablePromise<Array<CountryRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/country',
            query: {
                'onlyWithStory': onlyWithStory,
            },
        });
    }

    /**
     * Get country codes
     * @returns string
     * @throws ApiError
     */
    public countryControllerGetCountryCodes(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/country/codes',
        });
    }

    /**
     * Import countries to airtable
     * @returns SuccessRO
     * @throws ApiError
     */
    public countryControllerImportToAirtable(): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/country/import-to-airtable',
        });
    }

}
