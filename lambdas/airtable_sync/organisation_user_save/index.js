const { eventLogger, logInfo, logError } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { AirTableClient } = require('./shared/services/airtable');

/**
 * Two-pass user/organisation sync.
 *
 * Pass 1 (NOT modified): for each AirTable Users row, look up the user in DB
 * by email and PATCH the AirTable row with the correct `Loop Organisation Name`.
 *
 * Pass 2 (modified): take AirTable's choice of organisation as authoritative
 * and update DB user.organisation_id, then flip AirTable `Modified` back to
 * false.
 *
 * Behaviour ported verbatim from the legacy organisation-user-save service.
 */
exports.handler = async (event) => {
  eventLogger(event);

  const db = new DbService();
  const airtable = new AirTableClient();

  try {
    const notModifiedUsers = await fetchUsers(airtable, false);
    await saveUnassignedOrganisationsToAirTable(airtable, db, notModifiedUsers);

    const modifiedUsers = await fetchUsers(airtable, true);
    await findAndAssignOrganisationToUser(airtable, db, modifiedUsers);

    return {
      processedNotModified: notModifiedUsers.length,
      processedModified: modifiedUsers.length,
    };
  } catch (error) {
    logError('organisation_user_save handler error', error);
    return { error: error.message };
  }
};

async function fetchUsers(airtable, isModified) {
  const formula = isModified
    ? 'AND({Account activated in Loop UIM},{Modified})'
    : 'AND(NOT({Modified}))';
  const records = await airtable.list(
    'Users/',
    `filterByFormula=${encodeURIComponent(formula)}`,
  );
  return records.map((record) => ({
    airtableId: record.id,
    worksForOrganisation: record.fields['Works for an organisation?'] || false,
    emailIfWorksForOrganisation: record.fields['Email address (org)'] || null,
    emailIfNotWorksForOrganisation:
      record.fields['Email address (does not work for org)'] || null,
    loopOrganisationId:
      (record.fields['Loop Organisation'] && record.fields['Loop Organisation'][0]) || null,
  }));
}

async function saveUnassignedOrganisationsToAirTable(airtable, db, airtableRecords) {
  const users = await db.getUsers();

  for (const user of users) {
    const recordToUpdate = airtableRecords.find(
      (record) =>
        (user.email === record.emailIfWorksForOrganisation ||
          user.email === record.emailIfNotWorksForOrganisation) &&
        user.organisation_id !== record.loopOrganisationId,
    );
    if (!recordToUpdate) continue;

    if (user.organisation_id) {
      try {
        const lookup = await airtable.list(
          'Organisations',
          `filterByFormula=${encodeURIComponent(`FIND('${user.organisation_id}', {Loop ID})`)}`,
        );
        const organisation = lookup[0];
        if (!organisation) continue;
        await updateAirTableUser(airtable, recordToUpdate.airtableId, organisation.id);
      } catch (error) {
        logError('Fetching organisation failed', error);
      }
    } else {
      await updateAirTableUser(airtable, recordToUpdate.airtableId, null);
    }
  }
}

async function updateAirTableUser(airtable, airTableUserId, airTableOrganisationId) {
  try {
    await airtable.patch(`/Users/${airTableUserId}`, {
      fields: {
        'Loop Organisation Name': airTableOrganisationId ? [airTableOrganisationId] : [],
      },
    });
    logInfo(`Updated AirTable user ${airTableUserId} organisation`);
  } catch (error) {
    logError(`Updating user ${airTableUserId} failed`, error);
  }
}

async function findAndAssignOrganisationToUser(airtable, db, airtableRecords) {
  for (const user of airtableRecords) {
    if (
      !user.emailIfWorksForOrganisation &&
      !user.emailIfNotWorksForOrganisation
    ) {
      continue;
    }

    const email = user.worksForOrganisation
      ? user.emailIfWorksForOrganisation || user.emailIfNotWorksForOrganisation
      : user.emailIfNotWorksForOrganisation || user.emailIfWorksForOrganisation;

    let dbUser;
    try {
      dbUser = await db.getUserByEmail(email);
    } catch (error) {
      logError(`getUserByEmail failed for ${email}`, error);
      continue;
    }

    if (!dbUser) {
      logInfo(`User with email ${email} not found in DB`);
      await falseAirTableModified(airtable, user.airtableId);
      continue;
    }

    if (user.loopOrganisationId !== dbUser.organisation_id) {
      try {
        await db.updateUserOrganisationWithId(user.loopOrganisationId, dbUser.id);
        logInfo(
          `Assigned org ${user.loopOrganisationId} to user ${dbUser.id}`,
        );
      } catch (error) {
        logError(`updateUserOrganisationWithId failed for ${dbUser.id}`, error);
      }
    }
    await falseAirTableModified(airtable, user.airtableId);
  }
}

async function falseAirTableModified(airtable, airtableId) {
  try {
    await airtable.patch(`/Users/${airtableId}`, { fields: { Modified: false } });
    logInfo(`Set Modified=false for user ${airtableId}`);
  } catch (error) {
    logError(`falseAirTableModified failed for ${airtableId}`, error);
  }
}
