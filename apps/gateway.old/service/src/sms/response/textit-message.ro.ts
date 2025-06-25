import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

class TextItMessageData {
  @ApiProperty({ type: String })
  @Expose()
  type: string;

  @ApiProperty({ type: String })
  @Expose()
  channel_uuid: string;

  @ApiProperty({ type: String })
  @Expose()
  msg_uuid: string;

  @ApiProperty({ type: String })
  @Expose()
  text: string;

  @ApiProperty({ type: String })
  @Expose()
  urn: string;

  @ApiProperty({ type: String })
  @Expose()
  received_on: string;
}

@Exclude()
export class TextItMessageRO {
  @ApiProperty({ type: String })
  @Expose()
  message: string;

  @ApiProperty({ type: [TextItMessageData] })
  @Expose()
  data: TextItMessageData[];
}
