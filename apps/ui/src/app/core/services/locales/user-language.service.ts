import { Injectable, OnDestroy } from '@angular/core';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { LocalStorageKeys, LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { environment } from '@env/environment';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { RtlService } from './rtl.service';

@Injectable({
  providedIn: 'root',
})
export class UserLanguageService implements OnDestroy {
  languageChanged$ = new Subject<void>();
  private destroyed$ = new Subject<void>();
  private readonly DEFAULT_LANGUAGE = environment.translations.defaultLanguage;
  private browserLanguage: string = window.navigator.language?.split('-')[0];
  private selectedLanguage: string = this.localStorageService.get(LocalStorageKeys.LANGUAGE_PREFERENCE);

  constructor(
    private localStorageService: LocalStorageService,
    private rtlService: RtlService,
    private supportedLangService: SupportedLanguagesService,
  ) {
    let languageCode = this.getLanguage();
    this.supportedLangService.supportedLanguages$
      .pipe(
        take(1),
        takeUntil(this.destroyed$),
        tap((langs) => {
          if (!langs.some((l) => l.language === languageCode)) {
            languageCode = this.DEFAULT_LANGUAGE;
          }
        }),
      )
      .subscribe(() => {
        this.setLanguage(languageCode);
      });
  }

  getLanguage(): string {
    return this.selectedLanguage || this.browserLanguage || this.DEFAULT_LANGUAGE;
  }

  setLanguage(langCode: string): void {
    moment().locale(langCode);
    this.selectedLanguage = langCode;
    this.rtlService.setRtl(this.rtlService.isRtlLanguage(langCode));
    this.localStorageService.set(LocalStorageKeys.LANGUAGE_PREFERENCE, this.selectedLanguage);
    this.languageChanged$.next(null);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
