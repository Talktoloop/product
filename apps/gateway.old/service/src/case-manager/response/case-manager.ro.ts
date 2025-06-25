import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CaseManagerRO {
  @Expose()
  @ApiProperty({ example: 'Joe' })
  nickname: string;

  @Expose()
  @ApiProperty({ example: 'https://cdn.loop.elitecrew.io/placeholder.png' })
  avatar: string;

  @Expose()
  @ApiProperty({ example: 'I will do my best' })
  text?: string;
}
