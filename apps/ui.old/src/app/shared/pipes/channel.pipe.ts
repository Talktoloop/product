import { Pipe, PipeTransform } from '@angular/core';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';

@Pipe({
  name: 'channel',
})
export class ChannelPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case CHANNEL_CONSTANTS.WEB:
        return 'Web';
      case CHANNEL_CONSTANTS.SMS:
        return 'SMS';
      case CHANNEL_CONSTANTS.MESSENGER:
        return 'Facebook Messenger';
      case CHANNEL_CONSTANTS.WHATSAPP:
        return 'WhatsApp';
      case CHANNEL_CONSTANTS.TELEGRAM:
        return 'Telegram';
      case CHANNEL_CONSTANTS.IVRR:
        return 'Voice';
      default:
        return value;
    }
  }
}
