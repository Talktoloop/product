/**
 * Mailjet template IDs keyed by the number of days since the user's anchor
 * event (registration, first export, etc.). Keep in sync with the templates
 * configured in the Mailjet dashboard.
 */

const RegistrationEmailId = {
  DAY_1: 5273427,
  DAY_3: 5273638,
  DAY_7: 5273919,
  DAY_10: 5274008,
  DAY_20: 5274083,
  DAY_30: 5517692,
  DAY_50: 5274182,
};

const LoopAdvocateEmailId = {
  DAY_20: 5494305,
};

const LoopAdvocateActivityEmailId = {
  DAY_1: 5111568,
};

module.exports = {
  RegistrationEmailId,
  LoopAdvocateEmailId,
  LoopAdvocateActivityEmailId,
};
