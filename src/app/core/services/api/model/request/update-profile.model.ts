export interface Consents {
  termsOfService: string;
  communityGuidelines: string;
  privacyPolicy: string;
}
export interface IUpdateProfileRequest {
  firstName: string;
  lastName?: string;
  hideLastName: boolean;
  consents: Consents;
  organisationApplicationId?: string;
  optin_marketing: boolean
  email: string
}
