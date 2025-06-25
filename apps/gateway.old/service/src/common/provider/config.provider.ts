import { DI_CONSTANTS } from '../constant/di.constant';
import { ConfigService } from '@nestjs/config';

export const ConfigProvider = {
  provide: DI_CONSTANTS.CONFIG,
  useExisting: ConfigService,
};
