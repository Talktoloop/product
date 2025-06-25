import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CountryRO {
  @Expose()
  @ApiProperty({ example: 1 })
  id: number;

  @Expose()
  @ApiProperty({ example: 'pl' })
  code: string;

  @Expose()
  @ApiProperty({ example: 48 })
  prefix: number;

  @Expose()
  @ApiProperty({ example: 48 })
  numberOfStories: number;

  @Expose()
  @ApiProperty({ example: true })
  hasChild: boolean;
}
