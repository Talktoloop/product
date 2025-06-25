import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class LocationRO {
  @Expose({ name: 'place_id' })
  @ApiProperty()
  id: string;

  @Expose()
  @ApiProperty()
  description: string;
}
