import { DI_CONSTANTS } from '../constant/di.constant';
import { ConfigService } from '@nestjs/config';
export declare const ConfigProvider: {
    provide: DI_CONSTANTS;
    useExisting: typeof ConfigService;
};
