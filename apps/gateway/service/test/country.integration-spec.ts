import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { initializeDataset } from './helpers/country';
import { clearDatabase } from './helpers';
import { _omit } from '@ourloop/shared';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('Country (integration)', () => {
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

  describe('/country (GET)', () => {
    it('Should return status 200 and valid body', async () => {
      return api
        .get('/country')
        .send()
        .expect(200)
        .then((res) => {
          expect(Array.isArray(res.body)).toBeTruthy();

          let item;

          for (const country of dataset.countries) {
            item = res.body.find((value) => value.code === country.code);

            expect(typeof item.hasChild === 'boolean').toBeTruthy();
            expect(typeof item.numberOfStories === 'number').toBeTruthy();

            expect(_omit(country, ['name', 'defaultLanguageId'])).toEqual(
              _omit(item, ['hasChild', 'numberOfStories']),
            );
          }
        });
    });
  });

  describe('/country/codes (GET)', () => {
    it('Should return status 200 and valid body', async () => {
      return api
        .get('/country/codes')
        .send()
        .expect(200)
        .then((res) => {
          expect(Array.isArray(res.body)).toBeTruthy();

          for (const country of dataset.countries) {
            expect(country.code).toBe(
              res.body.find((value) => value === country.code),
            );
          }
        });
    });
  });
});
