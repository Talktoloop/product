import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class StoriesAndRepliesGroupedByCategoryRO {
  @Expose()
  @ApiProperty({ example: 'thanks' })
  code: string;

  @Expose()
  @ApiProperty({ example: [2] })
  stories: number[];

  @Expose()
  @ApiProperty({ example: [1, 2] })
  replies: number[];
}
