import { Component, OnDestroy, OnInit } from '@angular/core';
import { genericRetryStrategy } from '@app/core/services/api/generic-retry-strategy';
import { IVRRService } from '@app/core/services/api/ivrr/ivrr';
import { ISupportedLanguage } from '@app/core/services/api/meta-data/model/supported-language.model';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IBaseApiResponse } from '@app/core/services/api/model/response/base-response.model';
import {
  IPutStoryTranslation,
  IStoryTranslation,
  TRANSLATION_STATUS_CONSTANTS,
  TRANSLATION_TYPE,
} from '@app/core/services/api/model/story-translation';
import { ICallIVRR } from '@app/core/services/api/model/story.model';
import { StoryService } from '@app/core/services/api/story/story.service';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { IPostTranslation } from '@app/modules/inbox/shared/components/post-translation-controller/post-translation-controller.component';
import { AutocompleteOption } from '@app/shared/components/autocomplete/autocomplete-option.model';
import { BaseComponent } from '@app/shared/components/base.component';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { delay, repeat, retryWhen, take, takeUntil } from 'rxjs/operators';
import { StoryDetailsService } from '../../story-details.service';

@Component({
  selector: 'app-story-translate-global',
  template: '.',
})
export class StoryTranslateGlobalComponent extends BaseComponent implements OnInit, OnDestroy {
  allTranslated = false;
  atLeastOneTranslated = false;
  audioSrc$: Observable<string>;
  CHANNEL_CONSTANTS = CHANNEL_CONSTANTS;
  finalTranslationsData: IPostTranslation[];
  languageOptions: AutocompleteOption[];
  originalLanguage: string;
  originalLanguageError: string = null;
  processing = false;
  targetLanguage: string;
  translatedText = '';
  translationOptions: AutocompleteOption[];
  translations: IStoryTranslation[];

  //translation keys
  reviewTabs: string[] = ['story.details.review.tabs.storyPreview'];

  protected supportedLanguages: ISupportedLanguage[];

  constructor(
    private ivrrService: IVRRService,
    private languageService: SupportedLanguagesService,
    private storyService: StoryService,
    private translateService: TranslateService,
    protected toastr: ToastrService,
    public storyDetailsService: StoryDetailsService,
  ) {
    super();
  }

  get isWeb(): boolean {
    return this.storyDetailsService.story?.channel === CHANNEL_CONSTANTS.WEB;
  }

  get isIVRR(): boolean {
    return this.storyDetailsService.story?.channel === CHANNEL_CONSTANTS.IVRR;
  }

  ngOnInit(): void {
    this.setup();
    this.initLanguages();

    if (this.isIVRR) {
      this.setAudioToTranscribe();
    }

    let reviewConversationTab = 'story.details.review.tabs.smsConversation';

    if (this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.MESSENGER) {
      reviewConversationTab = 'story.details.review.tabs.messengerConversation';
    } else if (this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.WHATSAPP) {
      reviewConversationTab = 'story.details.review.tabs.whatsAppConversation';
    } else if (this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.TELEGRAM) {
      reviewConversationTab = 'story.details.review.tabs.telegramConversation';
    }

    this.reviewTabs.unshift(reviewConversationTab);
  }

  setAudioToTranscribe(): void {
    const s3FileId = this.storyDetailsService.story.calls.find((call: ICallIVRR) => call.isStory).s3FileId;
    this.audioSrc$ = this.ivrrService.getSignedUrlForS3Audio(s3FileId);
  }

  updatedLanguages(data: IPostTranslation[]): void {
    this.finalTranslationsData = data.filter((i) => i.content && i.status);
  }

  refreshTranslations(affectedLang = '', minimumRepeat?: number): void {
    this.refreshTranslationsByFn(this.storyService.getStoryTranslationStatuses.bind(this.storyService), affectedLang, minimumRepeat);
  }

