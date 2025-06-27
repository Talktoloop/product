import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from '@app/core/services/api/api-base';
import { endpoints } from '@app/core/services/api/endpoints';
import { genericRetryStrategy } from '@app/core/services/api/generic-retry-strategy';
import { IBaseEntityDN } from '@app/core/services/api/model/response/base-entity.model';
import { IGetPendingQuantity } from '@app/core/services/api/model/response/get-pending-quantity.model';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { IGetPendingStoriesFiltersAPI } from '@app/modules/inbox/inbox-filters.service';
import { TranslateService } from '@ngx-translate/core';
import { addFilterParamsToHttpParams } from '@shared/utils/filters.utils';
import { BehaviorSubject, ReplaySubject, Subscription } from 'rxjs';
import { retryWhen, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminDataService extends ApiService implements OnDestroy {
  readonly defaultValue: IAdminData = {
    pending: { numberOfStories: -1, numberOfComments: -1 },
    rejected: { numberOfStories: -1, numberOfComments: -1 },
  };
  private selfies: Subscription[] = [];
  private data: IAdminData = { ...this.defaultValue };
  private sortingOrderV: IAdminSorting;
  private listLanguageV: string;
  private languageNames: { [languageName: string]: string } = {};
  pending$ = new BehaviorSubject<IGetPendingQuantity>(this.defaultValue.pending);
  rejected$ = new BehaviorSubject<IGetPendingQuantity>(this.defaultValue.rejected);

  rejectReasons: IBaseEntityDN[] = null;

  sortingOrder$ = new ReplaySubject<IAdminSorting>(1);
  listLanguage$ = new ReplaySubject<string>(1);
  quantityData$ = new BehaviorSubject<IGetPendingQuantity>(null);
  outgoingQuantityData$ = new BehaviorSubject<{ numberOfScheduledComments: number, numberOfPendingRecordingComments: number }>(null)
  get pending(): IGetPendingQuantity {
    return this.data.pending;
  }

  set pending(pendingData: IGetPendingQuantity) {
    if (
      this.data.pending.numberOfComments !== pendingData.numberOfComments ||
      this.data.pending.numberOfStories !== pendingData.numberOfStories
    ) {
      this.data.pending = { ...this.data.pending, ...pendingData };
      this.pending$.next(this.data.pending);
    }
  }

  set sortingOrder(data: IAdminSorting) {
    this.sortingOrderV = data;
    this.sortingOrder$.next(this.sortingOrderV);
  }

  set listLanguage(data: string) {
    this.listLanguageV = data;
    this.listLanguage$.next(this.listLanguageV);
  }

  set rejected(pendingData: IGetPendingQuantity) {
    if (
      this.data.rejected.numberOfComments !== pendingData.numberOfComments ||
      this.data.rejected.numberOfStories !== pendingData.numberOfStories
    ) {
      this.data.rejected = { ...this.data.rejected, ...pendingData };
      this.rejected$.next(this.data.rejected);
    }
  }

  constructor(private http: HttpClient, private languageService: SupportedLanguagesService, private translateService: TranslateService) {
    super();
    this.listLanguage = Object.keys(this.getAvailableListLanguages())[0];
    this.sortingOrder = IAdminSorting.ASC;
    this.selfies.push(this.pending$.subscribe());
    this.selfies.push(this.rejected$.subscribe());
    this.selfies.push(
      this.languageService.supportedLanguages$.subscribe((languages) => {
        this.languageNames = {};
        const languagesTranslations = this.translateService.instant('languages');
        const supportedLanguages = [];
        languages.forEach((lang) => {
          supportedLanguages.push(lang.language);
        });
        Object.keys(languagesTranslations).forEach((langKey) => {
          if (supportedLanguages.indexOf(langKey) !== -1) {
            this.languageNames[langKey] = languagesTranslations[langKey];
          }
        });
      }),
    );
    this.resetPending();
    this.resetRejected();
  }

  getAvailableListLanguages(): { all: string;[key: string]: string } {
    return { all: 'All', ...this.languageNames };
  }

  resetPending(): void {
    this.pending = { ...this.defaultValue.pending };
    this.pending$.next(this.data.pending);
  }

  resetRejected(): void {
    this.rejected = { ...this.defaultValue.rejected };
    this.rejected$.next(this.data.rejected);
  }

  downloadPendingQuantity(filters: IGetPendingStoriesFiltersAPI): void {
    this.http
      .get<IGetPendingQuantity>(this.getRequestUrl(endpoints.getPendingQuantityDashboard), {
        params: addFilterParamsToHttpParams(new HttpParams(), filters),
      })
      .pipe(
        retryWhen(genericRetryStrategy()),
        tap((quantity) => {
          this.pending = quantity;
          this.quantityData$.next(quantity);
        }),
      )
      .subscribe();
  }

  downloadOutgoingQuantity(): void {
    this.http
      .get<{ numberOfScheduledComments: number, numberOfPendingRecordingComments: number }>(this.getRequestUrl(endpoints.getQuantitesOutgoingDashboard))
      .pipe(
        retryWhen(genericRetryStrategy()),
        tap((quantity) => {
          this.outgoingQuantityData$.next(quantity);
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.selfies.forEach((s) => s.unsubscribe());
  }
}

export interface IAdminData {
  pending: IGetPendingQuantity;
  rejected: IGetPendingQuantity;
}

export enum IAdminSorting {
  ASC = 'asc',
  DESC = 'desc',
}
