import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class RecordingRO {
  @Expose()
  @ApiProperty({ type: String })
  text: string;

  @Expose()
  @ApiProperty({ type: String })
  audio: string;
}

@Exclude()
export class RecordingsRO {
  @Expose()
  @ApiProperty({ type: RecordingRO })
  intro: RecordingRO;

  @Expose()
  @ApiProperty({ type: RecordingRO })
  outro: RecordingRO;
}
