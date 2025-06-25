import * as brevo from '@getbrevo/brevo';
import { ConfigService } from '@nestjs/config';

export const BrevoProvider = {
  provide: brevo.ContactsApi,
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const brevoClient = new brevo.ContactsApi();
    brevoClient.setApiKey(0, config.get('brevo.apiKey'));
    return brevoClient;
  },
};
