import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { getDifficulties } from './entity/difficulty.mock';
import { checkProperties } from './helpers/lexicon';
import { clearDatabase } from './helpers';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('DifficultyController (integration)', () => {
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;

  beforeAll(async () => {
    app = await getAppInstance();
    api = supertest(app.getHttpServer());
    connection = await getConnection(config);

    await clearDatabase();
  });

  afterAll(async () => {
    await connection.destroy();

    app.close();
  });

  describe('/difficulty (GET)', () => {
    it('Should find difficulties, return status 200 and valid body', async () => {
      const difficulties = await getDifficulties();

      return api
        .get('/difficulty')
        .send()
        .expect(200)
        .then((res) => {
          expect(Array.isArray(res.body)).toBeTruthy();
          expect(res.body.length).toEqual(difficulties.length);

          for (const key in difficulties) {
            checkProperties(res.body[key], difficulties[key], ['id', 'code']);
          }
        });
    });
  });
});
