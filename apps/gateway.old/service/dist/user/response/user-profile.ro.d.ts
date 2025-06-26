import { OrganisationRO } from '../../organisation/response/organisation.ro';
import { REGISTRATION_STATUS } from './../constant/registration-status.constant';
export declare class UserProfileRO {
    nickname?: string;
    email: string;
    firstName: string;
    lastName: string;
    registrationStatus: REGISTRATION_STATUS;
    id: string;
    organisation?: OrganisationRO;
    notifications: boolean;
    reminders: boolean;
    role: number;
    hideLastName: boolean;
    validityTimeInDays: number;
    plan: string;
    optin_marketing: string;
}
