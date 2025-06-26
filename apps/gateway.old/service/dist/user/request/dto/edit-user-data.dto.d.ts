import { ConsentsDto } from './consents.dto';
export declare class EditUserDataDto {
    firstName: string;
    lastName: string;
    hideLastName: boolean;
    consents: ConsentsDto;
    organisationApplicationId: string;
    optin_marketing: boolean;
    email: string;
}
