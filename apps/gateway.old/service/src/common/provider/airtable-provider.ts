import { ConfigService } from '@nestjs/config';
import { FactoryProvider } from '@nestjs/common';
import AirTable from 'airtable-node';
import { DI_CONSTANTS } from '../constant/di.constant';

export const AirTableDashboardProvider: FactoryProvider<any> = {
  provide: DI_CONSTANTS.AIRTABLE,
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    return new AirTable({ apiKey: config.get('airTable.apiKey') }).base(
      config.get('airTable.base.dashboard'),
    );
  },
};

export const AirTableSensitiveCasesProvider: FactoryProvider<any> = {
  provide: DI_CONSTANTS.AIRTABLE,
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    return new AirTable({ apiKey: config.get('airTable.apiKey') }).base(
      config.get('airTable.base.sensitiveCases'),
    );
  },
};
