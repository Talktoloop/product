/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryByIpRO } from '../models/CountryByIpRO';
import type { EditUserDataDto } from '../models/EditUserDataDto';
import type { EditUserNotificationDto } from '../models/EditUserNotificationDto';
import type { LocationRO } from '../models/LocationRO';
import type { SuccessRO } from '../models/SuccessRO';
import type { UserOrganisationRO } from '../models/UserOrganisationRO';
import type { UserProfileRO } from '../models/UserProfileRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get my profile
     * @returns UserProfileRO
     * @throws ApiError
     */
    public userControllerProfile(): CancelablePromise<UserProfileRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user/me',
        });
    }

    /**
     * Update user data
     * @returns SuccessRO
     * @throws ApiError
     */
    public userControllerUpdateUserData({
        requestBody,
    }: {
        requestBody: EditUserDataDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update user notifications
     * @returns SuccessRO
     * @throws ApiError
     */
    public userControllerUpdateUserNotification({
        requestBody,
    }: {
        requestBody: EditUserNotificationDto,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/user/notifications',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Find location by coordinates
     * @returns LocationRO
     * @throws ApiError
     */
    public userControllerFindLocationsByCoordinates({
        longitude,
        latitude,
        contentLanguage,
    }: {
        longitude: number,
        latitude: number,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<Array<LocationRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user/location/coordinates',
            headers: {
                'content-language': contentLanguage,
            },
            query: {
                'longitude': longitude,
                'latitude': latitude,
            },
        });
    }

    /**
     * Find locations by phrase and country
     * @returns LocationRO
     * @throws ApiError
     */
    public userControllerFindLocationsByPhrase({
        phrase,
        contentLanguage,
        country,
    }: {
        phrase: string,
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
        country?: string,
    }): CancelablePromise<Array<LocationRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user/location/phrase',
            headers: {
                'content-language': contentLanguage,
            },
            query: {
                'phrase': phrase,
                'country': country,
            },
        });
    }

    /**
     * Check country
     * @returns CountryByIpRO
     * @throws ApiError
     */
    public userControllerCheckCountry(): CancelablePromise<CountryByIpRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user/country',
        });
    }

    /**
     * Get user organisation
     * @returns UserOrganisationRO
     * @throws ApiError
     */
    public userControllerGetUserOrganisation({
        email,
    }: {
        email: string,
    }): CancelablePromise<UserOrganisationRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user/{email}/organisation',
            path: {
                'email': email,
            },
        });
    }

    /**
     * Import users to airtable
     * @returns SuccessRO
     * @throws ApiError
     */
    public userControllerImportToAirtable(): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user/import-to-airtable',
        });
    }

    /**
     * Update users account status
     * @returns SuccessRO
     * @throws ApiError
     */
    public userControllerUpdateUsersAccountStatus(): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user/update-account-status',
        });
    }

}