  submitTranslation(): void {
    this.submitTranslationByFn(this.storyService.addStoryTranslationModerator.bind(this.storyService))
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        () => {
          this.refreshTranslations(this.targetLanguage, 0);
        },
        (err) => {
          this.refreshTranslations(null, 0);
          this.showErrorNotification(err?.error.message?.error);
        },
      );
  }

  verifyTranslation(payload: IPutStoryTranslation): void {
    this.verifyTranslationByFn(this.storyService.verifyStoryTranslationModerator.bind(this.storyService), payload)
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        () => {
          this.refreshTranslations(payload.language, 1);
        },
        (err) => {
          this.refreshTranslations(null, 0);
          this.showErrorNotification(err?.error.message?.error);
        },
      );
  }

  deleteTranslation(language: string): void {
    this.deleteTranslationByFn(this.storyService.deleteStoryTranslationModerator.bind(this.storyService), language)
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        () => {
          this.refreshTranslations(null, 1);
        },
        (err) => {
          this.refreshTranslations(null, 0);
          this.showErrorNotification(err?.error.message?.error);
        },
      );
  }

  retryTranslation(language: string): void {
    if (this.processing) {
      return;
    }

    this.retryTranslationByFn(this.storyService.retryStoryTranslationModerator.bind(this.storyService), language)
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        () => {
          this.refreshTranslations(language, 4);
        },
        (err) => {
          this.refreshTranslations(null, 0);
          this.showErrorNotification(err?.error.message?.error);
        },
      );
  }

  private submitTranslationByFn(
    reqFunction: (id: string, payload: IPutStoryTranslation) => Observable<IBaseApiResponse>,
  ): Observable<IBaseApiResponse> {
    this.processing = true;
    return reqFunction(this.storyDetailsService.story.id, { language: this.targetLanguage, content: this.translatedText });
  }

  private verifyTranslationByFn(
    reqFunction: (id: string, payload: IPutStoryTranslation) => Observable<IBaseApiResponse>,
    payload: IPutStoryTranslation,
  ): Observable<IBaseApiResponse> {
    this.processing = true;
    return reqFunction(this.storyDetailsService.story.id, payload);
  }

  private deleteTranslationByFn(
    reqFunction: (id: string, language: string) => Observable<IBaseApiResponse>,
    language: string,
  ): Observable<IBaseApiResponse> {
    this.processing = true;
    return reqFunction(this.storyDetailsService.story.id, language);
  }

  private retryTranslationByFn(
    reqFunction: (id: string, language: string) => Observable<IBaseApiResponse>,
    language: string,
  ): Observable<IBaseApiResponse> {
    this.processing = true;
    return reqFunction(this.storyDetailsService.story.id, language);
  }

  protected getLanguageOptions(): AutocompleteOption[] {
    return this.supportedLanguages?.map((language) => ({
      id: language.language,
      name: this.translateService.instant(`languages.${language.language}`),
    }));
  }

  protected initLanguages(): void {
    this.languageService.supportedLanguages$.pipe(take(1)).subscribe((languages) => {
      this.supportedLanguages = languages; // todo fix
      // this.supportedLanguages = this.getFilteredLanguages(languages); // todo fix
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
    reqFunction(this.storyDetailsService.story.id)
      .pipe(delay(1000), repeat(), retryWhen(genericRetryStrategy()), takeUntil(retryWhenSubject$))
      .subscribe((r: IStoryTranslation[]) => {
        const translations = this.getFilteredTranslations(r); // todo fix
        this.translations = translations;
        let mtSupportedLength = 0;
        this.supportedLanguages.forEach((a: ISupportedLanguage) => {
          if (a.mtSupported) {
            mtSupportedLength++;
          }
        });
        iterations.current++;
        const machineInProgress = translations.find(
          (a: IStoryTranslation) => a.status === TRANSLATION_STATUS_CONSTANTS.TRANSLATING && a.type === TRANSLATION_TYPE.MACHINE,
        );
        const iterationsCompleted = iterations.current > iterations.min;
        const maxReached = iterations.current >= iterations.max;
        const affectedLangPresent = !!translations.find((a) => a.code === affectedLang);
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

  protected showErrorNotification(message?: string): void {
    this.toastr.error(
      this.translateService.instant(`error.generic.title`),
      message || this.translateService.instant('error.generic.subtitle'),
    );
  }

  private setup(): void {
    this.translations = this.getFilteredTranslations(this.storyDetailsService?.story?.translations); // todo fix
    if (
      this.translations.find((translation: IStoryTranslation) => translation.status === 1 && translation.type === TRANSLATION_TYPE.MACHINE)
    ) {
      this.refreshTranslations();
    }
    this.originalLanguage = this.storyDetailsService?.story?.language;
  }

  getFilteredTranslations(translations: IStoryTranslation[]) {
    // todo delete
    return translations.filter((translation: IStoryTranslation) => {
      if (this.originalLanguage === 'maa' && translation.type === TRANSLATION_TYPE.MACHINE) {
        return translation.code === 'en' || translation.code === 'so';
      }

      if (this.originalLanguage === 'so' && translation.type === TRANSLATION_TYPE.MACHINE) {
        return translation.code === 'en' || translation.code === 'maa';
      }

      return true;
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
