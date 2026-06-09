import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ExtractJwt } from 'passport-jwt';
import { UserService } from '../user/service/user.service';
import { Strategy } from './strategy';
import { AuthService } from './auth.service';
import { ROLE } from '../user/constant/role.constant';
import { AirTableUserService } from '../airtable-client/service/airtable-user.service';

@Injectable()
export class CognitoStrategy extends PassportStrategy(Strategy, 'cognito') {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly airTableUserService: AirTableUserService,
  ) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        auth: authService,
      },
      async (request, token, done) => {
        let user = await this.userService.findByCognitoSubId(token.sub);

        if (user && !user.isEnabled) {
          done(null);
          return;
        }

        if (!user) {
          const userAttributes = await this.authService.getUserAttributes(
            token.sub,
          );

          if (!userAttributes) {
            done(null);
            return;
          }

          user = await this.userService.findByEmail(userAttributes.email);

          if (user) {
            // Existing user whose login moved to a new Cognito pool:
            // link the new sub without touching user.id or its foreign keys.
            await this.userService.updateCognitoSubId(user.id, token.sub);
          } else {
            await this.userService.saveUser({
              id: randomUUID(),
              cognitoSubId: token.sub,
              email: userAttributes.email,
              nickname: userAttributes.name,
              role: ROLE.USER,
              notifications: true,
              hideLastName: false,
              lastActivity: new Date(),
            });
          }

          user = await this.userService.findByCognitoSubId(token.sub);
        }

        await this.userService.updateLastActivity(user.id);

        done(user, null);
      },
    );
  }

  static getToken(request: { headers: { authorization: string } }): string {
    return (
      request.headers.authorization &&
      request.headers.authorization.split(' ')[1]
    );
  }
}
