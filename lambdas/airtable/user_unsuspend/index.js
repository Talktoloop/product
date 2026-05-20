const { eventLogger, logError } = require('./shared/helpers/logger');
const { CognitoService } = require('./shared/services/cognito');

exports.handler = async (event) => {
  eventLogger(event);

  const body = event.body ? JSON.parse(event.body) : {};
  const { userId } = body;

  const cognito = new CognitoService();
  const cognitoUser = await cognito.findUserById(userId);

  if (!cognitoUser || !cognitoUser.Username) {
    logError('User not found');
    return { statusCode: 404, body: JSON.stringify({ message: 'User not found' }) };
  }

  await cognito.enableUser(cognitoUser.Username);
  const updatedUser = await cognito.findUserByUsername(cognitoUser.Username);

  return {
    statusCode: 200,
    body: JSON.stringify({ success: !!(updatedUser && updatedUser.Enabled) }),
  };
};
