/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrganisationDto } from '../models/CreateOrganisationDto';
import type { IdRo } from '../models/IdRo';
import type { LinkedUsersToOrganisationsRO } from '../models/LinkedUsersToOrganisationsRO';
import type { LinkUsersToOrganisationsDTO } from '../models/LinkUsersToOrganisationsDTO';
import type { OrganisationRO } from '../models/OrganisationRO';
import type { SuccessRO } from '../models/SuccessRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrganisationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of organisations
     * @returns OrganisationRO
     * @throws ApiError
     */
    public organisationControllerGetListOfOrganisations(): CancelablePromise<Array<OrganisationRO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/organisation',
        });
    }

    /**
     * Create organisation
     * @returns IdRo
     * @throws ApiError
     */
    public organisationControllerCreateOrganisation({
        requestBody,
    }: {
        requestBody: CreateOrganisationDto,
    }): CancelablePromise<IdRo> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/organisation',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Link users to organisations
     * @returns LinkedUsersToOrganisationsRO
     * @throws ApiError
     */
    public organisationControllerLinkUsersToOrganisations({
        requestBody,
    }: {
        requestBody: LinkUsersToOrganisationsDTO,
    }): CancelablePromise<LinkedUsersToOrganisationsRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/organisation/link-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Import organisations to airtable
     * @returns SuccessRO
     * @throws ApiError
     */
    public organisationControllerImportToAirtable(): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/organisation/import-to-airtable',
        });
    }

}
