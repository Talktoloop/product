import { ApiProperty } from '@nestjs/swagger';

export class FindLocationsByPhraseDTO {
  @ApiProperty()
  phrase: string;

  @ApiProperty({ required: false })
  country: string;
}
