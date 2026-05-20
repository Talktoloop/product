import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api/api-base';
import { endpoints } from '@app/core/services/api/endpoints';
import { ISupportedLanguage } from '@app/core/services/api/meta-data/model/supported-language.model';
import { environment } from '@env/environment';
import { Observable, of, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SupportedLanguagesService extends ApiService {
  supportedLanguages$ = new ReplaySubject<ISupportedLanguage[]>(1);
  private _supportedLanguages: ISupportedLanguage[];
  allLanguages$ = new ReplaySubject<ISupportedLanguage[]>(1);
  private _allLanguages: ISupportedLanguage[];

  set supportedLanguages(languages: ISupportedLanguage[]) {
    this._supportedLanguages = languages;
    this.supportedLanguages$.next(this._supportedLanguages);
  }

  get supportedLanguages(): ISupportedLanguage[] {
    return this._supportedLanguages;
  }

  set allLanguages(languages: ISupportedLanguage[]) {
    this._allLanguages = languages;
    this.allLanguages$.next(this._allLanguages);
  }

  get allLanguages(): ISupportedLanguage[] {
    return this._allLanguages;
  }

  constructor(private http: HttpClient) {
    super();
  }

  getSupportedLanguages(): Observable<ISupportedLanguage[]> {
    if (!!this._supportedLanguages) {
      return of(this._supportedLanguages);
    }

    return this.http.get<ISupportedLanguage[]>(this.getRequestUrl(endpoints.getSupportedLanguages)).pipe(
      tap((languages) => {
        this.supportedLanguages = languages;
      }),
    );
  }

  getAllLanguages(): Observable<ISupportedLanguage[]> {
    if (!!this._allLanguages) {
      return of(this._allLanguages);
    }

    return this.http.get<ISupportedLanguage[]>(this.getRequestUrl(endpoints.getAllLanguages)).pipe(
      tap((languages) => {
        this.allLanguages = languages;
      }),
    );
  }

  useOnlyDefaultLanguage(): void {
    this.allLanguages$.next([
      { id: environment.translations.defaultLanguageId,
        language: environment.translations.defaultLanguage,
        mtSupported: true },
    ]);
  }
}
