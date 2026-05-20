const { eventLogger, logInfo, logError } = require('./shared/helpers/logger');
const { DbService, STORY_STATUS } = require('./shared/services/db');
const { AirTableClient } = require('./shared/services/airtable');

/**
 * Pulls "Sensitive Stories" rows where {Send to moderator}=1 from AirTable,
 * writes the case manager note + status onto the matching story in MySQL,
 * then deletes the synced row from AirTable.
 *
 * Behaviour ported verbatim from
 * `serverless-functions/translations/src/case-manager-sync/services/case-manager-sync.service.ts`.
 */
exports.handler = async (event) => {
  eventLogger(event);

  const db = new DbService();
  const airtable = new AirTableClient();

  try {
    const records = await airtable.list(
      'Sensitive%20Stories',
      'fields%5B%5D=Loop%20ID&fields%5B%5D=Reason%20why%20story%20is%20not%20sensitive&filterByFormula={Send%20to%20moderator}=1',
    );

    const stories = records.map((record) => ({
      id: record.fields['Loop ID'],
      note: record.fields['Reason why story is not sensitive'],
      airtableId: record.id,
    }));

    let synced = 0;
    let skipped = 0;

    for (const { id, note, airtableId } of stories) {
      try {
        if (!id) {
          skipped += 1;
          continue;
        }

        const story = await db.getStoryById(id.trim());
        if (!story) {
          logInfo(`Story ${id} not found in DB, skipping`);
          skipped += 1;
          continue;
        }

        if (story.status === STORY_STATUS.SENT_FROM_CASE_MANAGER_TO_LOOP) {
          logInfo(`Story ${id} already imported, skipping`);
          skipped += 1;
          continue;
        }

        await db.updateStoryFromCaseManager(
          id.trim(),
          note,
          story.markedAsSensitiveByRole !== 'author',
        );

        await airtable.deleteRecord(`/Sensitive%20Stories?records[]=${airtableId}`);
        synced += 1;
      } catch (innerError) {
        logError(`updateStoryFromCaseManager failed for ${id}`, innerError);
      }
    }

    return { handled: stories.length, synced, skipped };
  } catch (error) {
    logError('case_manager_sync handler error', error);
    return { handled: 0, error: error.message };
  }
};
