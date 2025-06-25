import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { OrganisationRO } from '../../organisation/response/organisation.ro';
import { REGISTRATION_STATUS } from './../constant/registration-status.constant';

@Exclude()
export class UserProfileRO {
  @Expose()
  @ApiProperty()
  nickname?: string;

  @Expose()
  @ApiProperty()
  email: string;

  @Expose()
  @ApiProperty()
  firstName: string;

  @Expose()
  @ApiProperty()
  lastName: string;

  @Expose()
  @ApiProperty({ enum: REGISTRATION_STATUS })
  registrationStatus: REGISTRATION_STATUS;

  @Expose()
  @ApiProperty()
  id: string;

  @Expose()
  @ApiProperty()
  organisation?: OrganisationRO;

  @Expose()
  @ApiProperty()
  notifications: boolean;

  @Expose()
  @ApiProperty()
  reminders: boolean;

  @Expose()
  @ApiProperty()
  role: number;

  @Expose()
  @ApiProperty()
  hideLastName: boolean;

  @Expose()
  @ApiProperty()
  validityTimeInDays: number;

  @Expose()
  @ApiProperty()
  plan: string;

  @Expose()
  @ApiProperty()
  optin_marketing: string;
}
