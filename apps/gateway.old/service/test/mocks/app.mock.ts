import 'dotenv/config';

const env = process.env;

import { Test, TestingModule } from '@nestjs/testing';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { AppModule } from '../../src/app.module';
import { ExceptionsFilter } from '@ourloop/shared';
import { ModeratorGuard } from '../../src/auth/moderator.guard';
import { authGuardMock } from './auth.guard.mock';
import { DI_CONSTANTS } from '../../src/common/constant/di.constant';
import { mailJetMock } from './mailJet.mock';
import { awsTranslationMock } from './aws-translation.mock';
import { googleTranslationMock } from './google-translation.mock';
import { lambdaMock } from './lambda.mock';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DI_CONSTANTS as SHARED_DI_CONSTANTS } from '@ourloop/shared';
import { clientProxyMock } from './client-proxy.mock';
import { googlePlacesMock } from './google-places.mock';
import { geoIPMock } from './geo-ip.mock';
import * as geocodingMock from './geocoding.mock';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { cacheManagerMock } from './cache.manager.mock';
import { airTableMock } from './airtable.mock';
import { configMock } from './config.mock';
import { s3Mock } from './s3.mock';
import * as twilio from 'twilio';
import { twilioMock } from './twilio.mock';

jest.mock('../../src/config/default', () => ({
  staticConfig: {
    contentLength: {
      min: 5,
      max: 30000,
    },
    pagination: {
      maxLimit: 50,
    },
    smsMessageLength: 160,
  },
  dynamicConfiguration: () => {
    return {
      application: {
        onlyGetRequest: false,
        environment: 'test',
        communicationTimeout: 5000,
        awsAccessKey: '',
        awsSecretKey: '',
        awsRegion: 'string',
        awsS3Bucket: '',
        anonymizeCharts: true,
      },
      airTable: {
        apiKey: '',
        base: {
          sensitiveCases: '',
          dashboard: '',
        },
      },
      cacheTtl: 900,
      frontend: {
        url: '',
      },
      backend: {
        url: '',
        basicToken: 'basic-token',
      },
      authorization: {
        clientId: '',
        userPoolId: '',
        jwks: '',
      },
      location: {
        googleApiKey: '',
      },
      translation: {
        aws: {
          lambdaARN: '',
        },
        google: {
          projectId: '',
          location: '',
          credentials: {},
        },
        minimumProbability: 80,
      },
      mailJet: {
        apiKey: '',
        apiSecret: '',
        email: '',
        username: '',
      },
      database: {
        charset: 'utf8mb4_unicode_ci',
        database: 'loop_test',
        host: env.DB_HOST,
        logging: false,
        password: env.DB_PASSWORD,
        port: env.DB_PORT,
        synchronize: false,
        type: 'mysql',
        bigNumberStrings: false,
        username: env.DB_USERNAME,
      },
      redis: {
        connectionName: 'REDIS',
        host: '',
        schema: 'redis',
        user: 'redis',
        port: '',
        password: '',
        db: 0,
        retryAttempts: 5,
        retryDelay: 3000,
      },
    };
  },
}));

export const getAppInstance: any = async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [
      AppModule,
      ClientsModule.register([{ name: 'client', transport: Transport.TCP }]),
    ],
  })

    .overrideProvider(CACHE_MANAGER)
    .useValue(cacheManagerMock)
    .overrideProvider(DI_CONSTANTS.CONFIG)
    .useValue(configMock)
    .overrideProvider(SHARED_DI_CONSTANTS.MAIL_JET)
    .useValue(mailJetMock)
    .overrideProvider(DI_CONSTANTS.AWS_TRANSLATION)
    .useValue(awsTranslationMock)
    .overrideProvider(DI_CONSTANTS.GOOGLE_TRANSLATION)
    .useValue(googleTranslationMock)
    .overrideProvider(DI_CONSTANTS.GOOGLE_PLACES)
    .useValue(googlePlacesMock)
    .overrideProvider(DI_CONSTANTS.GEO_IP)
    .useValue(geoIPMock)
    .overrideProvider(DI_CONSTANTS.GEOCODING)
    .useValue(geocodingMock.geocoding)
    .overrideProvider(SHARED_DI_CONSTANTS.CLIENT_PROXY)
    .useValue(clientProxyMock)
    .overrideProvider(SHARED_DI_CONSTANTS.S3)
    .useValue(s3Mock)
    .overrideProvider(DI_CONSTANTS.AIRTABLE)
    .useValue(airTableMock)
    .overrideProvider(DI_CONSTANTS.LAMBDA)
    .useValue(lambdaMock)
    .overrideProvider(twilio.Twilio)
    .useValue(twilioMock)
    .overrideGuard(AuthGuard('cognito'))
    .useValue(authGuardMock)
    .overrideGuard(AuthGuard(['cognito', 'anonymous']))
    .useValue(authGuardMock)
    .overrideGuard(ModeratorGuard)
    .useValue(new ModeratorGuard(new Reflector()))
    .compile();

  const app = moduleFixture.createNestApplication();
  app.connectMicroservice({ transport: Transport.TCP });
  app.useGlobalFilters(new ExceptionsFilter());

  await app.startAllMicroservices();
  await app.init();

  return app;
};
