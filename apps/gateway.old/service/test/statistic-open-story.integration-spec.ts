import { INestApplication } from '@nestjs/common';
import { StoriesDividedByDisabilityRO } from '../src/statistic/response/stories-divided-by-disability.ro';
import supertest from 'supertest';
import { getCategories } from './entity/category.mock';
import { getDifficulties } from './entity/difficulty.mock';
import { clearDatabase } from './helpers';
import { getEnumSize, initializeDataset } from './helpers/statistics';
import { getAppInstance } from './mocks/app.mock';
import { AGE_VALUE, GENDER_VALUE } from '../src/common/types';
import { getThematicWithoutChildren } from './entity/thematic.mock';
import { VALIDATION_FAILED } from '@ourloop/shared';
import { CategoryEntity } from '../src/category/entity/category.entity';
import { StoriesCodeDatesRO } from '../src/statistic/response/stories-code-dates.ro';
import { subDays, subMonths, format, addMonths } from 'date-fns';
import { ifMonthDifferenceGreaterThan1 } from './helpers';
import { getCountryByCode } from './entity/country.mock';
import { getStories } from './entity/story.mock';
import { getComments } from './entity/comment.mock';
import { COMMENT_STATUS } from '@ourloop/shared';
import { faker } from '@faker-js/faker';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('Statistic OpenStory (integration)', () => {
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;
  let categories: CategoryEntity[];
  let dataset: any;
  const categoryOrder = ['thanks', 'question', 'opinion', 'request', 'concern'];

  beforeAll(async () => {
    app = await getAppInstance();
    api = supertest(app.getHttpServer());
    connection = await getConnection(config);

    await clearDatabase();
    dataset = await initializeDataset();
    categories = await getCategories();
  });

  afterAll(async () => {
    await connection.destroy();

    app.close();
  });

  describe(`/open-story/summary (GET)`, () => {
    let bodyWithoutFilters;
    it('Should return correct body', async () => {
      return api.get('/open-story/summary').expect(({ body, status }) => {
        bodyWithoutFilters = body;
        expect(body.numberOfOrganisations).toBe(3);
        expect(body.numberOfLanguages).toBe(1);
        expect(body.numberOfFeedback).toBe(3);
        expect(body.numberOfComments).toBe(6);
        expect(status).toBe(200);
      });
    });

    it(`Should return correct body for filters "country=pl"`, async () => {
      const country = await getCountryByCode('pl');
      const stories = await getStories({ countryId: country.id });
      const storiesIds = stories.map((story) => story.id);
      const comments = await getComments({
        ids: storiesIds,
        status: COMMENT_STATUS.PUBLISHED,
      });

      return api
        .get(`/open-story/summary?country=pl`)
        .expect(({ body, status }) => {
          expect(body.numberOfOrganisations).toBe(
            bodyWithoutFilters.numberOfOrganisations,
          );
          expect(body.numberOfLanguages).toBe(
            bodyWithoutFilters.numberOfLanguages,
          );
          expect(body.numberOfFeedback).toBe(stories.length);
          expect(body.numberOfComments).toBe(comments.length);
          expect(status).toBe(200);
        });
    });
    const randomValues = [
      null,
      Math.random() * 512,
      Math.random() < 0.5,
      faker.lorem.sentence(),
    ];

    for (const value of randomValues) {
      it(`Should return correct body for "country=${value}"`, async () => {
        return api
          .get(`/open-story/summary?country=${value}`)
          .expect(({ body, status }) => {
            delete body.currentTime;
            delete bodyWithoutFilters.currentTime;
            expect(JSON.stringify(body)).toBe(
              JSON.stringify(bodyWithoutFilters),
            );
            expect(status).toBe(200);
          });
      });
    }
  });

  describe(`/open-story/stories-and-replies-grouped-by-category (GET)`, () => {
    for (const filter of ['', 'type=1,2,3,4,5']) {
      it(`Should return correct body for filters "${filter}"`, async () => {
        return api
          .get(`/open-story/stories-and-replies-grouped-by-category?${filter}`)
          .expect(({ body, status }) => {
            expect(status).toBe(200);

            const codes = [...categoryOrder, 'sensitive'];
            expect(codes).toEqual(body.map((item) => item.code));

            const sensitive = body.find(({ code }) => code === 'sensitive');

            expect(sensitive).toBeDefined();

            for (const category of categories) {
              expect(
                body.find(({ code }) => code === category.code),
              ).toBeDefined();
            }

            expect(sensitive.stories).toEqual([1]);
            expect(sensitive.replies).toEqual([2, 1]);

            const thanks = body.find(({ code }) => code === 'thanks');

            expect(thanks.stories).toEqual([1]);
            expect(thanks.replies).toEqual([1, 1]);

            const opinion = body.find(({ code }) => code === 'opinion');

            expect(opinion.stories).toEqual([2]);
            expect(opinion.replies).toEqual([1, 0]);

            const question = body.find(({ code }) => code === 'question');

            expect(question.stories).toEqual([3]);
            expect(question.replies).toEqual([2, 1]);

            for (const item of body) {
              if (
                !['sensitive', 'thanks', 'opinion', 'question'].includes(
                  item.code,
                )
              ) {
                expect(item.stories).toEqual([0]);
                expect(item.replies).toEqual([0, 0]);
              }
            }
          });
      });
    }

    it(`Should return correct body for filters "type=1"`, async () => {
      return api
        .get(`/open-story/stories-and-replies-grouped-by-category?type=1`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(body.length).toBe(categories.length + 1);
        });
    });
  });

  describe(`/open-story/stories-type-and-replies (GET)`, () => {
    let bodyWithoutFilters;
    it('Should return correct body', async () => {
      return api
        .get('/open-story/stories-type-and-replies')
        .expect(({ body, status }) => {
          bodyWithoutFilters = { ...body };
          expect(body.uniqueAuthors).toBe(3);
          expect(body.percentOfStoriesWithResponded).toBe(67);
          expect(body.percentOfStoriesWithOrganisationResponded).toBe(33);
          expect(body.countOfResponses).toBe(3);
          expect(body.countOfFeedbacks).toBe(3);
          expect(body.avgResponseTime).toBe(396);
          expect(status).toBe(200);
        });
    });

    it('Should return correct body with age filter', async () => {
      return api
        .get('/open-story/stories-type-and-replies?age=0,1,2,3,4')
        .expect(({ body, status }) => {
          expect(body.uniqueAuthors).toBe(bodyWithoutFilters.uniqueAuthors);
          expect(body.percentOfStoriesWithResponded).toBe(
            bodyWithoutFilters.percentOfStoriesWithResponded,
          );
          expect(body.percentOfStoriesWithOrganisationResponded).toBe(
            bodyWithoutFilters.percentOfStoriesWithOrganisationResponded,
          );
          expect(body.countOfTaggedOrganisation).toBe(
            bodyWithoutFilters.countOfTaggedOrganisation,
          );
          expect(body.countOfResponses).toBe(
            bodyWithoutFilters.countOfResponses,
          );
          expect(body.countOfFeedbacks).toBe(
            bodyWithoutFilters.countOfFeedbacks,
          );
          expect(body.avgResponseTime).toBe(bodyWithoutFilters.avgResponseTime);
          expect(status).toBe(200);
        });
    });
  });

  describe(`/open-story/stories-by-disabilities (GET)`, () => {
    let bodyWithoutFilters;
    it('Should return correct body', async () => {
      const difficulties = await getDifficulties();

      return api
        .get('/open-story/stories-by-disabilities')
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);
          expect(difficulties.length).toBe(body.length);
          body
            .filter(
              (element: StoriesDividedByDisabilityRO) => element.count > 0,
            )
            ?.map((element: StoriesDividedByDisabilityRO) => {
              expect(element.percent).toBeGreaterThan(0);
            });
        });
    });

    it('Should return correct body with age filter', async () => {
      const difficulties = await getDifficulties();

      return api
        .get('/open-story/stories-by-disabilities?age=0,1,2,3,4')
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(difficulties.length).toBe(body.length);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe(`/open-story/average-response-time-per-story-type (GET)`, () => {
    let bodyWithoutFilters;
    it('Should return correct body', async () => {
      return api
        .get('/open-story/average-response-time-per-story-type')
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;

          const codes = [...categoryOrder, 'sensitive'];

          expect(status).toBe(200);
          expect(codes).toEqual(body.map((item) => item.code));
          expect(categories.length + 1).toBe(body.length);
          expect(body.find(({ code }) => code === 'thanks').average).toBe(744);
          expect(
            Math.round(body.find(({ code }) => code === 'sensitive').average),
          ).toBe(360);
        });
    });

    it('Should return correct body with age filter', async () => {
      return api
        .get('/open-story/average-response-time-per-story-type?age=0,1,2,3,4')
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(categories.length + 1).toBe(body.length);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });

    it('Should return correct body with type filter', async () => {
      await api
        .get('/open-story/average-response-time-per-story-type?type=100')
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(body.length).toBe(0);
        });

      return api
        .get('/open-story/average-response-time-per-story-type?type=1,2')
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(body.length).toBe(2);
        });
    });
  });

  describe(`/open-story/stories-authors-age-gender (GET)`, () => {
    let bodyWithoutFilters;
    it('Should return correct body', async () => {
      const categories = await getCategories();

      const ageElementsCount = getEnumSize(AGE_VALUE);

      const genderElementsCount = getEnumSize(GENDER_VALUE);

      return api
        .get('/open-story/stories-authors-age-gender')
        .expect(({ body, status }) => {
          const codes = [...categoryOrder, 'sensitive'];
          bodyWithoutFilters = body;
          const { gender, age } = body;
          expect(status).toBe(200);
          expect(codes).toEqual(gender.map((item) => item.code));
          expect(codes).toEqual(age.map((item) => item.code));
          expect(gender).toBeDefined();
          gender.forEach((element) => {
            expect(element.values.length).toBe(genderElementsCount);
          });
          expect(gender.length).toBe(categories.length + 1);
          expect(age).toBeDefined();
          age.forEach((element) => {
            expect(element.values.length).toBe(ageElementsCount);
          });
          expect(age.length).toBe(categories.length + 1);
          expect(gender.length).toBe(categories.length + 1);
          expect(
            gender.find((item) => item.code == 'sensitive').values[
              dataset.stories.find((entity) => entity.isSensitive).recipient
                .genderByModerator - 1
            ],
          ).toBe(1);
          expect(
            age.find((item) => item.code == 'sensitive').values[
              dataset.stories.find((entity) => entity.isSensitive).recipient
                .ageByModerator - 1
            ],
          ).toBe(1);
        });
    });

    it('Should return correct body with filter age', async () => {
      return api
        .get('/open-story/stories-authors-age-gender?age=0,1,2,3,4')
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe(`/open-story/stories-per-thematic-area (GET)`, () => {
    let bodyWithoutFilters;
    it('Should return correct body', async () => {
      const categories = await getCategories();
      const thematicElements = await getThematicWithoutChildren();

      return api
        .get('/open-story/stories-per-thematic-area')
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;
          const codes = [...categoryOrder, 'sensitive'];

          expect(status).toBe(200);
          expect(codes).toEqual(body.map((item) => item.code));
          body.forEach((element) => {
            expect(element.values.length).toBe(thematicElements.length);
          });
          expect(body.length).toBe(categories.length + 1);
          expect(
            body.find((item) => item.code === 'sensitive')?.values,
          ).toEqual([0, 1, 0, 1, 0, 0, 0, 0]);
        });
    });

    it('Should return correct body with filter age', async () => {
      return api
        .get('/open-story/stories-per-thematic-area?age=0,1,2,3,4')
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe(`/open-story/timeline-for-stories-and-retries (GET)`, () => {
    const now = format(new Date(), 'yyyy-MM-dd');

    for (const period of [
      {
        start: now,
        end: addMonths(new Date(), 12).toISOString().substring(0, 10),
      },
      {
        start: format(new Date(), 'yyyy-MM-dd'),
        end: subDays(new Date(), 2).toISOString().substring(0, 10),
      },
    ]) {
      it('Should return status 400 and error VALIDATION_FAILED', async () => {
        return api
          .get(
            `/open-story/timeline-for-stories-and-retries?from=${period.start}&to=${period.end}`,
          )
          .expect(({ status, body }) => {
            expect(body?.error?.code).toBe(VALIDATION_FAILED);
            expect(status).toBe(400);
          });
      });
    }

    it('Should return status 200 if start is equal to end', async () => {
      return api
        .get(
          `/open-story/timeline-for-stories-and-retries?from=${now}&to=${now}`,
        )
        .expect(({ status }) => {
          expect(status).toBe(200);
        });
    });

    for (const filter of ['', 'type=1,2,3,4,5']) {
      it(`Should return correct body for filters "${filter}"`, async () => {
        const monthDiff = 6;
        const currentMonth = format(new Date(), 'yyyy-MM');
        const previousMonth = format(
          subMonths(new Date(), ifMonthDifferenceGreaterThan1() ? 1 : 2),
          'yyyy-MM',
        );

        return api
          .get(
            `/open-story/timeline-for-stories-and-retries?from=${format(
              subMonths(new Date(), monthDiff),
              'yyyy-MM-dd',
            )}&to=${format(new Date(), 'yyyy-MM')}&${filter}`,
          )
          .expect(({ body, status }) => {
            expect(status).toBe(200);
            expect(body.length).toBe(categories.length + 2);

            const codes = [...categoryOrder, 'sensitive', 'comments'];
            expect(codes).toEqual(body.map((item) => item.code));

            for (const details of body) {
              expect(details.values.length).toBe(monthDiff + 1);
            }

            let data: StoriesCodeDatesRO;

            for (const code of ['concern', 'request']) {
              data = body.find((item) => item.code === code);

              for (const item of data.values) {
                expect(item[1]).toBe(0);
              }
            }

            data = body.find((item) => item.code === 'sensitive');

            for (const item of data.values) {
              expect(item[1]).toBe(item[0] === currentMonth ? 1 : 0);
            }

            data = body.find((item) => item.code === 'opinion');

            for (const item of data.values) {
              expect(item[1]).toBe(item[0] === currentMonth ? 2 : 0);
            }

            data = body.find((item) => item.code === 'thanks');

            for (const item of data.values) {
              expect(item[1]).toBe(item[0] === previousMonth ? 1 : 0);
            }

            data = body.find((item) => item.code === 'question');

            for (const item of data.values) {
              if (item[0] === currentMonth) {
                expect(item[1]).toBe(2);
              } else if (item[0] === previousMonth) {
                expect(item[1]).toBe(1);
              } else {
                expect(item[1]).toBe(0);
              }
            }

            for (const item of data.values.filter(
              (value) => ![previousMonth, currentMonth].includes(value[0]),
            )) {
              expect(item[1]).toBe(0);
            }
          });
      });
    }
  });

  describe(`/open-story/open-stories-count (GET)`, () => {
    let bodyWithoutFilters;
    it('Should return correct body', async () => {
      return api
        .get('/open-story/open-stories-count')
        .expect(async ({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);
          expect(body.count).toBeDefined();
          expect(body.count).toBe(3);
        });
    });

    it('Should return correct body with age filter', async () => {
      return api
        .get('/open-story/open-stories-count?age=0,1,2,3,4')
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });
});
