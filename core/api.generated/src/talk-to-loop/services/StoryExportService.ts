/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExportedStoriesWithPaginationRO } from '../models/ExportedStoriesWithPaginationRO';
import type { ExportStoriesDTO } from '../models/ExportStoriesDTO';
import type { SuccessRO } from '../models/SuccessRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StoryExportService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Export stories to CSV by moderator
     * @returns SuccessRO
     * @throws ApiError
     */
    public exportControllerExportToCsvByModerator({
        requestBody,
    }: {
        requestBody: ExportStoriesDTO,
    }): CancelablePromise<SuccessRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/export/moderator',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Export stories in JSON format by user with subscription
     * @returns ExportedStoriesWithPaginationRO
     * @throws ApiError
     */
    public exportControllerExportToJson({
        page,
        limit,
        country,
        type,
        age,
        gender,
        difficulty,
        organisation,
        thematic,
        from,
        to,
        order,
        contentLanguage,
    }: {
        page: number,
        limit: number,
        /**
         * Country code in format https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
         */
        country?: Array<string>,
        type?: Array<'thanks' | 'question' | 'opinion' | 'concern' | 'request'>,
        age?: Array<'14-17' | '18-29' | '30-59' | '60+' | 'no_answer'>,
        gender?: Array<'female' | 'male' | 'non_binary' | 'no_answer'>,
        difficulty?: Array<'seeing' | 'hearing' | 'walkingOrClimbingSteps' | 'remembering' | 'selfCareForExampleWashing' | 'communicating' | 'other' | 'none'>,
        /**
         * A phrase containing the name of the organization
         */
        organisation?: string,
        thematic?: Array<'health.medicalCentres' | 'health.medications/MedicinesFacilitiesAndServices' | 'health.epidemics/Pandemics' | 'health.covid' | 'health.ebola' | 'health.hiv/Aids' | 'health.gender-basedViolence' | 'health.sexualAndReproductiveRights' | 'health.mentalHealth' | 'health.other' | 'foodSecurity.nutrition' | 'foodSecurity.feeding/Malnutrition' | 'foodSecurity.livelihoods' | 'foodSecurity.foodItems' | 'foodSecurity.livestock' | 'foodSecurity.agriculture' | 'foodSecurity.locust' | 'foodSecurity.other' | 'wash.handwashingStations' | 'wash.waterPoints' | 'wash.latrines' | 'wash.waterTrucking' | 'wash.solidWaste/GarbageManagement' | 'wash.waterFacilitiesAndSupplies' | 'wash.flooding/HeavyRains' | 'wash.other' | 'shelter.non-foodItems' | 'shelter.temporaryShelters' | 'shelter.campCoordinationManagement' | 'shelter.housing' | 'shelter.lightingAndElectricity' | 'shelter.construction' | 'shelter.technicalSupport' | 'shelter.other' | 'education.earlyChildhood' | 'education.primary' | 'education.secondary' | 'education.university/Colleges/Trades' | 'education.scholarships' | 'education.other' | 'protection.children' | 'protection.youngPeople' | 'protection.women' | 'protection.personWithDisabilities' | 'protection.elderlies' | 'protection.lgtbq+' | 'protection.chronicallyIllPeople' | 'protection.legalStatus(refugees)' | 'protection.indigenousCommunity' | 'protection.lowIncomeFamilies' | 'protection.idp' | 'protection.minorityGroup' | 'protection.other' | 'governance.elections' | 'governance.finance' | 'governance.civicSpace' | 'governance.safetyAndSecurity' | 'governance.other' | 'cross-cutting.logistic' | 'cross-cutting.cash' | 'cross-cutting.telecommunications' | 'cross-cutting.capacityBuilding' | 'cross-cutting.communitySensitisation' | 'cross-cutting.aidWorkers' | 'cross-cutting.climateChange' | 'cross-cutting.environment' | 'cross-cutting.drrAndPreparedness' | 'cross-cutting.loopOnboarding' | 'cross-cutting.other'>,
        from?: string,
        to?: string,
        order?: 'ASC' | 'DESC',
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<ExportedStoriesWithPaginationRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/export/json',
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
                'from': from,
                'to': to,
                'page': page,
                'limit': limit,
                'order': order,
            },
        });
    }

    /**
     * Export stories to CSV by user with subscription.
     * @returns any
     * @throws ApiError
     */
    public exportControllerExportToCsv({
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
        contentLanguage,
    }: {
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
        contentLanguage?: 'en' | 'fr' | 'es' | 'ar' | 'ny' | 'ceb' | 'so' | 'tl' | 'bem' | 'maa' | 'id' | 'tog' | 'uk' | 'pl' | 'loz' | 'ru',
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/export/csv',
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
            },
        });
    }

    /**
     * Collect information when user exit export csv modal
     * @returns any
     * @throws ApiError
     */
    public exportControllerSaveUserCsvActivity(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/export/user-csv-activity',
        });
    }

}
