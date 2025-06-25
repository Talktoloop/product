import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MessengerUserDataRO {
  @Expose()
  @ApiProperty()
  firstName: string;

  @Expose()
  @ApiProperty()
  lastName: string;

  @Expose({ name: 'ageByUser' })
  @ApiProperty()
  age: string;

  @Expose({ name: 'difficultyByUser' })
  @ApiProperty()
  disability: string;

  @Expose({ name: 'genderByUser' })
  @ApiProperty()
  gender: string;
}
