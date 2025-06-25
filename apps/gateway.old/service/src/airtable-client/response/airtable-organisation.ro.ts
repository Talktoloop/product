import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AirTableOrganisationRO {
  @Expose()
  @ApiProperty()
  airTableOrganisationCellId: string;

  @Expose()
  @ApiProperty()
  dBOrganisationId: string;
}
