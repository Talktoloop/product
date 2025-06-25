import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ConversationRO {
  @Expose()
  @ApiProperty({ type: 'number' })
  id: number;
}
