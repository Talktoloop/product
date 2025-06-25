import { ApiProperty } from '@nestjs/swagger';

export class GetCountriesDTO {
  @ApiProperty({ type: Boolean, default: false, required: false })
  onlyWithStory: boolean;
}
