const Mailjet = require('node-mailjet');
const { resolveSecret } = require('./secrets');
const { logError } = require('../helpers/logger');

/**
 * Thin wrapper around node-mailjet's send v3.1 API. Replaces the
 * `@ourloop/shared` MailJetService that pulled in the entire NestJS stack.
 *
 * Mailjet API key + secret are resolved from AWS Secrets Manager at
 * cold-start. The Mailjet client is then constructed once per warm container.
 */

let _clientPromise = null;

async function getClient() {
  if (!_clientPromise) {
    _clientPromise = (async () => {
      const [apiKey, apiSecret] = await Promise.all([
        resolveSecret('SECRETS_MAILJET_API_KEY'),
        resolveSecret('SECRETS_MAILJET_API_SECRET'),
      ]);
      return Mailjet.apiConnect(apiKey, apiSecret);
    })();
  }
  return _clientPromise;
}

class MailJetService {
  constructor() {
    this.sender = process.env.MAILJET_SENDER_EMAIL;
    this.senderName = process.env.MAILJET_SENDER_NAME || 'Loop';
  }

  async sendTemplateEmail(templateId, variables, recipients) {
    try {
      const client = await getClient();
      return await client.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: { Email: this.sender, Name: this.senderName },
            To: recipients,
            TemplateID: templateId,
            TemplateLanguage: true,
            Variables: variables,
          },
        ],
      });
    } catch (error) {
      logError(`Mailjet send error (template ${templateId})`, error);
      throw error;
    }
  }
}

module.exports = { MailJetService };
