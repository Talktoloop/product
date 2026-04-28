const axios = require('axios');
const { resolveSecret } = require('./secrets');
const { logInfo, logError } = require('../helpers/logger');

/**
 * AirTable REST client used by the 3 sync Lambdas. Resolves the API key
 * from Secrets Manager at cold-start; reads the base ID + table URLs from
 * plain env vars set by Terraform.
 */

let _apiKeyPromise = null;
function getApiKey() {
  if (!_apiKeyPromise) {
    _apiKeyPromise = resolveSecret('SECRETS_AIRTABLE_API_KEY');
  }
  return _apiKeyPromise;
}

async function authHeaders() {
  return { Authorization: `Bearer ${await getApiKey()}` };
}

class AirTableClient {
  constructor() {
    this.base = process.env.AIRTABLE_BASE;
    if (!this.base) {
      throw new Error('Missing env var: AIRTABLE_BASE');
    }
  }

  url(path) {
    return `https://api.airtable.com/v0/${this.base}${path}`;
  }

  async get(path, params) {
    try {
      const headers = await authHeaders();
      const response = await axios.get(this.url(path), { headers, params });
      return response.data;
    } catch (error) {
      logError(`AirTable GET ${path} failed`, error);
      throw error;
    }
  }

  async patch(path, body) {
    try {
      const headers = await authHeaders();
      const response = await axios.patch(this.url(path), body, { headers });
      return response.data;
    } catch (error) {
      logError(`AirTable PATCH ${path} failed`, error);
      throw error;
    }
  }

  async post(path, body) {
    try {
      const headers = await authHeaders();
      const response = await axios.post(this.url(path), body, {
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      logError(`AirTable POST ${path} failed`, error);
      throw error;
    }
  }

  async deleteRecord(path) {
    try {
      const headers = await authHeaders();
      const response = await axios.delete(this.url(path), { headers });
      logInfo(`AirTable DELETE ${path} ok`);
      return response.data;
    } catch (error) {
      logError(`AirTable DELETE ${path} failed`, error);
      throw error;
    }
  }

  /**
   * Paginated GET — follows the `offset` cursor until exhausted.
   * Returns the flat array of records.
   */
  async list(table, queryString) {
    const all = [];
    let offset = '';
    while (offset !== null) {
      const sep = queryString && !queryString.startsWith('?') ? '?' : '';
      const offsetSep = queryString ? '&' : '?';
      const path =
        `/${table}${sep}${queryString || ''}` +
        (offset ? `${offsetSep}offset=${encodeURIComponent(offset)}` : '');
      const data = await this.get(path);
      const records = (data.records || []).filter(Boolean);
      all.push(...records);
      offset = data.offset || null;
    }
    return all;
  }
}

module.exports = { AirTableClient };
