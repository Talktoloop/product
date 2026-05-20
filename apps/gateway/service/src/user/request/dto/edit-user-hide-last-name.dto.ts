import { ApiProperty } from '@nestjs/swagger';

export class EditUserHideLastName {
  @ApiProperty({ required: true, type: Boolean })
  hideLastName: boolean;

  @ApiProperty({ required: true, type: String })
  firtstName: string;

  @ApiProperty({ required: true, type: String })
  lastName: string;
}
