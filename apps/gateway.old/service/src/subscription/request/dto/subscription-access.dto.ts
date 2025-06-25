import { ApiProperty } from '@nestjs/swagger';
import { ACCESS_TYPE } from '../../constant/access-type.constant';

export class SubscriptionAccessDTO {
  @ApiProperty({ enum: ACCESS_TYPE, required: true })
  access: ACCESS_TYPE;
}
