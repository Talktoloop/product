import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TRANSLATION_STATUS_CONSTANTS, TRANSLATION_TYPE } from '@app/core/services/api/model/story-translation';
import { RtlService } from '@app/core/services/locales/rtl.service';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { IStoryTranslation } from '@core/services/api/model/story-translation';
import { TranslateService } from '@ngx-translate/core';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-post-translation-controller',
  templateUrl: './post-translation-controller.component.html',
  styleUrls: ['./post-translation-controller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostTranslationControllerComponent implements OnChanges {
  STATUSES = TRANSLATION_STATUS_CONSTANTS;
  TYPES = TRANSLATION_TYPE;
  @Input() initialTranslations: IStoryTranslation[];
  @Input() originalLanguage: string;
  @Input() selectedLanguage: string;
  @Input() selectedLanguageContent: string;
  @Input() processing;
  @ViewChild('accordionTrigger') accordionTrigger;
  @Output() languagesChanged = new EventEmitter<IPostTranslation[]>();
  @Output() verifyTranslation = new EventEmitter<{ language: string; content: string }>();
  @Output() deleteTranslation = new EventEmitter<string>();
  @Output() retryTranslation = new EventEmitter<string>();
  languages: IPostTranslation[] = [];
  LoopIcon = LoopIcon;

  private statusesHierarchyMap: Array<number>;
  constructor(
    private translateService: TranslateService,
    private cd: ChangeDetectorRef,
    private languageService: SupportedLanguagesService,
    public rtlService: RtlService,
  ) {
    this.initHierarchyMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.initialTranslations && this.initialTranslations) {
      this.initLanguages();
    }
    if (changes.selectedLanguage || changes.selectedLanguageContent) {
      this.refreshLanguages();
    }
  }

  getTranslation(language: string): IPostTranslation {
    return this.languages.find((a) => a.language.code === language);
  }

  getInitialTranslationContent(language: string): string {
    return this.initialTranslations.find((a) => a.code === language)?.content || null;
  }

  getInitialTranslationStatus(language: string): TRANSLATION_STATUS_CONSTANTS {
    return this.initialTranslations.find((a) => a.code === language)?.status || null;
  }

  private initLanguages(): void {
    const updatedLanguages = [];
    this.languageService.supportedLanguages$.pipe(take(1)).subscribe((supportedLanguages) => {
      const originalLanguage = supportedLanguages.find((language) => language.language === this.originalLanguage);
      supportedLanguages.forEach((lang) => {
        const initialTranslation = this.initialTranslations.find((a) => a?.code === lang.language);

        if (lang.language !== this.originalLanguage) {
          const mappedLanguage = {
            language: {
              code: lang.language,
              content: this.translateService.instant(`languages.${lang.language}`),
            },
            content: initialTranslation?.content || '',
            status: initialTranslation?.status,
            type: initialTranslation?.type,
            disabled: initialTranslation?.status !== TRANSLATION_STATUS_CONSTANTS.TRANSLATED,
            editing: false,
            mtSupported: lang.mtSupported,
          } as IPostTranslation;

          if (lang.mtSupported && !mappedLanguage.type && !mappedLanguage.status) {
            mappedLanguage.status = originalLanguage?.mtSupported ? TRANSLATION_STATUS_CONSTANTS.DRAFT : TRANSLATION_STATUS_CONSTANTS.ERROR;
            mappedLanguage.type = TRANSLATION_TYPE.MACHINE;
          }
          updatedLanguages.push({ ...mappedLanguage });
        }
      });
      this.assignAndSortTranslations(updatedLanguages);
    });
    this.cd.markForCheck();
  }

  private refreshLanguages(): void {
    const updatedLanguages = this.languages.map((x) => {
      if (x.language.code === this.selectedLanguage) {
        this.getTranslation(x.language.code).content = this.selectedLanguageContent;
        x.status = this.selectedLanguageContent ? TRANSLATION_STATUS_CONSTANTS.TRANSLATING : TRANSLATION_STATUS_CONSTANTS.DRAFT;
        x.type = TRANSLATION_TYPE.HUMAN;
        x.touched = true;
        x.disabled = true;
      } else if (
        (x.status === TRANSLATION_STATUS_CONSTANTS.TRANSLATING || x.status === TRANSLATION_STATUS_CONSTANTS.DRAFT) &&
        x.type === TRANSLATION_TYPE.HUMAN
      ) {
        if (x.mtSupported) {
          x.type = TRANSLATION_TYPE.MACHINE;
          x.status = this.getInitialTranslationStatus(x.language.code) || TRANSLATION_STATUS_CONSTANTS.DRAFT;
        } else {
          x.status = null;
          x.type = null;
        }
      }

      return x;
    });

    this.assignAndSortTranslations(updatedLanguages);
  }

  private initHierarchyMap(): void {
    this.statusesHierarchyMap = [];
    this.statusesHierarchyMap[TRANSLATION_STATUS_CONSTANTS.TRANSLATING] = 0;
    this.statusesHierarchyMap[TRANSLATION_STATUS_CONSTANTS.TRANSLATED] = 1;
    this.statusesHierarchyMap[TRANSLATION_STATUS_CONSTANTS.ERROR] = 2;
    this.statusesHierarchyMap[TRANSLATION_STATUS_CONSTANTS.DRAFT] = 3;
  }

  private assignAndSortTranslations(translations: IPostTranslation[]): void {
    const sorted = translations.sort((a, b) => this.statusesHierarchyMap[a.status] - this.statusesHierarchyMap[b.status]);

    this.languages = sorted;
    this.languagesChanged.emit(this.languages);
    this.cd.markForCheck();
  }

  editClicked(lang: string): void {
    const updatedLanguages = this.languages.map((x) => {
      if (x.language.code === lang) {
        x.editing = true;
      }
      return x;
    });
    this.assignAndSortTranslations(updatedLanguages);
  }

  cancelClicked(lang: string): void {
    const updatedLanguages = this.languages.map((x) => {
      if (x.language.code === lang) {
        x.editing = false;
        x.content = this.getInitialTranslationContent(lang);
      }
      return x;
    });
    this.assignAndSortTranslations(updatedLanguages);
  }

  verifyClicked(language: string): void {
    let content = '';
    const updatedLanguages = this.languages.map((x) => {
      if (x.language.code === language) {
        x.editing = false;
        x.type = TRANSLATION_TYPE.HUMAN;
        x.status = TRANSLATION_STATUS_CONSTANTS.TRANSLATED;
        content = x.content;
      }
      return x;
    });

    this.verifyTranslation.emit({ language, content });
    this.assignAndSortTranslations(updatedLanguages);
  }

  deleteClicked(language: string): void {
    const updatedLanguages = this.languages
      .filter((x) => x.language.code !== language || (x.language.code === language && x.mtSupported))
      .map((x) => {
        if (x.language.code === language) {
          x.status = TRANSLATION_STATUS_CONSTANTS.DRAFT;
          x.type = TRANSLATION_TYPE.MACHINE;
          x.editing = false;
          x.disabled = true;
        }

        return x;
      });

    this.deleteTranslation.emit(language);
    this.assignAndSortTranslations(updatedLanguages);
  }

  wasInitialTranslation(lang: string): boolean {
    const translatedLanguages = [];
    this.initialTranslations.forEach((translation) => translatedLanguages.push(translation.code));

    return translatedLanguages.indexOf(lang) > -1;
  }

  retryClicked(lang: string): void {
    this.retryTranslation.emit(lang);
  }

  itemSwitch(): void {
    this.accordionTrigger.expanded = !this.accordionTrigger.expanded;
  }

  getStatusString(translation: IPostTranslation): string {
    const translationString = this.translateService.instant(`admin.translationStatus.${translation.type}_${translation.status}`);
    return translationString.replace('{{lang}}', `<strong>${translation.language.content}</strong>`);
  }

  isHumanTranslationSection(translation: IPostTranslation): boolean {
    return !!((translation.type === TRANSLATION_TYPE.HUMAN || this.selectedLanguage === translation.language.code) && translation.type);
  }

  isMachineTranslationSection(translation: IPostTranslation): boolean {
    const isMachine = !!(translation.type === TRANSLATION_TYPE.MACHINE && translation.type);
    return isMachine;
  }

  getUnavailablePopupText(): string {
    const reasonOne = this.translateService.instant('admin.translationProcess.unavailableReason1');
    const reasonTwo = this.translateService.instant('admin.translationProcess.unavailableReason2');

    return (
      this.translateService.instant('admin.translationProcess.unavailableTitle') +
      (reasonOne ? `\n- ${reasonOne}` : '') +
      (reasonTwo ? `\n- ${reasonTwo}` : '')
    );
  }

  get humanTranslatedLanguages(): IPostTranslation[] {
    return this.languages.filter((x) => this.isHumanTranslationSection(x));
  }

  get machineTranslatedLanguages(): IPostTranslation[] {
    return this.languages.filter((x: IPostTranslation) => {
      if (this.originalLanguage === 'maa') {
        return (x.language.code === 'en' || x.language.code === 'so') && this.isMachineTranslationSection(x);
      }

      if (this.originalLanguage === 'so') {
        return (x.language.code === 'en' || x.language.code === 'maa') && this.isMachineTranslationSection(x);
      }
      return this.isMachineTranslationSection(x);
    });
  }

  trackByFn(index: number, item: IPostTranslation): string | number {
    return item?.language?.code || index;
  }
}

export enum TRANSLATION_STATUS {
  WAITING = 'waiting',
  MACHINE_TRANSLATED = 'machine_translated',
  HUMAN_TRANSLATED = 'human_translated',
  MACHINE_TRANSLATING = 'machine_translating',
  HUMAN_TRANSLATING = 'human_translating',
  ERROR = 'machine_error',
}
export interface IPostTranslation {
  language: { code: string; content: string };
  content: string;
  status: TRANSLATION_STATUS_CONSTANTS;
  disabled: boolean;
  touched: boolean;
  type: TRANSLATION_TYPE;
  editing?: boolean;
  mtSupported: boolean;
}
