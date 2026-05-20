/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddStoryDto } from '../models/AddStoryDto';
import type { StoryListPaginationRO } from '../models/StoryListPaginationRO';
import type { StoryRO } from '../models/StoryRO';
import type { SuccessRO } from '../models/SuccessRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StoryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of stories
     * @returns StoryListPaginationRO
     * @throws ApiError
     */
    public storyControllerGetListOfStories({
        page,
        limit,
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
        q,
        order,
        contentLanguage,
    }: {
        page: number,
        limit: number,
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
        q?: string,
        order?: 'desc' | 'asc' | 'upvoted',
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<Array<StoryListPaginationRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story',
            headers: {
                'content-language': contentLanguage,
            },
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
                'page': page,
                'limit': limit,
                'q': q,
                'order': order,
            },
        });
    }

    /**
     * Create new story
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyControllerAddStory({
        requestBody,
        contentLanguage,
    }: {
        requestBody: AddStoryDto,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/story',
            headers: {
                'content-language': contentLanguage,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Add vote to selected story
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyControllerVoteToStory({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/story/{id}/vote',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Remove vote to selected story
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyControllerUnVoteStory({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/story/{id}/unvote',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get story details
     * @returns StoryRO
     * @throws ApiError
     */
    public storyControllerGetStoryDetails({
        id,
        contentLanguage,
    }: {
        id: string,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<StoryRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story/{id}',
            path: {
                'id': id,
            },
            headers: {
                'content-language': contentLanguage,
            },
        });
    }

}
