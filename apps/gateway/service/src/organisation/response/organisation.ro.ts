import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class OrganisationRO {
  @Expose()
  @ApiProperty()
  id: string;

  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  countryId: number;

  @Expose()
  @ApiProperty()
  acronym: string;

  @Expose()
  @ApiProperty()
  countryCode: string;

  @Expose()
  @ApiProperty()
  storiesCount: number;

  @Expose()
  @ApiProperty()
  usersCount: number;
}
