import * as util from 'util';
import * as passport from 'passport';
import { JwtFromRequestFunction } from 'passport-jwt';
import { AuthService } from './auth.service';
import { Logger, HttpStatus } from '@nestjs/common';
import { SubscriptionService } from '../subscription/service/subscription.service';
import { UserService } from '../user/service/user.service';

export class StrategySubscription {
  public name = 'subscription';
  private fail;
  private pass;
  private auth: AuthService;
  private subscription: SubscriptionService;
  private readonly jwtFromRequest: JwtFromRequestFunction;
  private readonly logger = new Logger(StrategySubscription.name);

  constructor(
    options: {
      jwtFromRequest: JwtFromRequestFunction;
      subscription: SubscriptionService;
    },
    private readonly userService: UserService,
  ) {
    passport.Strategy.call(this);

    this.subscription = options.subscription;
    this.jwtFromRequest = options.jwtFromRequest;
  }

  async authenticate(request: Request): Promise<void> {
    try {
      const token = this.jwtFromRequest(request);
      if (!token) {
        return this.fail(
          { message: 'Missing Auth token' },
          HttpStatus.BAD_REQUEST,
        );
      }

      const decodedToken = this.subscription.decodeToken(token);

      if (this.subscription.checkIfTokenExpired(decodedToken?.exp)) {
        return this.fail();
      }

      if (
        !(await this.subscription.checkIfTokenExists(
          token,
          decodedToken?.groupType as string,
        ))
      ) {
        return this.fail();
      }

      this.pass();
    } catch (e) {
      this.logger.error(e);
      return this.fail(e);
    }
  }
}

util.inherits(StrategySubscription, passport.Strategy);
