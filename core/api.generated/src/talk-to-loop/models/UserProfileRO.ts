/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganisationRO } from './OrganisationRO';

export type UserProfileRO = {
    nickname: string;
    email: string;
    firstName: string;
    lastName: string;
    registrationStatus: 'complete' | 'require_profile_update' | 'awating_to_assign_to_organisation' | 'invited';
    id: string;
    organisation: OrganisationRO;
    notifications: boolean;
    reminders: boolean;
    role: number;
    hideLastName: boolean;
    validityTimeInDays: number;
    plan: string;
};

