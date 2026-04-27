const mysql = require('mysql2');
const { logError } = require('../helpers/logger');

class DbService {
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
    });
  }

  async getRegisteredUsers() {
    try {
      const twoMonthsAgo = new Date();
      twoMonthsAgo.setMonth(new Date().getMonth() - 2);

      const [rows] = await this.pool
        .promise()
        .query(
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

      const query = `
        SELECT email, first_name, user_token.created_at AS created_at
        FROM user
        JOIN user_token ON user.id = user_token.user_id
        WHERE user_token.created_at >= ?
        UNION
        SELECT u.email, u.first_name, ot.created_at
        FROM user u
        JOIN organisation_token ot ON u.organisation_id = ot.organisation_id
        WHERE ot.created_at >= ?`;
      const [rows] = await this.pool.promise().query(query, [oneMonthAgo, oneMonthAgo]);
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

      const query = `
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
      const [rows] = await this.pool.promise().query(query, [twoDaysAgo, twoDaysAgo]);
      return rows || [];
    } catch (error) {
      logError('Get loop advocate potential members database error', error);
      return [];
    }
  }
}

module.exports = { DbService };
