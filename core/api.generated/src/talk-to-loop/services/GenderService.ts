/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdWithCounterRO } from '../models/IdWithCounterRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GenderService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of gender values
     * @returns IdWithCounterRO
     * @throws ApiError
     */
    public genderControllerGetListOfGenderValues({
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
    }): CancelablePromise<Array<IdWithCounterRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/gender',
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
