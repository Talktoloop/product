import { Component, OnDestroy } from '@angular/core';
import { genericRetryStrategy } from '@app/core/services/api/generic-retry-strategy';
import { ISupportedLanguage } from '@app/core/services/api/meta-data/model/supported-language.model';
import { IBaseApiResponse } from '@app/core/services/api/model/response/base-response.model';
import {
  IPutStoryTranslation,
  IStoryTranslation,
  TRANSLATION_STATUS_CONSTANTS,
  TRANSLATION_TYPE,
} from '@app/core/services/api/model/story-translation';
import { AutocompleteOption } from '@app/shared/components/autocomplete/autocomplete-option.model';
import { SupportedLanguagesService } from '@core/services/locales/supported-languages.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { delay, repeat, retryWhen, take, takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { IPostTranslation } from './components/post-translation-controller/post-translation-controller.component';

@Component({ template: '' })
export abstract class InboxPostBaseComponent extends BaseComponent implements OnDestroy {
  translations: IStoryTranslation[];
  protected id: string;
  protected originalLanguage: string;
  originalLanguageError: string = null;
  targetLanguage: string;
  translationOptions: AutocompleteOption[];
  translatedText = '';
  protected supportedLanguages: ISupportedLanguage[];
  finalTranslationsData: IPostTranslation[];
  processing = false;
  allTranslated = false;
  atLeastOneTranslated = false;

  languageOptions: AutocompleteOption[];

  constructor(
    protected translateService: TranslateService,
    protected languageService: SupportedLanguagesService,
    protected toastr: ToastrService,
  ) {
    super();
  }

  protected setup(id: string, translations: IStoryTranslation[], originalLanguage: string): void {
    this.id = id;
    this.translations = translations;
    this.originalLanguage = originalLanguage;
  }

  protected initLanguages(): void {
    this.languageService.allLanguages$.pipe(take(1)).subscribe((languages) => {
      this.supportedLanguages = languages;
      this.languageOptions = this.getLanguageOptions();
      const translatedLanguages = [];
      this.translations.forEach(
        (translation) => translation.status !== TRANSLATION_STATUS_CONSTANTS.ERROR && translatedLanguages.push(translation.code),
      );
      this.translationOptions = this.supportedLanguages
        .map((language) => ({
          id: language.language,
          name: this.translateService.instant(`languages.${language.language}`),
        }))
        .filter((option) => translatedLanguages.indexOf(option.id) === -1 && option.id !== this.originalLanguage);
      this.translatedText = '';
      this.targetLanguage = null;
      this.allTranslated = !this.translationOptions.length;
      this.atLeastOneTranslated = this.translations.some((tr) => tr.status === TRANSLATION_STATUS_CONSTANTS.TRANSLATED);
    });
  }

  protected refreshTranslationsByFn(
    reqFunction: (id: string) => Observable<IStoryTranslation[]>,
    affectedLang = '',
    minimumRepeat = 4,
  ): void {
    this.processing = true;
    const iterations = { current: 0, min: minimumRepeat, max: 15 };
    const retryWhenSubject$ = new Subject();
    reqFunction(this.id)
      .pipe(delay(1000), repeat(), retryWhen(genericRetryStrategy()), takeUntil(retryWhenSubject$))
      .subscribe((r) => {
        this.translations = r;
        let mtSupportedLength = 0;
        this.supportedLanguages.forEach((a) => {
          if (a.mtSupported) {
            mtSupportedLength++;
          }
        });
        iterations.current++;
        const machineInProgress = r.find(
          (a) => a.status === TRANSLATION_STATUS_CONSTANTS.TRANSLATING && a.type === TRANSLATION_TYPE.MACHINE,
        );
        const iterationsCompleted = iterations.current > iterations.min;
        const maxReached = iterations.current >= iterations.max;
        const affectedLangPresent = !!r.find((a) => a.code === affectedLang);
        const shouldStop =
          maxReached || (iterationsCompleted && !machineInProgress && (!affectedLang || (affectedLang && affectedLangPresent)));
        if (shouldStop) {
          this.processing = false;
          this.translations = this.translations.map((t) => {
            if (t.status === TRANSLATION_STATUS_CONSTANTS.TRANSLATING && t.type === TRANSLATION_TYPE.MACHINE) {
              t.status = TRANSLATION_STATUS_CONSTANTS.ERROR;
              t.content = null;
            }
            return t;
          });
          retryWhenSubject$.next(null);
          retryWhenSubject$.complete();
        }
        this.initLanguages();
      });
  }

  getLanguageOptions(): AutocompleteOption[] {
    return this.supportedLanguages?.map((language) => ({
      id: language.language,
      name: this.translateService.instant(`languages.${language.language}`),
    }));
  }

  updatedLanguages(data: IPostTranslation[]): void {
    this.finalTranslationsData = data.filter((i) => i.content && i.status);
  }

  submitTranslationByFn(
    reqFunction: (id: string, payload: IPutStoryTranslation) => Observable<IBaseApiResponse>,
  ): Observable<IBaseApiResponse> {
    this.processing = true;
    return reqFunction(this.id, { language: this.targetLanguage, content: this.translatedText });
  }

  verifyTranslationByFn(
    reqFunction: (id: string, payload: IPutStoryTranslation) => Observable<IBaseApiResponse>,
    payload: IPutStoryTranslation,
  ): Observable<IBaseApiResponse> {
    this.processing = true;
    return reqFunction(this.id, payload);
  }

  deleteTranslationByFn(
    reqFunction: (id: string, language: string) => Observable<IBaseApiResponse>,
    language: string,
  ): Observable<IBaseApiResponse> {
    this.processing = true;
    return reqFunction(this.id, language);
  }

  retryTranslationByFn(
    reqFunction: (id: string, language: string) => Observable<IBaseApiResponse>,
    language: string,
  ): Observable<IBaseApiResponse> {
    this.processing = true;
    return reqFunction(this.id, language);
  }

  protected showErrorNotification(message?: string): void {
    this.toastr.error(
      this.translateService.instant(`error.generic.title`),
      message || this.translateService.instant('error.generic.subtitle'),
    );
  }
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
