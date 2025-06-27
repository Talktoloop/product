import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api/api-base';
import { endpoints } from '@core/services/api/endpoints';
import { CaseManagerMessage } from '@core/services/api/model/response/get-case-manager-message.model';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CaseManagerService extends ApiService {
  private replaySubject$: ReplaySubject<CaseManagerMessage>;

  constructor(private http: HttpClient) {
    super();
  }

  getRandomMessage(): Observable<CaseManagerMessage> {
    if (this.replaySubject$) {
      return this.replaySubject$.asObservable();
    }
    return this.http.get<CaseManagerMessage>(this.getRequestUrl(endpoints.getCaseManagerMessage)).pipe(
      tap((message) => {
        this.replaySubject$ = new ReplaySubject(1);
        this.replaySubject$.next(message);
      }),
    );
  }
}
