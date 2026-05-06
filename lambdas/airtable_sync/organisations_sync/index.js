const { eventLogger, logInfo, logError } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { AirTableClient } = require('./shared/services/airtable');

/**
 * Bidirectional sync of `Organisations` between AirTable and the MySQL DB.
 *
 * 1. Pull all AirTable records (paginated)
 * 2. Delete duplicate / orphaned AirTable rows that no longer exist in DB
 * 3. PATCH AirTable rows whose Name has drifted from the DB
 * 4. POST missing DB orgs into AirTable (chunks of 10 per AirTable's batch limit)
 *
 * Behaviour ported verbatim from the legacy organisations-sync service.
 */
exports.handler = async (event) => {
  eventLogger(event);

  const db = new DbService();
  const airtable = new AirTableClient();

  try {
    const airtableRecords = (
      await airtable.list('Organisations', '')
    ).map((record) => ({
      id: record.fields['ID'],
      name: record.fields['Name'],
      airtableId: record.id,
    }));

    await deleteExtraData(airtable, db, airtableRecords);
    await updateInvalidData(airtable, db, airtableRecords);
    await addMissingData(airtable, db, airtableRecords);

    return { handled: airtableRecords.length };
  } catch (error) {
    logError('organisations_sync handler error', error);
    return { handled: 0, error: error.message };
  }
};

async function deleteExtraData(airtable, db, airtableRecords) {
  const organisations = await db.getOrganisations();
  const seen = new Set();
  const extraRecords = airtableRecords.filter((record) => {
    const isDuplicate = seen.has(record.id);
    seen.add(record.id);
    if (isDuplicate) return true;
    return !organisations.some((org) => org.id === record.id);
  });

  if (!extraRecords.length) return;

  await Promise.all(
    extraRecords.map(async (record) => {
      try {
        await airtable.deleteRecord(`/Organisations?records[]=${record.airtableId}`);
        logInfo(`Removed AirTable org ${record.airtableId}`);
      } catch (error) {
        logError(`Removing AirTable org ${record.airtableId} failed`, error);
      }
    }),
  );
}

async function updateInvalidData(airtable, db, airtableRecords) {
  const organisations = await db.getOrganisations();

  await Promise.all(
    organisations.map(async (organisation) => {
      const recordToUpdate = airtableRecords.find(
        (record) => record.id === organisation.id && record.name !== organisation.name,
      );
      if (!recordToUpdate) return;

      try {
        await airtable.patch(
          `/Organisations/${recordToUpdate.airtableId}`,
          { fields: { Name: organisation.name } },
        );
        logInfo(`Updated AirTable org ${recordToUpdate.airtableId} name`);
      } catch (error) {
        logError(`Updating AirTable org ${recordToUpdate.airtableId} failed`, error);
      }
    }),
  );
}

async function addMissingData(airtable, db, airtableRecords) {
  const organisations = await db.getOrganisations();
  const missing = organisations.filter(
    (org) => !airtableRecords.some((record) => record.id === org.id),
  );
  if (!missing.length) return;

  const mapped = missing.map(({ id, name }) => ({
    fields: { ID: id, Name: name },
  }));

  for (let i = 0; i < mapped.length; i += 10) {
    const batch = mapped.slice(i, i + 10);
    try {
      await airtable.post('/Organisations', { records: batch });
      logInfo(`Added ${batch.length} missing orgs to AirTable`);
    } catch (error) {
      logError('Adding orgs to AirTable failed', error);
    }
  }
}
