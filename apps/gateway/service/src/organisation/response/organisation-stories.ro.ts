import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class OrganisationStoriesRO {
  @Expose()
  @ApiProperty()
  id: string;

  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  acronym: string;

  @Expose()
  @ApiProperty()
  replied: boolean;

  @Expose()
  @ApiProperty()
  usersCount: number;

  @Expose()
  @ApiProperty()
  countryCode: string;

  @Expose()
  @ApiProperty()
  verified: boolean;
}
