import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IMessage } from '@app/core/services/api/model/request/send-message.model';
import { IBaseApiResponse } from '@app/core/services/api/model/response/base-response.model';
import { IConversationAvailable } from '@app/core/services/api/model/response/is-phone-available.model';
import { Observable } from 'rxjs';

export interface MessagingServiceInterface {
  isConversationAvailable(storyId: string, channel: CHANNEL_CONSTANTS): Observable<IConversationAvailable>;
  sendMessage(payload: IMessage, channel?: CHANNEL_CONSTANTS): Observable<IBaseApiResponse>;
}
