/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoryIvrrModeratorRO } from '../models/StoryIvrrModeratorRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IvrrStoryModeratorService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get details of particular IVRR story
     * @returns StoryIvrrModeratorRO
     * @throws ApiError
     */
    public storyIvrrModeratorControllerGetIvrrStoryDetails({
        id,
        contentLanguage,
    }: {
        id: string,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<StoryIvrrModeratorRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story/moderator/ivrr/{id}',
            path: {
                'id': id,
            },
            headers: {
                'content-language': contentLanguage,
            },
        });
    }

}
