/**
 * API Gateway custom authorizer for the AirTable management API.
 * Compares the incoming `Authorization: Basic <token>` header against the
 * BASIC_TOKEN secret pulled from Secrets Manager and injected via env var.
 */

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
  const expected = process.env.BASIC_TOKEN;
  const provided = event.authorizationToken || '';
  const isAuthorized = provided === `Basic ${expected}`;
  return generatePolicy('user', isAuthorized ? 'Allow' : 'Deny', event.methodArn);
};
