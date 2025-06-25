import { FactoryProvider } from '@nestjs/common';
import { DI_CONSTANTS } from '../constant/di.constant';
import geocoding from 'reverse-geocoding';

export const GeocodingProvider: FactoryProvider<any> = {
  provide: DI_CONSTANTS.GEOCODING,
  useFactory: () => geocoding,
};
