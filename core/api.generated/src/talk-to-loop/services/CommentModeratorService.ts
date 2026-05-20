/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentListModeratorPaginationRO } from '../models/CommentListModeratorPaginationRO';
import type { CommentModeratorRO } from '../models/CommentModeratorRO';
import type { RejectContentDto } from '../models/RejectContentDto';
import type { SuccessRO } from '../models/SuccessRO';
import type { UpdateCommentCommentDTO } from '../models/UpdateCommentCommentDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CommentModeratorService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Update comment
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentModeratorControllerUpdateComment({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateCommentCommentDTO,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/comment/moderator/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove comment
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentModeratorControllerRemoveComment({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/comment/moderator/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get details of particular comment
     * @returns CommentModeratorRO
     * @throws ApiError
     */
    public commentModeratorControllerGetCommentDetails({
        id,
    }: {
        id: string,
    }): CancelablePromise<CommentModeratorRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/comment/moderator/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Unpublish comment
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentModeratorControllerUnPublishComment({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/comment/moderator/{id}/unpublish',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Set pending recording status
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentModeratorControllerSetPendingRecordingStatus({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/comment/moderator/{id}/pending-recording',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Publish comment
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentModeratorControllerPublishComment({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/comment/moderator/{id}/publish',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Reject comment
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentModeratorControllerRejectComment({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: RejectContentDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/comment/moderator/{id}/reject',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get list of comments to publish or reject
     * @returns CommentListModeratorPaginationRO
     * @throws ApiError
     */
    public commentModeratorControllerGetPendingComments({
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
        order,
        language,
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
        order?: 'ASC' | 'DESC',
        language?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<CommentListModeratorPaginationRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/comment/moderator/pending',
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
                'order': order,
                'language': language,
            },
        });
    }

    /**
     * Get list of rejected comments
     * @returns CommentListModeratorPaginationRO
     * @throws ApiError
     */
    public commentModeratorControllerGetRejectedComments({
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
        order,
        language,
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
        order?: 'ASC' | 'DESC',
        language?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<CommentListModeratorPaginationRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/comment/moderator/rejected',
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
                'order': order,
                'language': language,
            },
        });
    }

    /**
     * Get list of pending recording comments
     * @returns CommentListModeratorPaginationRO
     * @throws ApiError
     */
    public commentModeratorControllerGetPendingRecordingComments({
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
        order,
        language,
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
        order?: 'ASC' | 'DESC',
        language?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<CommentListModeratorPaginationRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/comment/moderator/pending-recording',
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
                'order': order,
                'language': language,
            },
        });
    }

    /**
     * Get list of scheduled comments
     * @returns CommentListModeratorPaginationRO
     * @throws ApiError
     */
    public commentModeratorControllerGetScheduledComments({
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
        order,
        language,
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
        order?: 'ASC' | 'DESC',
        language?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<CommentListModeratorPaginationRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/comment/moderator/scheduled',
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
                'order': order,
                'language': language,
            },
        });
    }

}
