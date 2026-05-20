/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdministrativeDataPathRO } from '../models/AdministrativeDataPathRO';
import type { AdministrativeDataRO } from '../models/AdministrativeDataRO';
import type { SearchResultRO } from '../models/SearchResultRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdministrativeDataService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of administrative data
     * @returns AdministrativeDataRO
     * @throws ApiError
     */
    public administrativeDataControllerGetAdministrativeData({
        countryId,
        parentId,
        onlyWithStory = false,
        contentLanguage,
    }: {
        countryId: number,
        parentId?: number,
        onlyWithStory?: boolean,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<Array<AdministrativeDataRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/administrative-data',
            headers: {
                'content-language': contentLanguage,
            },
            query: {
                'parentId': parentId,
                'countryId': countryId,
                'onlyWithStory': onlyWithStory,
            },
        });
    }

    /**
     * Get administrative data path
     * @returns AdministrativeDataPathRO
     * @throws ApiError
     */
    public administrativeDataControllerGetAdministrativeDataPath({
        id,
        contentLanguage,
    }: {
        id: number,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<AdministrativeDataPathRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/administrative-data/{id}/path',
            path: {
                'id': id,
            },
            headers: {
                'content-language': contentLanguage,
            },
        });
    }

    /**
     * Find administrative data by phrase
     * @returns SearchResultRO
     * @throws ApiError
     */
    public administrativeDataControllerFindAdministrativeData({
        countryId,
        phrase,
        parentId,
        onlyWithStory = false,
        contentLanguage,
    }: {
        countryId: number,
        phrase: string,
        parentId?: number,
        onlyWithStory?: boolean,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<SearchResultRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/administrative-data/search',
            headers: {
                'content-language': contentLanguage,
            },
            query: {
                'countryId': countryId,
                'parentId': parentId,
                'phrase': phrase,
                'onlyWithStory': onlyWithStory,
            },
        });
    }

    /**
     * Parse places to administrative data
     * @returns string
     * @throws ApiError
     */
    public administrativeDataControllerParseCountryRegions({
        countryCode,
        email,
    }: {
        countryCode: string,
        email?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/administrative-data/parse',
            query: {
                'countryCode': countryCode,
                'email': email,
            },
        });
    }

    /**
     * Import administrative boundaries of country from api
     * @returns string
     * @throws ApiError
     */
    public administrativeDataControllerImportCountryRegions({
        countryCode,
        firstLevel = 4,
        lastLevel = 6,
        saveDataInDb = false,
        exceptionIds,
    }: {
        countryCode: string,
        /**
         * It is nesting level in https://overpass-api.de/
         */
        firstLevel?: number,
        /**
         * It is nesting level in https://overpass-api.de/
         */
        lastLevel?: number,
        saveDataInDb?: boolean,
        /**
         * IDs in https://overpass-api.de/
         */
        exceptionIds?: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/administrative-data/import-from-api',
            query: {
                'countryCode': countryCode,
                'firstLevel': firstLevel,
                'lastLevel': lastLevel,
                'saveDataInDB': saveDataInDb,
                'exceptionIds': exceptionIds,
            },
        });
    }

    /**
     * Import administrative boundaries of country from xlsx
     * @returns string
     * @throws ApiError
     */
    public administrativeDataControllerImportXlsxCountryRegions({
        countryCode,
        saveDataInDb = false,
    }: {
        countryCode: string,
        saveDataInDb?: boolean,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/administrative-data/import-from-excel',
            query: {
                'countryCode': countryCode,
                'saveDataInDB': saveDataInDb,
            },
        });
    }

}
