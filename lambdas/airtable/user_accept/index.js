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

  let result = await db.removeApplicationById(application.id);
  if (result && result.affectedRows) {
    result = await db.assignUserToOrganisation(application.userId, application.organisationId);
  }

  if (!result || !result.affectedRows) {
    return { statusCode: 200, body: JSON.stringify({ success: false }) };
  }

  await db.updateAccountStatus(userId);

  const airtable = new AirTableService();
  const user = await airtable.getAirTableUserData(userId);
  const orgData = await airtable.getAirTableOrganisationData(application.organisationId);
  const airTableOrganisationId = orgData && orgData.airTableId;

  if (user) {
    await airtable.updateUser(user.airTableId, {
      Organisation: [airTableOrganisationId],
      'Applies to': null,
      'Accept application': null,
      'Account status': 'complete',
    });
  }

  return { statusCode: 200, body: JSON.stringify({}) };
};
