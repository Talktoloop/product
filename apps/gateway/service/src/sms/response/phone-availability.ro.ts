import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { PHONE_BLOCKERS_TYPE } from '@ourloop/shared';

@Exclude()
export class PhoneAvailabilityRO {
  @Expose()
  @ApiProperty({ example: 'sms' })
  type: PHONE_BLOCKERS_TYPE | null;
  @Expose()
  @ApiProperty({ example: '379937ea-e310-4f4f-b6f1-df5d34b2d3fe' })
  storyId: string | null;
}
