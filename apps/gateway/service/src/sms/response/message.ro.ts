import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { SenderRO } from './sender.ro';

@Exclude()
export class MessageRO {
  @Expose()
  @ApiProperty({ type: Number })
  id: number;

  @Expose()
  @ApiProperty({ type: String })
  storyId: string;

  @Expose()
  @ApiProperty({ type: String })
  content: string;

  @Expose()
  @ApiProperty({ type: Boolean })
  isPinned: boolean;

  @Expose()
  @ApiProperty({ type: SenderRO })
  sender: SenderRO;

  @Expose()
  @ApiProperty({ type: Date })
  createdAt: Date;
}
