const mysql = require('mysql2');
const { resolveSecret } = require('./secrets');
const { logInfo, logError } = require('../helpers/logger');
const { SourceType, TranscriptionStatus } = require('../constants');

/**
 * DB methods used by the transcribe Lambda. Subset of the legacy
 * `share/service/db.service.ts` covering the ivrr_call / story / comment
 * tables plus the translation status writes invoked after a transcription
 * completes.
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

class DbService {
  async closeConnection() {
    if (_poolPromise) {
      const pool = await _poolPromise;
      pool.end();
      _poolPromise = null;
    }
  }

  async getCallRowById(callId) {
    const sql = `
      SELECT id, twilio_call_sid, s3_file_id, call_date, comment_id, conversation_id,
             is_story, is_moderator_call, user_id, created_at, content, transcription_status
      FROM ivrr_call
      WHERE id = ?
      LIMIT 1
    `;
    const [rows] = await query(sql, [callId]);
    return rows || [];
  }

  async getCommentById(id) {
    const [rows] = await query(
      'SELECT id, language_id AS languageId FROM story_comment WHERE id = ? LIMIT 1',
      [id],
    );
    return rows || [];
  }

  async getStoryByIvrrCallId(callId) {
    const sql = `
      SELECT s.id, s.status, s.language_id AS languageId, l.code
      FROM story s
      LEFT JOIN story_communicator_conversation c ON c.story_id = s.id
      LEFT JOIN ivrr_call ca ON ca.conversation_id = c.id
      LEFT JOIN language l ON s.language_id = l.id
      WHERE ca.id = ?
      LIMIT 1
    `;
    const [rows] = await query(sql, [callId]);
    return rows || [];
  }

  async updateFileTranscriptionStatus(status, callId, content) {
    try {
      let sql;
      let params;
      if (content) {
        sql = 'UPDATE ivrr_call SET content = ?, transcription_status = ? WHERE id = ?';
        params = [content, TranscriptionStatus.TRANSCRIBED, callId];
      } else {
        sql = 'UPDATE ivrr_call SET transcription_status = ? WHERE id = ?';
        params = [status, callId];
      }
      const [result] = await query(sql, params);
      logInfo(`ivrr_call ${callId} status → ${status}${content ? ' (with content)' : ''}`);
      return result;
    } catch (error) {
      logError('updateFileTranscriptionStatus error', error);
      throw error;
    }
  }

  async updateStoryTranscriptionStatus(storyId, status) {
    try {
      const [result] = await query(
        'UPDATE story SET status = ? WHERE id = ?',
        [status, storyId],
      );
      logInfo(`story ${storyId} status → ${status}`);
      return result;
    } catch (error) {
      logError('updateStoryTranscriptionStatus error', error);
      throw error;
    }
  }

  // Used after a transcription completes — writes the transcribed text into
  // the appropriate translation table to seed the translate Lambda.
  async saveTranslationToDB(type, content, sourceId, languageId) {
    const tableName = type === SourceType.STORY ? 'story_translation' : 'story_comment_translation';
    try {
      let sql = `UPDATE ${tableName} SET content = ?, status = 2`;
      const params = [content];
      if (type === SourceType.STORY) {
        const wordCount = content.trim().split(' ').length;
        sql += ', number_of_words = ?';
        params.push(wordCount);
      }
      sql += ` WHERE ${type}_id = ? AND language_id = ?`;
      params.push(sourceId, languageId);
      const [result] = await query(sql, params);
      logInfo(`Initial translation written for [${type}-${sourceId}-${languageId}]`);
      return result;
    } catch (error) {
      logError('saveTranslationToDB error', error);
      throw error;
    }
  }

  async getListOfLanguages() {
    const sql =
      'SELECT `id`, `code`, `provider`, `alternative_provider` AS alternativeProvider ' +
      'FROM language WHERE `provider` IS NOT NULL AND `visible` = 1';
    const [rows] = await query(sql, []);
    return rows || [];
  }

  async getLanguageById(id) {
    const [rows] = await query(
      'SELECT `id`, `code`, `provider`, `alternative_provider` AS alternativeProvider FROM language WHERE id = ?',
      [id],
    );
    return rows && rows[0];
  }
}

module.exports = { DbService };
