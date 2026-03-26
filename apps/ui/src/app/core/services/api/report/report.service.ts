import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api/api-base';
import { endpoints } from '@core/services/api/endpoints';
import { IBaseApiResponse } from '@core/services/api/model/response/base-response.model';
import { Observable } from 'rxjs';

export interface ISubmitReportPayload {
  reportType: 'feedback' | 'reply';
  postId: string;
  guidelineBreaches: string[];
  replySpecification?: string;
  additionalInfo?: string;
  contactEmail?: string;
}

@Injectable({ providedIn: 'root' })
export class ReportService extends ApiService {
  constructor(private http: HttpClient) {
    super();
  }

  submitReport(payload: ISubmitReportPayload): Observable<IBaseApiResponse> {
    return this.http.post<IBaseApiResponse>(
      this.getRequestUrl(endpoints.submitReport),
      payload,
    );
  }
}
