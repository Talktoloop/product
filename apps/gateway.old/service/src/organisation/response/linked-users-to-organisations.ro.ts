import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { SuccessRO } from '../../common/response/success.ro';

@Exclude()
export class LinkedUsersToOrganisationsRO extends SuccessRO {
  @Expose()
  @ApiProperty({ isArray: true, type: String })
  emailsWithSuccess: string[];

  @Expose()
  @ApiProperty({ isArray: true, type: String })
  emailsFailed: string[];
}
