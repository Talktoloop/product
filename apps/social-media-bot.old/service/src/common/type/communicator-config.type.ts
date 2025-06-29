import { FacebookPageConfigInterface } from '../../common/interface/facebook-page-config';
import { WhatsappNumberConfig } from '../../common/interface/whatsapp-number-config';
import { TelegramNumberConfig } from '../../common/interface/telegram-number-config';

export type CommunicatorConfig =
  | FacebookPageConfigInterface
  | WhatsappNumberConfig
  | TelegramNumberConfig;
