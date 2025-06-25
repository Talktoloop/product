import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export enum SenderType {
  loop = 'loop',
  issuer = 'issuer',
  moderator = 'moderator',
}

@Exclude()
export class SenderRO {
  @Expose()
  @ApiProperty({ enum: SenderType })
  type: SenderType;

  @Expose()
  @ApiProperty({ type: String })
  id: string;

  @Expose()
  @ApiProperty({ type: String })
  username: string;
}
