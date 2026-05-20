import { RegistrationStatus } from '../registration-status.enum';
import { IBaseEntityN } from './base-entity.model';

export interface IUserProfileAPI {
  nickname: string;
  email: string;
  id: string;
  organisation: IBaseEntityN;
  notifications: boolean;
  reminders: boolean;
  role: number;
  firstName: string;
  lastName: string;
  registrationStatus: RegistrationStatus;
  hideLastName: boolean;
  plan: string;
  validityTimeInDays: number;
  optin_marketing: boolean
}
