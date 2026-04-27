const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require('@aws-sdk/client-secrets-manager');

/**
 * API Gateway custom authorizer for the AirTable management API.
 * Compares the incoming `Authorization: Basic <token>` header against the
 * BASIC_TOKEN secret pulled from Secrets Manager at cold-start.
 *
 * Inlined SecretsManager client (rather than requiring `./shared/services/secrets`)
 * because this Lambda has no other shared dependencies and we want to keep
 * the image lean.
 */

const client = new SecretsManagerClient({ region: process.env.AWS_REGION });
let cachedToken;

async function getExpectedToken() {
  if (cachedToken) return cachedToken;
  const arn = process.env.SECRETS_BASIC_TOKEN;
  if (!arn) throw new Error('Missing env var: SECRETS_BASIC_TOKEN');
  const response = await client.send(new GetSecretValueCommand({ SecretId: arn }));
  cachedToken = response.SecretString;
  return cachedToken;
}

function generatePolicy(principalId, effect, resource) {
  return {
    principalId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource,
        },
      ],
    },
  };
}

exports.handler = async (event) => {
  const expected = await getExpectedToken();
  const provided = event.authorizationToken || '';
  const isAuthorized = provided === `Basic ${expected}`;
  return generatePolicy('user', isAuthorized ? 'Allow' : 'Deny', event.methodArn);
};
