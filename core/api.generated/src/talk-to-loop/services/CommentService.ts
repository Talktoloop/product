/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCommentDto } from '../models/AddCommentDto';
import type { CommentStoryListRO } from '../models/CommentStoryListRO';
import type { SuccessRO } from '../models/SuccessRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CommentService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Add new Comment
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentControllerAddNewComment({
        storyId,
        requestBody,
        contentLanguage,
    }: {
        storyId: string,
        requestBody: AddCommentDto,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/comment/{storyId}',
            path: {
                'storyId': storyId,
            },
            headers: {
                'content-language': contentLanguage,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get list of comments
     * @returns CommentStoryListRO
     * @throws ApiError
     */
    public commentControllerGetListOfComments({
        storyId,
        contentLanguage,
    }: {
        storyId: string,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<Array<CommentStoryListRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/comment/{storyId}',
            path: {
                'storyId': storyId,
            },
            headers: {
                'content-language': contentLanguage,
            },
        });
    }

    /**
     * Add vote to selected comment
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentControllerAddCommentVote({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/comment/{id}/vote',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Remove vote to selected comment
     * @returns SuccessRO
     * @throws ApiError
     */
    public commentControllerUnVoteComment({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/comment/{id}/unvote',
            path: {
                'id': id,
            },
        });
    }

}
