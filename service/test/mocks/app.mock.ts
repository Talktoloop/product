import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

export const getAppInstance: any = async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [
      AppModule,
      ClientsModule.register([{ name: 'client', transport: Transport.TCP }]),
    ],
  }).compile();

  const app = moduleFixture.createNestApplication();
  app.connectMicroservice({ transport: Transport.TCP });

  await app.startAllMicroservices();
  await app.init();

  return app;
};
