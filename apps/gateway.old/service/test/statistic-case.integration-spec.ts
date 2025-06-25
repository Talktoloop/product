import { INestApplication } from '@nestjs/common';
import { getAppInstance } from './mocks/app.mock';
import { cases, initializeDataset } from './helpers/case';
import supertest from 'supertest';
import { clearDatabase } from './helpers';
import { CASE_STATUS } from '../src/airtable-client/constant/case-status.constant';
import { ASSISTANCE_STATUS } from '../src/airtable-client/constant/assistance-status.constant';
import { ALLEGATION_TYPE_TEXT } from '../src/airtable-client/constant/allegation-type.constant';
import { GENDER_TEXT } from '../src/airtable-client/constant/gender.constant';
import { AUTHOR_PERSPECTIVE } from '../src/airtable-client/constant/author-perspective.constant';
import { ORGANISATION_TYPE_TEXT } from '../src/airtable-client/constant/organisation-type.constant';
import { ASSISTANCE_RENDERED } from '../src/airtable-client/constant/assistance-rendered.constant';
import { CASE_ACCOUNTABILITY } from '../src/airtable-client/constant/case-accountability.constant';
import { AGE_TEXT } from '../src/airtable-client/constant/age.constant';
import { VALIDATION_FAILED } from '@ourloop/shared';
import { configMock } from './mocks/config.mock';
import {
  subDays,
  subMonths,
  subYears,
  addYears,
  format,
  addMonths,
} from 'date-fns';
import { URGENT } from '../src/airtable-client/constant/urgent.constant';
import { getKeyByValue } from '../src/common/helpers';
import { ifMonthDifferenceGreaterThan1 } from './helpers';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('Statistic Cases (integration)', () => {
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;
  const queryParameters =
    `age=lessThen6,lessThen14,lessThen18,lessThen30,lessThen60,moreThen59,noAnswer&
  referredForAssistance=yes,no,notApplicable&
  investigationOutcome=notSubstantiated,offenceSubstantiatedAndOffender,offenderResignedFromOrganisation,offenderFacedDisciplinary,notEnoughInformation,referralToMisconductDisclosureScheme,other&
  organisationType=governmentAuthorities,nationalArmedForces,privateSector,nationalCommunityBasedOrganisation,communityMember,internationalOrganisation,other&
  caseType=SEAH,protection,fraudOrCorruption,otherMisconduct,urgentCases&
  country=pl,de&
  gender=female,male,nonBinary,noAnswer&
  disability=seeing,hearing,remembering,none,walkingOrClimbingSteps,selfCareForExampleWashing,communicating&
  thematic=wash.handwashingStations,health.medicalCentres,shelter.non-foodItems,shelter.housing`.replace(
      /\s+/g,
      '',
    );

  const queryParametersWithPeriod = `${queryParameters}&from=${format(
    subYears(new Date(), 1),
    'yyyy-MM',
  )}&
  to=${format(addYears(new Date(), 1), 'yyyy-MM')}`.replace(/\s+/g, '');

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

  describe(`/case/cases-received (GET)`, () => {
    let bodyWithoutFilters;

    it('Should return correct body', async () => {
      return api.get('/case/cases-received').expect(({ body, status }) => {
        bodyWithoutFilters = body;
        expect(status).toBe(200);
        expect(body.total).toBe(cases.length);

        const openCount = cases.filter(
          ({ caseStatus }) => caseStatus === CASE_STATUS.open,
        ).length;
        expect(body.open).toBe(openCount);

        const closeCount = cases.filter(
          ({ caseStatus }) => caseStatus === CASE_STATUS.closed,
        ).length;
        expect(body.closed).toBe(closeCount);

        const urgentCount = cases.filter(
          ({ initializeUrgency }) =>
            initializeUrgency === getKeyByValue(URGENT, 1, false),
        ).length;
        expect(body.urgent).toBe(urgentCount);

        const assistanceProvidedCount = cases.filter(({ assistanceStatus }) =>
          Object.values(ASSISTANCE_STATUS).includes(assistanceStatus),
        ).length;
        expect(body.assistanceProvided).toBe(assistanceProvidedCount);
      });
    });

    it('Should return correct body with age filter', async () => {
      return api
        .get(`/case/cases-received?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe('/case/how-responsive-by-step (GET)', () => {
    let bodyWithoutFilters;

    it('Should return correct data', async () => {
      return api
        .get('/case/how-responsive-by-step')
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);
          expect(body).toEqual({
            steps: [
              { type: 'actionTakenOnTime', values: [1, 0, 0, 0, 0] },
              { type: 'overdue', values: [0, 1, 0, 1, 0] },
              { type: 'unresponsive', values: [0, 0, 0, 0, 0] },
            ],
            closedCases: 5,
          });
        });
    });

    it('Should return correct body with age filter', async () => {
      return api
        .get(`/case/how-responsive-by-step?${queryParametersWithPeriod}`)
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe(`/case/average-taken-time-to-complete-step (GET)`, () => {
    let bodyWithoutFilters;

    it('Should return correct body', async () => {
      return api
        .get('/case/average-taken-time-to-complete-step')
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);
          expect(body).toEqual({
            processAndRefer: {
              days: 21,
              tooltip: { averageTime: 21, timeUnit: 'day', numberOfCases: 2 },
            },
            respondToReferral: {
              days: 1,
              tooltip: { averageTime: 24, timeUnit: 'hour', numberOfCases: 1 },
            },
            assessWhetherToInvestigate: {
              days: 21,
              tooltip: { averageTime: 21, timeUnit: 'day', numberOfCases: 1 },
            },
            completeInvestigation: {
              days: 6,
              tooltip: { averageTime: 6, timeUnit: 'day', numberOfCases: 7 },
            },
            informTheAuthorOfOutcome: {
              days: 7,
              tooltip: { averageTime: 7, timeUnit: 'day', numberOfCases: 1 },
            },
            closeCase: {
              days: 72.5,
              tooltip: {
                averageTime: 2.3,
                timeUnit: 'month',
                numberOfCases: 5,
              },
            },
          });
        });
    });

    it('Should return correct body with age filter', async () => {
      return api
        .get(
          `/case/average-taken-time-to-complete-step?${queryParametersWithPeriod}`,
        )
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe(`/case/allegation-type-author-perspective (GET)`, () => {
    let bodyWithoutFilters;

    it('Should return correct data', async () => {
      jest.spyOn(configMock, 'get').mockImplementationOnce(
        jest.fn((key: number | string): any => {
          if (key === 'statistics.valuesForAnonymousChart') {
            return;
          }
        }),
      );

      await api
        .get(
          `/case/allegation-type-author-perspective?${queryParametersWithPeriod}`,
        )
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);

          expect(body.map((item) => item.type)).toEqual(
            Object.keys(ALLEGATION_TYPE_TEXT),
          );

          const authorPerspectives = Object.keys(AUTHOR_PERSPECTIVE);

          for (const item of body) {
            expect(item.values.length).toBe(authorPerspectives.length);
          }

          const allegationTypes = Object.keys(ALLEGATION_TYPE_TEXT);

          const expected = [
            [0, 0, 2, 1, 0],
            [1, 0, 0, 0, 2],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
          ];

          let row;

          for (let i = 0; i < allegationTypes.length; i++) {
            row = body.find((item) => item.type === allegationTypes[i]);

            expect(row.values).toEqual(expected[i]);
          }

          expect(body[0].isAnonymousData).toBe(false);
        });

      await api
        .get('/case/allegation-type-author-perspective')
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });

      jest.spyOn(configMock, 'get').mockImplementation(
        jest.fn((key: number | string): any => {
          if (key === 'statistics.valuesForAnonymousChart') {
            return [6, 6, 4, 14];
          }

          if (key === 'application.anonymizeCharts') {
            return true;
          }
        }),
      );

      return api
        .get(
          `/case/allegation-type-author-perspective?${queryParametersWithPeriod}`,
        )
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(body).toEqual([
            { type: 'SEAH', values: [6, 6, 6, 6, 6], isAnonymousData: true },
            {
              type: 'protection',
              values: [6, 6, 6, 6, 6],
              isAnonymousData: true,
            },
            {
              type: 'fraudOrCorruption',
              values: [4, 4, 4, 4, 4],
              isAnonymousData: true,
            },
            {
              type: 'otherMisconduct',
              values: [14, 14, 14, 14, 14],
              isAnonymousData: true,
            },
          ]);
        });
    });
  });

  describe(`/case/how-are-organisations-handling-allegations (GET)`, () => {
    let bodyWithoutFilters;

    it('Should return correct data', async () => {
      return api
        .get('/case/how-are-organisations-handling-allegations')
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);

          expect(body.map((item) => item.type)).toEqual(
            Object.keys(CASE_ACCOUNTABILITY),
          );

          const organisaitonTypes = Object.keys(ORGANISATION_TYPE_TEXT);

          for (const item of body) {
            expect(item.values.length).toBe(organisaitonTypes.length);
          }

          const caseAccountabilityValues = Object.keys(CASE_ACCOUNTABILITY);

          const expected = [
            [0, 2, 1, 0, 0, 0, 0],
            [0, 2, 1, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 0, 0],
            [0, 2, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0],
            [1, 1, 2, 0, 1, 0, 1],
          ];

          let row;

          for (let i = 0; i < caseAccountabilityValues.length; i++) {
            row = body.find(
              (item) => item.type === caseAccountabilityValues[i],
            );

            expect(row.values).toEqual(expected[i]);
          }
        });
    });

    it('Should return correct body with age filter', async () => {
      return api
        .get(
          `/case/how-are-organisations-handling-allegations?${queryParametersWithPeriod}`,
        )
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe(`/case/survivor-gender (GET)`, () => {
    it('Should return data for each gender & allegation types', async () => {
      const genderLength = Object.keys(GENDER_TEXT).length;
      let bodyWithoutFilters;

      jest.spyOn(configMock, 'get').mockImplementationOnce(
        jest.fn((key: number | string): any => {
          if (key === 'application.anonymizeCharts') {
            return false;
          }
        }),
      );

      await api.get('/case/survivor-gender').expect(({ body, status }) => {
        bodyWithoutFilters = body;
        expect(status).toBe(200);

        expect(Object.keys(ALLEGATION_TYPE_TEXT).length).toBe(body.length);
        Object.keys(ALLEGATION_TYPE_TEXT).forEach((definedAllegation) => {
          let isIncluded = false;
          body.forEach(({ type, values }) => {
            if (definedAllegation === type) {
              isIncluded = true;
            }
            expect(values.length).toBe(genderLength);
          });
          expect(isIncluded).toBe(true);
        });
        expect(body[0].isAnonymousData).toBe(false);
      });

      jest.spyOn(configMock, 'get').mockImplementationOnce(
        jest.fn((key: number | string): any => {
          if (key === 'application.anonymizeCharts') {
            return false;
          }
        }),
      );

      return api
        .get(`/case/survivor-gender?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });

    it('Should return correct data', async () => {
      let bodyWithoutFilters;

      jest.spyOn(configMock, 'get').mockImplementationOnce(
        jest.fn((key: number | string): any => {
          if (key === 'application.anonymizeCharts') {
            return false;
          }
        }),
      );

      await api
        .get('/case/survivor-gender')
        .expect(async ({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);

          Object.keys(ALLEGATION_TYPE_TEXT).forEach((allegation) => {
            const definedCount = cases.filter(
              ({ allegationType }) =>
                allegationType === ALLEGATION_TYPE_TEXT[allegation],
            ).length;
            const returnedCount = body
              .find(({ type }) => type === allegation)
              .values.reduce((sum, x) => sum + x);

            expect(definedCount).toBe(returnedCount);
          });
          expect(body[0].isAnonymousData).toBe(false);
        });

      api
        .get(`/case/survivor-gender?${queryParametersWithPeriod}`)
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });

      jest.spyOn(configMock, 'get').mockImplementation(
        jest.fn((key: number | string): any => {
          if (key === 'statistics.valuesForAnonymousChart') {
            return [6, 6, 4, 14];
          }
          if (key === 'application.anonymizeCharts') {
            return true;
          }
        }),
      );

      return api
        .get(`/case/survivor-gender?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(body).toEqual([
            { type: 'SEAH', values: [6, 6, 6, 6], isAnonymousData: true },
            { type: 'protection', values: [6, 6, 6, 6], isAnonymousData: true },
            {
              type: 'fraudOrCorruption',
              values: [4, 4, 4, 4],
              isAnonymousData: true,
            },
            {
              type: 'otherMisconduct',
              values: [14, 14, 14, 14],
              isAnonymousData: true,
            },
          ]);
        });
    });
  });

  describe(`/case/survivor-age (GET)`, () => {
    it('Should return data for each age & allegation types', async () => {
      const ageLength = Object.keys(AGE_TEXT).length;
      let bodyWithoutFilters;

      jest.spyOn(configMock, 'get').mockImplementationOnce(
        jest.fn((key: number | string): any => {
          if (key === 'application.anonymizeCharts') {
            return false;
          }
        }),
      );

      await api.get('/case/survivor-age').expect(async ({ body, status }) => {
        bodyWithoutFilters = body;
        expect(status).toBe(200);

        expect(Object.keys(ALLEGATION_TYPE_TEXT).length).toBe(body.length);
        Object.keys(ALLEGATION_TYPE_TEXT).forEach((definedAllegation) => {
          let isIncluded = false;
          body.forEach(({ type, values }) => {
            if (definedAllegation === type) {
              isIncluded = true;
            }
            expect(values.length).toBe(ageLength);
          });
          expect(isIncluded).toBe(true);
        });
        expect(body[0].isAnonymousData).toBe(false);
      });

      api
        .get(`/case/survivor-age?${queryParametersWithPeriod}`)
        .expect(async ({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });

      jest.spyOn(configMock, 'get').mockImplementation(
        jest.fn((key: number | string): any => {
          if (key === 'statistics.valuesForAnonymousChart') {
            return [6, 6, 4, 14];
          }
          if (key === 'application.anonymizeCharts') {
            return true;
          }
        }),
      );

      return api
        .get(`/case/survivor-age?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(body).toEqual([
            {
              type: 'SEAH',
              values: [6, 6, 6, 6, 6, 6, 6],
              isAnonymousData: true,
            },
            {
              type: 'protection',
              values: [6, 6, 6, 6, 6, 6, 6],
              isAnonymousData: true,
            },
            {
              type: 'fraudOrCorruption',
              values: [4, 4, 4, 4, 4, 4, 4],
              isAnonymousData: true,
            },
            {
              type: 'otherMisconduct',
              values: [14, 14, 14, 14, 14, 14, 14],
              isAnonymousData: true,
            },
          ]);
        });
    });

    it('Should return correct data', async () => {
      let bodyWithoutFilters;

      jest.spyOn(configMock, 'get').mockImplementationOnce(
        jest.fn((key: number | string): any => {
          if (key === 'application.anonymizeCharts') {
            return false;
          }
        }),
      );

      await api.get('/case/survivor-age').expect(({ body, status }) => {
        bodyWithoutFilters = body;
        expect(status).toBe(200);

        Object.keys(ALLEGATION_TYPE_TEXT).forEach((allegation) => {
          const definedCount = cases.filter(
            ({ allegationType }) =>
              allegationType === ALLEGATION_TYPE_TEXT[allegation],
          ).length;
          const returnedCount = body
            .find(({ type }) => type === allegation)
            .values.reduce((sum, x) => sum + x);

          expect(definedCount).toBe(returnedCount);
        });
        expect(body[0].isAnonymousData).toBe(false);
      });

      api
        .get(`/case/survivor-age?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });

      jest.spyOn(configMock, 'get').mockImplementation(
        jest.fn((key: number | string): any => {
          if (key === 'statistics.valuesForAnonymousChart') {
            return [6, 6, 4, 14];
          }
          if (key === 'application.anonymizeCharts') {
            return true;
          }
        }),
      );

      return api
        .get(`/case/survivor-age?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(body).toEqual([
            {
              type: 'SEAH',
              values: [6, 6, 6, 6, 6, 6, 6],
              isAnonymousData: true,
            },
            {
              type: 'protection',
              values: [6, 6, 6, 6, 6, 6, 6],
              isAnonymousData: true,
            },
            {
              type: 'fraudOrCorruption',
              values: [4, 4, 4, 4, 4, 4, 4],
              isAnonymousData: true,
            },
            {
              type: 'otherMisconduct',
              values: [14, 14, 14, 14, 14, 14, 14],
              isAnonymousData: true,
            },
          ]);
        });
    });
  });

  describe(`/case/organisation-type (GET)`, () => {
    it('Should return data for each organisation types & allegation types', async () => {
      let bodyWithoutFilters;
      const organisationLength = Object.keys(ORGANISATION_TYPE_TEXT).length;

      await api
        .get('/case/organisation-type')
        .expect(async ({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);

          expect(Object.keys(ALLEGATION_TYPE_TEXT).length).toBe(body.length);
          Object.keys(ALLEGATION_TYPE_TEXT).forEach((definedAllegation) => {
            let isIncluded = false;
            body.forEach(({ type, values }) => {
              if (definedAllegation === type) {
                isIncluded = true;
              }
              expect(values.length).toBe(organisationLength);
            });
            expect(isIncluded).toBe(true);
          });
        });

      return api
        .get(`/case/organisation-type?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });

    it('Should return correct data', async () => {
      let bodyWithoutFilters;
      const organisationTypes = Object.values(
        ORGANISATION_TYPE_TEXT,
      ) as string[];

      await api.get('/case/organisation-type').expect(({ body, status }) => {
        bodyWithoutFilters = body;
        expect(status).toBe(200);
        Object.keys(ALLEGATION_TYPE_TEXT).forEach((allegation) => {
          const definedCount =
            cases
              .filter(
                ({ allegationType }) =>
                  allegationType === ALLEGATION_TYPE_TEXT[allegation],
              )
              ?.map(
                (item) =>
                  item.allegationReferrals.filter(
                    (item: { organisations: { type: string }[] }) =>
                      organisationTypes.includes(item.organisations[0].type),
                  ).length,
              )
              .reduce((prev, curr) => prev + curr, 0) ?? 0;

          const returnedCount = body
            .find(({ type }) => type === allegation)
            .values.reduce((sum, x) => sum + x);

          expect(definedCount).toBe(returnedCount);
        });
      });

      return api
        .get(`/case/organisation-type?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe(`/case/did-people-received-assistance (GET)`, () => {
    it('Should return data for each options to receive assistance & allegation types', async () => {
      const assistanceOptionsLength = Object.keys(ASSISTANCE_RENDERED).length;
      let bodyWithoutFilters;

      await api
        .get('/case/did-people-received-assistance')
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);

          expect(Object.keys(ALLEGATION_TYPE_TEXT).length).toBe(body.length);
          Object.keys(ALLEGATION_TYPE_TEXT).forEach((definedAllegation) => {
            let isIncluded = false;
            body.forEach(({ type, values }) => {
              if (definedAllegation === type) {
                isIncluded = true;
              }
              expect(values.length).toBe(assistanceOptionsLength - 1);
            });
            expect(isIncluded).toBe(true);
          });
        });

      return api
        .get(
          `/case/did-people-received-assistance?${queryParametersWithPeriod}`,
        )
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });

    it('Should return correct data', async () => {
      let bodyWithoutFilters;
      const organisationTypes = Object.values(
        ORGANISATION_TYPE_TEXT,
      ) as string[];

      await api.get('/case/organisation-type?').expect(({ body, status }) => {
        bodyWithoutFilters = body;
        expect(status).toBe(200);
        Object.keys(ALLEGATION_TYPE_TEXT).forEach((allegation) => {
          const definedCount =
            cases
              .filter(
                ({ allegationType }) =>
                  allegationType === ALLEGATION_TYPE_TEXT[allegation],
              )
              ?.map(
                (item) =>
                  item.allegationReferrals.filter(
                    (item: { organisations: { type: string }[] }) =>
                      organisationTypes.includes(item.organisations[0].type),
                  ).length,
              )
              .reduce((prev, curr) => prev + curr, 0) ?? 0;
          const returnedCount = body
            .find(({ type }) => type === allegation)
            .values.reduce((sum, x) => sum + x);

          expect(definedCount).toBe(returnedCount);
        });
      });

      return api
        .get(`/case/organisation-type?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe(`/case/type-of-cases-accountability (GET)`, () => {
    it('Should return data for each options to receive accountability & allegation types', async () => {
      let bodyWithoutFilters;

      await api
        .get('/case/type-of-cases-accountability')
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);

          expect(Object.keys(ALLEGATION_TYPE_TEXT).length).toBe(body.length);
          expect(body).toEqual([
            { type: 'SEAH', values: [1, 0, 0, 0, 0] },
            { type: 'protection', values: [0, 0, 0, 0, 0] },
            { type: 'fraudOrCorruption', values: [0, 1, 0, 1, 0] },
            { type: 'otherMisconduct', values: [0, 0, 0, 0, 0] },
          ]);
        });

      return api
        .get(`/case/type-of-cases-accountability?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });

    it('Should return correct data', async () => {
      let bodyWithoutFilters;

      await api
        .get('/case/type-of-cases-accountability')
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);
          expect(body).toEqual([
            { type: 'SEAH', values: [1, 0, 0, 0, 0] },
            { type: 'protection', values: [0, 0, 0, 0, 0] },
            { type: 'fraudOrCorruption', values: [0, 1, 0, 1, 0] },
            { type: 'otherMisconduct', values: [0, 0, 0, 0, 0] },
          ]);
        });

      return api
        .get(`/case/type-of-cases-accountability?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe(`/case/average-taken-time (GET)`, () => {
    it('Should return data for each allegation type', async () => {
      let bodyWithoutFilters;

      await api.get('/case/average-taken-time').expect(({ body, status }) => {
        bodyWithoutFilters = body;
        expect(status).toBe(200);
        let isIncluded = false;
        expect(Object.keys(body).length).toBe(
          Object.keys(ALLEGATION_TYPE_TEXT).length,
        );

        Object.keys(ALLEGATION_TYPE_TEXT).forEach((allegation) => {
          isIncluded = false;
          body.forEach(({ type }) => {
            if (type === allegation) {
              isIncluded = true;
            }
          });
        });

        expect(isIncluded).toBe(true);
      });

      return api
        .get(`/case/average-taken-time?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });

    it('Should return correct body', async () => {
      let bodyWithoutFilters;

      await api.get('/case/average-taken-time').expect(({ body, status }) => {
        bodyWithoutFilters = body;
        expect(status).toBe(200);
        body.forEach(({ type, average, count }) => {
          expect(type).toBeDefined();
          expect(Object.keys(ALLEGATION_TYPE_TEXT).includes(type)).toBe(true);
          expect(average).toBeGreaterThanOrEqual(0);
          expect(count).toBeGreaterThanOrEqual(0);
        });
      });

      return api
        .get(`/case/average-taken-time?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe('/case/timeline-for-cases (GET)', () => {
    for (const period of [
      {
        start: format(new Date(), 'yyyy-MM-dd'),
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
            `/case/timeline-for-cases?from=${period.start}&to=${period.end}&${queryParameters}`,
          )
          .expect(({ status, body }) => {
            expect(body?.error?.code).toBe(VALIDATION_FAILED);
            expect(status).toBe(400);
          });
      });
    }

    xit('Should return correct body for filters', async () => {
      const monthDiff = 6;
      const currentMonth = format(new Date(), 'yyyy-MM');
      const currentMonthMinus1 = format(subMonths(new Date(), 1), 'yyyy-MM');
      const currentMonthMinus2 = format(subMonths(new Date(), 2), 'yyyy-MM');
      const currentMonthMinus3 = format(subMonths(new Date(), 3), 'yyyy-MM');
      const currentMonthMinus4 = format(subMonths(new Date(), 4), 'yyyy-MM');

      return api
        .get(
          `/case/timeline-for-cases?from=${format(
            subMonths(new Date(), monthDiff),
            'yyyy-MM-dd',
          )}&to=${format(new Date(), 'yyyy-MM-dd')}&${queryParameters}`,
        )
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(body.length).toBe(
            Object.values(ALLEGATION_TYPE_TEXT).length + 1,
          );

          let data = body.find((item) => item.code === 'SEAH');

          for (const item of data.values) {
            expect(item[1]).toBe([currentMonth].includes(item[0]) ? 2 : 0);
          }

          data = body.find((item) => item.code === 'protection');

          for (const item of data.values) {
            expect(item[1]).toBe(
              [
                ifMonthDifferenceGreaterThan1()
                  ? currentMonthMinus1
                  : currentMonthMinus4,
                currentMonthMinus2,
                currentMonthMinus3,
              ].includes(item[0])
                ? 1
                : 0,
            );
          }

          data = body.find((item) => item.code === 'fraudOrCorruption');

          for (const item of data.values) {
            expect(item[1]).toBe(
              [
                ifMonthDifferenceGreaterThan1()
                  ? currentMonthMinus1
                  : currentMonthMinus2,
                ifMonthDifferenceGreaterThan1()
                  ? currentMonthMinus3
                  : currentMonthMinus4,
              ].includes(item[0])
                ? 1
                : 0,
            );
          }

          data = body.find((item) => item.code === 'otherMisconduct');

          for (const item of data.values) {
            expect(item[1]).toBe(0);
          }

          data = body.find((item) => item.code === 'urgentCases');

          for (const item of data.values) {
            expect(item[1]).toBe(
              [
                ifMonthDifferenceGreaterThan1()
                  ? currentMonthMinus2
                  : currentMonthMinus3,
                ifMonthDifferenceGreaterThan1()
                  ? currentMonthMinus3
                  : currentMonthMinus4,
              ].includes(item[0])
                ? 1
                : 0,
            );
          }
        });
    });
  });

  describe(`/case/cases-count (GET)`, () => {
    let bodyWithoutFilters;
    it('Should return correct body', async () => {
      return api.get('/case/cases-count').expect(({ body, status }) => {
        bodyWithoutFilters = body;
        expect(status).toBe(200);
        expect(body.count).toBeDefined();
        expect(body.count).toBe(7);
      });
    });

    it('Should return correct body with age filter', async () => {
      return api
        .get(`/case/cases-count?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });

  describe(`/case/what-are-the-outcomes (GET)`, () => {
    let bodyWithoutFilters;
    it('Should return correct body', async () => {
      return api
        .get('/case/what-are-the-outcomes')
        .expect(({ body, status }) => {
          bodyWithoutFilters = body;
          expect(status).toBe(200);
          expect(body).toEqual({
            offenceSubstantiatedAndOffender: 2,
            offenderResignedFromOrganisation: 1,
            offenderFacedDisciplinary: 1,
            notEnoughInformation: 0,
            referralToClearCheckMade: 0,
            other: 1,
            completedInvestigations: 8,
            notSubstantiated: 1,
          });
        });
    });

    it('Should return correct body with age filter', async () => {
      return api
        .get(`/case/what-are-the-outcomes?${queryParametersWithPeriod}`)
        .expect(({ body, status }) => {
          expect(status).toBe(200);
          expect(JSON.stringify(body)).toBe(JSON.stringify(bodyWithoutFilters));
        });
    });
  });
});
