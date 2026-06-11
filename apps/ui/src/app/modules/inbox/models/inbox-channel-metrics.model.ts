import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';

export interface IInboxChannelMetrics {
  web: number;
  voice: number;
  whatsapp: number;
  telegram: number;
  messenger: number;
  sms: number;
  [futureChannel: string]: number;
}

export type InboxMetricChannel = Exclude<CHANNEL_CONSTANTS, CHANNEL_CONSTANTS.TEXT>;

export interface IInboxChannelMetricConfig {
  key: keyof IInboxChannelMetrics;
  channel: InboxMetricChannel;
  labelKey: string;
}
