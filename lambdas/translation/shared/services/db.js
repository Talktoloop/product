const mysql = require('mysql2');
const { resolveSecret } = require('./secrets');
const { logInfo, logError } = require('../helpers/logger');
const {
  SourceType,
  TranslationStatus,
  STORY_STATUS,
} = require('../constants');

/**
 * DB methods used by translation Lambdas. Subset of the legacy
 * `share/service/db.service.ts` covering: language list, missing-translation
 * lookup, translation status writes, and story-status updates.
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

function getTableNameAndContext(type) {
  const contextName = type === SourceType.STORY ? SourceType.STORY : `story_${SourceType.COMMENT}`;
  return {
    tableName: `${contextName}_translation`,
    contextName,
  };
}

class DbService {
  async closeConnection() {
    if (_poolPromise) {
      const pool = await _poolPromise;
      pool.end();
      _poolPromise = null;
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
    const sql =
      'SELECT `id`, `code`, `provider`, `alternative_provider` AS alternativeProvider ' +
      'FROM language WHERE id = ?';
    const [rows] = await query(sql, [id]);
    return rows && rows[0];
  }

  async getListOfMissingTranslationsForLanguage(languageId, type) {
    const { tableName } = getTableNameAndContext(type);
    const sql = `
      SELECT \`s\`.\`id\`, \`stn\`.\`content\`, \`l\`.\`code\`, \`l\`.\`provider\`,
             \`l\`.\`alternative_provider\` AS alternativeProvider
      FROM \`${tableName}\` s
      LEFT JOIN \`${tableName}\` st ON (\`s\`.\`id\` = \`st\`.\`${type}_id\` AND \`st\`.\`language_id\` = ?)
      LEFT JOIN \`${tableName}\` stn ON (\`s\`.\`id\` = \`stn\`.\`${type}_id\` AND \`s\`.\`language_id\` = \`stn\`.\`language_id\`)
      LEFT JOIN \`language\` l ON (\`s\`.\`language_id\` = \`l\`.\`id\`)
      WHERE
        \`s\`.\`language_id\` != ?
        AND ((\`st\`.\`content\` IS NULL OR \`st\`.\`content\` = '')
             AND \`st\`.\`status\` = ?
             AND date_format(\`st\`.\`updated_at\`, '%Y-%m-%d %H:%i:00')
                 < date_format(\`stn\`.\`updated_at\`, '%Y-%m-%d %H:%i:00'))
        AND \`stn\`.\`content\` IS NOT NULL
        AND l.visible = 1
    `;
    const [rows] = await query(sql, [languageId, languageId, TranslationStatus.ERROR]);
    return rows || [];
  }

  async getMachineTranslation(sourceId, type) {
    const { tableName } = getTableNameAndContext(type);
    const sql = `
      SELECT \`t\`.\`${type}_id\` AS \`id\`, \`t\`.\`content\`, \`l\`.\`code\`,
             \`l\`.\`provider\`, \`l\`.\`alternative_provider\` AS alternativeProvider
      FROM \`${tableName}\` t
      LEFT JOIN \`language\` l ON (\`t\`.\`language_id\` = \`l\`.\`id\`)
      WHERE t.${type}_id = ? AND l.provider IS NOT NULL
      ORDER BY \`t\`.\`language_id\` ASC
      LIMIT 1
    `;
    const [rows] = await query(sql, [sourceId]);
    return rows || [];
  }

  async getEnglishTranslation(sourceId, type) {
    const { tableName } = getTableNameAndContext(type);
    const sql = `
      SELECT \`t\`.\`${type}_id\` AS \`id\`, \`t\`.\`content\`, \`l\`.\`code\`,
             \`l\`.\`provider\`, \`l\`.\`alternative_provider\` AS alternativeProvider
      FROM \`${tableName}\` t
      LEFT JOIN \`language\` l ON (\`t\`.\`language_id\` = \`l\`.\`id\`)
      WHERE t.${type}_id = ? AND l.id = 1
      LIMIT 1
    `;
    const [rows] = await query(sql, [sourceId]);
    return rows || [];
  }

  async findTranslation(type, sourceId, languageId) {
    const { tableName } = getTableNameAndContext(type);
    const [rows] = await query(
      `SELECT COUNT(id) AS count FROM ${tableName} WHERE ${type}_id = ? AND language_id = ?`,
      [sourceId, languageId],
    );
    return rows;
  }

  calculateNumberOfWords(value) {
    if (!value || !value.trim()) return 0;
    return value.trim().split(' ').length;
  }

  async saveTranslationStatusWithoutContent(type, sourceId, languageId) {
    const { tableName } = getTableNameAndContext(type);

    try {
      const exists = await this.findTranslation(type, sourceId, languageId);
      if (exists && exists[0] && exists[0].count > 0) {
        // UPDATE existing row
        let sql = `UPDATE ${tableName} SET content = ?, status = ?`;
        const params = ['', TranslationStatus.TRANSLATING];
        if (type === SourceType.STORY) {
          sql += ', number_of_words = ?';
          params.push(0);
        }
        sql += ` WHERE ${type}_id = ? AND language_id = ?`;
        params.push(sourceId, languageId);
        const [result] = await query(sql, params);
        return result;
      }

      // INSERT new row
      const cols = [`${type}_id`, 'language_id', 'type', 'status'];
      const vals = [sourceId, languageId, 'machine', TranslationStatus.TRANSLATING];
      if (type === SourceType.STORY) {
        cols.push('number_of_words');
        vals.push(0);
      }
      const placeholders = cols.map(() => '?').join(',');
      const [result] = await query(
        `INSERT INTO ${tableName} (${cols.join(',')}) VALUES (${placeholders})`,
        vals,
      );
      logInfo(`Empty translation row created for [${type}-${sourceId}]`);
      return result;
    } catch (error) {
      logError('saveTranslationStatusWithoutContent error', error);
      throw error;
    }
  }

  async saveTranslationError(type, sourceId, languageId) {
    const { tableName } = getTableNameAndContext(type);
    try {
      const [result] = await query(
        `UPDATE ${tableName} SET status = ? WHERE ${type}_id = ? AND language_id = ?`,
        [TranslationStatus.ERROR, sourceId, languageId],
      );
      logInfo(`Translation error saved for [${type}-${sourceId}-${languageId}]`);
      return result;
    } catch (error) {
      logError('saveTranslationError error', error);
      throw error;
    }
  }

  async saveTranslationToDB(type, translations, sourceId, languageId) {
    const { tableName } = getTableNameAndContext(type);
    try {
      let sql = `UPDATE ${tableName} SET content = ?, status = ?`;
      const params = [translations, TranslationStatus.TRANSLATED];
      if (type === SourceType.STORY) {
        sql += ', number_of_words = ?';
        params.push(this.calculateNumberOfWords(translations));
      }
      sql += ` WHERE ${type}_id = ? AND language_id = ?`;
      params.push(sourceId, languageId);
      const [result] = await query(sql, params);
      logInfo(`Translation saved [${type}-${sourceId}-${languageId}]`);
      return result;
    } catch (error) {
      logError('saveTranslationToDB error', error);
      throw error;
    }
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

  async updateStoryTranscriptionStatus(storyId, status) {
    try {
      const [result] = await query('UPDATE story SET status = ? WHERE id = ?', [status, storyId]);
      logInfo(`Story ${storyId} transcription status updated to ${status}`);
      return result;
    } catch (error) {
      logError('updateStoryTranscriptionStatus error', error);
      throw error;
    }
  }
}

module.exports = { DbService, getTableNameAndContext, STORY_STATUS };
