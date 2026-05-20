/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AverageTakenTimeToCompleteStepRO } from '../models/AverageTakenTimeToCompleteStepRO';
import type { CountRO } from '../models/CountRO';
import type { HowManyCaseReceivedRO } from '../models/HowManyCaseReceivedRO';
import type { ResponsiveByStepRO } from '../models/ResponsiveByStepRO';
import type { StoriesCodeDatesRO } from '../models/StoriesCodeDatesRO';
import type { TypeAverageCountRO } from '../models/TypeAverageCountRO';
import type { TypeValuesRO } from '../models/TypeValuesRO';
import type { WhatAreTheOutcomesRO } from '../models/WhatAreTheOutcomesRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StatisticCasesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get information how many cases have been received
     * @returns HowManyCaseReceivedRO
     * @throws ApiError
     */
    public caseControllerGetInformationHowManyCasesReceived({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<HowManyCaseReceivedRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/cases-received',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get cases grouped by allegation and author perspective
     * @returns TypeValuesRO
     * @throws ApiError
     */
    public caseControllerGetCasesGroupedByAllegationAndAuthorPerspective({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<Array<TypeValuesRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/allegation-type-author-perspective',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get data for survivor gender
     * @returns TypeValuesRO
     * @throws ApiError
     */
    public caseControllerGetSurvivorGender({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<Array<TypeValuesRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/survivor-gender',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get data for survivor age
     * @returns TypeValuesRO
     * @throws ApiError
     */
    public caseControllerGetSurvivorAge({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<Array<TypeValuesRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/survivor-age',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get data for organisation type
     * @returns TypeValuesRO
     * @throws ApiError
     */
    public caseControllerGetDataForOrganisationType({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<Array<TypeValuesRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/organisation-type',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get data for info did people referred for assistance received it
     * @returns TypeValuesRO
     * @throws ApiError
     */
    public caseControllerGetInfoDidPeopleReceivedAssistance({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<Array<TypeValuesRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/did-people-received-assistance',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get data for what are the outcomes
     * @returns WhatAreTheOutcomesRO
     * @throws ApiError
     */
    public caseControllerWhatAreTheOutcomes({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<WhatAreTheOutcomesRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/what-are-the-outcomes',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get data for what type of cases are in the accountability process now
     * @returns TypeValuesRO
     * @throws ApiError
     */
    public caseControllerWhatAreTheTypeOfCasesInTheAccountability({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<Array<TypeValuesRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/type-of-cases-accountability',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get data for whats the average time taken to complete each step of the accountability process
     * @returns AverageTakenTimeToCompleteStepRO
     * @throws ApiError
     */
    public caseControllerGetAverageTakenTimeToCompleteStep({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<Array<AverageTakenTimeToCompleteStepRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/average-taken-time-to-complete-step',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get data for Whats the average time taken for different types of cases to be processed
     * @returns TypeAverageCountRO
     * @throws ApiError
     */
    public caseControllerAverageTakenTime({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<Array<TypeAverageCountRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/average-taken-time',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get data about responsive by each step of process
     * @returns ResponsiveByStepRO
     * @throws ApiError
     */
    public caseControllerGetDataAboutResponsiveByStep({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<ResponsiveByStepRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/how-responsive-by-step',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get timeline for cases
     * @returns StoriesCodeDatesRO
     * @throws ApiError
     */
    public caseControllerGetTimelineForCases({
        from,
        to,
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
    }: {
        from: string,
        to: string,
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
    }): CancelablePromise<Array<StoriesCodeDatesRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/timeline-for-cases',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get Count of cases
     * @returns CountRO
     * @throws ApiError
     */
    public caseControllerGetCasesCount({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<CountRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/cases-count',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * Get information on how are organisation handling allegations
     * @returns TypeValuesRO
     * @throws ApiError
     */
    public caseControllerGetInformationAboutCaseAccountability({
        country,
        age,
        gender,
        organisationType,
        investigationOutcome,
        referredForAssistance,
        caseType,
        disability,
        thematic,
        from,
        to,
    }: {
        country?: string,
        age?: string,
        gender?: string,
        organisationType?: string,
        investigationOutcome?: string,
        referredForAssistance?: string,
        caseType?: string,
        disability?: string,
        thematic?: string,
        from?: string,
        to?: string,
    }): CancelablePromise<Array<TypeValuesRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/how-are-organisations-handling-allegations',
            query: {
                'country': country,
                'age': age,
                'gender': gender,
                'organisationType': organisationType,
                'investigationOutcome': investigationOutcome,
                'referredForAssistance': referredForAssistance,
                'caseType': caseType,
                'disability': disability,
                'thematic': thematic,
                'from': from,
                'to': to,
            },
        });
    }

}
