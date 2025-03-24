import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { getCategories } from './entity/category.mock';
import { initializeDataset, checkCategoryProperties } from './helpers/category';
import { clearDatabase } from './helpers';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('CategoryController (integration)', () => {
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

  describe('/category (GET)', () => {
    it('Should find categories, return status 200 and valid body', async () => {
      const categories = await getCategories({ order: 'ASC' });

      return api
        .get('/category')
        .send()
        .expect(200)
        .then((res) => {
          expect(Array.isArray(res.body)).toBeTruthy();
          expect(res.body.length).toEqual(categories.length);

          for (const key in categories) {
            checkCategoryProperties(res.body[key], categories[key]);
            expect(res.body[key].count).toBe(
              +(res.body[key].id === dataset.category.id),
            );
          }
        });
    });
  });
});
