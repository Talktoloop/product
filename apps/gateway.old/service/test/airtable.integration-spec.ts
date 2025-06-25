import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { _omit } from '@ourloop/shared';
import { findCaseById } from './entity/airtable.mock';
import { faker } from '@faker-js/faker';
import { clearDatabase } from './helpers';
import * as airTableMock from './mocks/airtable.mock';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('AirTableController (integration)', () => {
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;

  const body = {
    caseUUID: 'string',
    storyCreated: '2021-05-05 09:43:54.000000',
    urgency: 'Needs immediate assistance',
    caseStatus: 'Open',
    caseCreated: '2021-05-05 09:43:54.000000',
    authorPerspective: ['Organisation personnel'],
    allegationType: 'Protection',
    allegationOrganization: ['OXFAM'],
    incidentDate: '2021-05-05 09:43:54.000000',
    incidentCountry: 'Zambia',
    incidentProvince: 'Mazabuka',
    survivorGender: 'Male',
    survivorAge: '6-13',
    survivorDisability: ['Hearing'],
    authorNeedAssistance: 'No, not applicable',
    assistanceStatus: 'Assistance already provided',
    caseProcessed: '2021-05-05 09:43:54.000000',
    referralResponse: 'Pending response to allegation referral',
    assessmentMade: '2021-05-05 09:43:54.000000',
    investigationStatus: 'Investigation closed',
    informingAuthor: 'Author informed n/a, or reachable',
    caseClosed: '2021-05-05 09:43:54.000000',
    caseUnaccountedClosedStatus: 'vestigation N/A, allegation ou',
    assistanceReferralMade: '2021-05-05 09:43:54.000000',
    assistanceWhoMadeReferral: 'ADRA',
    investigations: [
      {
        investigationOpened: '2021-05-05 09:43:54.000000',
        whichOrganisationDoingInvestigation: 'ADRA',
        investigationClosed: '2021-05-05 09:43:54.000000',
        investigationOutcome: 'Offender faced disciplinary action',
        referralToClearCheckMade: false,
      },
      {
        investigationOpened: null,
        whichOrganisationDoingInvestigation: null,
        investigationClosed: null,
        investigationOutcome: null,
        referralToClearCheckMade: null,
      },
      {
        investigationOpened: '2021-05-05 09:43:54.000000',
        whichOrganisationDoingInvestigation: 'TEST',
        investigationClosed: '2021-05-05 09:43:54.000000',
        investigationOutcome: 'Offender faced disciplinary action',
        referralToClearCheckMade: false,
      },
    ],
    organisationType: 'National / community-based organisation',
    processAndReferLastUpdateTime: '2021-05-05 09:43:54.000000',
    responseToReferralLastUpdateTime: '2021-05-05 09:43:54.000000',
    enoughInformationToInvestigateLastUpdate: '2021-05-05 09:43:54.000000',
    investigationStatusLastUpdate: '2021-05-05 09:43:54.000000',
    authorInformedOfCaseOutcomesLastUpdate: '2021-05-05 09:43:54.000000',
    decisionToInvestigateStatusLastUpdate: '2021-05-05 09:43:54.000000',
    thematicArea: ['1. Emergency response'],
    thematicAreaSubsection: ['1.a ID cards'],
    processAndReferStatus: 'Referral to organisation made',
    investigationResult: 'Investigation closed',
    referredToAssistance: 'Yes',
    allegationReferrals: [
      {
        allegationReferralDate: '2021-04-01 00:00:00.000000',
        responseToAllegationReferralDate: '2021-04-03 00:00:00.000000',
        organisations: [
          {
            name: 'IFRC Geneva fraud unit',
            type: '3. International organisation',
          },
          {
            name: 'EC',
            type: '3. International organisation',
          },
        ],
      },
    ],
  };

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

  describe('/airtable-client (POST)', () => {
    it('Should return status 403', async () => {
      return api
        .post('/airtable-client')
        .send(body)
        .then(({ status }) => {
          expect(status).toBe(403);
        });
    });

    it('Should return status 201', async () => {
      await api
        .post('/airtable-client')
        .set('Authorization', 'Basic basic-token')
        .send(body)
        .expect(201);

      const data = await findCaseById(body.caseUUID);

      expect(data.initialUrgency).toBe('Needs immediate assistance');

      await api
        .post('/airtable-client')
        .set('Authorization', 'Basic basic-token')
        .send({
          ...body,
          urgency: 'Does not need immediate assistance',
        })
        .expect(201);

      expect(data.initialUrgency).toBe('Needs immediate assistance');

      return api
        .post('/airtable-client')
        .set('Authorization', 'Basic basic-token')
        .send({
          ..._omit(body, [
            'processAndReferLastUpdateTime',
            'responseToReferralLastUpdateTime',
            'enoughInformationToInvestigateLastUpdate',
            'investigationStatusLastUpdate',
            'authorInformedOfCaseOutcomesLastUpdate',
            'decisionToInvestigateStatusLastUpdate',
            'thematicArea',
            'thematicAreaSubsection',
            'processAndReferStatus',
            'investigationResult',
          ]),
          caseUUID: faker.lorem.word(),
        })
        .then(({ status }) => {
          expect(status).toBe(201);
        });
    });

    ['caseUUID', 'storyCreated', 'caseStatus', 'caseCreated'].forEach(
      (field) => {
        it(`Should return error - ${field} not defined`, async () => {
          return api
            .post('/airtable-client')
            .set('Authorization', 'Basic basic-token')
            .send(_omit(body, [field]))
            .expect(400);
        });
      },
    ),
      it('Should return status 201 for partial body', async () => {
        return api
          .post('/airtable-client')
          .set('authorization', 'Basic basic-token')
          .send(
            _omit(body, [
              'organisationAllegation',
              'allegationReferral',
              'survivorGender',
              'organisationType',
              'responseToAllegationReferral',
              'incidentDate',
            ]),
          )
          .expect(201);
      });
  });

  describe('/airtable-client (DELETE)', () => {
    it('Should delete row and return status 200', async () => {
      const secondCaseUUID = faker.lorem.word();

      await api
        .post('/airtable-client')
        .set('authorization', 'Basic basic-token')
        .send({
          ..._omit(body, [
            'organisationAllegation',
            'allegationReferral',
            'survivorGender',
            'organisationType',
            'responseToAllegationReferral',
            'incidentDate',
          ]),
          caseUUID: secondCaseUUID,
        });

      let row = await findCaseById(secondCaseUUID);

      expect(row.caseUUID).toBeDefined();

      jest.spyOn(airTableMock, 'retrieve').mockImplementationOnce(
        jest.fn(async () => ({
          error: 'NOT_FOUND',
        })),
      );

      await api
        .delete('/airtable-client')
        .set('Authorization', 'Basic basic-token')
        .send({
          ids: [row.caseUUID],
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      row = await findCaseById(secondCaseUUID);

      expect(row).toBeDefined();

      jest.spyOn(airTableMock, 'retrieve').mockImplementationOnce(
        jest.fn(async () => ({
          error: 'NOT_FOUND',
        })),
      );

      await api
        .delete('/airtable-client')
        .set('Authorization', 'Basic basic-token')
        .send({
          ids: [faker.string.uuid()],
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      row = await findCaseById(secondCaseUUID);

      expect(row).toBeNull();
    });
  });
});
