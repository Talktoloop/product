/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StatisticFiltersForCasesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Filter values - referred for assistance
     * @returns string
     * @throws ApiError
     */
    public caseFilterControllerGetReferredForAssistanceValues(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/filter/referred-for-assistance',
        });
    }

    /**
     * Filter values - investigation outcome
     * @returns string
     * @throws ApiError
     */
    public caseFilterControllerGetInvestigationOutcomeValues(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/filter/investigation-outcome',
        });
    }

    /**
     * Filter values - organisation types
     * @returns string
     * @throws ApiError
     */
    public caseFilterControllerGetOrganisationTypes(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/filter/organisaiton-type',
        });
    }

    /**
     * Filter values - case types
     * @returns string
     * @throws ApiError
     */
    public caseFilterControllerGetCaseTypes(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/filter/case-type',
        });
    }

    /**
     * Filter values - countries
     * @returns string
     * @throws ApiError
     */
    public caseFilterControllerGetCountries(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/filter/country',
        });
    }

    /**
     * Filter values - age
     * @returns string
     * @throws ApiError
     */
    public caseFilterControllerGetAgeValues(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/filter/age',
        });
    }

    /**
     * Filter values - gender
     * @returns string
     * @throws ApiError
     */
    public caseFilterControllerGetGenderValues(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/filter/gender',
        });
    }

    /**
     * Filter values - disability
     * @returns string
     * @throws ApiError
     */
    public caseFilterControllerGetDisabilityValues(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/filter/disability',
        });
    }

    /**
     * Filter values - thematic area
     * @returns string
     * @throws ApiError
     */
    public caseFilterControllerGetThematicAreaValues(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/case/filter/thematic-area',
        });
    }

}
