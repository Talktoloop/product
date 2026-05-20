import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { getRandomLanguageCode } from './entity/language.mock';
import { googlePlacesMock } from './mocks/google-places.mock';
import { GET_LOCALIZATION_FAILED, COUNTRY_NOT_FOUND } from '@ourloop/shared';
import { geoIPMock } from './mocks/geo-ip.mock';
import * as geocodingMock from './mocks/geocoding.mock';
import { clearDatabase } from './helpers';
import { initializeDataset } from './helpers/country';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('UserController (integration)', () => {
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;
  let dataset: any;

  beforeAll(async () => {
    app = await getAppInstance();
    api = supertest(app.getHttpServer());
    connection = await getConnection(config);

    await clearDatabase();
    dataset = await initializeDataset();
  });

  afterAll(async () => {
    await connection.destroy();

    app.close();
  });

  describe(`/user/country (GET)`, () => {
    it('Should not find country and return valid body', async () => {
      return api.get('/user/country').expect((res) => {
        expect(res.status).toBe(200);
        expect(res.body.country).toBeNull();
      });
    });

    it('Should find country, return status 200 and valid body', async () => {
      const country = getRandomLanguageCode();

      jest.spyOn(geoIPMock, 'lookup').mockImplementationOnce(
        jest.fn(() => {
          return { country };
        }),
      );

      return api.get('/user/country').expect((res) => {
        expect(res.status).toBe(200);
        expect(res.body.country).toBe(country.toLowerCase());
      });
    });
  });

  describe(`/user/location/coordinates (GET)`, () => {
    it('Should return status 400 and error GET_LOCALIZATION_FAILED', async () => {
      return api
        .get(
          `/user/location/coordinates?longitude=${faker.number.int(
            1000,
          )}&latitude=${faker.number.int(1000)}`,
        )
        .expect((res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(GET_LOCALIZATION_FAILED);
        });
    });

    it('Should find locations, return status 200 and valid body', async () => {
      const longitude = faker.number.int(1000);
      const latitude = faker.number.int(1000);
      const location = faker.lorem.sentence();
      const results = [];

      for (const type of [
        'administrative_area_level_1',
        'administrative_area_level_2',
        'administrative_area_level_3',
        'country',
      ]) {
        results.push({
          formatted_address: location,
          place_id: faker.string.uuid(),
          types: [type],
        });
      }
      jest.spyOn(geocodingMock, 'geocoding').mockImplementationOnce(
        jest.fn((params, cb) =>
          cb(
            undefined,
            params.longitude === longitude && params.latitude === latitude
              ? {
                  results,
                }
              : { results: [{}] },
          ),
        ),
      );

      return api
        .get(
          `/user/location/coordinates?longitude=${longitude}&latitude=${latitude}`,
        )
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body[0].description).toBe(location);
          expect(res.body[0].id).toBeDefined();
          expect(res.body.length).toBe(3);
        });
    });
  });

  describe(`/user/location/phrase (GET)`, () => {
    it('Should return status 400 and error GET_LOCALIZATION_FAILED', async () => {
      jest.spyOn(googlePlacesMock, 'autocomplete').mockImplementationOnce(
        jest.fn(async () => {
          throw new Error();
        }),
      );

      return api
        .get(`/user/location/phrase?phrase=${faker.lorem.word()}`)
        .expect((res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(GET_LOCALIZATION_FAILED);
        });
    });

    it('Should return status 400 and error COUNTRY_NOT_FOUND', async () => {
      return api
        .get(`/user/location/phrase?phrase=${faker.lorem.word()}&country=xx`)
        .expect((res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(COUNTRY_NOT_FOUND);
        });
    });

    it('Should find locations by phrase, return status 200 and valid body', async () => {
      const phrase = faker.lorem.word();
      const language = getRandomLanguageCode();
      const location = faker.lorem.sentence();

      jest.spyOn(googlePlacesMock, 'autocomplete').mockImplementationOnce(
        jest.fn(async (params) => {
          const predictions = [];

          if (params.input === `, ${phrase}` && params.language === language) {
            predictions.push({
              description: location,
              place_id: faker.string.uuid(),
            });
          }

          return {
            predictions,
            params,
          };
        }),
      );

      return api
        .get(`/user/location/phrase?phrase=${phrase}`)
        .set('content-language', language)
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body[0].description).toBe(location);
          expect(res.body[0].id).toBeDefined();
        });
    });

    it('Should find locations by phrase an country, return status 200 and valid body', async () => {
      const phrase = faker.lorem.word();
      const country = dataset.countries[0];
      const language = getRandomLanguageCode();
      const location = faker.lorem.sentence();

      jest.spyOn(googlePlacesMock, 'autocomplete').mockImplementationOnce(
        jest.fn(async () => {
          throw new Error('ZERO_RESULTS');
        }),
      );

      await api
        .get(`/user/location/phrase?phrase=${faker.lorem.word(3)}`)
        .set('content-language', language)
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(Array.isArray(res.body) && res.body.length === 0).toBeTruthy();
        });

      jest.spyOn(googlePlacesMock, 'autocomplete').mockImplementationOnce(
        jest.fn(async (params) => {
          const predictions = [];

          if (
            params.input === `${country.name}, ${phrase}` &&
            params.language === language
          ) {
            predictions.push({
              description: location,
              place_id: faker.string.uuid(),
            });
          }

          return {
            predictions,
            params,
          };
        }),
      );

      return api
        .get(`/user/location/phrase?phrase=${phrase}&country=${country.code}`)
        .set('content-language', language)
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body[0].description).toBe(location);
          expect(res.body[0].id).toBeDefined();
        });
    });
  });
});
