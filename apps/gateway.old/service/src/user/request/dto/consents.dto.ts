import { ApiProperty } from '@nestjs/swagger';

export class ConsentsDto {
  @ApiProperty({ required: true, type: String })
  termsOfService: string;

  @ApiProperty({ required: true, type: String })
  communityGuidelines: string;

  @ApiProperty({ required: true, type: String })
  privacyPolicy: string;
}
