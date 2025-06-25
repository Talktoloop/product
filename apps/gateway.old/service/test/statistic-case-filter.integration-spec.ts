import { INestApplication } from '@nestjs/common';
import { getAppInstance } from './mocks/app.mock';
import { initializeDataset } from './helpers/case';
import supertest from 'supertest';
import { clearDatabase } from './helpers';
import { REFERRED_FOR_ASSISTANCE } from '../src/airtable-client/constant/referred-for-assistance.constant';
import { INVESTIGATION_OUTCOME } from '../src/airtable-client/constant/investigation-outcome.constant';
import { ORGANISATION_TYPE_TEXT } from '../src/airtable-client/constant/organisation-type.constant';
import { ALLEGATION_TYPE_TEXT } from '../src/airtable-client/constant/allegation-type.constant';
import { AGE_TEXT } from '../src/airtable-client/constant/age.constant';
import { GENDER_TEXT } from '../src/airtable-client/constant/gender.constant';
import { DIFFICULTY } from '../src/airtable-client/constant/difficulty.constant';
import { THEMATIC } from '../src/airtable-client/constant/thematic.constant';
import { getKeyByValue } from '../src/common/helpers';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('Statistic Cases Filters (integration)', () => {
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;

  beforeAll(async () => {
    app = await getAppInstance();
    api = supertest(app.getHttpServer());
    connection = await getConnection(config);

    await clearDatabase();
    await initializeDataset();
  });

  afterAll(async () => {
    await connection.destroy();

    app.close();
  });

  describe(`/case/filter/referred-for-assistance (GET)`, () => {
    it('Should return correct body', async () => {
      return api
        .get('/case/filter/referred-for-assistance')
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(body).toEqual(Object.keys(REFERRED_FOR_ASSISTANCE));
        });
    });
  });

  describe(`/case/filter/investigation-outcome (GET)`, () => {
    it('Should return correct body', async () => {
      return api
        .get('/case/filter/investigation-outcome')
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(body).toEqual(Object.keys(INVESTIGATION_OUTCOME));
        });
    });
  });

  describe(`/case/filter/organisaiton-type (GET)`, () => {
    it('Should return correct body', async () => {
      return api
        .get('/case/filter/organisaiton-type')
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(body).toEqual(Object.keys(ORGANISATION_TYPE_TEXT));
        });
    });
  });

  describe(`/case/filter/case-type (GET)`, () => {
    it('Should return correct body', async () => {
      return api
        .get('/case/filter/case-type')
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(body).toEqual([
            ...Object.keys(ALLEGATION_TYPE_TEXT),
            'urgentCases',
          ]);
        });
    });
  });

  describe(`/case/filter/country (GET)`, () => {
    it('Should return correct body', async () => {
      return api
        .get('/case/filter/country')
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(body).toEqual(['de', 'pl']);
        });
    });
  });

  describe('/case/filter/gender (GET)', () => {
    it('Should return correct body', async () => {
      return api.get('/case/filter/gender').expect(async ({ body, status }) => {
        expect(status).toBe(200);
        expect(body).toEqual(Object.keys(GENDER_TEXT));
      });
    });
  });

  describe('/case/filter/age (GET)', () => {
    it('Should return correct body', async () => {
      return api.get('/case/filter/age').expect(async ({ body, status }) => {
        expect(status).toBe(200);
        expect(body).toEqual(Object.keys(AGE_TEXT));
      });
    });
  });

  describe('/case/filter/disability (GET)', () => {
    it('Should return correct body', async () => {
      return api
        .get('/case/filter/disability')
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(body).toEqual(Object.values(DIFFICULTY));
        });
    });
  });

  describe('/case/filter/thematic-area (GET)', () => {
    it('Should return correct body', async () => {
      return api
        .get('/case/filter/thematic-area')
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);

          let counter = 0;

          for (const category of body) {
            counter++;
            expect(getKeyByValue(THEMATIC, category.code)).toBeDefined();

            if (category.children) {
              for (const subcategory of category.children) {
                expect(getKeyByValue(THEMATIC, subcategory.code)).toBeDefined();
              }

              counter += category.children.length;
            }
          }

          expect(counter).toBe(Object.values(THEMATIC).length);
        });
    });
  });
});
