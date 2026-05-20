import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AdministrativeDataRO {
  @Expose()
  @ApiProperty({ example: 1 })
  id: number;

  @Expose()
  @ApiProperty({ example: 'Poland' })
  name: string;

  @Expose()
  @ApiProperty({ example: true })
  hasChild: boolean;

  @Expose()
  @ApiProperty({ example: 1 })
  numberOfStories: number;
}
