/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IncomingStoriesAndCommentsRO } from '../models/IncomingStoriesAndCommentsRO';
import type { OutgoingCommentsRO } from '../models/OutgoingCommentsRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DashboardService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get number of incoming stories and incoming comments
     * @returns IncomingStoriesAndCommentsRO
     * @throws ApiError
     */
    public dashboardControllerGetNumberOfIncomingStoriesAndComments({
        language,
        country,
        channel,
        from,
        to,
        status,
        durationMin,
        durationMax,
        isSensitive,
    }: {
        language?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
        country?: string,
        channel?: any,
        from?: string,
        to?: string,
        status?: 'not_started' | 'pending_translation' | 'awaiting_replay' | 'issuer_replied' | 'issuer_did_not_replied' | 'sent_from_case_manager_to_loop' | 'pending_transcription' | 'transcription_in_progress' | 'transcription_failed' | 'pending_publication' | 'pending_edit',
        durationMin?: number,
        durationMax?: number,
        isSensitive?: boolean,
    }): CancelablePromise<IncomingStoriesAndCommentsRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dashboard/quantity/incoming',
            query: {
                'language': language,
                'country': country,
                'channel': channel,
                'from': from,
                'to': to,
                'status': status,
                'durationMin': durationMin,
                'durationMax': durationMax,
                'isSensitive': isSensitive,
            },
        });
    }

    /**
     * Get number of outgoing comments
     * @returns OutgoingCommentsRO
     * @throws ApiError
     */
    public dashboardControllerGetNumberOfOutgoingComments({
        language,
        country,
        channel,
        from,
        to,
    }: {
        language?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
        country?: string,
        channel?: any,
        from?: string,
        to?: string,
    }): CancelablePromise<OutgoingCommentsRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dashboard/quantity/outgoing',
            query: {
                'language': language,
                'country': country,
                'channel': channel,
                'from': from,
                'to': to,
            },
        });
    }

}
