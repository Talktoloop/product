import { environment } from '@env/environment';
import { Environment } from '@shared/enums/environment.enum';

export const environmentUtil = {
  isLocal: environment.name === Environment.Local,
  isDevelopment: environment.name === Environment.Development,
  isStaging: environment.name === Environment.Staging,
  isProduction: environment.name === Environment.Production,
};
