import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api/api-base';
import { endpoints } from '@core/services/api/endpoints';
import { ExecutionTwilioRequestModel } from '@core/services/api/model/request/execution-twilio-request.model';
import { IBaseApiResponse } from '@core/services/api/model/response/base-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IVRRService extends ApiService {
  constructor(private http: HttpClient) {
    super();
  }

  postExecutionModeratorFlowTwilio(twilioData: ExecutionTwilioRequestModel): Observable<IBaseApiResponse> {
    // send moderator audio reply
    return this.http.post<IBaseApiResponse>(this.getRequestUrl(endpoints.postExecutionModeratorFlowTwilio), twilioData);
  }

  postExecutionSurveyFlowTwilio(twilioData: ExecutionTwilioRequestModel): Observable<IBaseApiResponse> {
    // send moderator audio reply with ability to reply
    return this.http.post<IBaseApiResponse>(this.getRequestUrl(endpoints.postExecutionSurveyFlowTwilio), twilioData);
  }

  getSignedUrlForS3Audio(s3FileId: string): Observable<string> {
    return this.http.get<string>(this.getRequestUrl(endpoints.getSignedUrlForS3Audio, { '{id}': s3FileId }), {
      responseType: 'text' as 'json',
    });
  }
}
