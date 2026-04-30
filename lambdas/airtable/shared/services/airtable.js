const axios = require('axios');
const rateLimit = require('axios-rate-limit');
const { resolveSecret } = require('./secrets');
const { logError } = require('../helpers/logger');
const { getCurrentDateInCustomFormat } = require('../helpers/date-mapper');

const httpClient = rateLimit(axios.create(), {
  maxRequests: 5,
  perMilliseconds: 1000,
});

async function authHeaders() {
  const apiKey = await resolveSecret('SECRETS_AIRTABLE_API_KEY');
  return { Authorization: `Bearer ${apiKey}` };
}

class AirTableService {
  constructor() {
    this.organisationsUrl = process.env.AIRTABLE_ORGANISATIONS_URL || '';
    this.usersUrl = process.env.AIRTABLE_USERS_URL || '';
    this.countriesUrl = process.env.AIRTABLE_COUNTRIES_URL || '';
  }

  async updateOrganisationId(airTableId, organisationId) {
    try {
      return await httpClient.patch(
        `${this.organisationsUrl}/${airTableId}`,
        { fields: { ID: organisationId } },
        { headers: await authHeaders() },
      );
    } catch (error) {
      logError('Airtable update organisation id error', error);
    }
  }

  async getUserOrganisationId(userId) {
    const user = await this.getAirTableUserData(userId);
    if (!user) return undefined;
    const { organisationId } = await this.getOrganisationInfoByAirTableId(user.organisation);
    return organisationId;
  }

  async getOrganisationInfoByAirTableId(airTableId) {
    try {
      if (!airTableId) return {};
      const response = await httpClient.get(`${this.organisationsUrl}/${airTableId}`, {
        headers: await authHeaders(),
      });
      const fields = (response && response.data && response.data.fields) || {};
      return {
        organisationId: fields.ID,
        organisationName: fields.Name,
        organisationCountry: fields.Country,
      };
    } catch (error) {
      logError('Airtable get organisation by airtable id error', error);
      return {};
    }
  }

  async getAirTableOrganisationData(organisationId) {
    try {
      const response = await httpClient.get(
        `${this.organisationsUrl}?filterByFormula=FIND('${organisationId}', {ID})`,
        { headers: await authHeaders() },
      );
      const records = (response.data && response.data.records) || [];
      const mapped = records.map((record) => ({
        id: record.fields.ID || null,
        name: record.fields.Name || null,
        country: (record.fields.Country && record.fields.Country[0]) || null,
        acronym: record.fields.Acronym || null,
        verified: record.fields.Verified || false,
        links: record.fields['Merge into'] || [],
        airTableId: record.id,
      }));
      return mapped[0];
    } catch (error) {
      logError('Get airtable organisation data error', error);
      throw error;
    }
  }

  async getAirTableUserData(userId) {
    try {
      const response = await httpClient.get(
        `${this.usersUrl}?filterByFormula=FIND('${userId}', {ID})`,
        { headers: await authHeaders() },
      );
      const records = (response.data && response.data.records) || [];
      const mapped = records.map((record) => ({
        id: record.fields.ID || null,
        email: record.fields.Email || null,
        nickname: record.fields.Nickname || null,
        organisation: (record.fields.Organisation && record.fields.Organisation[0]) || [],
        applications: (record.fields['Applies to'] && record.fields['Applies to'][0]) || [],
        airTableId: record.id,
      }));
      return mapped[0];
    } catch (error) {
      logError('Get airtable user error', error);
    }
  }

  async getOrganisationLinks(organisationId) {
    const data = await this.getAirTableOrganisationData(organisationId);
    return (data && data.links) || [];
  }

  async deleteAirTableOrganisation(airTableId) {
    try {
      return await httpClient.delete(`${this.organisationsUrl}/${airTableId}`, {
        headers: await authHeaders(),
      });
    } catch (error) {
      logError('Airtable delete organisation error', error);
    }
  }

  async updateUserData(organisationAirTableId, userIds, fieldToUpdate) {
    await Promise.all(
      userIds.map(async (userId) => {
        const user = await this.getAirTableUserData(userId);
        const userAirTableId = user && user.airTableId;
        if (!userAirTableId) return;
        const fields = {
          [fieldToUpdate]: organisationAirTableId ? [organisationAirTableId] : null,
        };
        try {
          await httpClient.patch(
            `${this.usersUrl}/${userAirTableId}`,
            { fields },
            { headers: await authHeaders() },
          );
        } catch (error) {
          logError(`Airtable ${fieldToUpdate} update error`, error);
        }
      }),
    );
  }

  async updateOrganisationData(airTableId, organisationName, organisationCountry, organisationAcronym) {
    try {
      const fields = { Name: organisationName };
      if (organisationCountry) fields.Country = [organisationCountry];
      if (organisationAcronym) fields.Acronym = organisationAcronym;
      return await httpClient.patch(
        `${this.organisationsUrl}/${airTableId}`,
        { fields },
        { headers: await authHeaders() },
      );
    } catch (error) {
      logError('Airtable update organisation data error', error);
    }
  }

  async getCountryNameByAirTableId(airTableId) {
    try {
      const response = await httpClient.get(`${this.countriesUrl}/${airTableId}`, {
        headers: await authHeaders(),
      });
      return response && response.data && response.data.fields && response.data.fields.Name;
    } catch (error) {
      logError('Airtable get country name error', error);
    }
  }

  async findCountryIdByName(countryName) {
    try {
      const response = await httpClient.get(
        `${this.countriesUrl}?filterByFormula=FIND('${countryName}', {Name})`,
        { headers: await authHeaders() },
      );
      const records = (response.data && response.data.records) || [];
      return records[0] && records[0].id;
    } catch (error) {
      logError('Airtable get country id error', error);
    }
  }

  async updateNumberOf(organisationId, count, column) {
    const fieldToUpdate = `Number of ${column}`;
    try {
      const data = await this.getAirTableOrganisationData(organisationId);
      const airTableId = data && data.airTableId;
      if (!airTableId) return;
      await httpClient.patch(
        `${this.organisationsUrl}/${airTableId}`,
        { fields: { [fieldToUpdate]: count } },
        { headers: await authHeaders() },
      );
    } catch (error) {
      logError(`Airtable update number of ${column} error`, error);
    }
  }

  async updateDataAfterReInvite(airTableId) {
    try {
      return await httpClient.patch(
        `${this.usersUrl}/${airTableId}`,
        {
          fields: {
            'Re-invite': false,
            'Date of invitation': getCurrentDateInCustomFormat(),
          },
        },
        { headers: await authHeaders() },
      );
    } catch (error) {
      logError('Airtable update data after re-invite failed', error);
    }
  }

  async updateUser(airTableId, data) {
    try {
      return await httpClient.patch(
        `${this.usersUrl}/${airTableId}`,
        { fields: data },
        { headers: await authHeaders() },
      );
    } catch (error) {
      logError('Airtable update user failed', error);
    }
  }
}

module.exports = { AirTableService };
