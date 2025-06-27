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
export class SMSService extends ApiService implements MessagingServiceInterface {
  constructor(private http: HttpClient) {
    super();
  }

  isConversationAvailable(storyId: string): Observable<IConversationAvailable> {
    return this.http.get<IConversationAvailable>(this.getRequestUrl(endpoints.isPhoneAvailable, { '{id}': storyId }));
  }

  sendMessage(payload: IMessage, _channel?: CHANNEL_CONSTANTS): Observable<IBaseApiResponse> {
    return this.http.post<IBaseApiResponse>(this.getRequestUrl(endpoints.sendSMSMessage), payload);
  }
}
