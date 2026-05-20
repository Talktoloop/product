const { eventLogger, logError } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { MailJetService } = require('./shared/services/mailjet');
const { calculateDaysSinceEvent, isTrue } = require('./shared/helpers/days-after-event');
const { RegistrationEmailId } = require('./shared/constants/mailjet-templates');

exports.handler = async (event) => {
  eventLogger(event);

  if (!isTrue(process.env.SHOULD_REGISTRATION_EMAILS_BE_SEND)) {
    return { handled: 0, skipped: true };
  }

  const db = new DbService();
  const mailjet = new MailJetService();
  const triggerHours = parseInt(process.env.TRIGGER_INTERVAL_HOURS || '4', 10);

  const users = await db.getRegisteredUsers();
  let sent = 0;

  await Promise.all(
    users.map(async (user) => {
      const days = calculateDaysSinceEvent(triggerHours, user.registration_date);
      const templateId = RegistrationEmailId[`DAY_${days}`];
      if (!templateId) return;

      try {
        await mailjet.sendTemplateEmail(
          templateId,
          { name: user.first_name, email: user.email },
          [{ Email: user.email }],
        );
        sent += 1;
      } catch (error) {
        logError(`Error sending registration email to ${user.email}`, error);
      }
    }),
  );

  return { handled: users.length, sent };
};
