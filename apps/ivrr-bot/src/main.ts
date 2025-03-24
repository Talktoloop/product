import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { Logger } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { configSchema } from './common/validation/config.validation';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig } from './config/default';
import { Transport } from '@nestjs/microservices';
import configuration from './config/default';
import {
  _omit,
  sendMessageToSupportTeam,
  ExceptionsFilter,
} from '@ourloop/shared';

const setupSwagger = (app) => {
  const options = new DocumentBuilder()
    .setTitle('Loop')
    .addBearerAuth()
    .addServer('http:///')
    .addServer('https:///')
    .setDescription('Loop API description')
    .setVersion('0.1')
    .build();

  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, options));
};

const bootstrap = async () => {
  await configSchema.validateAsync(process.env).catch((error) => {
    throw error;
  });

  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const applicationConfig = <ApplicationConfig>configService.get('application');
  const port = applicationConfig.port;

  app.setGlobalPrefix(applicationConfig.globalPrefix);
  app.use(helmet());
  app.enableCors();
  app.useGlobalFilters(new ExceptionsFilter());
  app.use(cookieParser());
  app.enableShutdownHooks();

  if (applicationConfig.environment === 'development') {
    setupSwagger(app);
  }

  app.use(bodyParser.json({}));

  app.connectMicroservice({
    transport: Transport.REDIS,
    name: 'IVRR_BOT',
    options: _omit(configService.get('redis'), [
      'connectionName',
      'schema',
      'user',
    ]),
  });

  await app.startAllMicroservices().catch((error) => {
    Logger.error(error.message || null, error, 'Bootstrap');
  });

  const server = await app.listen(port);

  if (applicationConfig.timeoutForTests) {
    server.setTimeout(applicationConfig.timeoutForTests);
  }
  Logger.log(`Application with new changes running on port: ${port}`);
};

bootstrap().catch(async (error) => {
  const config = await configuration();

  await sendMessageToSupportTeam(
    config.redis,
    `IVR SERVICE: ${JSON.stringify(error.message)}`,
    config.application.communicationTimeout,
  );

  Logger.error(error.message || null, error, 'Bootstrap');
});
