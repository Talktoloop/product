import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { SubscriptionTokenInterface } from '../interface/subscription-token.interface';

@Exclude()
export class SubscriptionTokenRO {
  @Expose()
  @ApiProperty()
  subscriptionToken: SubscriptionTokenInterface;

  @Expose()
  @ApiProperty()
  plan?: string;
}
