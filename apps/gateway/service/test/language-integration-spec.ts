import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { getLanguages } from './entity/language.mock';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('LanguageController (integration)', () => {
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

  describe('/language/check (POST)', () => {
    it('Should return correct body', async () => {
      return api
        .post('/language/check')
        .send({ content: 'This is a sparta. Check english language' })
        .expect(200)
        .then((res) => {
          const { language, probability } = res.body;
          expect(language).toBe('en');
          expect(probability).toBeGreaterThan(90);
          expect(Number.isInteger(probability)).toBeTruthy();
        });
    });

    it('Should return validation error', async () => {
      return api.post('/language/check').send().expect(400);
    });
  });

  describe('/language (GET)', () => {
    it('Should return all supported languages', async () => {
      const languagesMock = await getLanguages();
      return api
        .get('/language')
        .expect(200)
        .then((response) => {
          expect(response.body.length).toBe(languagesMock.length);
          expect(response.body).toStrictEqual(
            languagesMock.map((lang) => {
              return {
                language: lang.code,
                mtSupported: !!lang.provider,
                id: lang.id,
              };
            }),
          );
        });
    });
  });
});
