import { ApiProperty } from '@nestjs/swagger';
import { SUBSCRIPTION_TYPE } from '../../constant/subscription-type.constant';

export class GenerateTokenDTO {
  @ApiProperty({ type: String })
  userId?: string;

  @ApiProperty({ type: String })
  organisationId?: string;

  @ApiProperty({ type: Number, required: true, default: 365 })
  tokenValidityInDays: number;

  @ApiProperty({
    type: String,
    required: true,
    default: SUBSCRIPTION_TYPE.PREMIUM,
  })
  subscriptionType: SUBSCRIPTION_TYPE;
}
