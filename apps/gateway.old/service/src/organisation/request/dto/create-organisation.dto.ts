import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganisationDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: 'number', required: true })
  countryId?: number;

  @ApiProperty({ type: 'string', minLength: 2, maxLength: 16, required: false })
  acronym?: string;
}
