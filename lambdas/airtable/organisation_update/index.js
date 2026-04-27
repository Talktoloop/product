const { eventLogger } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { AirTableService } = require('./shared/services/airtable');

const ACRONYM_MIN_LENGTH = 2;
const ACRONYM_MAX_LENGTH = 16;

exports.handler = async (event) => {
  eventLogger(event);

  const body = event.body ? JSON.parse(event.body) : {};
  const { organisationId, airTableId } = body;

  const db = new DbService();
  const airtable = new AirTableService();

  const organisation = await airtable.getAirTableOrganisationData(organisationId);

  const acronymInvalid =
    organisation &&
    organisation.acronym &&
    (organisation.acronym.length < ACRONYM_MIN_LENGTH ||
      organisation.acronym.length > ACRONYM_MAX_LENGTH);

  if (!organisation || !organisation.country || acronymInvalid || !organisation.name) {
    const { name, countryName, acronym } = await db.getOrganisationData(organisationId);
    const country = await airtable.findCountryIdByName(countryName);
    await airtable.updateOrganisationData(airTableId, name, country, acronym);
    return { statusCode: 200, body: JSON.stringify({ success: false }) };
  }

  if (organisation.country) {
    organisation.country = await airtable.getCountryNameByAirTableId(organisation.country);
  }

  const updated = await db.updateOrganisation(organisation);
  return {
    statusCode: 200,
    body: JSON.stringify({ success: !!(updated && updated.affectedRows) }),
  };
};
