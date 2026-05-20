/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RemoveStoryTranslationDto } from '../models/RemoveStoryTranslationDto';
import type { RetryTranslationDto } from '../models/RetryTranslationDto';
import type { SaveTranslationDto } from '../models/SaveTranslationDto';
import type { SuccessRO } from '../models/SuccessRO';
import type { TranslationRO } from '../models/TranslationRO';
import type { VerifyStoryTranslationDto } from '../models/VerifyStoryTranslationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StoryTranslationModeratorService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Remove story translation
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyTranslationModeratorControllerRemoveStoryTranslation({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: RemoveStoryTranslationDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/story/moderator/{id}/translation',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get list of story translation statuses
     * @returns TranslationRO
     * @throws ApiError
     */
    public storyTranslationModeratorControllerGetTranslationStatus({
        id,
    }: {
        id: string,
    }): CancelablePromise<Array<TranslationRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story/moderator/{id}/translation',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Set translation to particular story
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyTranslationModeratorControllerSaveTranslation({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: SaveTranslationDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/story/moderator/{id}/translation',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Verify story translation
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyTranslationModeratorControllerVerifyStoryTranslation({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: VerifyStoryTranslationDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/story/moderator/{id}/translation/verify',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Restore original story content
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyTranslationModeratorControllerRestoreOriginalContent({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/story/moderator/{id}/translation/restore',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retry story translation
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyTranslationModeratorControllerRetryStoryTranslation({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: RetryTranslationDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/story/moderator/{id}/translation/retry',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
