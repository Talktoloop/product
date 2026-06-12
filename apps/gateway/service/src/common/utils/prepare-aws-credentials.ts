import { AwsCredentials } from '../type/aws-credentials.type';
import { CognitoIdentityProviderClientConfig } from '@aws-sdk/client-cognito-identity-provider';

export function prepareAwsCredentials(config): CognitoIdentityProviderClientConfig {
  // Add local endpoint configuration when environment is local
  if (config.environment === 'local') {
    return {
      region: config.awsRegion,
      endpoint: 'http://host.docker.internal:3001', // SAM local endpoint
      credentials: {
        accessKeyId: 'mock', // SAM local doesn't care about real credentials
        secretAccessKey: 'mock'
      }
    };
  }

  const { awsAccessKey, awsSecretKey, awsRegion, awsEndpoint } = config;
  const credentials: AwsCredentials = {
    region: awsRegion,
  };

  if (awsEndpoint) {
    credentials.endpoint = awsEndpoint;
  }

  if (awsAccessKey && awsSecretKey) {
    credentials.accessKeyId = awsAccessKey;
    credentials.secretAccessKey = awsSecretKey;
  }

  return credentials;
}
