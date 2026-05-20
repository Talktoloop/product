import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { StrategySubscription } from './strategy-subscription';
import { ExtractJwt } from 'passport-jwt';
import { SubscriptionService } from '../subscription/service/subscription.service';

@Injectable()
export class SubscriptionStrategy extends PassportStrategy(
  StrategySubscription,
  'subscription',
) {
  constructor(private readonly subscriptionService: SubscriptionService) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        subscription: subscriptionService,
      },
      async (request, token, done) => {
        done(token, null);
      },
    );
  }
}
