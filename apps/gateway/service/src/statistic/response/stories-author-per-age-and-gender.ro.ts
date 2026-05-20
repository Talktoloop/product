import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class StoriesCodeValuesRO {
  @Expose()
  @ApiProperty({ example: 'concern' })
  code: string;

  @Expose()
  @ApiProperty({ example: [1, 2, 3, 4] })
  values: number[];
}

@Exclude()
export class StoriesAuthorPerAgeAndGenderRO {
  @Expose()
  @ApiProperty({ type: StoriesCodeValuesRO })
  age: StoriesCodeValuesRO[];

  @Expose()
  @ApiProperty({ type: StoriesCodeValuesRO })
  gender: StoriesCodeValuesRO[];
}
