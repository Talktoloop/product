import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { Logger, INestApplication } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { Transport } from '@nestjs/microservices';
import { ExceptionsFilter, _omit } from '@ourloop/shared';
import { configSchema } from './common/validation/config.validation';
import { ConfigService } from '@nestjs/config';
import dbConfig from './config/typeorm';
import { getConnection } from './common/helpers';
import { serve } from "inngest/express";
import { inngest } from "./inngest/client";
import { functions } from "./inngest";
import { json, urlencoded } from "express";

const setupSwagger = (app: INestApplication, backendUrl: string) => {
  const options = new DocumentBuilder()
    .setTitle('Loop')
    .addBasicAuth({ type: 'http', scheme: 'basic' }, 'basic-authorization')
    .addServer(backendUrl)
    .setDescription('Loop API description')
    .setVersion('0.1')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'bearer-authorization',
    )
    .build();

  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, options));
};

const isLocalOrDevelopment = (environment: string): boolean =>
  ['development', 'local'].includes(environment);

const bootstrap = async () => {
  await getConnection(dbConfig);

  await configSchema.validateAsync(process.env).catch((error) => {
    throw error;
  });

  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const port = +configService.get('application.port');

  app.enableShutdownHooks();
  app.setGlobalPrefix(configService.get('application.global_prefix'));
  app.use(helmet());
  app.use(cookieParser());
  app.enableCors({
    origin: isLocalOrDevelopment(configService.get('application.environment'))
      ? true
      : [
        configService.get('frontend.url'),
        configService.get('landingPage.url'),
      ],
    credentials: true,
  });
  app.useGlobalFilters(new ExceptionsFilter());

  const express = app.getHttpAdapter().getInstance();
  express.use(json({ limit: "10mb" }));
  express.use(urlencoded({ extended: true }));
  console.log('INNGEST_EVENT_KEY present:', !!process.env.INNGEST_EVENT_KEY);
  console.log('INNGEST_SIGNING_KEY present:', !!process.env.INNGEST_SIGNING_KEY);

  // 👇 mount Inngest AFTER body parsers
  if (process.env.INNGEST_EVENT_KEY && process.env.INNGEST_SIGNING_KEY)
    express.use(
      "/api/inngest",
      serve({
        client: inngest,
        functions,
      })
    );

  if (isLocalOrDevelopment(configService.get('application.environment'))) {
    setupSwagger(app, configService.get('backend.url'));
  }

  try {
    app.connectMicroservice({
      name: 'GATEWAY',
      transport: Transport.REDIS,
      options: _omit(configService.get('redis'), [
        'connectionName',
        'schema',
        'user'
      ]),
    })
  } catch (error) {
    Logger.error(error.message || null, error, 'Can\'t connect to redis');
  }

  await app.startAllMicroservices().catch((error) => {
    Logger.error(error.message || null, error, 'Bootstrap');
  });

  await app.listen(port);

  Logger.log(`Application running on port: ${port}`);
};

bootstrap().catch((error) => {
  Logger.error(error.message || null, error, 'Bootstrap');
});
