import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { AGE_VALUE } from '../src/common/types';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('AgeController (integration)', () => {
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

  describe('/age (GET)', () => {
    it('Should return status 200 and valid body', async () => {
      return api
        .get('/age')
        .send()
        .expect(200)
        .then(({ body }) => {
          const ageValues = Object.values(AGE_VALUE);

          expect(body.length).toBe(ageValues.length);

          for (const value of ageValues) {
            expect(body.find(({ id }) => id === value)).toBeDefined();
          }
        });
    });
  });
});
