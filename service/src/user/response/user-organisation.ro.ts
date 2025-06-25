import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserOrganisationRO {
  @Expose()
  @ApiProperty()
  organisationId: string;

  @Expose()
  @ApiProperty()
  name: string;
}
