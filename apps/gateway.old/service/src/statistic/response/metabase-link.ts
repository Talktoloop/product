import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MetabaseOpenFeedbackLinkRO {
  @Expose()
  @ApiProperty({ example: "https://looping.com" })
  url: string;
}