const {
  CognitoIdentityProviderClient,
  AdminGetUserCommand,
  AdminDisableUserCommand,
  AdminEnableUserCommand,
  ListUsersCommand,
} = require('@aws-sdk/client-cognito-identity-provider');
const { logError } = require('../helpers/logger');

class CognitoService {
  constructor() {
    this.client = new CognitoIdentityProviderClient({
      region: process.env.COGNITO_REGION || process.env.AWS_REGION,
    });
    this.userPoolId = process.env.COGNITO_USER_POOL_ID;
  }

  async findUserById(userId) {
    try {
      const command = new ListUsersCommand({
        UserPoolId: this.userPoolId,
        Filter: `sub = "${userId}"`,
      });
      const result = await this.client.send(command);
      return result && result.Users ? result.Users[0] : undefined;
    } catch (error) {
      logError('List users failed', error);
      throw error;
    }
  }

  async findUserByUsername(username) {
    try {
      const command = new AdminGetUserCommand({
        UserPoolId: this.userPoolId,
        Username: username,
      });
      return await this.client.send(command);
    } catch (error) {
      logError('Get user by username failed', error);
      throw error;
    }
  }

  async disableUser(username) {
    try {
      const command = new AdminDisableUserCommand({
        UserPoolId: this.userPoolId,
        Username: username,
      });
      return await this.client.send(command);
    } catch (error) {
      logError('Disable user failed', error);
      throw error;
    }
  }

  async enableUser(username) {
    try {
      const command = new AdminEnableUserCommand({
        UserPoolId: this.userPoolId,
        Username: username,
      });
      return await this.client.send(command);
    } catch (error) {
      logError('Enable user failed', error);
      throw error;
    }
  }
}

module.exports = { CognitoService };
