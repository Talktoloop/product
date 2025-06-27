import { CONFIG } from '@core/services/config/config.service';

export const getRollbarConfig = () => ({
  accessToken: CONFIG.rollbarConfig.accessToken,
  environment: CONFIG.rollbarConfig.environment,
  captureUncaught: true,
  captureUnhandledRejections: true,
});
