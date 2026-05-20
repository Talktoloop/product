/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExportStoryDto } from '../models/ExportStoryDto';
import type { RejectContentDto } from '../models/RejectContentDto';
import type { RejectedStoriesRO } from '../models/RejectedStoriesRO';
import type { RejectStoriesDto } from '../models/RejectStoriesDto';
import type { StoryListModeratorPaginationRO } from '../models/StoryListModeratorPaginationRO';
import type { StoryMessengerModeratorRO } from '../models/StoryMessengerModeratorRO';
import type { StorySMSModeratorRO } from '../models/StorySMSModeratorRO';
import type { StoryWebModeratorRO } from '../models/StoryWebModeratorRO';
import type { SuccessRO } from '../models/SuccessRO';
import type { UpdateStoryDto } from '../models/UpdateStoryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StoryModeratorService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of stories for admin to publish or reject
     * @returns StoryListModeratorPaginationRO
     * @throws ApiError
     */
    public storyModeratorControllerGetListOfPending({
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
        status,
        durationMin,
        durationMax,
        isSensitive,
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
        order?: 'desc' | 'asc' | 'not_started' | 'pending_publication',
        language?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
        status?: 'not_started' | 'pending_translation' | 'awaiting_replay' | 'issuer_replied' | 'issuer_did_not_replied' | 'sent_from_case_manager_to_loop' | 'pending_transcription' | 'transcription_in_progress' | 'transcription_failed' | 'pending_publication' | 'pending_edit',
        durationMin?: number,
        durationMax?: number,
        isSensitive?: boolean,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<StoryListModeratorPaginationRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story/moderator/pending',
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
                'order': order,
                'language': language,
                'status': status,
                'durationMin': durationMin,
                'durationMax': durationMax,
                'isSensitive': isSensitive,
            },
        });
    }

    /**
     * Export sensitive story to AirTable
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyModeratorControllerExportStoryToAirTable({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: ExportStoryDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/story/moderator/{id}/export',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Stop completing story
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyModeratorControllerStopCompletingStory({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/story/moderator/{id}/stop-completing',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update story
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyModeratorControllerUpdateStory({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateStoryDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/story/moderator/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove story
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyModeratorControllerRemoveStory({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/story/moderator/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Unpublish story
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyModeratorControllerUnPublishStory({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/story/moderator/{id}/unpublish',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Publish story
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyModeratorControllerPublishStory({
        id,
    }: {
        id: string,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/story/moderator/{id}/publish',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Reject story
     * @returns SuccessRO
     * @throws ApiError
     */
    public storyModeratorControllerRejectStory({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: RejectContentDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/story/moderator/{id}/reject',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get details of particular WEB story
     * @returns StoryWebModeratorRO
     * @throws ApiError
     */
    public storyModeratorControllerGetWebStoryDetails({
        id,
        contentLanguage,
    }: {
        id: string,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<StoryWebModeratorRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story/moderator/web/{id}',
            path: {
                'id': id,
            },
            headers: {
                'content-language': contentLanguage,
            },
        });
    }

    /**
     * Get details of particular SMS story
     * @returns StorySMSModeratorRO
     * @throws ApiError
     */
    public storyModeratorControllerGetSmsStoryDetails({
        id,
        contentLanguage,
    }: {
        id: string,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<StorySMSModeratorRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story/moderator/sms/{id}',
            path: {
                'id': id,
            },
            headers: {
                'content-language': contentLanguage,
            },
        });
    }

    /**
     * Get details of particular Messenger story
     * @returns StoryMessengerModeratorRO
     * @throws ApiError
     */
    public storyModeratorControllerGetMessengerStoryDetails({
        id,
        contentLanguage,
    }: {
        id: string,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<StoryMessengerModeratorRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story/moderator/messenger/{id}',
            path: {
                'id': id,
            },
            headers: {
                'content-language': contentLanguage,
            },
        });
    }

    /**
     * Get details of particular WhatsApp story
     * @returns StoryMessengerModeratorRO
     * @throws ApiError
     */
    public storyModeratorControllerGetWhatsAppStoryDetails({
        id,
        contentLanguage,
    }: {
        id: string,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<StoryMessengerModeratorRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story/moderator/whatsapp/{id}',
            path: {
                'id': id,
            },
            headers: {
                'content-language': contentLanguage,
            },
        });
    }

    /**
     * Get details of particular Telegram story
     * @returns StoryMessengerModeratorRO
     * @throws ApiError
     */
    public storyModeratorControllerGetTelegramStoryDetails({
        id,
        contentLanguage,
    }: {
        id: string,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<StoryMessengerModeratorRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/story/moderator/telegram/{id}',
            path: {
                'id': id,
            },
            headers: {
                'content-language': contentLanguage,
            },
        });
    }

    /**
     * Reject stories
     * @returns RejectedStoriesRO
     * @throws ApiError
     */
    public storyModeratorControllerRejectStories({
        requestBody,
    }: {
        requestBody: RejectStoriesDto,
    }): CancelablePromise<RejectedStoriesRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/story/moderator/reject-stories',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
