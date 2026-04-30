const { eventLogger, logError } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { MailJetService } = require('./shared/services/mailjet');
const { calculateDaysSinceEvent } = require('./shared/helpers/days-after-event');
const {
  LoopAdvocateEmailId,
  LoopAdvocateActivityEmailId,
} = require('./shared/constants/mailjet-templates');

function getBetaUsers() {
  const raw = (process.env.LOOP_ADVOCATE_BETA_RECIPIENTS || '').trim();
  if (!raw) return [];
  return raw.split(',').map((s) => s.trim()).filter(Boolean);
}

async function sendEmail(mailjet, user, emailIds, betaUsers, triggerHours) {
  if (betaUsers.length && !betaUsers.includes(user.email)) return false;

  const days = calculateDaysSinceEvent(triggerHours, user.created_at);
  const templateId = emailIds[`DAY_${days}`];
  if (!templateId) return false;

  try {
    await mailjet.sendTemplateEmail(
      templateId,
      { name: user.first_name, email: user.email },
      [{ Email: user.email }],
    );
    return true;
  } catch (error) {
    logError(`Error sending loop advocate email to ${user.email}`, error);
    return false;
  }
}

exports.handler = async (event) => {
  eventLogger(event);

  const db = new DbService();
  const mailjet = new MailJetService();
  const triggerHours = parseInt(process.env.TRIGGER_INTERVAL_HOURS || '4', 10);
  const betaUsers = getBetaUsers();

  const [users, potentialMembers] = await Promise.all([
    db.getLoopAdvocateUsers(),
    db.getLoopAdvocatePotentialMembers(),
  ]);

  const results = await Promise.all([
    ...users.map((user) => sendEmail(mailjet, user, LoopAdvocateEmailId, betaUsers, triggerHours)),
    ...potentialMembers.map((user) =>
      sendEmail(mailjet, user, LoopAdvocateActivityEmailId, betaUsers, triggerHours),
    ),
  ]);

  return { sent: results.filter(Boolean).length, considered: results.length };
};
