import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class OutgoingCommentsRO {
  @Expose()
  @ApiProperty({ type: Number })
  numberOfPendingRecordingComments: number;

  @Expose()
  @ApiProperty({ type: Number })
  numberOfScheduledComments: number;
}
