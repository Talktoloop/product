import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { StrategyAnonymous } from './strategy-anonymous';
import { ExtractJwt } from 'passport-jwt';
import { UserService } from '../user/service/user.service';
import { AuthService } from './auth.service';

@Injectable()
export class AnonymousStrategy extends PassportStrategy(
  StrategyAnonymous,
  'anonymous',
) {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      auth: authService,
      user: userService,
    });
  }
}
