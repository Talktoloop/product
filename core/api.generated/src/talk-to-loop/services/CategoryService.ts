/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryRO } from '../models/CategoryRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CategoryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of categories
     * @returns CategoryRO
     * @throws ApiError
     */
    public categoryControllerGetListOfCategories({
        country,
        type,
        age,
        gender,
        difficulty,
        organisation,
        thematic,
        channel,
        from,
        to,
        regionId,
    }: {
        country?: string,
        type?: string,
        age?: string,
        gender?: string,
        difficulty?: string,
        organisation?: string,
        thematic?: string,
        channel?: any,
        from?: string,
        to?: string,
        regionId?: string,
    }): CancelablePromise<Array<CategoryRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/category',
            query: {
                'country': country,
                'type': type,
                'age': age,
                'gender': gender,
                'difficulty': difficulty,
                'organisation': organisation,
                'thematic': thematic,
                'channel': channel,
                'from': from,
                'to': to,
                'regionId': regionId,
            },
        });
    }

}
