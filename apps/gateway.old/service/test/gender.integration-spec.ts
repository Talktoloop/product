import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { GENDER_VALUE } from '../src/common/types';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('GenderController (integration)', () => {
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;

  beforeAll(async () => {
    app = await getAppInstance();
    api = supertest(app.getHttpServer());
    connection = await getConnection(config);
  });

  afterAll(async () => {
    await connection.destroy();

    app.close();
  });

  describe('/gender (GET)', () => {
    it('Should return status 200 and valid body', async () => {
      return api
        .get('/gender')
        .send()
        .expect(200)
        .then(({ body }) => {
          const genderValues = Object.values(GENDER_VALUE);

          expect(body.length).toBe(genderValues.length);

          for (const value of genderValues) {
            expect(body.find(({ id }) => id === value)).toBeDefined();
          }
        });
    });
  });
});
