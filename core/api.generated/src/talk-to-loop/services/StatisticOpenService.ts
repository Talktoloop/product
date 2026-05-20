/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvgResponseTimePerStoryTypeRO } from '../models/AvgResponseTimePerStoryTypeRO';
import type { CountRO } from '../models/CountRO';
import type { StoriesAndRepliesGroupedByCategoryRO } from '../models/StoriesAndRepliesGroupedByCategoryRO';
import type { StoriesAuthorPerAgeAndGenderRO } from '../models/StoriesAuthorPerAgeAndGenderRO';
import type { StoriesCodeDatesRO } from '../models/StoriesCodeDatesRO';
import type { StoriesCodeValuesRO } from '../models/StoriesCodeValuesRO';
import type { StoriesDividedByDisabilityRO } from '../models/StoriesDividedByDisabilityRO';
import type { StoriesTypeAndRepliesRO } from '../models/StoriesTypeAndRepliesRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StatisticOpenService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get number of stories, comments, organisations and languages
     * @returns StoriesTypeAndRepliesRO
     * @throws ApiError
     */
    public openStoryControllerGetSummary({
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
    }): CancelablePromise<StoriesTypeAndRepliesRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/open-story/summary',
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

    /**
     * Get statistics for story type and replies
     * @returns StoriesTypeAndRepliesRO
     * @throws ApiError
     */
    public openStoryControllerGetStoriesTypeAndReplies({
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
    }): CancelablePromise<StoriesTypeAndRepliesRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/open-story/stories-type-and-replies',
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

    /**
     * Get statistics for stories divided by disabilities
     * @returns StoriesDividedByDisabilityRO
     * @throws ApiError
     */
    public openStoryControllerGetStoriesDividedByDisabilities({
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
    }): CancelablePromise<Array<StoriesDividedByDisabilityRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/open-story/stories-by-disabilities',
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

    /**
     * Get statistics average response time per story type
     * @returns AvgResponseTimePerStoryTypeRO
     * @throws ApiError
     */
    public openStoryControllerGetAvgResponseTimePerStoryType({
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
    }): CancelablePromise<Array<AvgResponseTimePerStoryTypeRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/open-story/average-response-time-per-story-type',
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

    /**
     * Get statistics stories authors per age and gender divided by story type
     * @returns StoriesAuthorPerAgeAndGenderRO
     * @throws ApiError
     */
    public openStoryControllerGetStoriesAuthorPerAgeAndGender({
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
    }): CancelablePromise<Array<StoriesAuthorPerAgeAndGenderRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/open-story/stories-authors-age-gender',
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

    /**
     * Get statistics for stories and replies by category
     * @returns StoriesAndRepliesGroupedByCategoryRO
     * @throws ApiError
     */
    public openStoryControllerGetStoriesAndRepliesGroupedByCategory({
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
    }): CancelablePromise<Array<StoriesAndRepliesGroupedByCategoryRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/open-story/stories-and-replies-grouped-by-category',
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

    /**
     * Get statistics stories per thematic area divided by story type
     * @returns StoriesCodeValuesRO
     * @throws ApiError
     */
    public openStoryControllerGetStoriesPerThematicArea({
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
    }): CancelablePromise<Array<StoriesCodeValuesRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/open-story/stories-per-thematic-area',
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

    /**
     * Get timeline for stories and retries
     * @returns StoriesCodeDatesRO
     * @throws ApiError
     */
    public openStoryControllerGetTimelineForStoriesAndRetries({
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
    }): CancelablePromise<Array<StoriesCodeDatesRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/open-story/timeline-for-stories-and-retries',
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

    /**
     * Get Count of open stories
     * @returns CountRO
     * @throws ApiError
     */
    public openStoryControllerGetOpenStoriesCount({
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
    }): CancelablePromise<CountRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/open-story/open-stories-count',
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
