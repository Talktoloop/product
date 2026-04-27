const mysql = require('mysql2');
const { resolveSecret } = require('./secrets');
const { logError } = require('../helpers/logger');

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
  async getRegisteredUsers() {
    try {
      const twoMonthsAgo = new Date();
      twoMonthsAgo.setMonth(new Date().getMonth() - 2);

      const [rows] = await query(
        'SELECT email, first_name, registration_date FROM user WHERE registration_date >= ?',
        [twoMonthsAgo],
      );
      return rows || [];
    } catch (error) {
      logError('Get registered users database error', error);
      return [];
    }
  }

  async getLoopAdvocateUsers() {
    try {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(new Date().getMonth() - 1);

      const sql = `
        SELECT email, first_name, user_token.created_at AS created_at
        FROM user
        JOIN user_token ON user.id = user_token.user_id
        WHERE user_token.created_at >= ?
        UNION
        SELECT u.email, u.first_name, ot.created_at
        FROM user u
        JOIN organisation_token ot ON u.organisation_id = ot.organisation_id
        WHERE ot.created_at >= ?`;
      const [rows] = await query(sql, [oneMonthAgo, oneMonthAgo]);
      return rows || [];
    } catch (error) {
      logError('Get loop advocate users database error', error);
      return [];
    }
  }

  async getLoopAdvocatePotentialMembers() {
    try {
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(new Date().getDate() - 2);

      const sql = `
        SELECT u.first_name, u.email, ua.timestamp AS created_at
        FROM user_export_csv_activity ua
        JOIN user u ON u.id = ua.user_id
        LEFT JOIN subscription_application sa
          ON u.id = sa.user_id
          AND sa.timestamp >= ?
        WHERE ua.timestamp >= ?
          AND sa.user_id IS NULL
          AND ua.timestamp = (
            SELECT MAX(timestamp)
            FROM user_export_csv_activity
            WHERE user_id = u.id
          )`;
      const [rows] = await query(sql, [twoDaysAgo, twoDaysAgo]);
      return rows || [];
    } catch (error) {
      logError('Get loop advocate potential members database error', error);
      return [];
    }
  }
}

module.exports = { DbService };
