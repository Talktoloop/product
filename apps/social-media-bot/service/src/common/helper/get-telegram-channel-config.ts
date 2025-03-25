import { TelegramNumberConfig } from '../interface/telegram-number-config';
import configuration from '../../config/default';

export const getTelegramChannelConfig = async (params: {
  token?: string;
  channel?: string;
}): Promise<TelegramNumberConfig> => {
  const config = await configuration();

  return config.application.telegram.channels.find(
    (config) =>
      config.token === params.token || config.pageId === params.channel,
  );
};
