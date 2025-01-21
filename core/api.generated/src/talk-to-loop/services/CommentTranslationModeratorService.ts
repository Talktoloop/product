/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RemoveCommentTranslationDto } from '../models/RemoveCommentTranslationDto';
import type { RetryTranslationDto } from '../models/RetryTranslationDto';
import type { SaveTranslationDto } from '../models/SaveTranslationDto';
import type { SuccessRO } from '../models/SuccessRO';
import type { TranslationRO } from '../models/TranslationRO';
import type { VerifyCommentTranslationDto } from '../models/VerifyCommentTranslationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CommentTranslationModeratorService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Remove story translation
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentTranslationModeratorControllerRemoveStoryTranslation({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: RemoveCommentTranslationDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/comment/moderator/{id}/translation',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get list of comment translations statuses
     * @returns TranslationRO
     * @throws ApiError
     */
    public commentTranslationModeratorControllerGetTranslationStatus({
        id,
    }: {
        id: string,
    }): CancelablePromise<Array<TranslationRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/comment/moderator/{id}/translation',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Add translation to particular comment
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentTranslationModeratorControllerSaveTranslation({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: SaveTranslationDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/comment/moderator/{id}/translation',
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
    public commentTranslationModeratorControllerVerifyStoryTranslation({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: VerifyCommentTranslationDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/comment/moderator/{id}/translation/verify',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retry story translation
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentTranslationModeratorControllerRetryStoryTranslation({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: RetryTranslationDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/comment/moderator/{id}/translation/retry',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
