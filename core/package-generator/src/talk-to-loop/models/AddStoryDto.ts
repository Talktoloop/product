/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddStoryDto = {
    content: string;
    place?: string;
    gender?: number;
    email?: string;
    age?: number;
    countryId?: number;
    authorNickname?: string;
    country?: string;
    difficulty?: 'no' | 'yes' | 'no_answer';
    organisations?: Array<string>;
    categories?: Array<number>;
    difficulties?: Array<number>;
    maternityStatus?: Array<number>;
    phone?: string;
    status?: string;
    isSensitive?: boolean;
    userWantContact?: boolean;
    regionId?: number;
};

