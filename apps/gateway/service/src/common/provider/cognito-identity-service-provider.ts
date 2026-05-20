import { CognitoIdentityProvider } from '@aws-sdk/client-cognito-identity-provider';
import { FactoryProvider } from '@nestjs/common';
import { prepareCognitoCredentials } from '../utils/prepare-aws-credentials';
import { ConfigService } from '@nestjs/config';

export const CognitoIdentityServiceProvider: FactoryProvider<any> = {
  provide: CognitoIdentityProvider,
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    new CognitoIdentityProvider(
      prepareCognitoCredentials(config.get('application')),
    ),
};
