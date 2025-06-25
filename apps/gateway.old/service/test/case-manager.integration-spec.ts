import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { initializeDataset } from './helpers/case-manager';
import { clearDatabase } from './helpers';
import { getCaseManager } from './entity/case-manager.mock';
import { CASE_MANAGER_NOT_FOUND } from '@ourloop/shared';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('Case Manager (integration)', () => {
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

  describe('/case-manager (GET)', () => {
    it('Should return error', async () => {
      return api
        .get('/case-manager')
        .send()
        .expect(400)
        .then((res) => {
          expect(res.body?.error?.code).toBe(CASE_MANAGER_NOT_FOUND);
        });
    });

    it('Should return random case manager with correct body', async () => {
      await initializeDataset();
      const caseManager = await getCaseManager();

      return api
        .get('/case-manager')
        .send()
        .expect(200)
        .then((res) => {
          ['nickname', 'avatar'].forEach((key) => {
            expect(res.body[key]).toBe(caseManager[key]);
          });
          expect(res.body.text).toBeTruthy();
        });
    });
  });
});
