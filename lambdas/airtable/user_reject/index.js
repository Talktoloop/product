const { eventLogger } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { AirTableService } = require('./shared/services/airtable');

exports.handler = async (event) => {
  eventLogger(event);

  const body = event.body ? JSON.parse(event.body) : {};
  const { userId } = body;

  const db = new DbService();
  const application = await db.getOrganisationApplicationByUserId(userId);

  if (!application) {
    return { statusCode: 200, body: JSON.stringify({ success: false }) };
  }

  const result = await db.removeApplicationById(application.id);

  if (result && result.affectedRows) {
    await db.updateAccountStatus(userId);

    const airtable = new AirTableService();
    const user = await airtable.getAirTableUserData(userId);
    if (user) {
      await airtable.updateUser(user.airTableId, {
        'Applies to': null,
        'Accept application': null,
        'Account status': 'complete',
      });
    }
  }

  return { statusCode: 200, body: JSON.stringify({}) };
};
