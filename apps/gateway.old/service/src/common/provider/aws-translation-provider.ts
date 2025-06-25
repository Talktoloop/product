import { ComprehendClient } from '@aws-sdk/client-comprehend';
import { LambdaClient } from '@aws-sdk/client-lambda';
import { FactoryProvider } from '@nestjs/common';
import { DI_CONSTANTS } from '../constant/di.constant';
import { prepareAwsCredentials } from '../utils/prepare-aws-credentials';
import { ConfigService } from '@nestjs/config';

export const AwsTranslationServiceProvider: FactoryProvider<any> = {
  provide: DI_CONSTANTS.AWS_TRANSLATION,
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    new ComprehendClient(prepareAwsCredentials(config.get('application'))),
};

export const LambdaServiceProvider: FactoryProvider<any> = {
  provide: DI_CONSTANTS.LAMBDA,
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    new LambdaClient(
      prepareAwsCredentials(config.get('application'))
    ),
};
