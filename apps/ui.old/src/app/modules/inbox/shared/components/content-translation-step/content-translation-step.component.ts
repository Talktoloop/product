import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { RtlService } from '@app/core/services/locales/rtl.service';
import { AutocompleteOption } from '@shared/components/autocomplete/autocomplete-option.model';

@Component({
  selector: 'app-content-translation-step',
  templateUrl: './content-translation-step.component.html',
  styleUrls: ['./content-translation-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentTranslationStepComponent {
  private _processing: boolean;
  @Input() set processing(value: boolean) {
    this._processing = value;
    this.showForm = false;
  }

  get processing(): boolean {
    return this._processing;
  }

  @Input() set atLeastOneTranslated(value: boolean) {
    this._atLeastOneTranslated = value;
    this.isEditing = !this.atLeastOneTranslated;
    this.cd.detectChanges();
  }

  get atLeastOneTranslated(): boolean {
    return this._atLeastOneTranslated;
  }

  @Input() targetLanguage: string;
  @Input() translatedText: string;
  @Input() originalLanguage: string;
  @Output() targetLanguageChange = new EventEmitter<string>();
  @Output() translatedTextChange = new EventEmitter<string>();
  @Output() submitTranslation = new EventEmitter<void>();
  @Output() closeClicked = new EventEmitter<void>();

  @Input() set languagesOptions(options: AutocompleteOption[]) {
    options && this.setNewLanguages(options);
  }

  languages: AutocompleteOption[] = [];
  showForm = false;
  _atLeastOneTranslated: boolean;
  isEditing: boolean;

  constructor(private cd: ChangeDetectorRef, public rtlService: RtlService) {}

  setNewLanguages(options: AutocompleteOption[]): void {
    this.languages = options.filter((option) => option.name !== this.originalLanguage);
  }

  addLanguageClicked(): void {
    this.showForm = true;
  }
}
