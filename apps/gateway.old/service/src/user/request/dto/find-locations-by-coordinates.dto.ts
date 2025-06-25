import { ApiProperty } from '@nestjs/swagger';

export class FindLocationsByCoordinatesDTO {
  @ApiProperty()
  longitude: number;

  @ApiProperty()
  latitude: number;
}
