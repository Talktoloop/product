const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');
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

  async getOrganisationApplicationByUserId(userId) {
    try {
      const query =
        'SELECT `id`, `user_id` AS userId, `organisation_id` AS organisationId ' +
        'FROM user_organisation_application WHERE user_id = ?';
      const [rows] = await this.pool.promise().query(query, [userId]);
      return rows && rows.length ? rows[rows.length - 1] : undefined;
    } catch (error) {
      logError('Get organisation application failed', error);
      throw error;
    }
  }

  async removeApplicationById(id) {
    try {
      const [result] = await this.pool
        .promise()
        .query('DELETE FROM user_organisation_application WHERE id = ?', [id]);
      return result;
    } catch (error) {
      logError('Delete application failed', error);
      throw error;
    }
  }

  async assignUserToOrganisation(userId, organisationId) {
    try {
      const [result] = await this.pool
        .promise()
        .query('UPDATE user SET organisation_id = ? WHERE id = ?', [organisationId, userId]);
      return result;
    } catch (error) {
      logError('Assign user to organisation failed', error);
      throw error;
    }
  }

  async createOrganisation(name, country, airTableId) {
    try {
      const [existingRows] = await this.pool
        .promise()
        .query('SELECT * FROM organisation WHERE external_id = ?', [airTableId]);

      const countryId = await this.getCountryIdByName(country || '');

      if (Array.isArray(existingRows) && existingRows.length === 0) {
        const id = uuidv4();
        await this.pool
          .promise()
          .query(
            'INSERT INTO organisation (id, name, country_id, external_id) VALUES (?, ?, ?, ?)',
            [id, name, countryId, airTableId],
          );
        const [rows] = await this.pool
          .promise()
          .query('SELECT * FROM organisation WHERE id = ?', [id]);
        return rows;
      }

      await this.pool
        .promise()
        .query(
          'UPDATE organisation SET name = ?, country_id = ? WHERE external_id = ?',
          [name, countryId, airTableId],
        );
      const [rows] = await this.pool
        .promise()
        .query('SELECT * FROM organisation WHERE external_id = ?', [airTableId]);
      return rows;
    } catch (error) {
      logError('Create organisation database error', error);
      throw error;
    }
  }

  async updateUserOrganisation(userId, organisationId) {
    try {
      const [result] = await this.pool
        .promise()
        .query('UPDATE user SET organisation_id = ? WHERE id = ?', [organisationId, userId]);
      return result;
    } catch (error) {
      logError('Update user organisation database error', error);
      throw error;
    }
  }

  async updateOrganisation(organisation) {
    try {
      const { id, name, country, acronym, verified } = organisation;
      const countryId = await this.getCountryIdByName(country || '');
      const [result] = await this.pool
        .promise()
        .query(
          'UPDATE organisation SET name = ?, country_id = ?, acronym = ?, verified = ? WHERE id = ?',
          [name, countryId, acronym, verified, id],
        );
      return result;
    } catch (error) {
      logError('Update organisation database error', error);
      throw error;
    }
  }

  async linkOrganisation(primaryOrganisationId, linkedOrganisationId) {
    try {
      await this.pool
        .promise()
        .query('UPDATE user SET organisation_id = ? WHERE organisation_id = ?', [
          primaryOrganisationId,
          linkedOrganisationId,
        ]);
      await this.pool
        .promise()
        .query(
          'UPDATE story_organisation SET organisation_id = ? WHERE organisation_id = ?',
          [primaryOrganisationId, linkedOrganisationId],
        );
      await this.pool
        .promise()
        .query(
          'UPDATE user_organisation_application SET organisation_id = ? WHERE organisation_id = ?',
          [primaryOrganisationId, linkedOrganisationId],
        );
      const [result] = await this.pool
        .promise()
        .query('DELETE FROM organisation WHERE id = ?', [linkedOrganisationId]);
      return result;
    } catch (error) {
      logError('Link organisation database error', error);
      throw error;
    }
  }

  async getOrganisationUserIds(organisationId) {
    try {
      const [rows] = await this.pool
        .promise()
        .query('SELECT id FROM user WHERE organisation_id = ?', [organisationId]);
      return (rows || []).map((row) => row.id);
    } catch (error) {
      logError('Get organisation user ids database error', error);
      throw error;
    }
  }

  async getOrganisationName(organisationId) {
    try {
      const [rows] = await this.pool
        .promise()
        .query('SELECT name FROM organisation WHERE id = ?', [organisationId]);
      return rows && rows[0] ? rows[0].name : undefined;
    } catch (error) {
      logError('Get organisation name database error', error);
      throw error;
    }
  }

  async getOrganisationApplications(organisationId) {
    try {
      const [rows] = await this.pool
        .promise()
        .query('SELECT user_id FROM user_organisation_application WHERE organisation_id = ?', [
          organisationId,
        ]);
      return (rows || []).map((row) => row.user_id);
    } catch (error) {
      logError('Get organisation applications database error', error);
      throw error;
    }
  }

  async getCountryIdByName(countryName) {
    try {
      const [rows] = await this.pool
        .promise()
        .query('SELECT id FROM country WHERE name LIKE ?', [`%${countryName}%`]);
      return rows && rows[0] ? rows[0].id : undefined;
    } catch (error) {
      logError('Get country id database error', error);
      throw error;
    }
  }

  async getCountryNameById(countryId) {
    try {
      const [rows] = await this.pool
        .promise()
        .query('SELECT name FROM country WHERE id = ?', [countryId]);
      return rows && rows[0] ? rows[0].name : undefined;
    } catch (error) {
      logError('Get country name database error', error);
      throw error;
    }
  }

  async getOrganisationData(organisationId) {
    try {
      const [rows] = await this.pool
        .promise()
        .query('SELECT name, country_id, acronym FROM organisation WHERE id = ?', [
          organisationId,
        ]);
      const { name, country_id: countryId, acronym } = (rows && rows[0]) || {};
      const countryName = await this.getCountryNameById(countryId);
      return { name, countryName, acronym };
    } catch (error) {
      logError('Get organisation data database error', error);
      throw error;
    }
  }

  async getOrganisationNumberOfUsers(organisationId) {
    try {
      const [rows] = await this.pool
        .promise()
        .query('SELECT COUNT(*) AS userCount FROM user WHERE organisation_id = ?', [
          organisationId,
        ]);
      return rows[0].userCount;
    } catch (error) {
      logError('Get organisation number of users database error', error);
      throw error;
    }
  }

  async getOrganisationNumberOfStories(organisationId) {
    try {
      const [rows] = await this.pool
        .promise()
        .query(
          'SELECT COUNT(*) AS storyCount FROM story_organisation WHERE organisation_id = ?',
          [organisationId],
        );
      return rows[0].storyCount;
    } catch (error) {
      logError('Get organisation number of stories database error', error);
      throw error;
    }
  }

  async getUsersOrganisation(userId) {
    try {
      const [rows] = await this.pool
        .promise()
        .query('SELECT organisation_id FROM user WHERE id = ?', [userId]);
      return rows && rows[0] ? rows[0].organisation_id : undefined;
    } catch (error) {
      logError('Get user organisation database error', error);
      throw error;
    }
  }

  async updateAccountStatus(userId) {
    try {
      await this.pool
        .promise()
        .query("UPDATE user SET account_status = 'complete' WHERE id = ?", [userId]);
    } catch (error) {
      logError('Update user account status database error', error);
      throw error;
    }
  }

  async updateInvitationDate(userId) {
    try {
      await this.pool
        .promise()
        .query('UPDATE user SET invitation_date = ? WHERE id = ?', [new Date(), userId]);
    } catch (error) {
      logError('Update user invitation date database error', error);
      throw error;
    }
  }
}

module.exports = { DbService };
