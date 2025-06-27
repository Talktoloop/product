import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '@app/core/services/api/endpoints';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IMessage } from '@app/core/services/api/model/request/send-message.model';
import { IBaseApiResponse } from '@app/core/services/api/model/response/base-response.model';
import { IConversationAvailable } from '@app/core/services/api/model/response/is-phone-available.model';
import { ApiService } from '@core/services/api/api-base';
import { Observable } from 'rxjs';
import { MessagingServiceInterface } from '../messaging.interface';

@Injectable({
  providedIn: 'root',
})
export class CommunicatorService extends ApiService implements MessagingServiceInterface {
  constructor(private http: HttpClient) {
    super();
  }

  static getCommunicatorMessagePath(channel: CHANNEL_CONSTANTS) {
    let path = '';

    switch (channel) {
      case CHANNEL_CONSTANTS.MESSENGER:
        path = `messenger/facebook`;
        break;
      case CHANNEL_CONSTANTS.WHATSAPP:
        path = `messenger/whatsapp`;
        break;
      case CHANNEL_CONSTANTS.TELEGRAM:
        path = `messenger/telegram`;
        break;
    }

    return path;
  }

  isConversationAvailable(storyId: string, channel: CHANNEL_CONSTANTS): Observable<IConversationAvailable> {
    return this.http.get<IConversationAvailable>(
      this.getRequestUrl(endpoints.isConversationAvailable, {
        '{id}': storyId,
        '{path}': CommunicatorService.getCommunicatorMessagePath(channel),
      }),
    );
  }

  sendMessage(payload: IMessage, channel: CHANNEL_CONSTANTS): Observable<IBaseApiResponse> {
    return this.http.post<IBaseApiResponse>(
      this.getRequestUrl(endpoints.sendCommunicatorMessage, { '{path}': CommunicatorService.getCommunicatorMessagePath(channel) }),
      payload,
    );
  }
}
