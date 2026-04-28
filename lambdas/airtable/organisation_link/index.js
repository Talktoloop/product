const { eventLogger } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { AirTableService } = require('./shared/services/airtable');

exports.handler = async (event) => {
  eventLogger(event);

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { organisationId, airTableId } = body;

    if (!organisationId || !airTableId) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          reason: 'Missing organisationId or airTableId',
        }),
      };
    }

    const db = new DbService();
    const airtable = new AirTableService();

    const links = await airtable.getOrganisationLinks(organisationId);
    const primaryAirTableId = links[0];

    if (!primaryAirTableId) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: false, reason: 'No merge target found' }),
      };
    }

    const primary = await airtable.getOrganisationInfoByAirTableId(primaryAirTableId);
    const primaryOrganisationId = primary && primary.organisationId;

    if (!primaryOrganisationId || primaryOrganisationId === organisationId) {
      return { statusCode: 200, body: JSON.stringify({ success: false }) };
    }

    const userIds = await db.getOrganisationUserIds(organisationId);
    const result = await db.linkOrganisation(primaryOrganisationId, organisationId);

    if (result && result.affectedRows) {
      const applications = await db.getOrganisationApplications(primaryOrganisationId);
      const numberOfStories = await db.getOrganisationNumberOfStories(primaryOrganisationId);
      await airtable.updateNumberOf(primaryOrganisationId, numberOfStories, 'stories');

      if (userIds && userIds.length) {
        await airtable.updateUserData(primaryAirTableId, userIds, 'Organisation');
        const numberOfUsers = await db.getOrganisationNumberOfUsers(primaryOrganisationId);
        await airtable.updateNumberOf(primaryOrganisationId, numberOfUsers, 'users');
      }
      if (applications && applications.length) {
        await airtable.updateUserData(primaryAirTableId, applications, 'Applies to');
      }
      await airtable.deleteAirTableOrganisation(airTableId);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: !!(result && result.affectedRows) }),
    };
  } catch (error) {
    console.error('Handler error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, reason: 'Internal server error' }),
    };
  }
};
