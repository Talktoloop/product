import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { getThematics } from './entity/thematic.mock';
import { checkThematicProperties } from './helpers/thematic';
import { clearDatabase } from './helpers';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('ThematicController (integration)', () => {
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

  describe('/thematic (GET)', () => {
    it('Should find thematics, return status 200 and valid body', async () => {
      const thematics = await getThematics(false);

      return api
        .get('/thematic')
        .send()
        .expect(200)
        .then((res) => {
          expect(Array.isArray(res.body)).toBeTruthy();

          for (const item of res.body) {
            checkThematicProperties(item, thematics);
          }
        });
    });
  });
});
