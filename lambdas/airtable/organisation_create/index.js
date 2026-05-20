const { eventLogger } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { AirTableService } = require('./shared/services/airtable');

exports.handler = async (event) => {
  eventLogger(event);

  const body = event.body ? JSON.parse(event.body) : {};
  const { airTableId } = body;

  const db = new DbService();
  const airtable = new AirTableService();

  const { organisationName, organisationCountry } = await airtable.getOrganisationInfoByAirTableId(
    airTableId,
  );
  const country = await airtable.getCountryNameByAirTableId(organisationCountry);

  if (!organisationName || !country) {
    return { statusCode: 200, body: JSON.stringify({ success: false }) };
  }

  const organisation = await db.createOrganisation(organisationName, country, airTableId);

  let updated;
  if (organisation && organisation[0]) {
    updated = await airtable.updateOrganisationId(airTableId, organisation[0].id);
  }

  return { statusCode: 200, body: JSON.stringify({ success: !!updated }) };
};
