import { ApiProperty } from '@nestjs/swagger';

export class AddOrganisationApplicationDto {
  @ApiProperty({ required: true, type: String })
  organisationId: string;
}
