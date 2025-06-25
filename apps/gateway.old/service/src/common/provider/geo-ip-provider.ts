import { FactoryProvider } from '@nestjs/common';
import { DI_CONSTANTS } from '../constant/di.constant';
import * as geoIp from 'geoip-lite';

export const GeoIPProvider: FactoryProvider<any> = {
  provide: DI_CONSTANTS.GEO_IP,
  useFactory: () => geoIp,
};
