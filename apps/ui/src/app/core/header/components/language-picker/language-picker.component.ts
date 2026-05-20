import { Component, Input } from '@angular/core';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { ModalServiceV2 } from '@app/core/services/modal/modal-v2.service';
import { UIService } from '@app/core/services/ui/ui.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { UserLanguageService } from '@core/services/locales/user-language.service';
import { take, takeUntil } from 'rxjs/operators';
import { LanguagePickerModalComponent } from './language-picker-modal/language-picker-modal.component';

export interface Option {
  label: string;
  value: string;
  selected: boolean;
}

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent extends BaseComponent {
  @Input() v2: boolean;
  @Input() select: boolean;
  dropdownOpen = false;
  availableOptions: Option[] = [];

  private options: Option[] = [];

  get selectedOption(): Option | null {
    return this.options.find((option) => option.selected);
  }
  readonly platformLanguages = ['en', 'fr', 'es', 'so', 'ar', 'sw']
  constructor(
    private languageService: SupportedLanguagesService,
    private modalService: ModalServiceV2,
    private ui: UIService,
    private userLanguageService: UserLanguageService,
  ) {
    super();
    this.generateOptions(this.userLanguageService.getLanguage());
  }

  generateOptions(selectedLanguage: string): void {
    this.languageService.supportedLanguages$.pipe(take(1)).subscribe((languages) => {
      this.options = languages
        .map((language) => ({
          label: `languages.${language.language}`,
          value: language.language,
          selected: language.language === selectedLanguage,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
      this.availableOptions = this.options.filter((language) => !language.selected && this.platformLanguages.includes(language.value));
    });
  }

  handleDropdownButtonClick(): void {
    if (this.ui.mobileView) {
      const modal = this.modalService.open(LanguagePickerModalComponent, {
        languages: this.availableOptions,
      });

      modal.select$.pipe(take(1), takeUntil(this.destroyed$)).subscribe((language) => {
        this.userLanguageService.setLanguage(language);
        window.location.reload();
      });
    } else {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }

  handleOptionSelect(value: string): void {
    this.userLanguageService.setLanguage(value);
    window.location.reload();
  }

  handleClickOutside(): void {
    this.dropdownOpen = false;
  }

  trackFn(i: number, item: Option): string {
    return item.label;
  }
}
