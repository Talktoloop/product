import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class IncomingStoriesAndCommentsRO {
  @Expose()
  @ApiProperty({ type: Number })
  numberOfStories: number;

  @Expose()
  @ApiProperty({ type: Number })
  numberOfComments: number;
}
