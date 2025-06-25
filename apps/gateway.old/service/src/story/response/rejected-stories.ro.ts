import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class RejectedStoriesRO {
  @Expose()
  @ApiProperty({ isArray: true, type: String })
  rejectedStoryIds: string[];

  @Expose()
  @ApiProperty({ isArray: true, type: String })
  failedStoryIds: string[];
}
