import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { CognitoStrategy } from './cognito.strategy';
import { AnonymousStrategy } from './anonymous.strategy';
import { AuthController } from './auth.controller';
import { CognitoIdentityServiceProvider } from '../common/provider/cognito-identity-service-provider';
import { ConfigProvider } from '../common/provider/config.provider';
import { dynamicConfiguration } from '../config/default';
import { ConfigModule } from '@nestjs/config';
import { SubscriptionStrategy } from './subscription.strategy';
import { SubscriptionModule } from '../subscription/subscription.module';
import { AirTableClientModule } from '../airtable-client/airtable-client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dynamicConfiguration],
    }),
    PassportModule.register({
      defaultStrategy: ['cognito', 'anonymous', 'subscription'],
    }),
    forwardRef(() => UserModule),
    SubscriptionModule,
    AirTableClientModule,
  ],
  providers: [
    CognitoStrategy,
    SubscriptionStrategy,
    AuthService,
    AnonymousStrategy,
    CognitoIdentityServiceProvider,
    ConfigProvider,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
