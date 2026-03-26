export function prepareAwsCredentials(config) {
  const { awsAccessKey, awsSecretKey, awsRegion } = config;

  const clientConfig: Record<string, any> = {
    region: awsRegion,
  };

  if (awsAccessKey && awsSecretKey) {
    clientConfig.credentials = {
      accessKeyId: awsAccessKey,
      secretAccessKey: awsSecretKey,
    };
  }

  return clientConfig;
}

export function prepareCognitoCredentials(config) {
  const { cognitoAccessKeyId, cognitoSecretAccessKey, awsRegion } = config;

  const clientConfig: Record<string, any> = {
    region: awsRegion,
  };

  const accessKey = cognitoAccessKeyId;
  const secretKey = cognitoSecretAccessKey;

  if (accessKey && secretKey) {
    clientConfig.credentials = {
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    };
  }

  return clientConfig;
}
