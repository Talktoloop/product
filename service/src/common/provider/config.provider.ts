import { ConfigService } from '@nestjs/config';
import { DICTIONARY } from '../enum/dictionary.enum';

export const ConfigProvider = {
  provide: DICTIONARY.CONFIG,
  useExisting: ConfigService,
};
