import * as util from 'util';
import * as passport from 'passport';
import { Logger, HttpStatus } from '@nestjs/common';
import { UserEntity } from '../user/entity/user.entity';
import { JwtFromRequestFunction } from 'passport-jwt';
import { AuthService } from './auth.service';

/**
 * This verification is done on the basis of recommendations from the official website of AWS
 * https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html
 */

export class Strategy {
  public name = 'cognito';
  private fail;
  private readonly jwtFromRequest: JwtFromRequestFunction;
  private readonly verify: (request, token, done) => UserEntity;
  private success: (user, error) => UserEntity;
  private auth: AuthService;
  private readonly logger = new Logger(Strategy.name);

  constructor(
    options: { jwtFromRequest: JwtFromRequestFunction; auth: AuthService },
    verify: (request, token) => UserEntity,
  ) {
    passport.Strategy.call(this);

    this.auth = options.auth;
    this.verify = verify;
    this.jwtFromRequest = options.jwtFromRequest;
  }

  async authenticate(request: Request): Promise<UserEntity> {
    try {
      const token = this.jwtFromRequest(request);
      if (!token) {
        return this.fail(
          { message: 'Missing Auth token' },
          HttpStatus.BAD_REQUEST,
        );
      }

      const decodedToken = await this.auth.authenticate(token);

      return this.verify(request, decodedToken, this.success);
    } catch (e) {
      this.logger.error(e);
      return this.fail(e);
    }
  }
}

util.inherits(Strategy, passport.Strategy);
