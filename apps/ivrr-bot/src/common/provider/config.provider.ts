import { ConfigService } from '@nestjs/config';
import { DI_CONSTANT } from '../constant/di.constant';

export const ConfigProvider = {
  provide: DI_CONSTANT.CONFIG,
  useExisting: ConfigService,
};
