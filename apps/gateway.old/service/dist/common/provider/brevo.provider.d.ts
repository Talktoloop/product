import * as brevo from '@getbrevo/brevo';
import { ConfigService } from '@nestjs/config';
export declare const BrevoProvider: {
    provide: typeof brevo.ContactsApi;
    inject: (typeof ConfigService)[];
    useFactory: (config: ConfigService) => brevo.ContactsApi;
};
