const Mailjet = require('node-mailjet');
const { logError } = require('../helpers/logger');

/**
 * Thin wrapper around node-mailjet's send v3.1 API. Replaces the
 * `@ourloop/shared` MailJetService dependency that pulled in the entire
 * NestJS stack just for one helper method.
 */
class MailJetService {
  constructor() {
    this.client = Mailjet.apiConnect(
      process.env.MAILJET_API_KEY || '',
      process.env.MAILJET_API_SECRET || '',
    );
    this.sender = process.env.MAILJET_SENDER_EMAIL;
    this.senderName = process.env.MAILJET_SENDER_NAME || 'Loop';
  }

  async sendTemplateEmail(templateId, variables, recipients) {
    try {
      return await this.client.post('send', { version: 'v3.1' }).request({
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
