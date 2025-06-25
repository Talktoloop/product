import { ApiProperty } from '@nestjs/swagger';

export class LinkUserToOrganisationDTO {
  @ApiProperty({ type: String, required: true })
  email: string;

  @ApiProperty({ type: String, required: true })
  organisationId: string;

  @ApiProperty({ type: String, required: true })
  languageCode: string;
}

export class LinkUsersToOrganisationsDTO {
  @ApiProperty({ type: String, required: true })
  storyId: string;

  @ApiProperty({
    type: LinkUserToOrganisationDTO,
    isArray: true,
    required: true,
  })
  links: LinkUserToOrganisationDTO[];
}
