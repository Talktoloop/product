import * as util from 'util';
import * as passport from 'passport';
import { JwtFromRequestFunction } from 'passport-jwt';
import { AuthService } from './auth.service';
import { UserService } from '../user/service/user.service';

export class StrategyAnonymous {
  public name = 'anonymous';
  private pass;
  private fail;
  private auth: AuthService;
  private user: UserService;
  private readonly jwtFromRequest: JwtFromRequestFunction;

  constructor(options: {
    jwtFromRequest: JwtFromRequestFunction;
    auth: AuthService;
    user: UserService;
  }) {
    passport.Strategy.call(this);

    this.auth = options.auth;
    this.user = options.user;
    this.jwtFromRequest = options.jwtFromRequest;
  }

  async authenticate(request: Request): Promise<void> {
    const token = this.jwtFromRequest(request);

    if (token) {
      const decodedToken = await this.auth
        .authenticate(token)
        .catch(() => this.fail());

      const user = await this.user.findByCognitoSubId(decodedToken?.sub);

      if (!user || !user.isEnabled) {
        return this.fail();
      }
    }

    this.pass();
  }
}

util.inherits(StrategyAnonymous, passport.Strategy);
