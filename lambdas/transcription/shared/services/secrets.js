const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require('@aws-sdk/client-secrets-manager');

const client = new SecretsManagerClient({
  region: process.env.AWS_REGION,
});

const cache = new Map();

async function resolveSecret(envVarName) {
  const arn = process.env[envVarName];
  if (!arn) {
    throw new Error(`Missing env var: ${envVarName}`);
  }
  if (cache.has(arn)) {
    return cache.get(arn);
  }
  const response = await client.send(new GetSecretValueCommand({ SecretId: arn }));
  const value = response.SecretString;
  cache.set(arn, value);
  return value;
}

module.exports = { resolveSecret };
