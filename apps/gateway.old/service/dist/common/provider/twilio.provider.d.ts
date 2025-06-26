import { ConfigService } from '@nestjs/config';
export declare const TwilioProvider: {
    provide: typeof import("twilio/lib/rest/Twilio");
    inject: (typeof ConfigService)[];
    useFactory: (config: ConfigService) => import("twilio/lib/rest/Twilio");
};
