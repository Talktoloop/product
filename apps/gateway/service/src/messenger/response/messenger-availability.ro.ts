import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MessengerAvailabilityRO {
  @Expose()
  @ApiProperty({ example: 'chat' })
  type: 'ONGOING_FLOW' | null;
  @Expose()
  @ApiProperty({ example: '379937ea-e310-4f4f-b6f1-df5d34b2d3fe' })
  storyId: string | null;
}
