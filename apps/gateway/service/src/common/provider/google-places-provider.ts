import { FactoryProvider } from '@nestjs/common';
import { DI_CONSTANTS } from '../constant/di.constant';
import Places from 'google-places-web';
import { ConfigService } from '@nestjs/config';

export const GooglePlacesProvider: FactoryProvider<any> = {
  provide: DI_CONSTANTS.GOOGLE_PLACES,
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    Places.apiKey = config.get('location.googleApiKey');

    return Places;
  },
};
