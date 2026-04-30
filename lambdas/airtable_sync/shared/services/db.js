const mysql = require('mysql2');
const { resolveSecret } = require('./secrets');
const { logInfo, logError } = require('../helpers/logger');

/**
 * DB methods used by the airtable_sync Lambdas. Subset of the legacy
 * `share/service/db.service.ts` covering only what these 3 Lambdas need.
 */

let _poolPromise = null;

async function getPool() {
  if (!_poolPromise) {
    _poolPromise = (async () => {
      const [user, password] = await Promise.all([
        resolveSecret('SECRETS_DB_USERNAME'),
        resolveSecret('SECRETS_DB_PASSWORD'),
      ]);
      return mysql.createPool({
        host: process.env.DB_HOST,
        user,
        password,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
        charset: 'utf8mb4',
      });
    })();
  }
  return _poolPromise;
}

async function query(sql, params) {
  const pool = await getPool();
  return pool.promise().query(sql, params);
}

const STORY_STATUS = {
  // Values mirrored verbatim from
  // serverless-functions/translations/src/case-manager-sync/models/types/story-status.ts
  NOT_STARTED: 'not_started',
  PENDING_TRANSLATION: 'pending_translation',
  AWAITING_REPLAY: 'awaiting_replay',
  ISSUER_REPLIED: 'issuer_replied',
  ISSUER_DID_NOT_REPLIED: 'issuer_did_not_replied',
  SENT_FROM_CASE_MANAGER_TO_LOOP: 'sent_from_case_manager_to_loop',
  PENDING_TRANSCRIPTION: 'pending_transcription',
  TRANSCRIPTION_IN_PROGRESS: 'transcription_in_progress',
  PENDING_PUBLICATION: 'pending_publication',
  PUBLISHED: 'published',
  REJECTED: 'rejected',
  SENT_TO_CASE_MANAGER: 'sent_to_case_manager',
};

class DbService {
  // case_manager_sync
  async getStoryById(id) {
    try {
      const [rows] = await query(
        'SELECT id, status, marked_as_sensitive_by_role AS markedAsSensitiveByRole FROM story WHERE id = ? LIMIT 1',
        [id],
      );
      return rows && rows[0];
    } catch (error) {
      logError('Get story by id error', error);
      throw error;
    }
  }

  async updateStoryFromCaseManager(storyId, caseManagerNote, updateIsSensitive) {
    try {
      const params = [
        caseManagerNote,
        STORY_STATUS.SENT_FROM_CASE_MANAGER_TO_LOOP,
        new Date(),
      ];
      let sql =
        'UPDATE story SET case_manager_note = ?, status = ?, case_manager_returned_at = ?';
      if (updateIsSensitive) {
        sql += ', isSensitive = ?';
        params.push(0);
      }
      sql += ' WHERE id = ?';
      params.push(storyId);
      const [result] = await query(sql, params);
      logInfo(`Story ${storyId} updated from case manager`);
      return result;
    } catch (error) {
      logError('Update story from case manager error', error);
      throw error;
    }
  }

  // organisations_sync
  async getOrganisations() {
    try {
      const [rows] = await query('SELECT id, name FROM organisation', []);
      return rows || [];
    } catch (error) {
      logError('Get organisations error', error);
      throw error;
    }
  }

  // organisation_user_save
  async getUsers() {
    try {
      const [rows] = await query('SELECT email, organisation_id FROM user', []);
      return rows || [];
    } catch (error) {
      logError('Get users error', error);
      throw error;
    }
  }

  async getUserByEmail(email) {
    try {
      const [rows] = await query(
        'SELECT id, organisation_id FROM user WHERE email = ?',
        [email],
      );
      return rows && rows[0];
    } catch (error) {
      logError('Get user by email error', error);
      throw error;
    }
  }

  async updateUserOrganisationWithId(organisationId, userId) {
    try {
      const [result] = await query(
        'UPDATE user SET organisation_id = ? WHERE id = ?',
        [organisationId, userId],
      );
      return result;
    } catch (error) {
      logError('Update user organisation error', error);
      throw error;
    }
  }
}

module.exports = { DbService, STORY_STATUS };
