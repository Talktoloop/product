const { eventLogger } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { AirTableService } = require('./shared/services/airtable');

exports.handler = async (event) => {
  eventLogger(event);

  const body = event.body ? JSON.parse(event.body) : {};
  const { userId } = body;

  const db = new DbService();
  const airtable = new AirTableService();

  const organisationId = await airtable.getUserOrganisationId(userId);

  let oldOrganisationId;
  if (!organisationId) {
    oldOrganisationId = await db.getUsersOrganisation(userId);
  }

  const updated = await db.updateUserOrganisation(userId, organisationId);

  if (updated && updated.affectedRows) {
    const targetOrganisationId = organisationId || oldOrganisationId;
    if (targetOrganisationId) {
      const numberOfUsers = await db.getOrganisationNumberOfUsers(targetOrganisationId);
      await airtable.updateNumberOf(targetOrganisationId, numberOfUsers, 'users');
    }
  } else {
    const orgData = await airtable.getAirTableOrganisationData(oldOrganisationId);
    if (orgData) {
      await airtable.updateUserData(orgData.airTableId, [userId], 'Organisation');
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: !!(updated && updated.affectedRows) }),
  };
};
