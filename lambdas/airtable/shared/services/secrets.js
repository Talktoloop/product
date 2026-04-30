const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require('@aws-sdk/client-secrets-manager');

/**
 * Resolves AWS Secrets Manager secrets at Lambda cold-start.
 *
 * Convention: env vars holding ARNs are prefixed `SECRETS_` so it is obvious
 * the value is a reference, not the secret itself. Example: `SECRETS_DB_PASSWORD`
 * holds an ARN; `resolveSecret('SECRETS_DB_PASSWORD')` returns the password.
 *
 * Cached per ARN inside the Lambda execution context — first call hits the
 * SecretsManager API (~50ms), subsequent warm-invocation calls are free.
 */

const client = new SecretsManagerClient({
  region: process.env.AWS_REGION || process.env.COGNITO_REGION,
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
