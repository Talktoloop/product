import { ApiProperty } from '@nestjs/swagger';
import { ConsentsDto } from './consents.dto';

export class EditUserDataDto {
  @ApiProperty({ required: true, type: String })
  firstName: string;

  @ApiProperty({ required: true, type: String })
  lastName: string;

  @ApiProperty({ required: true, type: Boolean })
  hideLastName: boolean;

  @ApiProperty({ required: false, type: ConsentsDto })
  consents: ConsentsDto;

  @ApiProperty({ required: false, type: String })
  organisationApplicationId: string;

  @ApiProperty({ required: false, type: Boolean })
  optin_marketing: boolean

  @ApiProperty({ required: false, type: String })
  email: string
}
