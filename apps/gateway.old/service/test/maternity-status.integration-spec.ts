import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { getMaternityStatuses } from './entity/maternity-status.mock';
import { checkProperties } from './helpers/lexicon';
import { clearDatabase } from './helpers';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('MaternityStatusController (integration)', () => {
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

  describe('/maternity_status (GET)', () => {
    it('Should find maternity statuses, return status 200 and valid body', async () => {
      const maternityStatuses = await getMaternityStatuses();

      return api
        .get('/maternity_status')
        .send()
        .expect(200)
        .then((res) => {
          expect(Array.isArray(res.body)).toBeTruthy();
          expect(res.body.length).toEqual(maternityStatuses.length);

          for (const key in maternityStatuses) {
            checkProperties(res.body[key], maternityStatuses[key]);
          }
        });
    });
  });
});
