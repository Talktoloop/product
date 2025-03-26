const AWS = require('aws-sdk');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { URLSearchParams } = require('url');

AWS.config.update({ region: process.env.CURRENT_REGION });

const cognitoClient = new AWS.CognitoIdentityServiceProvider();
const kmsClient = new AWS.KMS();
const sesClient = new AWS.SES();

async function encrypt(input) {
  const params = {
    KeyId: process.env.KMS_KEY_ID,
    Plaintext: Buffer.from(input, 'utf8')
  };
  const response = await kmsClient.encrypt(params).promise();
  return response.CiphertextBlob;
}

async function createCognitoUser(email, username, password, userPoolId) {
  await cognitoClient.adminCreateUser({
    UserPoolId: userPoolId,
    Username: username,
    UserAttributes: [
      { Name: 'email', Value: email },
      { Name: 'email_verified', Value: 'true' }
    ],
    TemporaryPassword: password,
    MessageAction: 'SUPPRESS'
  }).promise();

  await cognitoClient.adminSetUserPassword({
    UserPoolId: userPoolId,
    Username: username,
    Password: password,
    Permanent: true
  }).promise();
}

function createEmailHtmlMessage(timeoutInMinutes, magicLink, languageCode, loginUrl) {
  const templatePath = path.join(__dirname, 'templates', `email_template_${languageCode}.html`);
  let emailMessage;
  try {
    emailMessage = fs.readFileSync(templatePath, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      const defaultTemplatePath = path.join(__dirname, 'templates', 'email_template_en.html');
      emailMessage = fs.readFileSync(defaultTemplatePath, 'utf8');
    } else {
      throw err;
    }
  }
  return emailMessage
    .replace(/{{magic_link}}/g, magicLink)
    .replace(/{{timeout_in_minutes}}/g, timeoutInMinutes)
    .replace(/{{login_url}}/g, loginUrl);
}

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    const email = body.email;
    const languageCode = body.languageCode || 'en';

    // Directly read from environment variables
    const envVars = {
      COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
      TIMEOUT_IN_MINUTES: parseInt(process.env.TIMEOUT_IN_MINUTES, 10),
      BASE_URL: process.env.BASE_URL,
      MAGIC_LINK_ENDPOINT: process.env.MAGIC_LINK_ENDPOINT,
      LOGIN_ENDPOINT: process.env.LOGIN_ENDPOINT,
      SENDER_EMAIL_ADDRESS: process.env.SENDER_EMAIL_ADDRESS
    };

    const now = new Date();
    const expiration = new Date(now.getTime() + envVars.TIMEOUT_IN_MINUTES * 60000);
    const payload = { email, expiration: expiration.toISOString() };
    const tokenRaw = await encrypt(JSON.stringify(payload));
    const tokenB64 = tokenRaw.toString('base64');
    const token = new URLSearchParams({ token: tokenB64 }).toString();

    const magicLink = `${envVars.BASE_URL}${envVars.MAGIC_LINK_ENDPOINT}?email=${encodeURIComponent(email)}&${token}`;
    const loginUrl = `${envVars.BASE_URL}${envVars.LOGIN_ENDPOINT}`;
    const emailMessage = createEmailHtmlMessage(
      envVars.TIMEOUT_IN_MINUTES.toString(),
      magicLink,
      languageCode,
      loginUrl
    );

    try {
      await cognitoClient.adminUpdateUserAttributes({
        UserPoolId: envVars.COGNITO_USER_POOL_ID,
        Username: email,
        UserAttributes: [{ Name: 'custom:authChallenge', Value: tokenB64 }]
      }).promise();

      await sesClient.sendEmail({
        Source: envVars.SENDER_EMAIL_ADDRESS,
        Destination: { ToAddresses: [email] },
        Message: {
          Subject: { Data: 'Your Magic Link' },
          Body: { Html: { Data: emailMessage } }
        }
      }).promise();

      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': envVars.BASE_URL },
        body: JSON.stringify({ message: 'Success' })
      };
    } catch (error) {
      if (error.code === 'UserNotFoundException') {
        const username = crypto.randomBytes(16).toString('base64url');
        const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        let password = '';
        for (let i = 0; i < 32; i++) {
          const randomByte = crypto.randomBytes(1)[0];
          password += allowedChars[randomByte % allowedChars.length];
        }

        await createCognitoUser(email, username, password, envVars.COGNITO_USER_POOL_ID);
        await cognitoClient.adminUpdateUserAttributes({
          UserPoolId: envVars.COGNITO_USER_POOL_ID,
          Username: email,
          UserAttributes: [{ Name: 'custom:authChallenge', Value: tokenB64 }]
        }).promise();

        await sesClient.sendEmail({
          Source: envVars.SENDER_EMAIL_ADDRESS,
          Destination: { ToAddresses: [email] },
          Message: {
            Subject: { Data: 'Your Magic Link' },
            Body: { Html: { Data: emailMessage } }
          }
        }).promise();

        return {
          statusCode: 200,
          headers: { 'Access-Control-Allow-Origin': envVars.BASE_URL },
          body: JSON.stringify({ message: 'Success' })
        };
      }
      throw error;
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Internal server error', error: error.message })
    };
  }
};
